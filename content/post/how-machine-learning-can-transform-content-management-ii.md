---
author: mjacobs
date: '2017-02-01'
categories:
- Technology
- Machine learning
tags:
- CMS
- Big Data
title: 'How Machine Learning Can Transform Content Management- Part II'
url: /2017/02/01/how-machine-learning-can-transform-content-management-ii
2017:
- "02"
---

In a previous post, I [highlighted how machine learning can be applied to content management](http://www.linkedin.com/pulse/how-machine-learning-can-transform-content-management-martin-jacobs). In that article, I described how content analysis could identify social, emotional and language tone of an article. This informs a content author further on his writing style, and helps the author understand which style resonates most with his readers.

At the last [AWS re:Invent conference](http://technology.publicissapient.com/2016/12/09/highlights-from-aws-reinvent-2016/index.html), Amazon announced a new set of Artificial Intelligence Services, including natural language understanding (NLU), automatic speech recognition (ASR), visual search, image recognition and text-to-speech (TTS).

In [previous posts](http://www.linkedin.com/pulse/how-machine-learning-can-transform-digital-asset-iii-martin-jacobs), I discussed how the Amazon visual search and image recognition services could benefit digital asset management. This post will highlight the use of some of the other services in a content management scenario.


Text to Speech
-------------------------------------

From a content perspective, text to speech is a potential interesting addition to a content management system. One reason could be to assist visitors with vision problems. Screen readers can already perform many of these tasks, but leveraging the text to speech service provides publishers more control over the quality and tone of the speech.

Another use case is around story telling. One of the current trends is to create rich immersive stories, with extensive photography and visuals. [This article](http://www.nytimes.com/interactive/2015/01/09/sports/the-dawn-wall-el-capitan.html) from the New York Times describing the climb of El Capitan in Yosemite is a good example. With the new text to speech functionality, the article can easily be transformed into a self playing presentation with voice without any additional manual efforts, such as recruiting voice talent and the recording process.

Amazon Polly
---------------------------------------------------------------

Amazon Polly (the Amazon AI text to speech service) turns text into lifelike speech. It uses advanced deep learning technologies to synthesize speech that sounds like a human voice. Polly includes 47 lifelike voices that spread across 24 languages. Polly is service that can be used in real-time scenarios. It can used to retrieve a standard audio file (such as MP3) that can be stored and used at a later point. The lack of restrictions on storage and reuse of voice output makes it a great option for use in a content management system.

Polly and Adobe AEM Content Fragments
---------------------------------

In our proof of concept, the Amazon AI text to speech service was applied to Content Fragments in Adobe AEM.

![Content Fragment](/media/polly/content_fragment_editing.png "Content Fragment example")

As shown above, Content Fragments allow you to create channel-neutral content with (possibly channel-specific) variations. You can then use these fragments when creating pages. When creating a page, the content fragment can be broken up into separate paragraphs, and additional assets can be added at each paragraph break.

After creating a Content Fragment, the solution passes the content to Amazon Polly for retrieving the audio fragments with spoken content. It will generate a few files, one for the complete content fragment ([main.mp3](http://technology.publicissapient.com/media/polly/main.mp3)), and a set of files broken up by paragraph ([main_1.mp3](http://technology.publicissapient.com/media/polly/main_1.mp3), [main_2.mp3](http://technology.publicissapient.com/media/polly/main_2.mp3), [main_3.mp3](http://technology.publicissapient.com/media/polly/main_3.mp3)). The audio files are stored as associated content for the master Content Fragment.

![Results](/media/polly/example_content_fragment.png "Results")

When authoring a page that uses this Content Fragment, the audio fragments are visible in the sidebar, and can be added to the page if needed. With this capability in place, developing a custom story telling AEM component to support scenarios like the New York Times article becomes relatively simple.

If you want to explore the code, it is posted on Github as part of the [https://github.com/razorfish/contentintelligence](https://github.com/razorfish/contentintelligence) repository.

Conclusion
------------------------------------

This post highlighted how an old problem can now be addressed in a new way. The text to speech service will make creating more immersive experiences easier and more cost effective. Amazon Polly's support for 24 languages opens up new possibilities as well. Besides the 2 examples mentioned in this post, it could also support scenarios such as interactive kiosks, museum tour guides and other IOT, multichannel or mobile experiences.

With these turnkey machine-learning services in place, creative and innovative thinking is critical to successfully solve challenges in new ways.

<span class="author">AUTHOR</span>  
<a href="https://www.linkedin.com/in/martinjacobs1" class="author-name">Martin Jacobs</a>  
GVP, Technology
