---
author: dnichols
categories:
- Methodology
- Mobile
- Technology
comments: true
date: '2009-06-17'
excerpt: 'Once a year, the internet comes to visit Austin, Texas at the South by Southwest Interactive (SXSWi) conference, and, for 2009, the Publicis Sapient Austin office was determined to leave an impression. We ended up making close to 3,000 impressions.


  Over this series of articles, I''ll be diving into how we created the Publicis Sapient Guide to SXSW iPhone-optimized web site. Part 1 will deal with requirements gathering and technology choices, part 2 will cover design and development, and part 3 will talk about what we did to optimize the mobile experience.'
slug: sxsw-to-go-creating-publicissapient%e2%80%99s-iphone-guide-to-austin-part-1
tags:
- .NET
- asp.net mvc
- austin
- iphone
- iphone app
- javascript frameworks
- Mobile
- optimization
- publicissapient.web
- safari
- sxsw
- web applications
title: 'SXSW to Go: Creating Publicis Sapient’s iPhone Guide to Austin (Part 1)'
url: /2009/06/17/sxsw-to-go-creating-publicissapiente28099s-iphone-guide-to-austin-part-1
wordpress_id: 173
2009:
- "06"
---


Once a year, the internet comes to visit Austin, Texas at the South by Southwest Interactive (SXSWi) conference, and, for 2009, the Publicis Sapient Austin office was determined to leave an impression. We ended up making close to 3,000 impressions.

Industry leaders and the web avante-garde converge on Austin for one weekend each year to learn, network, and see the cutting edge of interactive experience and technology. And also to take advantage of any number of open bars. It is a conference, after all.

The Publicis Sapient Austin office typically plays host to a networking event and takes out ad space in the conference guidebook. In 2009, confronted with shrinking budgets in the wake of the global financial crisis, we knew we had to set ourselves apart and do it on the cheap.

iPhone Apps were on everyone’s mind (and would be in every conference-attendee’s pocket), and would prove to be the perfect venue to showcase Publicis Sapient’s skill and Austin’s personality. In late January 2009, Three presentation layer developers and a creative director formed a small team and set out to build an iPhone-ready guide to Austin.

Over this series of articles, I'll be diving into how we created the [Publicis Sapient Guide to SXSW](http://sxsw.razorfish.com) iPhone-optimized web site. Part 1 will deal with requirements gathering and technology choices, part 2 will cover design and development, and part 3 will talk about what we did to optimize the mobile experience.


## Requirements


The first thing we did as a team was to sit down and discuss what the guide had to be. Going in, we knew we wanted it to be on the iPhone because of the cachet associated with the device. We also knew that we had a very condensed timeline to work in – we needed to launch in 5-6 weeks, and we all had other projects that required our focus.


### To App, or not to App?


One of the first decisions we made was to approach the guide as an iPhone Web App, rather than building an Objective-C compiled application. We knew that we didn’t have a technical resource who already knew Objective-C available and that we would have trouble getting approval and into the App Store in time for our launch. Most importantly, we needed as many people as possible to be able to use the guide, and didn’t have time to create different versions for different devices.

iPhone Web Applications offer not only a way to leverage the iPhone’s impressive graphical capabilities, thanks to Safari mobile’s excellent standards and future CSS support, but also a way to reach other platforms using progressive enhancement (testing for a feature, and then enhancing the experience for clients that support that feature).


### Mobile madness


