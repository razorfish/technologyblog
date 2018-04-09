---
author: pmodi
date: '2016-12-09'
categories:
- Technology
- Cloud-Computing
- Automation
tags:
- AWS
title: 'Highlights from AWS re:Invent 2016'
url: /2016/12/09/highlights-from-aws-reinvent-2016
2016:
- "12"
---
Another AWS re:Invent is behind us and it was packed with exciting announcements including the launch of new products, extension of existing services and much more. It was the biggest re:Invent ever with approximately a whopping 32,000 attendees and numerous exhibitors.

![](/media/reinvent2016/ReInventHero.jpg)

The conference was kicked off with a keynote from Andy Jassy, CEO of Amazon Web Services, who presented some impressive growth numbers and announced host of new updates to AWS portfolio of services. Biggest announcements were around new Artificial Intelligence (AI) services called Lex, Rekognition and Polly and data migrations appliances Snowmobile and Snowball Edge. He also launched Amazon Lightsail, which allows developers to setup a virtual private server (VPS) with just a few clicks.

The second keynote, presented by Amazon Web Services CTO Werner Vogels, was more focused on new development tools, Big Data, Security and Mobile services.

Here’s a rundown of the key announcements coming out of re:Invent this year.
 
Amazon AI
---------------
![](/media/reinvent2016/AmazonAI.jpg)

One of the most significant announcement from Andy Jassy’s keynote was the launch of **Amazon Lex**, Amazon’s first AI service. Amazon Lex is a service for building conversational interfaces into any application using voice and text. It’s the technology that's at the heart of the Amazon Alexa platform. This chat bot-friendly service is in preview.

Another AI service launched was **Amazon Rekognition**. Rekognition allows developers to add image analysis to applications.  It can analyze and detect facial features and objects such as cars and furniture. Jassy also announced launch of **Amazon Polly**, which converts text into speech. Polly is a fully managed service and you can even cache responses making it cost efficient. It is available in 47 voices and 27 languages.
 
Internet of Things (IoT)
---------------
![](/media/reinvent2016/IoT.jpg)

**AWS Greengrass** is another interesting service launched at re:Invent. AWS Greengrass lets you run local compute, messaging & data caching for connected devices in a secure way. Greengrass seamlessly extends AWS to devices so they can act locally on the data they generate, while still using the cloud for management, analytics, and durable storage. It allows IoT devices to respond quickly to local events, operate with intermittent connections, and minimize the cost of transmitting IoT data to the cloud.

Data storage and services
---------------
![](/media/reinvent2016/Athena.JPG)

**Amazon Athena** is an interactive query service that makes it easy to analyze data in Amazon’s Simple Storage Service (S3) using SQL. It is a great addition since it allows developers to use standard SQL syntax to query data that’s stored in S3 without setting up the infrastructure for it. This service works with CSV, JSON, log files, delimited files, and more.

**Amazon Aurora**, cloud-based relational database, now supports **PostgreSQL**. It’s already compatible with open source standards such as MySQL and MariaDB.

Serverless
---------------
![](/media/reinvent2016/Serverless.jpg)

AWS Lambda, a serverless computing service, got a couple of updates as well. Amazon announced **Lambda@Edge**, the new Lambda-based processing model allows you to write code that runs within AWS edge locations. This lightweight request processing logic will handle requests and responses that flow through a CloudFront distribution. It is great for developers who need to automate simple tasks in their CDN deployment so that traffic does not have to be routed back to a server. 

Lambda functions now includes **support for the Microsoft’s C#** programming language. It already supports Node.js, Python and Java. Amazon also unveiled **AWS Step Functions** as a way to create a visual state machine workflow out of your functions.
 
Compute
--------------- 
![](/media/reinvent2016/Compute.jpg)

