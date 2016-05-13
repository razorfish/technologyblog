---
author: aonesto
categories:
- General
- Java
- Platform
comments: true
date: '2014-10-14'
slug: the-razorfish-digital-platform-maturity-model
title: The Razorfish Digital Platform Maturity Model
url: /2014/10/14/the-razorfish-digital-platform-maturity-model
wordpress_id: 1003
2014:
- "10"
---


w_ritten by: Martin Jacobs (GVP, Technology)_

Within our work, we often are building out the platforms for our clients to deliver on the premise of data driven marketing & commerce. In the current landscape, it is critical to deliver across all channels the right message, at the right time to the right person. To do so, it requires a multi-tiered data driven architecture, incorporating all data sources, integrated with the different technology tools and using them across all channels,

[![MJRV01](/uploads/2014/10/MJRV01-284x300.jpg)](/uploads/2014/10/MJRV01.jpg)


_Core elements of Data Driven Marketing 1_


The solutions needs to include all owned data sources, partner sources, as well as 3rd party data sources that can be relevant and improve accuracy of visitor identification. Through appropriate data management techniques, followed by visitor segmentation, experiences and messages can be targeted and delivered to the right audience.

As we are often are asked to assess our clients ability to effectively deliver on the premise of data driven marketing & commerce, we look at how well they are able to integrate the technology solutions and data sources listed above.

We have seen many different results, and to better qualify this, we developed a platform maturity model as shown in the diagram. The 6 tiers outline different scales ranging from very basic levels of maturity to advanced, automated multichannel (i.e. across all digital touch points) personalization & targeting.

This maturity model has been very helpful in not only in identify and assessing where our clients are from a capability perspective, it also has provided a good framework to help them reach the next levels in a staged and multi-phased approach.

However, we have seen that many clients have challenges to reach the next levels on their own in the desired time frame. This also was clearly reflected in the different studies we released in the past few years, including “The State of Always-On Marketing Study” and the 2012 Razorfish / Adobe Targeting Readiness Study. Also, see our recent announcement on leveraging Adode’s Audience Manager platform to help drive greater connectivity to services and data, eventually resulting in more client efficiencies.

We therefore created our own offering called Fluent. Fluent is turnkey SaaS solution, build upon Adobe software, using Amazon Web Services services extensively and incorporating the Razorfish expertise around creating and managing digital platforms.

We have been running client solutions on this platform for the past year, and in the next few blog posts I will delve into some more detail around this platform, and highlight some of the key design decisions we have made with Fluent.

[![MJRV02](/uploads/2014/10/MJRV02-300x138.jpg)](/uploads/2014/10/MJRV02.jpg)


_Fluent – Razorfish’ SaaS Digital Marketing Platform_


As mentioned in the previous blog post, Fluent is Publicis Groupe’s turnkey SaaS marketing platform. But what is a marketing platform?

From our vision, the marketing platform is the single integrated technology solution that provides the foundation to deliver a broad set of digital experiences, ranging from websites to kiosk experiences, from microsites to global multi language sites. And with this integrated platform, we are able to deliver these experiences in a connected manner, providing a consistent message to a visitor across all touch points.

The foundational building blocks of a platform are a:
• A set of integrated services providing core data and functional services,
• An infrastructure and software foundation
• A set of organization specific application, template or component frameworks to deliver experiences
• And a group of process defined to support the creating, management and evolution of the platform and platform components

[![MJRV03](/uploads/2014/10/MJRV03-300x131.jpg)](/uploads/2014/10/MJRV03.jpg)


_Digital Platform Building Blocks 1_


As highlighted in the diagram, we selected Amazon Web Services and Adobe as they key technology vendors for infrastructure & software.

Adobe’s key software offering around digital marketing platforms is Adobe Experience Manager, an industry leading solution for content & digital asset management and digital experience delivery. It has leading usability, and a rich site of capabilities to deliver complex global solutions. For those reasons alone, it obviously is already a very strong option to provide experience management functionality, but there are others in the marketplace as well.

The open nature of the Adobe product was another key driver for us to select AEM and associated products such as Target and Analytics. Built on open source technology such as Jackrabbit and industry standards such as Apache Sling and OSGI, it makes it easier for us to extend it and integrate it with many other solutions.

From an infrastructure perspective, there are many strong solutions in the market, and we work frequently with many of these. We selected Amazon Web Services due to its market leadership around innovation and offerings. It is global in nature and has many tools and options to deliver scalable & global solutions cost efficiently.

Its rich toolset helps us customize disaster recovery, reliability and availability for each of our clients to their needs very easily. It also helps us deliver marketing experiences in a very natural way, scaling up and out as traffic demands require it.

However, similar to Adobe, a key criterion for us has been to open and extensible nature of AWS. The different offerings have been clearly separated with an accessible API, allowing us to combine capabilities as simple building blocks into new configurations.

[![MJRV04](/uploads/2014/10/MJRV04-300x191.jpg)](/uploads/2014/10/MJRV04.jpg)


Amazon Web Services Capabilities 1


From a services perspective, both vendors are also leading in their space. Adobe has solution such as Target, Analytics, Media Optimizer and Audience Manager that are best in class around data driven marketing, and we are using these technologies frequently in our Fluent solutions.

However, we also like Amazon’s capabilities in this area. Not only do they provide unique differentiating tools such as Kinesis around real-time analytics, but AWS also provides many of the foundational offerings around workflow, messaging and queuing that allow us to integrate Fluent with many 3rd party solutions in a very fast and simple manner.
