---
author: MarieDeLuna
categories:
- Cloud computing
- General
- Technology
comments: true
date: '2009-10-22'
slug: sharepoint-conference-2009-day-2
tags:
- architecture
- best practices
- Cloud
- Development
- mandalay bay
- Sharepoint
- training
- virtualization
title: SharePoint Conference 2009 - Day 2
url: /2009/10/22/sharepoint-conference-2009-day-2/index.html
wordpress_id: 294
2009:
- "10"
---


The challenge I always have with these conferences is the plethora of choices available to attendees.  I already know what topics I want to focus on:  WCM; Architecting, Developing and Building public facing internet sites, and Social features in 2010.  But even so, there are still time slots where I have narrowed down the choice to 3, and then I have to make the tough decision and hope that I made the right choice.  For the most part, I decided to always go to a 300 or 400 level session, and then just watch the video and the deck online for the 200 sessions I missed.

For the 9am slot, I had to choose between **Advanced Web Part Development in VS 2010** and **Introduction to Service Applications and Topology**.  The architect won over the developer so I went to the Service Applications session. Essentially, 2010 SSP (Shared Service Providers) is replaced by the new Service Applications architecture. You build service applications that can live in a separate Application Server, and you call it from clients, in this case a SharePoint web front end via proxies.  I'm not sure if this is a correct simile, but I kinda liken it to old DCOM architecture. This makes it easier for organizations (and frankly, ISVs) to build Service Applications that can be deployed once and then used in multiple SharePoint web apps, and more, multiple SharePoint farms.

There's a follow-up session to this about **Scaling SharePoint 2010 Topologies for Your Organization**, but I skipped that in favor of **Overview of SharePoint 2010 Online**. SharePoint Online is another product in Microsoft's "Software as a Service" offerings.  It is essentially a service where Microsoft hosts and manages SharePoint for your organization.  This is part of Microsoft's Business Productivity Online Suite (BPOS) which also includes Exchange Online, Office Live Meeting, Office Communications Online, Dynamics CRM Online. It is good for small or medium size business but can also be considered for the enterprise in some special cases.  The important thing to note is that this does not have to be an all-or-nothing decision.  SharePoint online is supposed to complement/extend your on premises infrastructure, not necessarily replace it.

In the afternoon, I agonized over **Developing SharePoint 2010 Applications with the Client Object Model**, **Microsoft Virtualization Best Practices for SharePoint** but ended up going to **Claims Based Identity in SharePoint 2010**.  The client object model was really getting a lot of good tweets during and after the session and I see a lot of opportunities there for us to pull SharePoint information via client calls, i.e., Javascript or Silverlight.  The virtualization session focused on Hyper-V so I didn't feel too bad about missing it. In the Claims Based Identity session, Microsoft introduced their new Identity Framework and explained how it works.  This essentially works like Kerberos where essentially SAML tokens are created.  The good news is that it supports AD, LDAP, SAML.  The bad news is that it doesn't support OpenID and other standard internet auth schemes/standards... yet.

I wanted to know more about composites and the new Business Connectivity Services (BCS) so I went to **Integrating Customer Data with SharePoint Composites, Business Connectivity Services (BCS) and Silverlight**.  BCS is one other new thing with 2010 that is interesting.  Allowing SharePoint to create External Content Type that can pull data from external LOB data opens up a lot of possibilities, but most of the demos I've seen so far only connects to 1 table.  In the real world, we would be connecting to a more complex table, in a lot of cases - pulling heirarchical data and I wanted to see how this works - more importantly, will it support CRUDQ features.  This session finally demo'd how to connect using a LINQ data source.  Didn't see the CRUDQ part though, because the demo was read-only data.

For the last session of the day, I chose between **Securing SharePoint 2010 for Internet Deployments** (400) and **SharePoint 2010 Development Best Practices** (300).  So of course, I chose the geekier session since security is a hot topic on public facing sites.  However, this is probably one of the more disappointing sessions for me as this was really more targeted towards SP IT Pros than developers.  It is more about hardening your servers and protecting your network.  All these considerations even come default already in Windows 2008.  I probably would have enjoyed the best practices session better even though I was afraid they will be filled with "duh" moments.  I have to check that deck out though, it produced some funny tweets.

Day 2 is also the night of the Conference Party.  This year, the theme is 80's night at The Beach (Mandalay Bay) with Huey Lewis and the News providing music and entertainment.  Too bad I missed it.