As is tradition at re:Invent, Amazon announced a series of new core computing capabilities for its cloud. It launched F1 instances that support programmable hardware, R4 memory optimized instances, T2 burstable performance instances, compute-optimized C5 and I/O intensive I3 instances. Andy Jassy also announced **Amazon EC2 Elastic GPUs**, a way for people to attach GPU resources to EC2 instances. With Elastic GPUs for EC2 you can easily attach low-cost graphics acceleration to current generation EC2 instances.

Another important compute service launched is **Amazon Lightsail**. It allows developers to launch a virtual private server with just a few clicks. I think it is great addition to the portfolio as it allows small business owner and blogger to host their websites on AWS.
 
Migration/ Data Transfer
--------------- 
![](/media/reinvent2016/Snowmobile.jpg)

Expanding on the scope of the Snowball which was launched last year, AWS added **Snowball Edge** and **Snowmobile** to the lineup. While Snowball provided 50TB of storage, each Snowball Edge appliance has 100TB of storage and offers more connectivity protocols than the previous version. Now you have also have Snowmobile to meet the needs of the customers with petabytes of data. Snowmobile is a 45-foot container that is delivered to customers on a trailer truck. This secure data truck stores up to 100 PB of data and can help companies move Exabyte of data to AWS in a matter of weeks instead of years. Snowmobile attaches to the clients network and appears as a local, NFS-mounted volume.
 
Development tools
--------------- 
![](/media/reinvent2016/DevTools.jpg)

Amazon added **AWS CodeBuild** to the existing suite of developer tools like Code Commit, Code Deploy and Code Pipeline. AWS CodeBuild is a fully managed build service that compiles source code, runs tests, and produces software packages that are ready to deploy. CodeBuild can be a cost effective and scalable alternative to running a dedicated Jenkins instance.

**AWS X-Ray** helps developers analyze and debug production, distributed applications, such as those built using a micro services architecture. X-Ray provides an end-to-end view of requests as they travel through the application and helps developers identify and troubleshoot the root cause of performance issues and errors. AWS X-Ray is in preview.
 
Monitoring Operations and Security
---------------
![](/media/reinvent2016/Security.jpg)

Similar to AWS Services Health Dashboard, AWS now provides a **Personal Heath Dashboard**. As the name indicates, this dashboard gives you a personalized view into the performance and availability of the AWS services that you are using, along with alerts that are automatically triggered by changes in the health of the services. 

DDoS (Distributed Denial of Service) attacks are one very common trouble spot. Amazon new offering is **AWS Shield**, a DDoS protection service that safeguards web applications running on AWS. AWS Shield provides always-on detection and automatic inline mitigations that minimize application downtime and latency, so there is no need to engage AWS Support to benefit from DDoS protection. It provides DDoS protection at the DNS, CDN, and load balancer tiers and is available in free and premium flavors.
 
Big Data and Compute
--------------- 
![](/media/reinvent2016/bigdata.jpg)

**AWS Batch**, a service for automating the deployment of batch processing jobs is released in preview. AWS Batch enables developers, administrators, and users to easily and efficiently run hundreds of thousands of batch computing jobs on AWS. With Batch users have access to the power of the cloud without having to provision, manage, monitor, or maintain clusters. No software to buy or install. **AWS Glue** a fully managed ETL service that makes it easy to move data between your data stores was also launched.

Mobile Services
---------------
Dr. Vogels also launched **Amazon Pinpoint**, a mobile analytics service. Amazon Pinpoint makes it easy to run targeted campaigns to drive user engagement in mobile apps through the use of targeted push notifications.

AWS refers to re:Invent as an educational event, and they were very successful in achieving this in 2016. You can find the recording of keynote and tech talks on [YouTube](https://www.youtube.com/playlist?list=PLhr1KZpdzukdGa7Gqu4bdql4KH7sL3mhf). 


<span class="author">AUTHOR</span>  
<a href="https://www.linkedin.com/in/modipraveen" class="author-name">Praveen Modi</a>  
Sr Technical Architect
