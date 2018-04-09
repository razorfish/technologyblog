---
author: mjacobs
date: '2016-04-19'
categories:
- Technology
- Machine learning
tags:
- DAM
- CMS
title: 'How Machine Learning Can Transform Digital Asset Management - Part II'
url: /2016/04/19/how-machine-learning-can-transform-digital-asset-management-ii
2016:
- "04"
---

A few weeks ago, I discussed [the opportunities for machine learning in digital asset management](https://www.linkedin.com/pulse/how-machine-learning-can-transform-digital-asset-martin-jacobs) (DAM), and, as a proof of concept, integrated a DAM solution ([Adobe AEM DAM](http://www.adobe.com/content/dam/Adobe/en/solutions/web-experience-management/pdfs/datasheet-aem-dam-ue.pdf)) with [Google Cloud Vision](https://cloud.google.com/vision/), a newly released set of APIs for image recognition and classification.

Now, let’s explore some alternatives to Cloud Vision.

IBM Watson
----------

To follow up, we integrated IBM’s offering. As part of [BlueMix](http://www.ibm.com/cloud-computing/bluemix/), IBM actually has two sets of APIs: the [AlchemyAPI](http://www.alchemyapi.com/) (acquired in March 2015) and the [Visual Recognition API](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/visual-recognition.html). The ability to train your own custom classifier in the Visual Recognition API is the key difference between the two.

There are a number of APIs within the AlchemyAPI, including a [Face Detection/Recognition API](http://www.alchemyapi.com/products/alchemyvision/face-detection) and an [Image Tagging API](http://www.alchemyapi.com/products/alchemyvision/image-tagging). The Face API includes celebrity detection and disambiguation of a particular celebrity (e.g., which Jason Alexander?).

Result sets can provide an age range for the identified people in the image. In a DAM scenario, getting a range instead of a number can be particularly helpful. The ability to create your own customer classifier could be very valuable with respect to creating accurate results for your specific domain. For example, you could create a trained model for your products, and organize your brand assets automatically against this. It would enable to further analyze usage and impact of these assets across new and different dimensions.

Leveraging the APIs was fairly straightforward. Similar to Google, adding the API to an application is simple; just build upon the sample API provided by IBM. It’s worth noting, however, that IBM’s API has a 1MB image size restrictions, somewhat lower than Google and Microsoft’s 4MB limit.

Microsoft Cognitive Services
----------------------------

Microsoft is interesting, especially considering they [won](http://www.nytimes.com/2015/12/11/science/an-advance-in-artificial-intelligence-rivals-human-vision-abilities.html) the most recent [ImageNet Large Scale Visual Recognition Challenge](http://image-net.org/challenges/LSVRC/2015/index#news). As part of its [Cognitive Services](https://www.microsoft.com/cognitive-services/en-us/apis) offering, Microsoft released a set of applicable Vision APIs (though they’re still in preview mode). For our purposes, the most relevant APIs are:

- [Computer Vision](https://www.microsoft.com/cognitive-services/en-us/computer-vision-api): This API incorporates an ability to analyze images and derive the appropriate tags with their confidence score. It can detect adult and racy content, and similar to Google’s Cloud Vision API, it has an Optical Character Recognition (OCR) capability that reads text in images. Besides tags, the API can provide English language descriptions of an image — written in complete sentences. It also supports the concepts of models. The first model is celebrity recognition, although we couldn’t get that one to work for straightforward celebrities like Barack Obama and Lionel Messi (it also doesn’t seem to work on the landing page).
- [Emotion](https://www.microsoft.com/cognitive-services/en-us/emotion-api): This API uses a facial expression in an image as an input. It returns the confidence level across a set of emotions for each face in relevant images.
- [Face](https://www.microsoft.com/cognitive-services/en-us/face-api): This API is particularly interesting, as it allows you to perform face recognition within a self-defined group. In a DAM scenario, this could be very relevant. For example, when all product images are shot with a small set of models, it can easily and more accurately classify each image with respect to various models. If an organization has contracts with a small set of celebrities for advertising prints, classification becomes that much more accurate.

The Microsoft APIs are dependent on each other in certain scenarios. For example, the Emotion API leverages the Face API to first identify faces within an image. Similarly, the Computer Vision API and Face API both identify gender and other attributes of people within an image.

Although Microsoft didn’t provide a sample Java API, the [REST API](https://msdn.microsoft.com/en-us/library/office/dn659752.aspx) is easy to incorporate. The source code and setup instructions for the integration with Google, Microsoft, and IBM’s solution can be found on [Github](https://github.com/razorfish/autotagworkflow).

Adobe Smart Tags
----------------

At the recent Adobe Summit conference, Adobe also announced the use of machine intelligence for smart tagging of assets as a beta capability of their [new AEM 6.2 release](https://blogs.adobe.com/digitalmarketing/digital-marketing/adobe-experience-manager-6-2-new-features/). According to Adobe, it can automatically tag images with keywords based on:

- Photo type (macro, portrait, etc.)
- Popular activities (running, skiing, hiking, etc.)
- Certain emotions (smiling, crying, etc.)
- Popular objects (cars, roads, people, etc.)
- Animals (dogs, cats, bears, etc.)
- Popular locations (New York City, Paris, San Francisco, etc.)
- Primary colors (red, blue, green)

There are even more categories for automatic classification, too.

Automatic Tagging Use Cases
---------------------------

In the previous post, I highlighted [a couple of key use cases for tagging](https://www.linkedin.com/pulse/how-machine-learning-can-transform-digital-asset-martin-jacobs) using machine intelligence in DAM. In particular, I highlighted how tagging can support the content migration process or improve manual efforts performed by DAM users.

Better metadata makes it easier for authors, editors, and other users of the DAM to find content during the creation process. It can also help in providing asset recommendations to content authors. For example, it’s often important to have a diverse mix of people portrayed on your site. With gender, age, and other metadata attributes as part of the image, diversity can be enforced using asset recommendation or asset usage reports within a DAM or content management system.

What’s more, this metadata can also help improve targeting and effectiveness of the actual end-user experience by:

1. Allowing the image to be selected as targeted content
2. Using the metadata in an image to ensure relevant ads, content, and assets are presented in context within an asset
3. Informing site analytics by incorporating image metadata in click tracking and other measurement tools

In addition to these use cases, new scenarios are being created. Microsoft automatically [generates captions your photos](http://gizmodo.com/microsofts-new-ai-writes-captions-for-your-photos-and-i-1770907670). Facebook is using machine intelligence to [automatically assign alt text to photos](http://newsroom.fb.com/news/2016/04/using-artificial-intelligence-to-help-blind-people-see-facebook/) uploaded to Facebook, and, in doing so, improve overall accessibility for Facebook users. Obviously, this type of functionality also will also enable Facebook and Microsoft to provide more targeted content and ads to users interacting with specific photos, a win-win. As metadata is used for end-user consumption in these cases, the unique challenge of really needing to support multilingual tagging and descriptions arises, with its own set of challenges.

With companies like Adobe, IBM, Google, and Microsoft pouring a ton of resources into machine learning, expect a lot of changes and improvements in the coming years. Relatively soon, computers will outperform humans in classification and analysis.

As it relates to Digital Asset Management, it remains to be seen precisely what the exact improvements will be. But one thing is certain: Machine learning technology promises a lot of exciting possibilities.

<span class="author">AUTHOR</span>  
<a href="https://www.linkedin.com/in/martinjacobs1" class="author-name">Martin Jacobs</a>  
GVP, Technology
