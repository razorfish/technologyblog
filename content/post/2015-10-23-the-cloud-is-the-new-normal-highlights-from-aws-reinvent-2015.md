---
author: aonesto
categories:
- General
comments: true
date: '2015-10-23'
post_format:
- Image
slug: the-cloud-is-the-new-normal-highlights-from-aws-reinvent-2015
title: '"The cloud is the new normal" – Highlights from AWS re:Invent 2015'
url: /2015/10/23/the-cloud-is-the-new-normal-highlights-from-aws-reinvent-2015
wordpress_id: 6992
2015:
- "10"
---


[![reinvent](/uploads/2015/10/reinvent.jpg)](/uploads/2015/10/reinvent.jpg)

AWS re:Invent took place in Las Vegas the first week of October, and it has become one of the premier events in the technology industry, with close to 20,000 attendees and numerous exhibitors.

The conference was kicked off with a keynote from Andy Jassy, senior vice president of Amazon Web Services, who declared "The cloud is the new normal" to his audience. Starting off with presenting some impressive growth numbers, the announcements made in his sessions were focused on getting more enterprise customers to migrate to AWS, for example by simplifying the tasks of collecting and analysing data, streaming data, moving large amount data to cloud and migrating existing databases to different database management systems in the cloud.

The second keynote, presented by Amazon Web Services CTO Werner Vogels, was more focused on new development tools, as well as a new offering around the Internet of Things (IoT).

Here are the most significant announcements made at Re:Invent in various area:
Database
During the conference Jassy took aim at Oracle, the "Old Guard", which is currently the biggest provider of traditional databases. "It's rare that I meet an enterprise that isn't looking to flee from their current database provider," he said.

AWS strengthened their database offering by adding new features and compatibilities to the Relational Database Service (RDS). While announcing MariaDB as a fully-managed service on RDS it also introduced set of tools to make database migration to cloud simpler.

[![aws_schema_conversion_tool](/uploads/2015/10/aws_schema_conversion_tool1.jpg)](/uploads/2015/10/aws_schema_conversion_tool1.jpg)

**MariaDB** is a fork of MySQL and is targeted towards developers who are running LAMP applications but are looking for an alternative to MySQL. **AWS Database Migration Service** intend to help enterprises to migrate their databases to low cost AWS RDS alternatives with minimal downtime. It supports all widely used database platforms, and performs schema and code conversion for migrations between database engines.


# Analytics


Company added another service to their enterprise portfolio, **Quick Sight**. It is a business intelligence tool, which has been developed to compete with IBM’s Congos, Microsoft’s Power BI, etc. **Quick Sight** makes it easy to build visualisations, perform ad-hoc analysis, and quickly get business insights from data and designed to be easy for non-technical people to use.

Amazon also launched **Amazon Kinesis Firehose** which is the easy way to load streaming data into AWS. It can capture and automatically load streaming data into Amazon S3 and Amazon Redshift, enabling near real-time analytics with existing business intelligence tools. It is a fully managed service.


# IOT


**AWS IoT** is one of the major announcement from Amazon. It's a managed cloud platform which will allow customers to connect and manage billions of devices and enable them to process, analyse and act on the data. It leverages the MQTT protocol, is integrated with a large number of IoT devices already, and allows for a rules based management of these endpoints. With a built-in shadow state mechanism, it makes interacting with occasionally connected devices much simpler.

[![IoT](/uploads/2015/10/IoT.png)](/uploads/2015/10/IoT.png)


# Mobile


**AWS Mobile Hub** is a mobile back-end as a service and which allows iOS and Android developers to easily add commonly used features including user authentication, data storage, backend logic, push notifications, content delivery, and analytics.


# Security


For most enterprises security is a primary concerns when moving to a cloud infrastructure. AWS announced new services like **Web Application Firewall (WAF)** and **AWS Inspector** to help administrators boost security of their infrastructure.

**AWS WAF** is a web application firewall that helps protect web applications from attacks by allowing Web Administrators to configure rules that allow, block, or monitor (count) web requests based on conditions that you define.

**Amazon Inspector** is an automated security assessment service that helps minimize the likelihood of introducing security or compliance issues when deploying applications on AWS. Amazon Inspector automatically assesses applications for vulnerabilities or deviations from best practices. After performing an assessment, it produces a detailed report with prioritized steps for remediation.


# Compute


**AWS Lambda** was launched at re:Invent last year and it has quickly become one of most popular services on AWS. Lambda allows to easily build server-less systems that need no administration and can scale to handle a very large number of requests. This year AWS made some significant enhancement by allowing to develop AWS Lambda function code using Python, maintain multiple versions of function code, invoke code on a regular schedule, run functions for up to five minutes and, VPC support.


# Data Transfer


AWS unveiled a new PC-Tower-sized storage appliance called “**Snowball**” which makes easy for large enterprise customers to transfer petabyte's of data into the cloud. Snowball addresses common challenges with large-scale data transfers including high network costs, long transfer times, and security concerns. Each Snowball device can hold up to 50 terabytes and can be shipped directly to the company for uploading to AWS servers.

[![snowball](/uploads/2015/10/snowball1.jpg)](/uploads/2015/10/snowball1.jpg)




# Containers


AWS announced the **AWS EC2 Container Registry**, allowing you to manage all your container resources on AWS, and manage access through IAM.

[![containers](/uploads/2015/10/containers4.jpg)](/uploads/2015/10/containers4.jpg)




# Conclusion


Maintaining growth on a scale like AWS is difficult, but with the announcements made at reinvent, AWS is well positioned to gaining further adoption with enterprise customers.

In addition, AWS talks about re:Invent as an educational event, and they were very successful in achieving this in 2015. The sessions we attended were of a very high quality. The sessions are also posted online at [https://www.youtube.com/user/AmazonWebServices/featured](https://www.youtube.com/user/AmazonWebServices/featured) and [http://www.slideshare.net/AmazonWebServices/tag/reinvent2015](http://www.slideshare.net/AmazonWebServices/tag/reinvent2015)
