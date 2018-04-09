---
author: mjacobs
date: '2017-03-14'
categories:
- Technology
- AEM
- Architecture
tags:
- AEM
- CMS
- AWS
title: 'Serverless Continuous Delivery for AEM on AWS'
url: /2017/03/14/serverless-continuous-delivery-for-aem-on-aws
2017:
- "03"
---

As mentioned in previous posts, I have been working on solutions that involve Adobe Experience Manager (AEM) and Amazon Web Services (AWS) to deliver digital experiences to consumers for the past few years. This was partly through custom implementations for our clients, and sometimes through [Fluent](/2014/10/14/the-razorfish-digital-platform-maturity-model), our turnkey digital marketing platform that combines AEM, AWS and Razorfish Managed Services and DevOps. I highlighted some of our ideas and best practices around managing a platform like that in a [white paper](https://d0.awsstatic.com/whitepapers/Adobe%20AEM%20on%20AWS.pdf) created together with the AWS team.

One of the rules we apply in our work is striving for [100% automation](/2016/02/10/the-cloud-and-the-100-automation-rule/index.html) in our deployment process. As I mention in the white paper, we leverage Jenkins on all our work to enable this. Combined with the fact that both AEM and AWS provide API access to various services and functionality, we have been very successful in automating this process.

That said, configuration of Jenkins and configuration of specific jobs is often a somewhat manual task. In addition, Jenkins (and the builds that are being executed) runs on its own EC2 instance(s), and therefore requires monitoring and incurring an ongoing cost. Especially in cases where deployments become less frequent, it would be ideal to utilize an on-demand & serverless deployment infrastructure.

AWS released CodePipeline earlier, and combined with the [new AWS CodeBuild announcement](http://aws.amazon.com/blogs/aws/aws-codebuild-fully-managed-build-service/), we can now look at replacing Jenkins by this set of AWS services, eliminating the need for a running AWS server that is a potential single point of failure. And with a unified architecture leveraging AWS tools, we have a solution that also integrates well with the overall AWS ecosystem, providing additional other benefits around artifact management and deployment.

I'll describe how AWS Codepipeline can be used in the next section.

Architecture
-----------

To describe the solution, a simple code pipeline is described, patterned after the [WordPress example in the AWS documentation](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/continuous-delivery-codepipeline-basic-walkthrough.html). It omits some critical additional steps, such a performance, security, regression, visual and functional tests, which I will touch upon in a subsequent post. 

The [we-retail sample application](http://github.com/Adobe-Marketing-Cloud/aem-sample-we-retail) was used, a reference AEM application for a retail site developed by the Adobe team.

![AWS CodePipeline Flow](/media/CodePipeline.jpg "AWS CodePipeline Flow")

As shown in the diagram, the CodePipeline connects to Github for the latest source code in the first step. It also retrieves configuration information and CloudFormation templates from AWS S3. If any updates to Github or to the S3 objects are made, CodePipeline will be triggered to rerun.

The next step is to compile the application. AWS CodeBuild is a perfect fit for this task, and a basic profile can be added to perform this compilation.

If compilation is successful, the next step is to create the staging infrastructure. We leverage our CloudFormation templates to instantiate this environment, and deploy the application into this. A manual approval step is then inserted to into the flow to ensure manual review and approval. Unfortunately, at this point it is not possible yet to include the CloudFormation output (the staging URL) into the approval message.

Once approval is gained, the staging infrastructure can be removed, and the application can be deployed to production. As production is an already existing environment, we will deploy the application using the standard API AEM provides for this. To do so, a Lambda job was created that mimics the set of curl commands that can be used to deploy a package and install it.

Conclusion
--------

With AWS CodePipeline and CodeBuild, we can now create a fully automated serverless deployment platform.

Jenkins is still a very powerful solution. At this point, Jenkins also has a large number of plugins that help automate the various tasks. However, many of these can fairly easily be migrated to AWS CodePipeline. AWS CodePipeline already provides built in support for many different services, including BlazeMeter and HPE StormRunner. It [also supports Jenkins integration itself](http://github.com/awslabs/aws-codepipeline-plugin-for-jenkins), and for any other services, AWS Lambda can fill that gap. For example, in our original standard AEM on AWS setups, a large number of tasks (deployment, content transfer, etc) were performed by Jenkins invoking curl scripts, which can easily be implemented using AWS Lambda as shown in the example above. 

Obviously, the example above is simplified. Additional steps for testing, content deployment or migration and code review will need to be incorporated. I will describe some of this in a next post. That said, creating this simple unified architecture is very powerful.

In addition, by leveraging the CodePipeline and CodeBuild architecture, the deployment process itself can be moved to a CloudFormation template, making it possible to instantiate a system with multiple environments with automated deployments with little more than a click of button, getting us closer to 100% automation.

<span class="author">AUTHOR</span>  
<a href="https://www.linkedin.com/in/martinjacobs1" class="author-name">Martin Jacobs</a>  
GVP, Technology
