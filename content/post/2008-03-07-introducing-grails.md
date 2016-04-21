---
author: Jochen Toppe
categories:
- General
comments: true
date: '2008-03-07'
slug: introducing-grails
title: Introducing Grails
url: /2008/03/07/introducing-grails
wordpress_id: 18
2008:
- "03"
---


It was Tim Bray, who in his [predictions for 2008](http://www.tbray.org/ongoing/When/200x/2008/01/03/Prediction-Rails) mentioned that “_Rails will continue to grow at a dizzying speed, and Ruby will in consequence inevitably become one of the top two or three strategic choices for software developers_”. Indeed, in my eyes the rails paradigm which blends well-known best-practice patterns such as MVC web applications with the notions of _Coding by Convention_ and _Don’t Repeat Yourself_ doesn’t only speed up and simplify development, but also keeps your code base clean. There are no more tedious configurations files which all repeat themselves yet have the touching fingerprint of every developer’s style. Developers can focus on the most important issue at hand: the functionality. That’s why I’ve always been a huge proponent of Ruby and Rails.





### But why Ruby?


With a fairly high adoption rate for Ruby on Rails, some problems have been discussed across the internet (follow [this discussion](http://graemerocher.blogspot.com/2006/04/grails-ruby-on-rails-feeling-heat.html), for example):



	
  * Performance, especially in large installations

	
  * Interoperability issues with other applications / technologies

	
  * Deployment onto existing infrastructures and application servers


What other frameworks are out there that provide the same benefits? For today, let’s dive a little deeper into Grails.


### Grails


The [Grails project](http://www.grails.org) (formerly known as Groovy on Rails) started in July 2005 and the project just recently announced the long awaited 1.0 release on February 18, 2008. Grails is built on top of the J2EE stack and combines the best-of-breed tools [Hibernate](http://www.hibernate.org/), the [Spring Framework](http://www.springframework.org/), [Groovy Scripting](http://groovy.codehaus.org/), as well as support for my favorite IDE, [Intellij Idea](http://www.jetbrains.com/idea/index.html) (no worries, [Eclipse](http://www.eclipse.org/) works too). All mature tools and languages that have been used in the Java community for a long time now. Consequently Grails provides:



	
  * Lower learning curve for J2EE developers

	
  * Easy integration points with existing and new Spring and J2EE applications

	
  * Enterprise deployment of grails applications as a WAR/EAR file

	
  * Similar performance to a Java application ([see performance tests](http://docs.codehaus.org/display/GRAILS/Grails+vs+Rails+Benchmark))




### Demo


Let’s dive straight into a demo in which we will create a few persistent domain classes and integrate an existing CMS backend.



[![Grails Demo Architecture](http://www.jtoee.com/wp-content/uploads/2008/06/oie_untitled.jpg)
**(Click to view the demo)**](http://jtoee.com/wp-content/uploads/2008/06/grailsdemo_final.html)





### Features


The following features are included in the 1.0 release:



	
  * Test-driven development via unit tests and mock objects

	
  * An environment-sensitive configuration mechanism out of the box

	
  * Ruby-on-rails like build and development command line tools (that can create war files)

	
  * OR-Mapping via Hibernate (with full support for all Hibernate-supported databases)

	
  * The ability to weave in advanced Hibernate functionality and provide custom OR-mappings if needed (for that remaining 5% of the functionality that require special tuning)

	
  * An MVC web-layer based on GSPs (Groovy Server Pages) which includes custom taglib and sitemesh support

	
  * Ajax support (Grails ships with Prototype but has plug-in support for Dojo, Yahoo UI, and Google Web ToolKit)

	
  * Internationalization Support (Does Ruby do this nowadays? :))




### Caveat Emptor?


Yes, the Grails community just released version 1.0 in January 2008. Yet the framework has been in the works for about 2½ years now and I was quite impressed with the amount of features and finesse already contained. The foundation of the framework is built on top of well-established open source frameworks which should minimize the risk of using such a new library.

Would I recommend Grails for a huge enterprise project? Probably not. But I would wholeheartedly recommend every developer and architect to look at this great alternative to traditional web development.
