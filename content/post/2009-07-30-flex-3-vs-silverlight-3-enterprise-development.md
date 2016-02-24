+++
author: admin
categories:
- Technology
comments: true
date: '2009-07-30'
slug: flex-3-vs-silverlight-3-enterprise-development
tags:
- as3
- C#
- enterprise development
- flash
- flex
- pld
- presentation layer
- silverlight
title: 'Flex 3 vs Silverlight 3: Enterprise Development'
url: /2009/07/30/flex-3-vs-silverlight-3-enterprise-development
wordpress_id: 239
+++


With the recent release of Silverlight 3 and Flash 10 / Flex 4, the Flash vs Silverlight debate has been stoked yet again.  The debate has been raging on twitter using the tags #flex #silverlight.  Links to articles are posted almost every day and retweeted endlessly.

The latest two most talked about articles fall squarely on each side.   On the Silverlight front, a [blog post](http://codertron.blogspot.com/2009/05/flex-3-versus-silverlight-3-in.html) from a coder with a lot of experience in .NET and some Flex experience shares his insights on enterprise development.  His experience with C# colors his opinion of Flex development however, and his inexperience with Flex is evident through his omission of development tools such as FDT and Flex frameworks such as Mate.  His biggest arguments revolve around language features (C# is a more robust, full featured language), AS3's lack of a native decimal type, and the Flex IDE.  In regards to Silverlight's penetration, the author claims that since Enterprise apps work within a company, it's easier to get Silverlight installed.   He finishes the blog post with a nod towards Flex: "this particular Flex application is the best looking application I’ve ever seen!"

On the Flex side, [Tim Anderson writes about the release](http://www.itwriting.com/blog/1655-morgan-stanley-why-we-didnt-use-silverlight-for-matrix.html) of Morgan Stanley's [Matrix](http://www.morganstanley.com/matrixinfo/) application in his blog.  In it he highlights a few points made during the presentation on why Flash / Flex was chosen over Silverlight.  The main points of the article highlight Flash Player 9's penetration and Silverlight's lack-there-of, the application's speed, and allowing the designers on the project to use products they wanted during development.   The most insightful quote of the presentation was regarding the design tools:

_"You have to look at the people that use that technology. The design community. That’s the biggest problem that Microsoft has. The designers all carry around Apple laptops, they all use the Photosuite [sic] set of software tools. It’s like asking structural engineers to stop using CAD applications. That’s the tool that they use, and if you can’t convince them to switch away from your software suite you are going to get a limited number of designers that will use Microsoft’s toolset … if you can’t get the designers to switch, to learn a new language, then how can you possibly ever get some traction?"_

So there you have it, one article by a seasoned .NET developer decrying Flex's lack of language features and another decrying Silverlight's inability to win over designers.

I have also straddled the fence between .NET and Flex developer for a number of years and have worked a little bit with Silverlight, so I tend to agree with both articles.  They are both right.  AS3 is an inferior language and it's default IDE is definitely no match for VS.NET, however Flex/AS3's speed isn't as bad as is made out and it's a platform that is ubiquitous and has a VERY low barrier of entry for designers and other non-developers.

So this debate boils down to form vs function.  It's harder to write a large application with a lot of business logic in Flex, however it's easier to make it look good.  The opposite is true for Silverlight.  So just like a with any other technology, you have to make a choice based on your audience, the design, and the lifetime of the application.

So I'd recommend Silverlight if:



	
  * your audience is a small and you have control over the environment they are going to use the app in

	
  * the design isn't complex (like heavy use of blend modes, interactive 3d elements)

	
  * you need tight integration with a .NET backend

	
  * there is a lack of Presentation Layer Developers


I'd recommend Flash if:

	
  * you are serving a large, diverse audience

	
  * you have a complex design with animation (3D, webcam integration, etc)

	
  * your application uses mainly webservices to communicate to a backend

	
  * sufficient presentation layer development resources


You can duplicate most sites built in Flex in Silverlight and vice-versa (with a few exceptions).  It's just a matter for the right tool or the right job.  I lean towards Flex because I feel it has the most flexibility (no pun intended), but I do like XAML / WPF / Silverlight and am excited to see it evolve and be a competitor to Adobe.

Everyone wins when there is competition.
