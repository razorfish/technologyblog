---
author: mjacobs
date: '2017-12-07'
categories:
- Technology
- Architecture
- Cloud
tags:
- Serverless
- CMS
- AWS
- Lambda
title: 'Top 5 highlights from Amazon’s re:Invent 2017 conference'
url: /2017/12/07/aws-reinvent-2017-top-5-highlights
2017:
- "12"
---

Amazon Web Services’ annual re:Invent conference has wrapped up, and as usual, it was a great event. With an estimated 40,000 attendees, the event became again a bit larger than last year. I will highlight my personal top 5 in this article. The full list of all announcements can be found at [https://aws.amazon.com/new/reinvent/] (https://aws.amazon.com/new/reinvent/)


#5 AWS Fargate
---------
Amazon had a number of container announcements, AWS Fargate being the most interesting. With AWS Fargate, there is no longer a need to provision, configure, and scale clusters of virtual machines to run containers, all of that is taken care of. To run an application, the only thing needed is a container image, CPU and memory requirements, networking and IAM policies.

![](/media/reinvent2017/Fargate.png)

#4 Video and Media Services.
------------

The number of new announcements around video stood out. AWS DeepLens (a deep learning enabled wireless video camera) captured a lot of interest, but from my perspective, the most important one was the set of AWS Elemental Media Services to process, store, and monetize video. 

These services are important step towards breaking up the various capabilities need for video management into individual pieces rather than one big service, allowing users to use what they need and merge with any of their in-house or competitive technologies if needed. The inclusion of Video on Demand and Live video as part of this set of services is terrific. 

Combined with new Machine Learning capabilities with Amazon Kinesis Video Streams and Amazon Rekognition Video, Amazon has created a new set of services that can change how many organizations handle video moving forward.

#3 SageMaker
---

Amazon SageMaker is a fully managed end-to-end machine learning service that enables data scientists, developers, and machine learning experts to quickly build, train, and host machine learning models.

There are 3 components to SageMaker:

- Creating Models: Using hosted Jupyter Notebooks, you can explore, clean and preprocess data.
- Training Models: Train models with your own algorithms, or leverage the built-in algorithms or frameworks.
- Hosting Models: A model hosting service with HTTPS endpoints to invoke your models in real-time.

![](/media/reinvent2017/sagemaker.png)

One of the challenges we have seen in our work with machine learning in larger organizations is sharing models across all different groups that are interacting with it.  SageMaker allows you to develop, document and share the models you create with other data scientists, and the authoring tool can also help you make the model understandable to non-experts.

The model hosting component facilitates accessibility to other applications. The [SageMaker introduction article](https://aws.amazon.com/blogs/aws/sagemaker/) provides a pretty cool example of how this endpoint can now easily be invoked from Lambda and other channels, and showcases it with a [twitter account](https://twitter.com/WhereMl/) that will guess to the location of an image.


#2 AWS Lambda Improvements and Cloud 9
--------
A number of Lambda improvements were announced. At SapientRazorfish, we see big opportunities with AWS Lambda. This [blog](/2016/05/06/a-reactive-serverless-cms-for-the-technology-blog/index.html) is managed through Lambda functions, and AWS Lambda is a Swiss Army knife in our DevOps practice.  The major announcement around development was the collaborative development tool, Cloud 9.

Lambda development can still be fairly complicated. Especially in a team environment, ensuring all team members have the same configuration and test environment requires some work. With Cloud 9, all of this is now simplified, including an integrated debugger. Coding becomes the collaborative process it should be. 

![](/media/reinvent2017/cloud9.png)

Beside Cloud 9, other announcements were also interesting. For starters, AWS Lambda has increased memory limits, and now provides the ability to manage concurrency, and supports execution throttling.

From a deployment perspective, Lambda now supports canary deployments to test a new version, shifting traffic based on pre-assigned weights to slowly move traffic to this new version as part of a broader rollout, and integration with CodeDeploy for full automation of this process.

The console has been improved and does a great job in vizualizing the configuration. The diagram below shows one of our DevOps utilities, a website performance monitor. The configuration visualizer shows that it is triggered by an event scheduler, and records the results on S3 and through CloudWatch.

![](/media/reinvent2017/performance_monitor.png)

The serverless application repository was also interesting. As mentioned, we leverage many smaller Lambda utilities in our DevOps practice. The creation of a serverless application repository can really help in sharing these with a broader audience. It will also be interesting to see what more complex serverless applications will be available through this mechanism.

We are very excited about all of these, it will simplify deployment and management of functions in AWS Lambda, and further increase adoption. 


#1 Serverless Aurora
--------
For me, the highlight of the conference was the announcement around serverless Aurora. With a serverless database, many applications can finally become fully serverless, with the associated benefits of straightforward scaling and true pay-as-you-go. 

Although solutions like DynamoDB provided somewhat of an alternative, a serverless relational database opens up the opportunities for a far wider range of applications. With support for up to 64TB of storage, it can have broad implications. Within a cloud environment, database planning and sizing was still something that needed to be clearly planned upfront, and this has the potential to reduce that requirement significantly.

In a next post, I'll talk about leveraging serverless Aurora.

Summary
--------
With these announcements, Amazon is continuing to improve its platform, and it is exciting to see the opportunities it provides on changing our work. 

<span class="author">AUTHOR</span>  
<a href="https://www.linkedin.com/in/martinjacobs1" class="author-name">Martin Jacobs</a>  
VP, Technology
