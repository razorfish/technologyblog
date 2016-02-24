+++
author: admin
categories:
- General
- Technology
comments: true
date: '2009-07-24'
slug: taming-ie6-drop-ie6-rebuke
tags:
- css
- internet explorer 6
- pld
- presentation layer
title: Taming IE6 and a "Drop IE6" rebuke
url: /2009/07/24/taming-ie6-drop-ie6-rebuke
wordpress_id: 227
+++


During the development of any project that involves HTML, there's always a nagging question in the back of your mind:  "How broken will this site be in IE6?"  Here's an article that will reduce the amount of worrying you do when fixing your site to work in IE6.  It covers the majority of issues you'll encounter when working with IE6.

[Definitive Guide to Taming the IE6 Beast](http://sixrevisions.com/web-development/definitive-guide-to-taming-the-ie6-beast/)

The article covers:



	
  * conditional comments

	
  * target IE6 CSS Hacks

	
  * Transparent PNG-fix

	
  * double margin on float

	
  * clearing floats

	
  * fixing the box model

	
  * min/max-width/height

	
  * overflow issues

	
  * magic-list-items appearing


It's probably the last article on IE6 specific CSS techniques you'll ever need to read.  Required reading for all PLD's.

On the topic of IE6 and whether or not we should still be supporting it, here are some thoughts.

IE6 support seems to be waning, but we still have plenty of clients that are still running IE6 exclusively on their work machines, so until they upgrade to Windows Vista / 7 we'll continue to have to support them.

In the past year there have been a few campaigns to get people to upgrade like [hey-IT.com](http://hey-it.com/), [www.bringdownie6.com](http://www.bringdownie6.com/), and [www.end6.org](http://www.end6.org/).   Also, Google just [announced](http://www.techradar.com/news/internet/youtube-to-stop-ie6-support-616309) that YouTube wouldn't support IE6 anymore in the near future.

Sadly, the more I thought about just saying "no more IE6 support", the more I realized that the people that were running IE6 at this point couldn't upgrade.  They are usually either on older machines (Windows 2000 or earlier) or their IT won't upgrade because of a legacy web-based application depends on it, like a CRM or ERP app.    These applications aren't upgraded often, and they are definitely not upgraded during a recession.

Full IE6 support is vital for any site that caters to business users (IT issues / older computers), international users (older computers), or a large percentage of the public (lots of people don't upgrade their computers/OS when all they do is browse the web with them).

Here's a [good chart](http://farm4.static.flickr.com/3560/3587486451_5936cd3252_o.png) that shows the trends for various browsers / versions from Oct-04 to May-09 based on data from NetApplications.com

It shows IE6 usage just below Firefox usage in May-09.

As much as I dislike "fixing" the sites I work on to work with IE6, I think we're going to have to do it at an agency level for another year or so.
