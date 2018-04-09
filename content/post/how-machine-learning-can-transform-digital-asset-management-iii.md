---
author: mjacobs
date: '2017-01-11'
categories:
- Technology
- Machine learning
tags:
- DAM
- CMS
title: 'How Machine Learning Can Transform Digital Asset Management - Part III'
url: /2017/01/11/how-machine-learning-can-transform-digital-asset-management-iii
2017:
- "01"
---

In previous articles I discussed [the opportunities for machine learning in digital asset management](https://www.linkedin.com/pulse/how-machine-learning-can-transform-digital-asset-martin-jacobs) (DAM), and, as a proof of concept, integrated a DAM solution ([Adobe AEM DAM](http://www.adobe.com/content/dam/Adobe/en/solutions/web-experience-management/pdfs/datasheet-aem-dam-ue.pdf) with Google Cloud Vision. I followed up with [a post](http://www.linkedin.com/pulse/how-machine-learning-can-transform-digital-asset-ii-martin-jacobs) on potential alternatives to Google’s Cloud Vision, including IBM Watson and Microsoft Cognitive Intelligence, and integrated those with Adobe DAM as well.

Of course, Amazon AWS couldn't stay behind, and at the last [AWS re:Invent conference](http://technology.razorfish.com/2016/12/09/highlights-from-aws-reinvent-2016/index.html), Amazon announced their set of Artificial Intelligence Services, including natural language understanding (NLU), automatic speech recognition (ASR), visual search and image recognition, text-to-speech (TTS). Obviously, it was now time to perform the integration with the AWS AI services in our proof of concept.

Amazon Rekognition
------------------

The first candidate for integration was [Amazon Rekognition](http://aws.amazon.com/rekognition/). Rekognition is a service that can detect objects, scenes, and faces in images and makes it easy to add image analysis to your applications. At this point, it offers 3 core services:

* Object and scene detection - automatically labels objects, concepts and scenes
* Facial analysis - analysis of facial attributes (e.g. emotion, gender, glasses, face bounding box)
* Face comparison - compare faces to see how closely they match

Integration Approach
--------------------

Google’s API was integrated using a SDK, the IBM and Microsoft API’s were integrated leveraging their standard REST interface. For the Amazon Rekognition integration, the SDK route was taken again, leveraging the [AWS Java SDK](http://aws.amazon.com/sdk-for-java/). Once the SDK has been added to the project, the actual implementation becomes fairly straightforward.

Functionality
-------------

From a digital asset management perspective, the previous posts focused on auto-tagging assets to support a content migration process or improve manual efforts performed by DAM users.

The object & scene detection for auto-tagging functioned well with Amazon Rekognition. However, the labels returned are generalized. For example, a picture of the Eiffel tower will be labeled "Tower" instead of recognizing the specific object.

The facial analysis API returns a broad set of attributes, including the location of facial landmarks such as mouth and nose. But it also includes attributes such as emotions and gender, which can be used as tags. These can then be beneficial in digital asset management scenarios such as search and targeting.

Many of the attributes and labels returned by the Rekognition API included a confidence score, indicating the confidence around a certain object detection.

![Results screenshot](/media/dam_iii/autotag-allison.png "Results screenshot")

In the proof of concept, a 75% cut off was used. From the example above, you can see that Female, Smile and Happy have been detected as facial attributes with a higher than 75% confidence.

Summary
-------

The source code and setup instructions for the integration with AWS, as well as Google, Microsoft, and IBM’s solutions [can be found on Github](http://github.com/razorfish/autotagworkflow) in the Razorfish repository.

One thing all the different vendors have in common is that the services are very developer focused, and integrating these services with an application is very straightforward. This makes adoption easy. Hopefully, the objects being recognized will become more detailed and advanced over time, which will improve their applicability even more.

<span class="author">AUTHOR</span>  
<a href="https://www.linkedin.com/in/martinjacobs1" class="author-name">Martin Jacobs</a>  
GVP, Technology
