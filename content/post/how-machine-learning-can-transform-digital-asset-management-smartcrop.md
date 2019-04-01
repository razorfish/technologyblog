---
author: mjacobs
date: '2017-01-19'
categories:
- Technology
- Machine learning
tags:
- DAM
- CMS
title: 'How Machine Learning Can Transform Digital Asset Management - SmartCrop'
url: /2017/01/19/how-machine-learning-can-transform-digital-asset-management-smartcrop
2017:
- "01"
---

In previous articles I discussed [the opportunities for machine learning in digital asset management](https://www.linkedin.com/pulse/how-machine-learning-can-transform-digital-asset-martin-jacobs) (DAM), and, as a proof of concept, integrated a DAM solution ([Adobe AEM DAM](http://www.adobe.com/content/dam/Adobe/en/solutions/web-experience-management/pdfs/datasheet-aem-dam-ue.pdf) with with various AI/ML solutions from Amazon, IBM, Google and Microsoft.

The primary use case for that proof of concept was around auto-tagging assets in a digital asset management solution. Better metadata makes it easier for authors, editors, and other users of the DAM to search for assets, and in some scenarios, the DAM can providing asset recommendations to content authors based on metadata. For example, it’s often important to have a diverse mix of people portrayed on your site. With gender, age, and other metadata attributes as part of the image, diversity can be enforced using asset recommendation or asset usage reports within a DAM or content management system.

Besides object recognition, the various vendors also provide API’s for facial analysis. Amazon AI for example provides a face analysis API, and this post will show how we can tackle a different use case with that service.

SmartCrop
------------------

One common use case is the need for one image to be re-used at different sizes. A good example is the need for a small sized profile picture of the CEO for a company overview page as well as a larger version of that picture in the detailed bio page.

![Challenge screenshot](/media/dam_smartcrop/smartcrop1.png "Example of challenges")

Often, cropping at the center of an image often works fine, but it can also result in the wrong area being cropped. Resizing often distorts a picture, and ends up incorporating many irrelevant areas.
A number of solutions are out there to deal with this problem, ranging from open source to proprietary vendors. All of them are leveraging different detection algorithms for identifying the area of interest in an image.


Results
--------------------

Leveraging the Amazon Rekognition Face Analysis API, we can now solve this problem in a very simple way. Using the API, a bounding box for the face can be retrieved, indicating the boundaries of a face in that picture. And with that bounding box, the right area for cropping can be identified. After cropping, any additional resizing can be done with the most relevant area of the image to ensure the image is at the requested size.

![Solution screenshot](/media/dam_smartcrop/smartcrop2.png "Solution")

The result is shown in the image above. The image to the right is the result of leveraging the SmartCrop functionality based on the Face Analysis API. As you can see, it is a significant improvement over the other options. Improvements to this SmartCrop could be done by adding additional margin, or incorporating some of the additional elements retrieved by the Face Analysis API.

The code for this proof of concept is posted on the Publicis Sapient Github account, as part of the [https://github.com/razorfish/contentintelligence](https://github.com/razorfish/contentintelligence) repository. Obviously, in a real production scenario, additional optimizations should be performed to this proof of concept for overall performance reasons. The Amazon Rekognition API call only needs to take place once per image, and can potentially be done as part of the same auto-tagging workflow highlighted in previous posts, with the bounding box stored as an attribute with the image for later retrieval by the SmartCrop functionality. In addition, the output from the cropping can be cached at a CDN or webserver in front of Adobe AEM. 

Conclusion
-------

As this post highlights, old problems can be addressed now in new ways. In this case, it turns a task that often was performed manually in something that can be automated. The availability of many turnkey machine-learning services can provide a start to solve existing problems in a new and very simple manner. It will be interesting to see the developments in the coming year on this front.

<span class="author">AUTHOR</span>  
<a href="https://www.linkedin.com/in/martinjacobs1" class="author-name">Martin Jacobs</a>  
GVP, Technology
