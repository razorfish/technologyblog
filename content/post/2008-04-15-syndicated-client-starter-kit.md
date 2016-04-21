---
author: mjacobs
categories:
- General
comments: true
date: '2008-04-15'
slug: syndicated-client-starter-kit
tags:
- Microsoft
- SQL Server CE
- WPF
title: Syndicated Client Starter Kit
url: /2008/04/15/syndicated-client-starter-kit
wordpress_id: 38
2008:
- "04"
---


When doing WPF development, a good source of information is [http://windowsclient.net](http://windowsclient.net). One interesting download on that site is the [Syndicated Client Starter Kit ](http://windowsclient.net/wpf/starter-kits/sce.aspx). It is a Starter Kit designed to make it easy to create rich, syndicated multimedia and content client applications. It has built-in ad-serving capabilities, and includes the sync framework that takes care of syncing, local storage, subscription management and the safe caching of authentication credentials. The MSDN reader sample application, and the starter kit itself, are available for download including source code.

Reviewing the source code is a great way to gain insight on how WPF applications can be structured, and some of the architectural patterns that are used within the code, such as the [Command Pattern. ](http://www.microsoft.com/belux/msdn/nl/community/columns/jdruyts/wpf_commandpattern.mspx)

Another interesting aspect of this starter kit is that it uses SQL Server Compact Edition for storing data client side, and I think this is a great alternative to SQL Server Express. Even though both are free, SQL Server CE has a benefit of being more lightweight, and easier to deploy with your client application.