There are dozens, if not hundreds, of mobile browsers out there, with wildly differing interpretations of CSS and JavaScript. Check out Peter-Paul Koch’s [CSS](http://www.quirksmode.org/m/css.html) and [JavaScript](http://www.quirksmode.org/m/table.html) mobile compatibility tables if you need convincing. Supporting multiple mobile devices is no cakewalk, especially since many of them have incorrect or misleading user agents.

The iPhone was our target, and some mobile browsers, such as many versions of Opera Mobile, also have relatively good standards support, but what about IE Mobile or Blackberry?

We quickly came to the conclusion that, because of the condensed timeline, we should test in and support Safari Mobile only, however, that the site also needs to be fully usable with no CSS or JavaScript whatsoever. By ensuring this baseline level of functionality, we could be certain that even the Blackberry browser could at least limp across the finish line.


### Back to the desktop


Along with choosing mobile browsing platforms to support, we also had to decide for which desktop browsers to design the site. Ordinarily, desktop compatibility testing is dominated by Internet Explorer 6, but this site was geared towards web designers and developers.

That means more people would be visiting the site using Chrome than would be IE6.

IE6 was swiftly kicked to the curb, and we settled on fully supporting Firefox 3, Safari 3 and Chrome, with basic support for Internet Explorer 7. Safari and Chrome support came almost for free, because the two render almost identically to iPhone’s Safari Mobile.


### Site be nimble, site be quick


Supporting mobile devices supporting weak signals, slow connections, small screens, bite-sized memory, and users who are on the go. There are a number of factors conspiring against any mobile website, and we knew that we would have to eke every last bit of performance out in order to overcome them.


### Limit the chatter


Client interaction with the server not only increases design complexity, but it also increases the size and number of requests. There were several key factors that made us decide to keep forms and complex interactivity out of the site:



	
  * Applications that use forms have to validate the data, and guard against attacks. This can slow down the experience, and also would require a more in-depth security review.

	
  * POST requests are slow. Data-heavy responses are slow. Increasing the number of requests involved in typical usage puts a heavier burden on the server and delays the user in getting from point A to point B.

	
  * Sites that can be customized or that allow the user to log in typically can’t cache data as efficiently, because page data is often sensitive to the user.


To make the site run quickly, launch on time, and be successful in its goals, the application would be focused on being the best guide it could be, and not on integrating your Twitter account and kitchen sink.


### Sell the brand


Lastly, the guide had to make Publicis Sapient look good and leave a strong impression of who we are and what we’re all about. If the guide was as informative and fast and easy to use as can be, but didn’t sell our brand, it would be a failure.


## Technologies


Based on the requirements we gathered, the team picked familiar development libraries and languages to work with.


### XHTML, CSS and JavaScript


These languages should come as no surprise, as they’re integral to all web applications. An important decision that we did make, however, was that no JavaScript or CSS frameworks should be used.

For desktop development, our industry has become increasingly reliant on JavaScript frameworks to smooth out cross-browser wrinkles and speed up our work. Generally, JavaScript frameworks excel at meeting both of those goals.

There are a couple problems when considering a JavaScript framework for mobile development:



	
  * Frameworks add a lot of bulk to the page. 54 KB for jQuery 1.3 isn’t much on the desktop, where fast internet connections are common, but it’s painful over 2G wireless connections used by many mobile phones (the first iPhone model included).

	
  * When you’re targeting a single platform (or a standards-compliant platform), a lot of the framework’s code is going to go to waste. Much of the code in JavaScript libraries is for abstracting cross-browser compatibility issues.

	
  * When you’re targeting multiple mobile platforms, most frameworks aren’t built with mobile in mind, and may be unable to perform properly regardless.

	
  * iPhone doesn’t cache components that are over 25 KB in size. (Unfortunately, this is when the component is decompressed, so it doesn’t matter if the component is under 25 KB when GZIP compression is used.)

	
  * The framework’s code has to be executed on the client in order to initialize all of the framework’s components. On slower clients, such as mobile devices, this is a longer delay than you might think, and many of those features probably won’t be used on the site.


In the future, JavaScript frameworks may overcome these challenges, but we resigned ourselves to starting from scratch for this project.

CSS frameworks were out of the question for many of the same reasons.


### ASP.NET MVC


The ASP.NET MVC Framework was chosen as our server-side technology primarily because of the team’s familiarity with it. Having just recently used the technology on other projects, it was still fresh in our minds. The MVC framework allows for quick, clean and very functional design that you have a great deal of control over.


### Publicis Sapient.Web


We elected to use our internally-developed .NET library that’s specialized for use on web projects. Publicis Sapient.Web has a number of features that made it indispensible for this project, such as dynamic CSS and JavaScript compression. As I’ll cover later, we extended the library while building the guide to push optimization even further.


### SQL Server


Microsoft’s database engine was the natural choice to go along with ASP.NET MVC. We used LINQ to SQL to easily communicate with the database from the web server.

With our tools selected, we were ready to start building the site. Come back for part 2 to learn about some key design and development decisions that went into making sxsw.razorfish.com.
