---
author: mjacobs
date: '2016-05-19'
categories:
- Technology
- Cloud-Computing
- Automation
tags:
- AWS
- infrastructure
title: 'What the Rise of Cloud Computing Means for Infrastructure'
url: /2016/05/19/what-the-rise-of-cloud-computing-means-for-infrastructure
2016:
- "05"
---

Infrastructure setup and application programming are merging into simultaneous processes. With this critical change, we need to take a fresh look at how we design solutions. If we don’t, our projects risk failure.

Building and installing system infrastructure (think servers and networks) was once an arduous process. Everything had to be planned out and procured, often at high costs and with a long lead time. Often times, server specifications were created before the actual application (and the technologies involved) that would need to run on it had been fully flushed out. The actual application programming task was a whole separate step with little overlap.

That’s no longer the case due the [rise of Cloud computing](http://mashable.com/2015/05/11/cloud-computing-infographic/). Infrastructure is now software, and the convenience of that leads to new challenges.

Merging Designs
---------------

With Cloud computing, Infrastructure is way more fluid thanks to all the programmable elements. As a result, upfront planning isn’t as important, as cost and especially timelines are not a constraint anymore. Compute, storage and network capacity is immediately accessible and can be changed dynamically to suit any need.

With these changes, the days of separate tracks for application and infrastructure development are over. The once separate design processes for each of them need to merge as well. This is largely driven by 3 factors:

1. Historically, the separation of application and infrastructure development didn’t work, but it was accepted as a given.
2. Cloud architectures take on a bigger role than traditional infrastructure
3. New Architectures create new demands

The Historical Challenge
------------------------

Performance, availability and scalability have been a challenge forever. Before cloud architectures became standard, vendors have been trying to address these requirements with complex caching architectures, and similar mechanisms. The reality is that none of the products really delivered on this premise out of the box. Obviously, one core challenges was that companies were trying to deliver dynamic experiences on a fixed infrastructure.

But even within that fixed infrastructure, any deployment required exhaustive performance tuning cycles and vendor support, trying to overcome the issue of infrastructure independently designed from the application, with only moderate success.

The Changing Infrastructure Role
--------------------------------

Cloud architectures also start to play a bigger role in the overall systems stack. Let’s look at a hypothetical basic Java application with an API build on Amazon Web Services, the most popular cloud computing service, to see what the merger of system infrastructure and application programming looks like.

The application can be developed like any other Java application, but once it comes to how security is addressed, what is specified where?

On the application side, there could be some internal security mechanisms that define what access to services is available. Internal application roles can determine what access to different data elements the service request has. From an infrastructure perspective, Amazon Web Services can also provide security measures (access to ports, another layer of permissions, etc.) that affect how the application API can be accessed by clients. In addition, Amazon’s AWS policies can define which request arrives at the application, or which data elements are available once a request is being serviced.

As this example shows, the application and infrastructure views need to be merged in order to fully understand the security mechanisms available. Just focusing on one side or the other paints an unclear picture.

New Architectures
-----------------

A number of new architectures have been created now that infrastructure is programmable. [Reactive architectures](http://www.razorfish.com/ideas/reactive-architectures.htm) and code executors like Google Cloud Functions and AWS Lambda are examples of these serverless computing services. Once we start using fully dynamic infrastructures for auto-scaling and micro services, the need for in integrated view of both the application and systems becomes even more important.

Finding New Solutions
---------------------

Handling infrastructure and application development in an integrated manner is difficult.

One of the challenge is that the design tools to visualize this are lacking. Tools like [Cloudcraft](https://cloudcraft.co/) help in this regard but a fully integrated view is lacking, especially if you start using new architectures like AWS Lambda. Ideally, there’d be a way to visually layer the different perspectives of an architecture in a way that resembles a Photoshop image. Easily looking at an architecture from the perspective of security, services, data flows, and so on would be incredibly useful.

From a process perspective, infrastructure and application have to be handled with the same processes. This includes code management, defect tracking and deployment. This of course has implications on the skills and technology needed to successfully complete a project, and not all organizations are ready for this yet.

Conclusion
----------

These days, infrastructure and application are intertwined, and an application solution that doesn’t address the infrastructure element is incomplete. Focusing on one without the other cannot address the critical requirements around security, performance, scalability, availability and others. It is important to invest in the tools, processes and people to deliver on this.

_written by: [Martin Jacobs (GVP, Technology)](https://www.linkedin.com/in/martinjacobs1)_

