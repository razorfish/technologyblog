---
author: rvelez
categories:
- Cloud computing
- General
- Technology
comments: true
date: '2009-10-09'
slug: cloudfront-amazons-caching-delivery-network-cdn
tags:
- Amazon CloudFront
- Amazon S3
- Content delivery network
- Coral Caching
- Open source
- Peer-to-peer
- Technology
title: Cloudfront, Amazon's Caching Delivery Network (CDN)
url: /2009/10/09/cloudfront-amazons-caching-delivery-network-cdn
wordpress_id: 269
2009:
- "10"
---





[![Speed differences between Amazon S3 and CloudF...](http://farm3.static.flickr.com/2489/3954448451_18624c8edb_m.jpg)](http://www.flickr.com/photos/48889035200@N01/3954448451)
    Image by [playerx](http://www.flickr.com/photos/48889035200@N01/3954448451) via Flickr





It's nice to see Amazon moving into the CDN space with their [Cloudfront ](http://aws.amazon.com/cloudfront/)offering, it seems like the CDN market can definitely use some fresh look at the challenge. It looks like it builds off your usage of Amazon S3 but with an accelerator finding the closest cache server to deliver your content. With this approach it doesn't seem like a great fit as a CDN for any architecture. The chart on the right is an interesting comparison.

I've been intrigued over the last couple of years with [Coral Caching](http://www.coralcdn.org/). Peer to peer open source caching seems like it's ripe with opportunity, wouldn't it be cool if my mediacenter pc, apple tv and other laptops that sit at home idle during the day could be leveraged to help offload servers. I guess it's a balance of saving power and sleeping or turning off the box vs. using less server power.





[![This is a diagram of a Wikipedia:Peer-to-Peer ...](http://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/P2P-network.svg/119px-P2P-network.svg.png)](http://commons.wikipedia.org/wiki/Image:P2P-network.svg)
    Image via [Wikipedia](http://commons.wikipedia.org/wiki/Image:P2P-network.svg)







[![Reblog this post [with Zemanta]](http://img.zemanta.com/reblog_e.png?x-id=c3674d44-5ce3-4a45-967d-0e1fd7301bf9)](http://reblog.zemanta.com/zemified/c3674d44-5ce3-4a45-967d-0e1fd7301bf9/)
