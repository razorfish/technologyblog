---
author: Jochen Toppe
categories:
- Methodology
comments: true
date: '2008-10-27'
slug: leveraging-model-driven-development
tags:
- .NET
- Agile
- MDD
- Rails
- TeamSite
title: Leveraging Model Driven Development
url: /2008/10/27/leveraging-model-driven-development/index.html
wordpress_id: 62
2008:
- "10"
---


[caption id="attachment_306" align="alignright" width="212" caption="Project Triangle"][![Project Triangle](http://jtoee.com/wp-content/uploads/2008/10/triangle1.jpg)](http://jtoee.com/wp-content/uploads/2008/10/triangle1.jpg)[/caption]

Achieving efficiency in the software development process is one of the key motivators every team should strive for. Efficiency can be measured in a variety of ways. The most obvious measurements are cost, project timeline, and the feature set that can be implemented given the first two. In a sense, it boils down to the old project triangle (remember: pick any two of the criteria).

In essence, there is a trade-off between quality, timeline, and cost. For example, reducing the timeline at equal costs reduces quality just as implementing at a faster pace reduces quality. Yet I argue that the triangle approach is not necessarily valid anymore. Traditional development processes have clearly shown that just enhancing the timeline on a project to put special care into the design does not actually lead to higher quality software – quite the contrary.

Yet more dimensions are at play. The number of defects (“bugs”) found in a particular software directly translate into cost and time, especially when found late in development cycle, creating a dependency between testing quality, time, and cost. Inefficient software design increases the cost of introducing new functionality as requirements change and a lack of refactoring capabilities sooner or later lead to the need for a full re-development. The problems are amplified when the software spans multiple independent subsystems, which is often the case in modern web architectures which span across content management systems, web services, search engines, commerce engines, custom web applications, etc.

Agile development methodologies have tackled many of these problems in great detail through test-driven development (TDD) and time-boxed iterative release cycles. This article discusses a number of tactics you can deploy in addition to what you find in your agile toolkit: To speed up development and tackle complex problems with smaller teams in less time leveraging the key ideas of Model-Driven-Development (MDD).
<!--more-->


### Leaning on MDD


Model-Driven-Development (MDD) is a rather interesting software development paradigm which puts the modeling aspect of software engineering at the center of the development process.

[caption id="attachment_313" align="alignright" width="254" caption="MDD Overview"][![MDD Overview](http://jtoee.com/wp-content/uploads/2008/10/mddoverview2.jpg)](http://jtoee.com/wp-content/uploads/2008/10/mddoverview2.jpg)[/caption]

The most popular notion of MDD is the [Model-Driven-Architecture standard](http://www.omg.org/mda/) by the Object Management Group ([OMG](http://www.omg.org/)). MDA is based on a variety of modeling artifacts. At top is a platform-independent model (PIM) which only captures the business requirements using appropriate domain-specific language. This model is then translated into any number of platform-specific models (PSM) using a platform definition model (PDM) for each platform. In essence, this is equivalent to modeling your software in a very high-level (business specific way) and then using a translator such as a code generator (the PDM) to convert the model into code (the platform specific model). Given the same business model, the software can automatically be built using C#, Java, and PHP given the correct translation routines.

MDA in theory has a number of advantages to traditional coding:



	
  * It obviously appeals to the business owner who can finally re-use the conceptual business model across technology trends, i.e. re-implementing the solution using new technologies does not require a complete overhaul but is simply a matter of switching technologies. Numerous companies specialize in MDA and even rapid-prototyping tools exist which integrate agile development methodologies with MDA. Instead of developing software in iterations, the model is developed iteratively and can then be generated into executable code.

	
  * When using code generation frameworks, such as the open source tool AndroMDA, one can quickly build applications using existing code generators. A simple UML domain diagram can immediately be translated into Spring MVC controllers, domain objects, Hibernate mappings, and much more.

	
  * When the software spans multiple sub-systems, MDA nicely enforces the correct translation of the model across different technologies used in each one of these systems. While I prefer writing generic code to duplicating code via code generation, this isn’t always feasible (e.g. for XML configuration files or TeamSite CMS data capture templates). In MDD changes to the model can instantly be translated into multiple code artifacts using different technologies by the push of a button.


Yet I also see a number of serious issues with the OMG's vision:

	
  * As an "agilist" at heart I strongly oppose the idea of spending excessive time modeling software in great detail such as highly granular UML diagrams. Software is meant to be code, not a myriad of UML diagrams which are modeled without an in-depth understanding of the features and limitations of the underlying frameworks. I value the use of UML as a pictorial language, especially when illustrating concepts either on a white board or in documentation. But not when used in a strong forward-engineering paradigm.

	
  * MDA reduces the application of a particular technology or framework to a simply technicality, i.e. the creation of a platform definition model. Yet building applications efficiently heavily relies on the capabilities and limitation of the underlying frameworks.

	
  * Code generation is equivalent to duplicating a code template using the model as an input. However, I generally prefer writing generic, re-usable code to unnecessary duplication. The benefits of generic code are obvious, not only is the application smaller, but debugging and maintaining the code is by far easier. Generated code would force you to debug the same piece of logic in many places of the application and fixing it requires changing the code generator templates and ultimately re-generating the entire application.

	
  * Building a platform dependent model, i.e. the code generator, for an entire application can be a huge undertaking. On the upside, many vendors and open source technologies, such as AndroMDA, ship with a variety of pre-built cartridges. However, by using existing code-generators one reduces implementation flexibility as well as maintainability of the application. Debugging and fixing issues in these pre-built code generators can be tedious and easily be overwritten by the next release of the generator. Further, generic code generators tend to be quite complex due to the fact that they have to be very generic.

	
  * When building web applications, I usually like to encourage my teams to push the boundaries and leverage the latest technologies available. Using existing code generation frameworks obviously won’t leverage the bleeding edge of technology, forcing you to write your own.




### Leveraging the Key Tenets of MDD


While I argue that in its pure form, that being the notion of building an entire application using this paradigm, MDD is not my first choice, I would also argue that it has an obvious allure to it. Writing generic code is not always an option as all modern frameworks require configuration, plumbing code, mapping directives, etc. This is exactly where the code generation aspect comes to fruition. Given a central domain model, many artifacts surrounding a domain object can be automatically generated.

A major objection I am confronted with often is whether this approach lacks flexibility as the code is generated according to the same pattern every time. My argument is that this is actually an advantage for the majority of every application. Of course the code generation framework needs to be able to handle special situations where the generic functionality needs to be extended.

Let’s consider this by an example. A software team is integrating an XML-based content management system with a web application. The CMS team is responsible for defining the content input forms in the CMS which are used by the end user to create the XML. The application team writes a parsing layer which parses the XML into domain objects and a web application on top of it. After the teams agree on a content model, i.e. the structure of the XML files, both teams can start implementing all necessary coding artifacts.

[caption id="attachment_309" align="aligncenter" width="259" caption="Sample Application"][![Sample Application](http://jtoee.com/wp-content/uploads/2008/10/cms_web_app1.jpg)](http://jtoee.com/wp-content/uploads/2008/10/cms_web_app1.jpg)[/caption]

However, since all artifacts are developed manually, when integrating the pieces, the teams will encounter a number of bugs which are a result of the two separate systems relying on the same underlying domain model. Further, different bugs are most likely to be found each one of the content forms and the associated parsing layer because different developers make different mistakes.

Consistency may be another issue. Especially when multiple developers are working on the individual functionality, each usually adds their own spin to the code. Some of date fields in the CMS forms may have calendar buttons next to date fields, some may not. Some developers might use camel case, another one may not.

Of course both of these issues can be addressed by establishing sound coding conventions as well as doing impeccable up-front design of all the sub-systems. But reality shows this is rarely the case. Especially when reacting to changes during the development cycle, such as the web application noticing that they need additional fields in the CMS, the original design efforts are often neglected.

[caption id="attachment_311" align="aligncenter" width="325" caption="MDD with Code Generator"][![MDD with Code Generator](http://jtoee.com/wp-content/uploads/2008/10/cms_web_app_22.jpg)](http://jtoee.com/wp-content/uploads/2008/10/cms_web_app_22.jpg)[/caption]

Consider the alternative which is more aligned with the MDD paradigm. The teams agree on a domain model and then build a vertical slice, i.e. a functional prototype of the system through all defined layers. Then, using this prototype, the teams build a code generator which takes the domain model as an input and automatically generates the CMS forms and application-level parsing layer for the resulting XML files. The domain model is then fed into the code generator and the application is automatically generated. The code generator automatically enforces consistency. If any bugs where to be encountered which are a result of the coupling of the two systems, the code generator would have to be changed and the application re-generated.

In addition to the maintenance and consistency advantages, the teams also saved time. In the traditional approach, each time had to manually build the application logic for each entity in the domain model in each of the participating subsystems. In the MDD scenario, the teams built a vertical slice prototype and then translated that into a code generator – which automatically generated the application.


### Alternatives


Especially when building web applications a strong alternative to MDD is the use of Rails-like frameworks, such as Ruby on Rails, Grails, Monorail, and many others. The underlying core ideas are aligned with what I consider the key advantages of MDD:



	
  * **Don’t repeat yourself (DRY)**: Instead of repeating yourself, write code once and then have the framework take care of creating the plumbing code. This is typically done under the hood by the framework.

	
  * **Conventions over Configuration (CoC)**: Rather than having every aspect of the application be built differently, establish sound conventions and use these throughout the software to ensure consistency and eliminate unnecessary (and unmaintainable) bloated configuration files.


In essence, these frameworks try to solve the same underlying problem. Yet Rails frameworks focus on building web applications within the same technology stack. For simple (web) projects which are easily contained into one logical application, not spreading across multiple software systems, any Rails framework is an excellent way of building an application quickly and iteratively. Once an architecture spans multiple technologies, frameworks, or requires custom coding using proprietary products (such as a CMS), MDD proves to be the big brother of Rails-like frameworks.


### Conclusion


I have used both the Rails and the MDD approach throughout my career. I have introduced the light-weight MDD approach in a number of recent projects at [Razorfish](http://www.razorfish.com), which led to us building a jumpstart kit that in its first iteration lets us quickly bootstrap projects with [Interwoven TeamSite](http://www.interwoven.com) and [.NET](http://www.microsoft.com/NET/) as an application platform. This has not only saved us a lot of time, but also a lot of headaches and long nights of debugging code. We are able to quickly react to changes during the development cycle. Changes to the domain model can be made within the matter of the short time it takes to open a UML editor and re-run the code generator.

I consequently see MDD as a vital part of agile enterprise development and a complementing technology which picks up where a Rails framework hits its limits.


### Links





	
  * [Object Management Group's MDA Page](http://www.omg.org/mda/)

	
  * [Wikipedia on Model-Driven-Architecture](http://en.wikipedia.org/wiki/Model-driven_architecture)

	
  * [AndroMDA code generator tool
](http://www.andromda.org)

	
  * [Eclipse Modeling Framework (EMF)](http://www.eclipse.org/modeling/emf/)

