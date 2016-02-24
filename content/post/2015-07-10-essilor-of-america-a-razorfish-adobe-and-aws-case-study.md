+++
author: aonesto
categories:
- General
comments: true
date: '2015-07-10'
post_format:
- Image
slug: essilor-of-america-a-razorfish-adobe-and-aws-case-study
title: Essilor of America – a Razorfish, Adobe and AWS Case Study
url: /2015/07/10/essilor-of-america-a-razorfish-adobe-and-aws-case-study
wordpress_id: 1165
+++

[![headerimage1](/uploads/2015/07/headerimage1.jpg)](/uploads/2015/07/headerimage1.jpg)

In 2014, after a comprehensive RFP and review process, Essilor of America selected Razorfish to be a Digital Agency Partner for its consumer brands, including but not limited to Varilux® , Crizal® and Xperio UV™ lenses. Less than a year later, we have successfully launched all three redesigned brand sites on the Essilor of America new digital marketing platform.


### The Challenge


Essilor of America was looking for a new creative design and experience as well as a digital marketing platform that could support the Varilux brand experience, but also incorporate Crizal, Xperio UV, and potentially other brand experiences in the future. The goal was for consumers to have a common experience across Essilor digital properties and have a extensible digital marketing platform to support it. Razorfish has developed a number of multi-brand platforms for other clients, including a productized digital marketing platform built around Adobe technologies, Fluent.

Essilor of America’s digital properties were all hosted and maintained by corporate IT and hosted outside the US. As such, new projects, redesign and/or updates required significant coordination with the international team. The existing corporate content management system was also not equipped to meet the needs of the business.

[![img1](/uploads/2015/07/img1.png)](/uploads/2015/07/img1.png)


### Why Adobe Experience Manager (AEM) and Amazon Web Services (AWS)


Razorfish and Essilor of America evaluated a set of content management platforms against the current and future business requirements including but not limited to: cost, breadth of features (target and personalization, digital asset management, campaign management, multi-site and multi-language support), out of the box integrations with other marketing tools, open source foundation and standards based support, reporting capabilities and industry ranking. Razorfish and Essilor of America also evaluated a set of cloud hosting vendors against a set of business and IT requirements including but not limited to ability to scale, cost, time to market, deployment agility, technology breadth, security, disaster recovery support and innovation. In the end, Essilor of America selected Adobe Experience Manager hosted on Amazon Web Services as its Digital Marketing Platform and Infrastructure. Razorfish helped Essilor of America design and establish a new infrastructure to support the new digital marketing platform. With the expectation that additional brands share the platform in the future, AWS allowed us to design and perform capacity planning for the current needs, with the ability to scale easily for seasonal peak times and for future needs. For high availability, we built a multi-server platform that spans availability zones within the region. While Disaster Recovery is not currently a requirement, utilizing Razorfish Fluent AWS Cloud Formation templates, AEM scripts and backup data and snapshots saved in Amazon Simple Storage Service (Amazon S3) will allow us to stand up a complete AEM stack within minutes, if needed. As the solution was intended to support both consumers and eyecare professionals, Razorfish, AWS and Essilor of America worked closely together to address current and future security requirements. We utilized Amazon Virtual Private Cloud (VPC) to isolate each environment from each other and to add multiple layers of security to supplement security groups and network access control lists. A private facing subnet was created for the AEM author and publishing server instances with only the web server/dispatcher server available in the public-facing subnet. From an application perspective, we used AEM User and Group Management features to create groups and permissions for each brand site to provide controlled and appropriate access to brand managers and their agencies.

[![img2](/uploads/2015/07/img2.png)](/uploads/2015/07/img2.png)

On the experience front, Razorfish performed a full redesign of the Varilux, Crizal and Xperio UV brand websites, delivering bespoke and fully responsive and mobile-friendly experiences that stay true to the brand while utilizing shared and reusable templates and components built on Adobe Experience Manager (AEM). AEM’s Multi Site Manager (MSM) module and blue print capability allowed us to build a site structure that supported multiple brands in multiple languages. AEM’s out of the box Digital Asset Manager (DAM) was ideal for creating a library of assets for the brands that can be shared as needed. Overall, AEM empowered the digital marketing teams and their agencies to own content creation, modification and activation in a timely and efficient manner.


### Timing and Results


By partnering with Razorfish for both creative design and technical execution, and leveraging our experience in building AEM solutions on AWS, we were able to accelerate the design, build and deployment of the newly redesigned Varilux USA site within four months. Even with a two month lull after the Varilux USA release, Crizal USA successfully launched in January 2015 and Xperio UV immediately after in March 2015, completing the three main consumer brands in less than a year.  Both Crizal and Xperio UV have been redesigned and launched on the same digital marketing platform, building on top of and benefitting from the infrastructure, site architecture, templates, components and services already built for Varilux. Currently, additional experiences and microsites leveraging the same platform are in progress.

[![img3](/uploads/2015/07/img3.png)](/uploads/2015/07/img3.png)

Varilux USA – [http://www.variluxusa.com](http://www.variluxusa.com)
Crizal USA – [http://www.crizalusa.com](http://www.crizalusa.com)
Xperio UV USA – [http://www.xperiouvusa.com](http://www.xperiouvusa.com)


### About Essilor


Essilor is the leading manufacturer of optical lenses in the United States and is the market leader in progressive, high-index, photochromic and anti-reflective coated lenses. A pioneer in the development and production of ophthalmic lenses, Essilor employs more than 10,000 people throughout North America. Essilor manufactures optical lenses under the VARILUX®, CRIZAL®, TRANSITIONS®, XPERIO UV™, DEFINITY®, THIN&LITE® and other Essilor brand names. Essilor Laboratories of America, Inc. is the largest, and most trusted, optical lab network in the U.S. and offers a wide choice of services and lens brands, including Essilor premium lenses, to eyecare professionals across the nation. Essilor of America, Inc. (Essilor) is a subsidiary of Paris-based Essilor International, a publicly held company traded on the Euronext Paris stock exchange (Reuters: ESSI.PA).
