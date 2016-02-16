---
author: dnichols
categories:
- Methodology
- Mobile
- Technology
comments: true
date: '2009-06-24'
excerpt: 'Once a year, the internet comes to visit Austin, Texas at the South by Southwest Interactive (SXSWi) conference, and, for 2009, the Razorfish Austin office was determined to leave an impression. We ended up making close to 3,000 impressions.


  Over this series of articles, I''ll be diving into how we created the Razorfish Guide to SXSW iPhone-optimized web site. Part 1 will deal with requirements gathering and technology choices, part 2 will cover design and development, and part 3 will talk about what we did to optimize the mobile experience.'
slug: sxsw-to-go-creating-razorfishs-iphone-guide-to-austin-part-2
tags:
- AJAX
- asp.net mvc
- austin
- caching
- history
- html 5
- iphone
- iphone app
- json
- local storage
- Mobile
- navigation
- optimization
- sxsw
- user experience
title: 'SXSW to Go: Creating Razorfish''s iPhone Guide to Austin (Part 2)'
url: /2009/06/24/sxsw-to-go-creating-razorfishs-iphone-guide-to-austin-part-2
wordpress_id: 175
---


## Design and  Development


Up against a tight deadline, our small team was working fast  and furious to create the [Razorfish mobile guide to Austin](http://sxsw.razorfish.com/) in time for the SXSW Interactive  conference. With our technologies determined and all eyes on the iPhone, we set  out to bring the guide to life. ([Check out part 1 of our story](http://technology.razorfish.com/2009/06/17/sxsw-to-go-creating-razorfish%e2%80%99s-iphone-guide-to-austin-part-1/) to find out more  about how we set requirements and chose technologies)


### The meat and potatoes


The guide is content-driven, and we knew that the site  wouldn’t be given a second look without strong content to back it up. Our team decided  on structuring the site as nesting categories with a design reminiscent of the  iPhone’s Contacts application, and breadcrumb navigation (as is found in the  iTunes Store).

With the flow determined, the creative director started  developing the content categories and soliciting suggestions from the office  about their favorite Austin haunts. She enlisted an information architect to  assist with writing the site’s content, and they churned out the site’s content  over the next several weeks.

Simultaneously, one of our presentation layer developers  began work on graphic design, another focused on hosting and infrastructure,  and I began working on database and application architecture.


### Getting around


The first major issue we tackled when working on the  front-end of the site was navigation. We had identified several features that  were essential for the guide to perform satisfactorily:



	
  * Rather than load a new       page, new “pages” of data should be loaded as JSON, and then have their       HTML constructed on the client-side. JSON is a very compact way of moving       data and is easy to support using JavaScript’s _eval_ function. By using JSON to communicate between the server       and the content, we avoided the performance hits of loading a larger       request, rendering a fresh page, running scripts again, and checking       cached components against the server. Those performance issues are often       negligible on a PC with fast internet connection and plenty of memory, but       on a mobile device, every byte and every request makes a noticeable       impact.

	
  * Data need to be cached on       the client whenever possible, and making repeat requests to the server for       the same data should be avoided.

	
  * The browser’s history       buttons (Back and Forward) must work, and ideally work without making new       requests to the server.

	
  * The site must be navigable       in browsers that cannot properly support AJAX.


To satisfy both the first and last requirements, we were  going to have to effectively have two versions of every page running in  parallel (a JSON version for AJAX-ready clients and an HTML version for  others). Luckily, the MVC framework makes this easy on the server. By properly  defining our data model classes, we could either send the model object to a  view page for each of the data points to be plugged in and rendered as HTML, or  we could directly serialize the model to JSON and send it to the client. To  make it easy for the client script to select the right version, all of the JSON  page URLs were made identical to the HTML URLs, except with “/Ajax” pre-pended.  With this URL scheme in place, JavaScript could simply intercept all hyperlinks  on a page, add “/Ajax” to the location, and load a JSON version of the content  instead of a whole new page.

To determine when to use JSON and when to use HTML, we did  some simple capabilities testing. If _window.XMLHttpRequest_,  the W3C standard AJAX class, exists, then it was safe to use JSON navigation on  the client. Incidentally, Internet Explorer and many mobile browsers do not  support this object, which greatly simplified later development.

Several JavaScript classes were created to support page  rendering: A history class to manage caching and the forward/back buttons, a  base page class that would take care of rendering JSON into HTML, and an  application class that would manage the interactions between the pages, the  history, and the user. A handful of page types were identified, and subclasses were  created from the base page for each specialized layout and different data  model.

A method called _BrowseTo_ was defined on the application class that would handle all actions associated  with the user clicking a link or going to a new URL. _BrowseTo** **_did several  things:



	
  1. Identify the JSON URL       (dropping the “http” and the domain, and adding “/Ajax”)

	
  2. Determining what page       class to use to render the JSON data

	
  3. Checking if there’s       already cached data for the URL, and making a request to get the data if       there’s not

	
  4. Instructing the page to       render

	
  5. Instructing the history to       add the new page to the list of visited sites

	
  6. Caching the JSON data from       the response in memory if a new request was made


Due to time constraints, we opted to use “dirty-caching” for  JSON data. When dirty-caching, you’re storing the JSON object in memory under a  key. In this case, the key was the URL. There are a few downsides to this  method:

	
  * Storage isn’t persistent,       and only lasts as long as the browser is open on that page

	
  * You’re using up memory,       not disk space, to store data, which could eventually overwhelm the client       and cause it to crash


Because the size of the data that we were caching was very  small, and dirty-caching is both very fast to implement and universally  supported, we used it to temporarily story data. Given more time, we would have  taken advantage of the iPhone’s HTML 5 local storage features. On any browser  that supports this feature, you can store data in a database on the client.  Many web applications take advantage of this feature to provide persistent  offline access to content. The downside is that the HTML 5 local storage API is  somewhat tricky to implement properly and is currently confined to a select few  browsers.


### A little bit of history


Forward and back button support comes naturally when you’re  loading new pages, but for the JSON version of the site, we implemented a  solution based on URL hashes (the _#_ data at the end of a URL). Most browsers will include URL hashes as a state  that can be navigated to using the forward and back buttons. By regularly  scanning the URL hash, you can update your page when there’s a change and  simulate forward/back button support. Our history class was designed to add the  “/Ajax” path as the URL hash, making it easy to determine what JSON data to  load when the hash changed.

With our navigation system intact, and our creative team  churning out new content for the site, we took a step back and started to look  at performance. Check back next week, and see how we fine tuned the site to  work quickly and responsively on the iPhone.
