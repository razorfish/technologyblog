---
author: rvelez
categories:
- General
- Technology
comments: true
date: '2008-09-30'
slug: ready-for-web-30semantic-web
tags:
- CMS
- microformats
- RDF
- RDFa
- semantic web
- web 3.0
title: Ready for Web 3.0/Semantic Web?
url: /2008/09/30/ready-for-web-30semantic-web/index.html
wordpress_id: 58
2008:
- "09"
---


When mainstream media starts talking about SemanticWeb, one can infer that it is not just another buzz within research labs.  Recently the magazine _The Economist_, and _BBC online_ covered this topic.  Early this month Thomson-Reuters announced a service that will help in Semantic Markup.  





## SemanticWeb Primer




The term Semantic Web was first used by Sir [Tim Berners-Lee](http://en.wikipedia.org/wiki/Tim_Berners-Lee), the inventor of World Wide Web, to be “… day-to-day mechanisms of trade, bureaucracy and our daily lives will be handled by machines talking to machines”.    The most significant aspect of semantic web is the ability of machines to understand and derive semantic meaning from the web content.   The term Web 3.0, was introduced in 2006 as a next generation web with emphasis on semantic web technologies.  Though the exact meaning and functionality in Web 3.0 is vague, most experts agree that we can expect Web 3.0 in some form starting in year 2010.




There are two approaches to extract semantic knowledge from web content.  The first involves extensive natural language processing of content, while the second approach places the burden on content publishers to annotate or markup content.  This marked-up content can be processed by search engines, browsers or intelligent agents.  This solution overcomes the shortcomings of natural language processing which tends to be non-deterministic; furthermore determining the meaning depends not only on the written text, but also on information that is not captured in written text.  For instance, an identical statement by Jay Leno or from Secretary Hank Paulson may have a totally different meaning.    




The ultimate goal of web 3.0 to provide intelligent agents that can understand web content , is still a few years away.  Meanwhile, we can start capturing information and start building constructs in our web pages to facilitate search engines and browsers to extract context and data from content.  There are multiple ways of doing semantic markup of web content that is understood by browsers and search engines.    





## Semantic Search Engines




On Sept 22, 2008 Yahoo [announced](http://developer.yahoo.net/blog/archives/2008/09/searchmonkey_support_for_rdfa_enabled.html) that it will be extracting rdfa data from web pages.   This is a major step in improving the quality of search results.  [Powerset](http://www.powerset.com/) (recently acquired by Microsoft) is initially allowing semantic searches on content from [wikipedia.org](http://www.wikipedia.org/), which is a fairly structured content.  While [Hakia](http://www.hakia.com/) uses a different approach, it processes unstructured web content to gather semantic knowledge.  This approach is language based and dependent on grammar.





## Semantic markup s- RDFa, and microformats




W3C consortium has authored specifications for annotation using [RDF](http://en.wikipedia.org/wiki/Resource_Description_Framework) an XML based standard, that formalizes all relationships between entities using triples.  A triple is a notation involving a subject, object and a predicate, for example “Paris is the capital of France” the subject being Paris, the predicate is capital, while ‘France’ is the object.  RDFa is an extension to XHTML to support semantic markup that allows RDF triples to be extracted from web content.




[Microformats](http://microformats.org/) are simpler markups using XHTML and HTML tags which can be easily embedded in web content.  Many popular sites have already started using microformats.  [Flickr](http://flickr.com/) uses [geo](http://microformats.org/wiki/geo) for tagging photo locations, [hCard](http://microformats.org/wiki/hcard) and [XFN](http://gmpg.org/xfn) for user profile.  [LinkedIn](http://www.linkedin.com/)  uses hcard, [hResume](http://microformats.org/wiki/hresume) and XFN on user contacts. 




Microformat hCard example in html  and resulting output on browser page.



<table cellpadding="0" cellspacing="0" style="width: 342px; height: 182px;" border="1" width="342" >
<tbody >
<tr >

<td style="background-color: transparent; border: #506868;" >


<div id="hcard-Atul-Kedar" class="vcard">




 <span class="fn">Atul Kedar</span>




        <span class="given-name">Atul Kedar</span>




   </span>




   <div class="org">Avenue a Avenue A | Razorfish</div>




   <div class="adr">




       <div class="street-address">1440 Broadway</div>




       <span class="locality">New York</span>,, 




       <span class="region">NY</span>




      <span class="country-name">USA</span>




   </div>




</div>



</td>
</tr>
</tbody></table>




<table cellpadding="0" cellspacing="0" style="padding-left: 60px; width: 236px; height: 106px;" border="1" width="236" >
<tbody >
<tr >

<td style="background-color: transparent; border: #506868;" >Atul Kedar Avenue A | Razorfish1440 BroadwayNew York, NY USA
</td>
</tr>
</tbody></table>
Microformat hCalendar entry example with browser view:
<table cellpadding="0" cellspacing="0" style="width: 641px; height: 261px;" border="1" width="641" >
<tbody >
<tr >

<td style="background-color: transparent; border: #506868;" >


<div id="hcalendar-Web-3.0" class="vevent">




       <a href="http://www.web3event.com/conference.php" class="url">




           <abbr title="2008-10-16" class="dtstart">October 16th</abbr> : 




           <abbr title="2008-09-18" class="dtend">September 18th, 2008</abbr>




         <span class="summary">Web 3.0</span> at 




         <span class="location">Sunnyvale, CA</span> </a>




        <div class="tags">Tags: 




      <a href="http://eventful.com/events/tags/web%203.0" rel="tag"> web 3.0</a>




      <a href="http://eventful.com/events/tags/SemanticWeb" rel="tag"> SemanticWeb</a></div>




</div>






<table cellpadding="0" cellspacing="0" style="width: 492px; height: 78px;" border="1" width="492" >
<tbody >
<tr >

<td style="background-color: transparent; border: #506868;" >





[October 16th : September 18th, 2008 Web 3.0 at Sunnyvale, CA](http://www.web3event.com/conference.php)




Tags: [ SemanticWeb](http://eventful.com/events/tags/SemanticWeb)





</td>
</tr>
</tbody></table>
 

 



</td>
</tr>
</tbody></table>
 As you notice from the above examples microformats can be added to existing content and are interpreted correctly by the browsers.  There are many more entities that can be semantically tagged such as places, people and organizations.   Some web browser enhancements (Firefox) recognize these microformats and allow you to directly add them to your calendar or contacts by a single click.   


## Automated Semantic markup services and tools




Another interesting development is in the area of automatic entity extraction from content, these annotation application or web services are being developed.  Thomson Reuters is now offering a professional service [OpenCalais](http://www.opencalais.com/node/6859) to annotate content. PowerSet is working on towards similar offerings.   These service reduces the need for content authors to painfully go thru the content and manually tag all relationships. Unfortunately, these services are not perfect and need manual crosschecking and edits.  Other similar annotation services or tools are [Zementa](http://www.zemanta.com/), [SemanticHacker](http://www.semantichacker.com/) and [ Textwise](http://www.semantichacker.com/).





## Next Steps




As Web 3.0 starts to take shape, it will initially affect the front end designers involved with the web presentation layer, as organizations demand more semantic markup within the content.  In due course , CMS architects will have to update design of data entry forms, design of entity information records in a manner that facilitates semantic markup and removes any duplication of entity data or entity relationships.  Entity data such as author information, people information, addresses, event details, location data, and media licensing details are perfect candidates for new granular storage schemes and data entry forms. 




 


 

