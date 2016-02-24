---
author: dnichols
categories:
- Methodology
- Mobile
- Technology
comments: true
date: '2009-07-01'
excerpt: 'Once a year, the internet comes to visit Austin, Texas at the South by Southwest Interactive (SXSWi) conference, and, for 2009, the Razorfish Austin office was determined to leave an impression. We ended up making close to 3,000 impressions.


  Over this series of articles, I''ll be diving into how we created the Razorfish Guide to SXSW iPhone-optimized web site. Part 1 will deal with requirements gathering and technology choices, part 2 will cover design and development, and part 3 will talk about what we did to optimize the mobile experience.'
slug: sxsw-to-go-creating-razorfish%e2%80%99s-iphone-guide-to-austin-part-3
tags:
- asp.net mvc
- austin
- caching
- compression
- css animation
- css compression
- gzip
- iphone
- javascript compression
- Mobile
- optimization
- razorfish.web
- sprites
- sxsw
title: 'SXSW to Go: Creating Razorfish’s iPhone Guide to Austin (Part 3)'
url: /2009/07/01/sxsw-to-go-creating-razorfishe28099s-iphone-guide-to-austin-part-3
wordpress_id: 178
---


## Optimization


As the [Razorfish Guide  to SXSW](http://sxsw.razorfish.com/) became more fully developed, we started to look at key areas where  we could make performance gains and either actually speed up the site or simply  make the site appear to load more quickly. ([Check out part 1 of our story](http://technology.razorfish.com/2009/06/17/sxsw-to-go-creating-razorfish%e2%80%99s-iphone-guide-to-austin-part-1/) to  see how requirements for the site were gathered and [part 2](http://technology.razorfish.com/2009/06/24/sxsw-to-go-creating-razorfish%e2%80%99s-iphone-guide-to-austin-part-2/) to learn about how  the site was architected)


### Cache it good


One of the earliest steps we took to optimize the  application was to use server-side caching. ASP.NET allows you to cache just  about anything on the server for quick retrieval. Taking advantage of this  feature means that you can avoid extra trips to the database, requests to other  services, and repeating other slow or resource-intensive operations. The  Razorfish.Web library’s abstraction makes ASP.NET’s caching easy to use, and we  quickly added it both to all database calls and to store most MVC models.


### Zip it up


A second key optimization was to add GZIP compression to our  assets. GZIP compression shrinks the size of most text-based files (like HTML  or JSON) down to almost nothing, and makes a huge difference in the amount of  time it takes for a slow mobile client to download a response. IIS7 has this  feature built in, but we were running the site off of an IIS6 server. Happily,  Razorfish.Web.Mvc has an action filter included that supports compressing your  responses with GZIP.


### Strip out that  whitespace


Next, we used Razorfish.Web’s dynamic JavaScript and CSS  compression to strip out unnecessary characters and to compact things like  variable names. Minifying your scripts and stylesheets reduces their file size  dramatically. One of the nice features of Razorfish.Web is that it also can  combine multiple files together, reducing the overall number of requests that a  client has to make. All of this happens dynamically, so you’re free to work on  your files in uncompressed form, and you don’t have to worry about going out of  your way to compact and combine files.


### Sprites


Another key optimization was combing all of the image assets  into a single file, and using CSS background positioning to choose what image  to display. Doing this not only cuts the number of requests that have to be  made (from 10 to 1, in our case), but also cuts the overall amount of data that  needs to be loaded. Each file has its own overhead, and you can cut that  overhead by combining them.


### Keep it in-line


As we started testing on the actual iPhone, we still weren’t  satisfied with the page’s load time. There was a significant delay between the  page loading and the scripts loading over the slow EDGE network. This defeated  the purpose of the JSON navigation because the user was apt to click a link  before the scripts had a chance to load and execute – meaning that they’d have  to load a new HTML page. If the scripts were delivered in-line with the page, there  would be no additional request, and they could execute right away. Because the  successive content was to be loaded with JSON, concerns about caching the  scripts and styles separately from the page were moot. We set about extending  Razorfish.Web so that it could now insert the combined and compressed contents  of script and style files directly into the page. By moving the scripts and  styles in-line, we shaved off about 50% of our load time, and the scripts were  now executing quickly enough that the JSON navigation mattered again.


### Smoke and mirrors


A final touch was to take advantage of Safari Mobile’s CSS  animation capabilities. The iPhone supports hardware-accelerated CSS  transitions and animations, meaning fast and reliable animation for your pages.  We added a yellow-glow effect to buttons when pressed. The glow was not only  visually appealing, but its gradual appearance also helped to distract the user  for the duration of the load time of the successive content.


## Success


The team managed to pull the web application together in  time for launch, and the guide was a smashing success. Over the course of SXSW,  sxsw.razorfish.com was visited by 2,806 people who spent an average of 10  minutes each on the site, typically viewed about 8 pages, and often came back  for second and third visits. The site attracted a large amount of buzz on  Twitter and was praised as the go-to guide for the conference.

When designing for mobile, speed is key. All of the  components of the site, including the design, need to work together to connect  the user to the content as quickly and as efficiently as possible. In such a  hyper-focused environment, the user experience, graphic design, and technology  need to be unified in supporting a shared goal.

By producing a responsive, reliable, easy-to-use,  to-the-point, and locally-flavored guide to the city, the team succeeded in  creating a memorable and positive impression of Razorfish at SXSW.
