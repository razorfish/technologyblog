---
author: jscaria
categories:
- General
comments: true
date: '2011-03-08'
slug: what-infrastructure-changes-are-required-when-working-with-amazon-web-services
title: What infrastructure changes are required when working with Amazon Web Services?
url: /2011/03/08/what-infrastructure-changes-are-required-when-working-with-amazon-web-services
wordpress_id: 599
2011:
- "03"
---


Working with cloud services like Amazon Web Services requires significant changes to the way we look at core capabilities taken for granted in traditional infrastructures. Imagine a world where you only get 5 static IPs or where load balancers are software based. Or what happens if I am using traditional software that requires technologies like Microsoft Active Directory. The following section highlights the learnings we have had in those areas.




** **




**Infrastructure and AWS:**




While the AWS infrastructure allows operation teams a large amount of flexibility in terms of provisioning and managing resources, there are a few limitations of the infrastructure that teams have to be aware of and design around.







**Addressing EC2 instances consistently**




Almost every addressable infrastructure element (e.g. EC2 instances, elastic load balancers, RDS database end points, etc) has a dynamic IP. An EC2 instance has an internal IP / DNS and an external IP / DNS. This means that the internal name resolves to the internal IP and the external name resolves to an external IP. AWS recommends that the internal IP be used when addressing instances internally as this will ensure that traffic is routed to the instances internally rather than going out to the external network and coming back in. Both the internal and external IPs are dynamically allocated - this is done to facilitate failover and also because static IPs (especially external ones) are a very limited and scarce resource.







This also means that if the instance is terminated and re-instantiated there is no guarantee that the element will retain the same IP as before. This is especially important when using EC2 instances. Any kind of restart - stopping and restarting the instance (restarting it immediately does not cause this), instances that are brought up on another EC2 node if there is a failure on the original node, etc will cause the IP address of the instance to change. This can be a challenge especially if some other component has to address the instance or a component running on the instance e.g. the instance could be hosting an internally visible search engine or a database engine that is addressed by other components within the infrastructure by a search URL or a JDBC url that has the IP address / hostname of the host server.







NOTE : We need to verify that for a vanilla instancethe  external name resolves to external IP internally? Anyone?







One way to overcome this is to have a static IP associated to an EC2 instance. Once a server is assigned a static IP, it has been seen that the external DNS name when resolved internally, resolves to the internal IP of the server as opposed to the external IP of the server.







Assigning a static IP doesn't mean that the EC2 instance will have a static address for the lifetime of the server, just that it will have a static address as long as the instance is up. If the instance is rebooted (either by the user or automatically on a failure), the intense will come back up with a dynamically allocated internal and external name and IP. Once the instance is back up, the static IP can be associated back to the instance. This could mean that instance startups have to be monitored and startup events scripted to achieve this automatically.







Another thing to note is that while the instance is being associated with a static IP, it will be unavailable for a small period of time while the association takes place. In our tests we have seen this time to be anywhere between 5 and 20 minutes.







An important point to note is that each AWS account is limited to only 5 static IPs that they can use. This is because static IPs are a rare commodity. If a user requires more than 5 IPs, they have to submit a case to AWS support who will then review the case for approval.







**Active Directory(AD) / Domain Name Servers (DNS)**




As previously noted, addressing instances / services on an EC2 instance is a challenge given the dynamic addresses of the servers. This is especially a problem when setting up something like an Active Directory within EC2. One way to mitigate the addressing of servers within your environment is to use a DNS server with a static IP address associated with it.  Once a DNS server is setup within your environment, it should be easy enough for the administrator to allocate DNS names to these servers. Each EC2 instance is then configured to use the internal DNS server as the primary DNS server. In cases where these individual servers have their dynamic IP change on outages or restarts, the administrator can update the DNS records appropriately, allowing the servers / components to continue to access the services on these EC2 instances without having to be aware of the new dynamic IP.







Since the DNS server becomes key central sub-system within the architecture, it would be a good practice to have a secondary DNS server (possibly setup within another availability zone), also setup with a static IP, as a backup in case the primary DNS server goes down.







**Elastic Load Balancing **




Elastic Load balancers are a great resource when you want to have external traffic load-balanced to a group of servers. For maximum availability, performance and redundancy, these servers are distributed within more than one availability zone. This allows you to add or remove servers that are servicing requests during peak load and non-peak traffic hours. ELBs can also be configured with auto-scaling triggers such that server instances are added to or taken off automatically from the available pool of servers servicing user requests, when certain thresholds (e.g. CPU utilization, memory high-water marks etc.) are reached. Beneath the hoods, these ELBs are managed such that any outages in the underlying instances that service the requests at the ELB layer are handled automatically with minimal down time, to ensure that the ELB layer is available as much as possible.







An ELB is allocated an external IP and a dynamic DNS name. Unlike EC2 instances, it cannot be allocated a static IP. It should always be addressed by its dynamic DNS name as the IP can change on failover.







The one disadvantage of ELBs are that they are always externally facing i.e. one cannot setup an ELB such that it is visibly only internally. Thus they are not suitable for cases where you have a set of EC2 instances that have to send requests to a pool of internal servers. In these cases, users are forced to setup software load-balancers (like HAProxy or XXX) and manage them on their own. Users are also responsible for ensuring redundancy and avoiding single points of failure in such cases.







ELBs provide 2 layers of load handling - one at the inbound gateway layer and the other at the target server pool by the EC2 instances that the user adds to the ELB configuration. If there is a lot of inbound traffic at the ELB endpoint, AWS can handle this higher load by bringing up new ELB instances. AWS then updates/adds DNS records for these new instances and uses DNS round-robin to distribute load among these ELB instances. As long as the end-users continue to address the ELB by the dynamic DNS name, the system will leverage the additional ELB capacity and result in better performance. AWS can also increase the capacity of the internal servers that form the ELB servers e.g. use medium or large instances instead of small instances to server as ELB servers.







**Root DNS:**




A typical web application setup on EC2 leverages ELBs that load-balance external traffic to a pool of internal EC2 instances. As we have seen above, users should always address the ELB via its dynamic DNS name rather than its external IP address to be able to leverage the scaling that AWS may provide internally in times of load or outages. Not being able to use an IP address can become a problem, especially when you want to address an apex record for a DNS zone to an ELB.







e.g. Assume that you are using the "example.com" zone for your application. In a typical scenario, you will CNAME over the DNS records for www.example.com to DNS name of the ELB that you setup for your account.







e.g. zone : example.com




www 3600 IN CNAME my-load-balancer-888888.us-east-1.elb.amazonaws.com







But a typical use case is to have to ability to setup traffic from the domain i.e. "example.com" to be also serviced by the web-application (i.e. by www.exmaple.com), you need to have the apex record (@ record) point to the ELB. But since you don't want to use the dynamic IP of the ELB, and since you cannot use a CNAME for a DNS apex record, you may be forced to setup a dummy server (again with appropriate redundancy for failover) that can handle requests for "example.com" and have that dummy server redirect requests made to "example.com" to "www.example.com" , thus allowing the requests to be served eventually by the ELB fronted web-application.
