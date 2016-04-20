---
author: aonesto
categories:
- Cloud computing
- General
comments: true
date: '2014-05-15'
slug: building-an-ivr-system-in-the-cloud
title: Building an IVR system in the cloud
url: /2014/05/15/building-an-ivr-system-in-the-cloud/index.html
wordpress_id: 940
2014:
- "05"
---


[Interactive Voice Response (IVR) systems](http://en.wikipedia.org/wiki/Interactive_voice_response) offer a way for users to interact with existing software applications using voice and keypad input  from their phones.  Below is an exhaustive list of benefits that IVR systems offer.



	
  * Allow access to software systems through phones in addition to other interfaces like browsers & desktop clients

	
  * Self service systems reducing support staff

	
  * Systems that run 24/7

	
  * Systems that perform routing based on customer profile, context, etc.


The article will focus on how to build a flexible and extensible IVR  system painlessly using [Cloud-based services](http://www.neevtech.com/cloud/) like Twilio.

[Twilio](http://www.twilio.com/) is a Cloud communications company offering [IaaS (Infrastructure as a service)](http://www.interoute.com/what-iaas). Twilio provides telephone infrastructure in the cloud and exposes them as [Application Programming Interface](http://en.wikipedia.org/wiki/Application_programming_interface) (API) using which one can build applications to send and receive phone calls and text messages. Getting started with Twilio is easy.



	
  * Signup on Twilio.com

	
  * Buy a number

	
  * Program the number by connecting it to a [HTTP/HTTPS](http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) URL. This is the URL that would be invoked when the number is dialed. The URL needs to respond with an XML output, called [twiml](https://www.twilio.com/docs/api/twiml), which is Twilio’s proprietary XML language. Using twiml,  developers can perform useful functions like playing a text message as speech, gathering data from callers using  keypad, recording  conversations, sending SMS, connecting the current call to any other phone number, etc.



[![twilio-flow-1](/uploads/2014/05/twilio-flow-1-230x300.png)](/uploads/2014/05/twilio-flow-1.png)

Since the phone numbers can be programmed and controlled using any HTTP/HTTPS URLs, it’s easy to build interactive applications to handle incoming calls. The URLs can be static XML/twiml files or dynamic web applications that may be interacting with a database and other systems and performing any custom business logic.



 In addition, Twilio also provides [REST APIs](https://www.twilio.com/docs/api/rest) to perform functions like making a call, modifying a live call, collecting call logs, creating queues, buying numbers, sending SMS, etc. There are [helper libraries](https://www.twilio.com/docs/libraries) available in all the popular programming languages which provide a wrapper to work with the REST APIs.

From: Khurshidali Shaikh - Razorfish India Team
