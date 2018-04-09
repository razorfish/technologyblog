---
author: mjacobs
date: '2016-06-12'
categories:
- Technology
- Reactive
- Architecture
tags:
- Serverless
- CMS
- AWS
- Lambda
title: 'Lessons Learned from a Reactive Serverless CMS'
url: /2016/06/12/a-reactive-serverless-cms-for-the-technology-blog-2
2016:
- "06"
---


Background
----------
As mentioned in previous posts, we are [big proponents of reactive architectures](/media/reactive-architectures-overview.pdf) at Razorfish.

We also believe architectures using cloud functions — such as [AWS Lambda](https://aws.amazon.com/lambda) — are part of the future of application development. In this post, we will call them “serverless” architectures because although there are obviously still servers involved, we’re not responsible for managing them anymore.

The relaunch of our technology blog provided the perfect opportunity to test this new architecture. In the paragraphs that follow, I’ll briefly discuss the architecture, followed by a summary of the lessons we learned.

Solution Summary
----------------

We architected the solution using Amazon AWS S3, Lambda, Cloudfront, Hugo, and Github. It incorporates an authoring UI, as well as a mechanism to do publishing. The diagram below shows some of the integration mechanisms. For the full technical details of the implementation, visit the earlier [post](http://technology.razorfish.com/2016/05/06/a-reactive-serverless-cms-for-the-technology-blog/index.html) on the Razorfish technology blog.

![](/media/image1.png)

Learning — Serverless: Development Model
---------------------------------------

Obviously, development using AWS Lambda is quite different than your standard processes. But there’s good news: A large number of new tools are trying to address this, and we explored a few of them. Some of the most interesting include:

- [Lambda-local](https://www.npmjs.com/package/lambda-local). This is a basic command line tool you can use to run the Amazon Lambda function on local machines.
- [Node-Lambda](https://www.npmjs.com/package/node-lambda). Similar to Lambda, this tool provides support for deploying a function to AWS.
- [Apex](http://apex.run/). This large framework can be used to deploy lambda functions, potentially written in additional languages such as Go — which Apex itself is written in. The tool provides support for Terraform to manage AWS resources.
- [Kappa](http://kappa.readthedocs.io/en/develop/) — Another tool for deployment of Lambda functions, using the AWS API for creation of resources.
- [Serverless](http://serverless.com/). An application framework for building applications using AWS Lambda and API Gateway. It tries to streamline the development of a microservices-based application. It creates AWS resources using CloudFormation templates, giving you the benefits of tracking and managing resource creation. It also supports different types of plugins, allowing you to quickly add additional capabilities to an application (e.g., logging). One of the objectives of the tool is to support multiple cloud providers, including Google and Azure Cloud Functions.
- [λ Gordon](https://github.com/jorgebastida/gordon) — Similar to Apex, a solution to create and deploy lambda functions, using [CloudFormation](https://aws.amazon.com/cloudformation/) to manage these resources, with a solid set of example functions.
- [Zappa](https://github.com/Miserlou/Zappa). Zappa allows you to deploy Python WSGI applications on AWS Lambda + API Gateway. Django and Flask are examples of WSGI applications that can now be deployed on AWS Lambda using [Flask-Zappa](https://github.com/Miserlou/flask-zappa) or [Django-Zappa](https://github.com/Miserlou/django-zappa).
In addition to these tools, IDE’s have developed ways to make it easier to create and deploy lambda functions. For example, [Visual Studio](https://blogs.aws.amazon.com/net/post/Tx381XNNQALP8BA/AWS-Lambda-Support-in-Visual-Studio) and [Eclipse](http://docs.aws.amazon.com/AWSToolkitEclipse/latest/ug/lambda.html) have tools to make it easier to create, test, and deploy functions.

Lambda-local was the tool of choice for the serverless CMS application created for our blog. Its simplicity is helpful, and one of the unique challenges we faced was the support needed for binaries like Hugo and Libgit2, which required development both on the local machines and on an Amazon EC2 Linux instance.

Learning — Serverless: Execution Model
-------------------------------------

Although the initial use cases for AWS Lambda and other similar solutions have been styled around executing backend tasks like image resizing, interactive web applications can become an option as well.

For a start, many solutions don’t necessarily need to be a server side web application, and can often be architected as a static using client-side JavaScript for dynamic functionality. So in the AWS scenario, this means a site hosted on S3 or Cloudfront and then integrate with AWS Lambda using the JavaScript SDK or the API gateway — similar to how this was done for the Razorfish blog.

But in case the dynamic element is more complex, there is a great potential for full-featured frameworks like Zappa that allow you to develop interactive web applications that can run on AWS Lambda using common frameworks such as Django and Flask. In my opinion, this is also where AWS can get significant competition from [Azure Functions](https://azure.microsoft.com/en-us/services/functions/), as Microsoft has an opportunity to create very powerful tools with their Visual Studio solution.

Overall, AWS Lambda is a great fit for many types of applications. The tool significantly simplifies the management of applications; there’s limited need to perform ongoing server monitoring and management that is required with AWS EC2 or AWS Elastic Beanstalk.

On top of that, Lambda is incredibly affordable. As an example, if you required 128MB of memory for your function, executed it 30 million times in one month for 200ms each time, your monthly bill would be $11.63 — which is cheaper than running most EC2 instances.

The Razorfish technology blog architecture is network intensive. It retrieves and uploads content from S3 or Github. With AWS Lambda, you choose the amount of memory you want to allocate to your functions and AWS Lambda allocates proportional CPU power, network bandwidth, and disk I/O. So in this case, an increase in memory was needed to ensure enough bandwidth for the Lambda functions to execute in time.

Learning — Reactive flows
-----------------------

The second goal of the creation of our blog was to apply a reactive architecture. A refresher: Reactive programming is a programming style oriented around data flows and the propagation of change. Its primary style is asynchronous message passing between components of the solution, which ensures loose coupling.

In the blog scenario, this was primarily achieved by using S3 events, Github hooks, and SNS message passing. Some examples:

- When one Lambda function was finished, an SNS message was published for another Lambda function to execute.
- Client-side content updates are posted to S3, and the S3 event generated triggered Lambda functions.
- A Github update posts to SNS, and the SNS triggers a Lambda function.

Overall, this allowed for a very simple architecture. It also makes it very straightforward to test and validate parts of the solution in isolation.

One of the key challenges, however, is rooted in the fact that there are potential scenarios where it becomes difficult to keep track of all different events and resulting messages generated. This can potentially result in loops or cascading results.

The Developer’s Takeaway
-----------------------

Overall, I believe the architectural style of reactive and serverless has a lot of promise — and may even be transformational with respect to developing applications in the future. The benefits are tremendous, and will allow us to really take cloud architectures to the next level. For this reason alone, developers should consider how this approach could be incorporated into every new project.

<span class="author">AUTHOR</span>  
<a href="https://www.linkedin.com/in/martinjacobs1" class="author-name">Martin Jacobs</a>  
GVP, Technology
