---
author: rvelez
categories:
- Technology
comments: true
date: '2009-02-02'
slug: native-thread-support-in-rubys-latest-version
tags:
- Java
- language
- Programming
- Programming language
- Ruby
- Tools
title: Native thread support in Ruby's latest version
url: /2009/02/02/native-thread-support-in-rubys-latest-version
wordpress_id: 134
---





[![Official Ruby logo](http://upload.wikimedia.org/wikipedia/en/d/de/Ruby-%28programming-language%29-logo-2008.png)](http://en.wikipedia.org/wiki/Image:Ruby-%28programming-language%29-logo-2008.png)
    Image via [Wikipedia](http://en.wikipedia.org/wiki/Image:Ruby-%28programming-language%29-logo-2008.png)





It looks like [Ruby version 1.9.1](http://dobbscodetalk.com/index.php?option=com_myblog&show=Ruby-1.9.1.html&Itemid=29) supports native threads and fibers. Fibers are a 'lightweight' approach when you don't need full threads. It sounds like fibers are not preemptive, so they have to yield to other fibers as opposed to threads that can run in parallel. Fibers on the other hand startup faster and use less memory.

I know when [Java](http://java.sun.com) made the leap to support native threads, it seemed like it was a huge accelerator towards greater adoption. It looks like the [performance numbers](http://antoniocangiano.com/2008/12/09/the-great-ruby-shootout-december-2008/) are already coming in and it's much faster.


[![Reblog this post [with Zemanta]](http://img.zemanta.com/reblog_e.png?x-id=9da88d6f-baf2-4b42-b6bc-9264e386af15)](http://reblog.zemanta.com/zemified/9da88d6f-baf2-4b42-b6bc-9264e386af15/)
