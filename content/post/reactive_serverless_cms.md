---
author: mjacobs
date: '2016-05-06'
categories:
- Technology
- Reactive
tags:
- Serverless
- CMS
- AWS
- Lambda
title: 'A reactive, serverless cms for the technology blog'
url: /2016/05/06/a-reactive-serverless-cms-for-the-technology-blog
2016:
- "05"
---



Background
----------

At Razorfish, we are [big proponents of reactive architectures](http://www.razorfish.com/ideas/reactive-architectures.htm).  Additionally, we believe architectures using cloud functions such as AWS Lambda are part of the future of application development. Our relaunch of the blog was a good occasion to test this out.

Historically, the blog had been hosted on WordPress. Although WordPress is a good solution, we had run into some performance issues. Although there are many good ways to address performance challenges in WordPress, it was a good time to explore a new architecture for the blog, as we weren’t utilizing any WordPress specific features.  

We had used static site generators for a while for other initiatives, and looked at these types of solutions to create the new site. We wanted to avoid any running servers, either locally or in the cloud.

Our technology stack ended up as follows:

-   Github – Contains two repositories, a content repository with Hugo
    based themes, layout and content, and a code repository with all the
    cms code.

-   AWS Lambda

-   [Hugo](https://gohugo.io/) – Site Generator written in the Go Programming Language 

-   AWS S3 – Source and generated sites are stored on S3

-   AWS CloudFront – CDN for delivery of site.

Why Hugo?
---------

There are a large number of site generators available, ranging from
Jekyll to Middleman. We explored many of them, and decided on Hugo for a
couple of reasons:

-   Speed – Hugo generation happens in seconds

-   Simplicity - Hugo is very easy to install and run. It is a single
    executable, without any dependencies

-   Structure - Hugo has a flexible structure, allowing you to go
    beyond blogs.

Architecture
------------

The architecture is outlined below. A number of Lambda functions are
responsible for executing the different functions of the CMS. Some of
the use of Hugo was derived from
<http://bezdelev.com/post/hugo-aws-lambda-static-website/>. The
authentication function was loosely derived from
<https://github.com/danilop/LambdAuth>.

![](/media/image1.png)

The solution uses AWS lambda capabilities to [run executables](https://aws.amazon.com/blogs/compute/running-executables-in-aws-lambda/). This is used for invoking Hugo, but also for incorporating [libgit2](https://libgit2.github.com/), which allows us to execute git commands and integrate with Github.

CMS
---

As part of the solution, a CMS UI was developed to manage content. It
allows the author to create new content, upload new assets, and make
other changes. ![](/media/image2.png)

Content is expected to be in Markdown format, but this is simplified for authors with the help of the
[hallojs](http://hallojs.org/demo/markdown/) editor.

![](/media/image3.png)

Preview is supported with different breakpoints, including a mobile
view.

![](/media/image4.png)

As it was developed as a reactive architecture, other ways to
update content are available:

-   Through a commit on github, potentially using github’s
    markdown editor.

-   Upload or edit markdown files directly on S3

Challenges
----------

As the solution was architected, a few interesting challenges had to be
addressed.

1.  At development, only Node 0.14 was supported on AWS. To utilize
    solutions like libgit2, a more recent version of Node was needed. To
    do so, a Node executable was packaged as part of the deploy, and
    Node 0.14 spawned the more recent Node version.

2.  Only the actual site should be accessible. To prevent preview and
    other environments from being accessible, CloudFront signed cookies
    provided a mechanism to prevent the other environments from being directly accessible.

3.  Hugo and libgit are libraries that need to be compiled for the AWS
    Lambda linux environment, which can be a challenge with all other
    development occurring on Windows or Macs. 


Architecture benefits
---------------------

The reactive architecture approach makes it really easy to enhance and extend the solution with other options of integrating content or experience features. 

For example, as an alternative to the described content editing solutions above, other options can be identified: 

-   A headless CMS like Contentful could be added for a richer authoring UI experience. 

-   [By using SES and Lambda to receive and process the email](https://aws.amazon.com/blogs/aws/new-receive-and-process-incoming-email-with-amazon-ses/), an email content creation flow could be setup.

-   A convertor like [pandoc](http://pandoc.org/) on AWS Lambda can be incorporated into the authoring flow, for example for converting source documents to the target markdown format. It possibly can be invoked from the CMS UI, or from the email processor.

From an end-user experience perspective, Disqus or other 3rd party providers are obvious examples to incorporate comments. However, the lambda architecture can also be an option to easily add [commenting functionality](https://github.com/jimpick/lambda-comments).

Conclusion
--------

Although more and more tools are coming available, AWS Lambda development and code management can still be a challenge, especially in our scenario with OS specific executables. However, from an architecture perspective, the solution is working very well. It has become very predictive and stable, and allows for a fully hands-off approach on management.

_written by: [Martin Jacobs (GVP, Technology)](https://www.linkedin.com/in/martinjacobs1)_

