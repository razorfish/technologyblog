---
author: mjacobs
date: '2018-02-01'
categories:
- Technology
- Machine learning
tags:
- CMS
- Big Data
title: 'How Machine Learning Can Transform Content Management- Part III'
url: /2018/01/02/how-machine-learning-can-transform-content-management-iii
2018:
- "01"
---

In a previous post, I [highlighted how machine learning can be applied to content management](http://www.linkedin.com/pulse/how-machine-learning-can-transform-content-management-martin-jacobs). In that article, I described how content analysis could identify social, emotional and linguistic tone of an article. This informs a content author further on his writing style, and helps the author understand which style resonates most with his readers.

A [follow up article](https://www.linkedin.com/pulse/how-machine-learning-can-transform-content-management-martin-jacobs-1/) outlined the use of Amazon's Artificial Intelligence Services to perform text to speech translations.  

At the most recent [AWS re:Invent conference](http://technology.razorfish.com/), Amazon announced Comprehend, a natural language processing (NLP) service that uses machine learning to find insights and relationships in text. This seemed like a good occasion to revisit the initial article, and explore how Comprehend can provide content intelligence.

Amazon Comprehend
----------

Amazon Comprehend has two sets of services, one targeted for interactive use with responses available in hundreds of milliseconds, the other more batch oriented.


The interactive services has four core API's:

- **Entity** returns the named entities ("Person", "Organization", "Locations", etc.) within the text being analyzed.
- **Key Phrases** returns key phrases and a confidence score to support that this is a key phrase.
- **Sentiment** returns the overall sentiment of a document (Positive, Negative, Neutral, or Mixed).
- **Language** returns the dominant language in the text and a confidence score to support that a language is dominant.

The batch-oriented services can scan a set of documents, and return a summary of key topics in these documents.

Integrating Comprehend with Adobe AEM Content Fragments
--------
Similar to the original article, we integrated AWS Comprehend with AEM Content Fragments. 

The same piece of content was leveraged. Unfortunately, AWS Comprehend only supports up to 5000 characters, so a subset of the overall text was selected. 

![](/media/aem_iii/metadata.png)

Entities, sentiment and language were assigned as metadata tags to the document. Only entities with more than two occurrences were included. Entities provide a categorization (such as date, location, event, organization, person, commercial_item, etc), and the category is included in the tag structure. 

In this example, sentiment is also included. Overall, it would make sense to only include tone if a certain confidence threshold has been met.

![](/media/aem_iii/highlight.png)
The key phrase response was used to generate a highlighted version of the content fragment. Similar to sentiment and entities, each phrase is scored with a level of confidence, and this can be used to fine tune phrase detection.

If you want to explore the code, it is posted on Github as part of the [https://github.com/razorfish/contentintelligence](https://github.com/razorfish/contentintelligence) repository.

Conclusion
------------------------------------

In the original article, I listed a couple of potential reasons why leveraging machine learning in the content management process could be relevant:

- **How does content come across to readers? Which tones resonate the most? What writer is successful with which tone?** 
- **What topics are covered most frequently? How much duplication exists?** 
- **What is the article about?**
- **What are the key topics covered in this article?** 

The Amazon Comprehend solution can help with some of these as shown in this proof of concept. 

For topic classification, the approach taken here with entities can be valuable. Especially the ability to provide categorizations of entities can help with providing more easily readable insights.

Key phrase detection can help with quickly reviewing what an article is about, identify repetition and can especially be helpful in content management scenarios with high volume content production.

_written by: [Martin Jacobs (VP, Technology)](https://www.linkedin.com/in/martinjacobs1)_

