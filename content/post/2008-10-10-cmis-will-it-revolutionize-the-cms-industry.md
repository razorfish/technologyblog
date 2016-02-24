---
author: rvelez
categories:
- Technology
comments: true
date: '2008-10-10'
slug: cmis-will-it-revolutionize-the-cms-industry
tags:
- Alfresco
- CMIS
- CMS
- documentum
- ECM
- EMC
- filenet
- IBM
- Microsoft
- OASIS
- Sharepoint
title: CMIS - will it revolutionize the CMS industry?
url: /2008/10/10/cmis-will-it-revolutionize-the-cms-industry
wordpress_id: 61
---


Last year three major CMS/ECM vendors IBM/Microsoft/ECM came together to propose new standards that will change the CMS landscape the same way SQL 92 did for the database industry.  Content Management Interoperability Services ([CMIS](http://en.wikipedia.org/wiki/Content_Management_Interoperability_Services)) standards cover services that allow interoperability between content stores.
These standards cover the three basic areas of Content Management Systems:



	
  * CMS basic operations - CRUD (Create, Retrieve, Update and delete) services, versioning and workflow

	
  * Content discovery - query services, search including a SQL like query

	
  * Domain model – object types, folder hierarchy, document, relationship and access rules


Previous interoperability proposals such as JSR 170/283 have not gained traction because they were purely Java based and were too function rich, forcing the vendors to make substantial investments with little or no market driven need.    Another standard WEBDAV, was too simple and relied solely on HTTP protocol, it had no concepts of content types or content relationships.

CMIS supports both a SOAP based interface and [REST](http://http://en.wikipedia.org/wiki/Representational_State_Transfer) based interface, the latter is much easier to implement.  Last month EMC, Microsoft, IBM and Alfresco were able to implement a draft CMIS and test it on Sharepoint/Documentum/Filenet and Alfresco.

The proposed CMIS query supports SQL like terms and clauses such as SELECT, FROM, WHERE and CONNECT by clause.  The query can include based terms and clauses based on content metadata and property such as size, date etc.  Example query:

_SELECT * FROM DOCUMENT WHERE ((CONTENT_STREAM_MIME_TYPE = ‘MSWORD’) AND (CONTAINS ‘Razorfish’))_

This new draft CMIS standard creates a clear firewall between applications and content stores.  It will cut application development and integrations costs, and eliminate time learning vendor specific content access APIs.  Imagine being able to design an application that can access and manipulate content from any content and change the underlying content store by merely changing an entry in some property file.   For the vendors the outlook may be murky initially, it is possible that the number of competing CMS/ECM products may shrink.  Nevertheless, the market penetration of CMS products will increase dramatically and CMS/ECM may be as ubiquitous as databases.  Microsoft’s involvement brings up the possibility that all MS Office products may support direct check in/check out from CMIS based repositories.

The CMIS draft was submitted in September '08 to the standards body [OASIS](http://www.oasis-open.org/home/index.php) for public comment.   It is expected to be approved by middle of 2009.  The draft is also being backed by Oracle and SAP.


## Resources


[CMIS charter](http://xml.coverpages.org/OASIS-CMIS-CharterProposal.html)

The draft may be accessed [here](http://go.microsoft.com/fwlink/?LinkId=127855) as a zip.
