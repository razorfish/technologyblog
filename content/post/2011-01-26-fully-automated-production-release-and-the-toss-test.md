---
author: rvelez
categories:
- General
comments: true
date: '2011-01-26'
slug: fully-automated-production-release-and-the-toss-test
title: Fully automating releases to production and The Toss Test
url: /2011/01/26/fully-automated-production-release-and-the-toss-test
wordpress_id: 531
2011:
- "01"
---


I just read this article on [web ops 2.0](http://dev2ops.org/storage/downloads/FullyAutomatedProvisioning_Whitepaper.pdf), basically the movement to automate pushing builds to production. There's been a lot on the web recently on the topic, this slideshare presentation from [flickr ](http://www.slideshare.net/jallspaw/10-deploys-per-day-dev-and-ops-cooperation-at-flickr)is great. A proof point that we can release a lot more often to production, especially with agile/iterative teams that include QA practices as part of development as opposed to a separate effort. The analogy between spock as development and scotty as operations is pretty spot on. It highlights another important point, which is while the technology is there, we also need to bridge the different personalities.

[![opsdev](http://farm6.static.flickr.com/5213/5391205582_ea3541c823.jpg)](http://www.flickr.com/photos/rayvelez/5391205582/)

The 'toss' test in the article was funny. So, to determine the success of your environment. Basically grab any machine, rip it out of the rack and throw it out of window, preferrably a high window. Can you automatically re-provision your systems and return to a previous state? Or question two, your sr. engineer runs away to Alaska(I didn't want to toss anyone out a window:)), can your operations proceed as normal?

So, not only does fully automated provisioning enable faster releases to production, but it also hardens your infrastructure and protects against failure.

Leveraging cloud APIs and technologies like Puppet, Chef, Kickstart, Rightscale, etc. is what makes this all possible. Of course, these capabilities come compliments of cloud computing and the ability to automate through cloud api's and inexpensive, on-demand compute capabilities.
