---
author: mjacobs
date: '2016-08-08'
categories:
- Technology
- AEM
- Architecture
tags:
- AEM
- CMS
- AWS
title: 'AEM on AWS whitepaper'
url: /2016/08/08/aem-on-aws-whitepaper
2016:
- "08"
---

For a number of years now, I have been working on solutions that involve Adobe Experience Manager (AEM) and Amazon Web Services (AWS) to deliver digital experiences to consumers. Partly through custom implementations for our clients, and sometimes through [Fluent](/2014/10/14/the-publicissapient-digital-platform-maturity-model), our turnkey digital marketing platform that combines AEM, AWS and Publicis Sapient Managed Services and DevOps.

In the past year, I had to pleasure of working with AWS on creating a [whitepaper](https://d0.awsstatic.com/whitepapers/Adobe%20AEM%20on%20AWS.pdf) that outlines some of our ideas and best practices around deploying on the AWS infrastructure.

The whitepaper delves into a few areas:

Why Use AEM on AWS?
------------------

Cloud-based solutions offer numerous advantages over on-premise infrastructure, particularly when it comes to flexibility.

For example, variations in traffic volume are a major challenge for content providers. After all, visitor levels can spike for special events such Black Friday Shopping, the Super Bowl, or other one-time occasions. AWS’s Cloud-based flexible capacity enables you to scale workloads up or down as needed.

Marketers and businesses utilize AEM as the foundation of their digital marketing platforms. Running it on AWS facilitates easy integration with third-party solutions, and make it a complete platform. Blogs, social media, and other auxiliary channels are simple to add and to integrate. In particular, using AEM in conjunction with AWS allows you to combine the API’s from each into powerful custom-configurations uniquely suited to your business needs. As a result, the tools for new features such as mobile delivery, analytics, and managing big data are at your fingertips.

A Look Under the Hood -- Architecture, Features, and Services
---------

In most cases, the AEM architecture involves three sets of services:

1.       Author -- Used for the creation, management, and layout of the AEM experience.

2.       Publisher – Delivers the content experience to the intended audience. It includes the ability to personalize content and messaging to target audiences.

3.       Dispatcher – This is a caching and/or load-balancing tool that helps you realize a fast and performant experience for the end-user.

The [whitepaper](https://d0.awsstatic.com/whitepapers/Adobe%20AEM%20on%20AWS.pdf) details some common configuration options for each service, and how to address that with the different storage options AEM provides. It also outlines some of the security considerations when deploying AEM in a certain configuration.

AWS Tools and Management
------------

Not only does AWS allow you to build the right solution, it provides additional capabilities to make your environment more agile and secure.

Auditing and Security
------------

The paper also highlights a couple of capabilities to make your platform more secure. For example, AWS has audit tools such as [AWS Trusted Advisor](https://aws.amazon.com/premiumsupport/trustedadvisor/). This tool automatically inspects your environment and makes recommendations that will help you cut costs, boost performance, improve, reliability, and enhance security. Other recommended tools include [Amazon Inspector](https://aws.amazon.com/inspector/), which scans for vulnerabilities and deviations from best practices.

Automation through APIs
------------

AWS provides API access to all its services and AEM does the same. This allows for a very clean organization of the integration and deployment process. Used in conjunction with an automated open-source server like [Jenkins](https://jenkins.io/) you can initiate manual, scheduled, or triggered deployments.

You can fully automate the deployment process. However, depending on which data storage options are used, separate arrangements may need to be made for backing up data. Also, policies and procedures for dealing with data loss and recovery need to be considered too.


Additional AWS Services
---------------------

There are numerous other services and capabilities you can leverage when you use AEM in conjunction with AEM.

One great service is Amazon CloudWatch, which allows you to monitor a variety of performance metrics from a single place.

In addition, the constant stream of new AWS offerings, such as, Amazon’s [Elastic File System](https://aws.amazon.com/efs/) (which allows you to configure file storage for your servers), provide new options for your platform.



Takeaway
--------

Using Adobe’s Experience Manager in tandem with AWS provides a powerful platform for easily delivering highly immersive and engaging digital experiences. It is a solution that answers the dilemma that many marketers and content providers face – how to deliver an immersive, relevant, and seamless experience for end users from a unified platform, and the whitepaper aims to provide more insight into how to achieve this.

To learn more about running AEM on AWS, you can download and read the full whitepaper [here](https://d0.awsstatic.com/whitepapers/Adobe%20AEM%20on%20AWS.pdf).

<span class="author">AUTHOR</span>  
<a href="https://www.linkedin.com/in/martinjacobs1" class="author-name">Martin Jacobs</a>  
GVP, Technology
