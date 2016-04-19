---
author: bmord
categories:
- General
comments: true
date: '2011-04-15'
slug: from-threads-to-coroutines
tags:
- concurrency
- coroutines
title: From Threads to Coroutines
url: /2011/04/15/from-threads-to-coroutines
wordpress_id: 619
2011:
- "04"
---


Twitter's [recent move to Netty](http://engineering.twitter.com/2011/04/twitter-search-is-now-3x-faster_1656.html) brought with it significant performance improvements, highlighting the importance of network and concurrency architecture. Netty looks like a great framework, making the most of what Java provides today - but at heart, Netty must still be based on multithreading. [Mysterious problems](http://www.jboss.org/netty/community.html#nabble-td3434933) are therefore expected. What is really needed is for the world to move past multithreading (any day now, please) which is just a [terrible concurrency paradigm](http://www.eecs.berkeley.edu/Pubs/TechRpts/2006/EECS-2006-1.pdf).

[Coroutines](http://en.wikipedia.org/wiki/Coroutines) are a better idea. You can do that in python now as of 2.5, via [enhanced generators](http://www.python.org/dev/peps/pep-0342/). Prior to PEP 342, the idea was first [popularized](http://www.grant-olson.net/python/intro-to-stackless-python/why_stackless.html?attredirects=0&d=1) among python fans via the [stackless fork](http://www.stackless.com). This approach has proven [useful for high-throughput networking](http://www.eveonline.com/devblog.asp?a=blog&bid=584), but not many other languages support this paradigm.

ECMAScript [*almost* added it](http://wiki.ecmascript.org/doku.php?id=proposals:iterators_and_generators) in version 4 – and how marvelous that would have been! The need is especially poignant in the thread-starved world of browser programming. The pushback came from concerns about interpreter complexity, but that feature [isn’t as hard to add](http://www.stackless.com/spcpaper.htm) to interpreters and compilers as people think.

Imagine making an AJAX call, where the call stack of your calling function is set aside and the thread released for browser use. Once the server responds, your function resumes – and it is as though you never left! Isn’t this just the obvious way to do it? I remember one scenario recently where I needed to solicit user input in the middle of a recursive backtracking algorithm, except - oh yeah, ActionScript can't. Of course I could and did restructure around this language deficiency (Turing completeness and all) - but shouldn't we instead be structuring our code in whatever way maximizes algorithmic clarity?

So why not fix it? As further evidence of feasibility, Mozilla JavaScript [found a way](https://developer.mozilla.org/en/New_in_JavaScript_1.7#Generators) - and as predicted, this lets us do [I/O in the way we should](https://github.com/dherman/taskjs).

Now all we need to do is get ECMAScript on board. And while we're at it, why not Java, .Net, and other thread-based langauges? Let’s stop threading, and start generating. All the event-based I/O frameworks we see popping up are fine workarounds in the interim, but let's address the core language deficiency instead.
