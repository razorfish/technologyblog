---
author: mjacobs
date: '2016-05-03'
categories:
- Technology
- Machine learning
tags:
- CMS
- Big Data
title: 'How Machine Learning Can Transform Content Management'
url: /2016/05/03/how-machine-learning-can-transform-content-management
2016:
- "05"
---

In previous posts, I explored the opportunities for [machine learning in digital asset management](https://www.linkedin.com/pulse/how-machine-learning-can-transform-digital-asset-martin-jacobs?trk=prof-post.), and, as a proof-of-concept, integrated a DAM solution ([Adobe AEM DAM](http://www.adobe.com/content/dam/Adobe/en/solutions/web-experience-management/pdfs/datasheet-aem-dam-ue.pdf)) with a set of machine learning APIs.

But the scope of machine learning extends much further. Machine learning can also have a profoundly positive impact on content management.

In this context, machine learning is usually associated with content delivery. The technology can be used to deliver personalized or targeted content to website visitors and other content consumers. Although this is important, I believe there is another opportunity that stems from incorporating machine learning into the content creation process.

Questions Machine Learning Can Answer
-------------------------------------

During the content creation process, content can be analyzed by machine learning algorithms to help address some key questions:

- **How does content come across to readers? Which tones resonate the most? What writer is successful with which tone?** Tone analysis can help answer that.
- **What topics are covered most frequently? How much duplication exists?** Text clustering can help you analyze your overall content repository.
- **What is the article about?** Summarization can extract relevant points and topics from a piece of text, potentially helping you create headlines.
- **What are the key topics covered in this article?** You can use automatic topic extraction and text classification to create metadata for the article to make it more linkable and findable (both within the content management tool internally and via search engines externally).

Now that we know how machine learning can transform the content creation process, let’s take a look at a specific example of the technology in action.

An Implementation with AEM 6.2 Content Fragments and IBM Watson
---------------------------------------------------------------

Adobe just released [a new version](https://blogs.adobe.com/digitalmarketing/digital-marketing/adobe-experience-manager-6-2-new-features/) of Experience Manager, [which I discussed in a previous post](https://www.linkedin.com/pulse/how-machine-learning-can-transform-digital-asset-ii-martin-jacobs?trk=prof-post). One of the more important features of AEM 6.2 is the concept of “Content Fragments.”

In the past, content was often tied to pages. But Content Fragments allow you to create channel-neutral content with (possibly channel-specific) variations. You can then use these fragments when creating pages.

Content Fragments are treated as assets, which makes them great candidates for applying analysis and classification. Using machine learning, we’re able to analyze the tone of each piece of content. Tones can then be associated with specific pieces of content.

In the implementation, we used [IBM Bluemix APIs](http://www.ibm.com/cloud-computing/bluemix/) to perform tone analysis. The Tone Analyzer computes emotional tone (joy, fear, sadness, disgust or anger), social tone (openness, conscientiousness, extraversion, agreeableness or emotional range) and language tone (analytical, confident or tentative).

The [Tone Analyzer](https://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/tone-analyzer/) also provides insight on how the content is coming across to readers. For each sub-tone, it provides a score between 0 and 1. In our implementation, we associated a sub-tone with the metadata only if the score was 0.75 or higher.

The Results of Our Implementation
---------------------------------

If you want to take a look, you’ll find the source code and setup instructions for the integration of Content Fragments with IBM Watson Bluemix over on [GitHub](https://github.com/razorfish/contentintelligence).

We ran our implementation against the text of [Steve Jobs’ 2005 Stanford commencement speech](https://news.stanford.edu/2005/06/14/jobs-061505/), and the results are shown below. For every sub-tone with a score of 0.75 or higher, a metadata tag was added.

![Results](/media/machineintelligence_contentmanagement.png "Results")

The Takeaway from Our Implementation
------------------------------------

Machine learning provides a lot of opportunities during the content creation process. But it also requires authoring and editing tools that seamlessly integrate with these capabilities to really drive adoption and make the use of those machine-learning insights a common practice.

Personally, I can’t wait to analyze my own posts from the last few months using this technology. That analysis, combined with LinkedIn analytics, will enable me to explore how I can improve my own writing and make it more effective.

Isn’t that what every content creator wants?

<span class="author">AUTHOR</span>  
<a href="https://www.linkedin.com/in/martinjacobs1" class="author-name">Martin Jacobs</a>  
GVP, Technology
