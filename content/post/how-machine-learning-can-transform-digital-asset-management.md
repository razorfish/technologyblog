---
author: mjacobs
date: '2016-03-24'
categories:
- Technology
- Machine learning
tags:
- DAM
- CMS
title: 'How Machine Learning Can Transform Digital Asset Management'
url: /2016/03/24/how-machine-learning-can-transform-digital-asset-management
2016:
- "03"
---

As the use and need for digital assets increase, so too does the cost and complexity of Digital asset management (DAM) — especially in a world where people are adopting devices with screens of all sizes (e.g., desktop, mobile, tablet, etc.).


DAM, however, is a challenge for many organizations. It still involves frequent manual labor, but machine learning is starting to change that.

Machine learning has already given us self-driving cars, speech recognition, effective web searches, and many other benefits over the past decade. But the technology can also play a role in classifying, categorizing, and managing assets in the years to come.

Machine learning can support DAM in areas such as face recognition, image classification, text detection, people recognition, and color analysis, among others. [Google PlaNet](http://www.theverge.com/2016/2/25/11112594/google-new-deep-learning-image-location-planet), for example, can figure out where a photo was taken based on details embedded in it. Google Photos is using it to [improve the search experience](http://googleresearch.blogspot.com/2013/06/improving-photo-search-step-across.html). Machine learning has already taken a role in image spam detection. Taken together, this all points to the need for DAM tools to start incorporating advanced machine-learning capabilities.

A Practical Test
----------------
Recently, Google released its [Cloud Vision API](https://cloud.google.com/vision/). The Google Cloud Vision API enables developers to understand the content of an image by encapsulating powerful machine-learning models in an easy-to-use REST API. It quickly classifies images into thousands of categories (e.g., “sailboat”, “lion”, “Eiffel Tower”, etc.). It detects individual objects and faces within imagines. And it finds and reads printed words contained within images.

For Publicis Sapient, this was a good reason to explore using the Vision API together with a DAM solution, [Adobe AEM DAM](http://www.adobe.com/content/dam/Adobe/en/solutions/web-experience-management/pdfs/datasheet-aem-dam-ue.pdf). The result of the integration can be found on [github](https://github.com/razorfish/autotagworkflow).

![Results screenshot](/media/dam_screenshot1.png "Results screenshot")

We leveraged text-detection capabilities, automation classification techniques, and the landmark detection functionality within Google’s API to automatically tag and assign other metadata to assets.

Benefits and Setbacks
---------------------
Integrating the Vision API provided immediate benefits:

- Automated text detection can help in extracting text from images, making them easily accessible through search.
- Automated landmark detection helps in ensuring that the appropriate tags are set on digital assets.
- Auto-classification can support browse scenarios for finding the right assets.

But there were also some shortcomings. For example, an image of a businesswoman in a white dress was identified as a bride. In other instances, the labels were vague or irrelevant. Though inconvenient, we expect these shortcomings to improve over time as the API improves.

Even with these drawbacks unaddressed, automated detection is still very valuable — particularly in a DAM scenario. Assigning metadata and tags to assets is usually a challenge, and automated tagging can address that. And since tags are used primarily in the authoring environment, false classifications can be manually ignored while appropriate classifications can help surface assets much broader.

The Evolution of DAM Systems
---------------------
One frequent point in implementing DAM systems is asset migration. I have seen many clients with gigabytes of assets wonder whether to go through the tremendous effort of manually assigning metadata to them.

There’s a quick fix: Auto-classification techniques using machine learning will improve and speed up this process tremendously.

With the benefits around management and migration, machine learning and other intelligence tools will therefore start becoming a key component of DAM systems — similar to how machine learning is already impacting other areas.

Lastly, incorporating machine learning capabilities in DAM solutions will also have architectural implications. Machine intelligence functionality often uses a services-based architecture (similar to the APIs provided by Google) as it requires a significant or complex set of compute resources. As DAM systems start to incorporate them at its core, it will be more difficult for those solutions to support a classic on-premises approach — causing more and more solutions to migrate to a hosted software as-a-service (SaaS) model.

Bottom line? Consider incorporating machine learning into your DAM strategy now, and look at how it can be applied to your digital asset management process.

<span class="author">AUTHOR</span>  
<a href="https://www.linkedin.com/in/martinjacobs1" class="author-name">Martin Jacobs</a>  
GVP, Technology
