---
author: aonesto
categories:
- General
comments: true
date: '2015-03-23'
slug: the-success-of-embracing-angularjs-in-a-large-scale-enterprise-solution
title: The Success of Embracing AngularJS in a Large-Scale Enterprise Solution
url: /2015/03/23/the-success-of-embracing-angularjs-in-a-large-scale-enterprise-solution/index.html
wordpress_id: 1107
2015:
- "03"
---


##### by Jeff Chew ([@therealjeffchew](http://www.twitter.com/therealjeffchew)) - Technology [@Razorfish](http://www.twitter.com/razorfish)




On March 17th, I gave a [talk at the Google office in Chelsea](http://www.meetup.com/AngularJS-NYC/events/221056642/) describing how to build a scalable AngularJS project. The magnitude of this kept with me for weeks leading up to this event, seeing that [AngularJS](https://angularjs.org/) is a JavaScript framework created by Google themselves. And looking at the roster, there were a couple of hundred people signed up to come, with an additional 200+ in the waiting list.




Rewind over a year ago, I joined the Ford account at Razorfish understanding that I’d be taking on and leading the Presentation Layer charge of a massive revamp of the Ford and Lincoln owner portals ([http://owner.ford.com](http://owner.ford.com) / [http://owner.lincoln.com](http://owner.lincoln.com)).




![](https://lh3.googleusercontent.com/m0Z0EiN76UcZL9N8SWm9wYbxPIgLWyTPJr3PayNCdNhg3I3D8aLea80MjD0Lpu9z2IIPOq-G5wNioogNJJeemspa6TJncMRocKwuXcbvBCW2ZIq1JvhUWHrbMyooTSsZj8XJses)


**** ****


![](https://lh3.googleusercontent.com/I_amTDvgDbkU9evnuvqm74GGOpYvwYyhpxP6YIBuKq267-IKK5k3objLqUc2RXsIjwf-LlMsUNLobINg8iVTFqPpFpOdYFdl8Nxj0RzJisUa6KPie2hPW-AgqrzNoQqe-E4Kz9c)


**** ****


Its predecessors were on a platform called Fatwire, which the client has decided to leave on the wayside for a re-platform to the [Adobe Experience Manager](http://www.adobe.com/marketing-cloud/enterprise-content-management.html) (AEM), an enterprise level content management system (CMS) by Adobe. Part of this revamp, we took the opportunity to reevaluate the performance and how we could make things better. Where it landed, we opted to separate all of the logic into various layers instead of letting the server side do all of the heavy lifting. [![](https://lh5.googleusercontent.com/H8XOdJfQqsDxyYlAZCXcQLbCDMydV4CIKmEIiXpX7L_Hefhs_RxIFFM6F7h-4UTi9wpVF0Y2y5mAsvtQKVhovNH4iFa6VSCzpYh_e6mLNQKoCoJEsIXlu0vlpKra5eM0DvjVF1c)](https://www.lucidchart.com/documents/edit/99c32ac9-4a90-4bcb-996f-b33e1f8b03f2/0?callback=close&v=546&s=612)




In the new stack, we are allowing AEM to do only what it does best, which is to deliver content. We then extracted all of the SOAP operations from the server side, and exposed those as a RESTful API layer that can communicate with the presentation layer. What this means is that all of the business logic now falls on the hands of the front-end.




We selected AngularJS as the framework of choice. In addition, we embraced AngularJS as a whole, and used it as a pure solution rather than a mix of other frameworks or libraries (i.e. jQuery, etc). This allowed us to fully utilize its unit testing capabilities, as well as the ability to fully modularize the product we are building. To elaborate on the idea of modularization, AngularJS gives the power to separate functionality into smaller pieces that can then be put together wherever those pieces are needed. For example, if we are creating a hook into the service layer, we only need to write it once then place it in any section that needs to use that hook. This particularly came in handy, as the number of RESTful service integration points reached close to 90 by the time the site launched.Extending the idea of modularization further, I was tasked with also architecting two projects that came in during the year; Ford’s corporate site (




Extending the idea of modularization further, I was tasked with also architecting two projects that came in during the year; Ford’s corporate site ([http://corporate.ford.com](http://corporate.ford.com)) and another property owned by Ford called Quicklane ([http://quicklane.com](http://quicklane.com)).




![](https://lh5.googleusercontent.com/GbD5x_NYXzVMlwqXLMPhcco-WQf4omZgbC39aOhsIm4w2agGVBA09L-c_hO4rp68wd2f-4MiWxFCNMjkd3wI1igWdn_MRu4pJ3_K2ELVeDCeRTDjsfG5XgGsgksXOCIky1fdD-U)


**** ****


![](https://lh5.googleusercontent.com/yV0SBellsuofkcai2qcIM6ttKcqEes-VApEdcy1VuxohC6pRqO2jbXtJVXp51-qZhR3UedMMU0-NqukYGuWD-4o9eQDPSBDQUf-L8wp_W5fX9BAnXlo2Gf4C2PwtCH8C2ZVgATk)


**** ****


Even though these sites had different business needs, I went with the same architectural structure as the Ford and Lincoln owner portals, then kicked off the respective development teams. What we noticed was that we saw a lot of commonality across the various work-streams. We didn’t think it made sense to reinvent things like an accordion, carousel, or even how we handle responsive imagery. We modularized all of these as standalone components, which we could then pick up and place from one work stream to another with minimal integration time.




The Ford corporate and Quicklane sites launched successfully in Q4 2014, while the owner portals launched without a hitch at the end of Q1 2015.




We also saw some considerable performance gains during our performance and load tests. Some highlights to note compared to the old Ford/Lincoln owner portals:

  * Login & Authenticated Homepage: 50% faster @ 9x load
  * Registration: 130% faster @ 3x load
  * Upload Software Installation Log: 328% faster @ 100x load
  * Check Sync Software Status: 536% faster @ 6x load







Part of the exploration of architecting a scalable AngularJS solution, I quickly realized that the approach we used was not documented or spoken of anywhere in the tech community. I took this as an opportunity to share how we were able to successfully leverage AngularJS on an enterprise solution across multiple work streams.




I prepared my presentation hot at the heels of the most recent launch, which wasn’t much time. On top of that, I was scheduled to do a dry run of the presentation with Google a day after the launch date. Fortunately, our launch went so smoothly it gave me time to start thinking around how I wanted to tell our story to Google and the tech community at large.




The final story evolved into two separate tales. One is how to guide a new AngularJS developer from a basic project, to something that is scalable and can be used in a real life project. This was told with multiple sample projects and building from a baseline to a usable product. The other story was the problem we were faced with, and how we applied this guide to the various Ford projects that are live today.




All in all, I’m proud of the work that the Razorfish Ford team was able to accomplish, and even prouder of the fact that we could tell our story outside the walls of our office. The presentation at Google was well received, and was delivered to a packed room with people standing in the back.




The presentation was recorded, and will be available on Google’s AngularJS Youtube channel in the near future.






	
  * Presentation Slides: [http://goo.gl/gtv79v](http://goo.gl/gtv79v)
  * Sample Code: [https://github.com/jeffchew/angularjs-requirejs-presentation-examples](https://github.com/jeffchew/angularjs-requirejs-presentation-examples)
  * AngularJS/RequireJS Boilerplate: [https://github.com/Razorfish-East/angularjs-requirejs-boilerplate/](https://github.com/Razorfish-East/angularjs-requirejs-boilerplate/)




