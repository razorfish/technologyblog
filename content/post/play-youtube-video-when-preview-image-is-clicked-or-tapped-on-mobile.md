---
author: Dennis Hall
date: '2017-02-18'
categories:
- Technology
tags:
- YouTube
- Mobile
- Video
title: 'Play a YouTube Video When a Preview Image Is Clicked On Mobile'
url: /2017/02/18-play-youtube-video-when-preview-image-is-clicked-or-tapped-on-mobile
2017:
- "02"
---

![Intro](/media/YouTubeVideoPlayerPreview.jpeg "Intro Image")


In this article, we will see how to play a YouTube video when a preview image is clicked or tapped, including on mobile. But before we get to that, let’s quickly recap the approaches that are often mentioned elsewhere, such as stack overflow, but do not work for mobile. 

The most commonly cited method is to simply append **?autoplay=1** to the iframe *src* attribute. Another commonly proposed approach is to load the **iframe api (https://developers.google.com/youtube/iframe_api_reference)** and call the method *player.playVideo()*. You may also have found comments, even marked as answers, concluding that it is impossible to achieve this user interface interaction on mobile browsers, such as mobile safari on iOS and chrome for android. Indeed, the aforementioned techniques will result in the YouTube player showing as stuck in a loading or buffering state on mobile browsers. There is a way to accomplish this interaction though–including on mobile–and it’s surprisingly simple.

Make the YouTube video transparent, and make it cover the preview image via *z-index*. When the user clicks or taps on the preview image, the user is actually clicking or tapping on the YouTube video, causing it to play. The final step is to listen for the player’s *onStateChange* event, and when the state changes to “playing”, hide or fade out your preview image and show or fade in the YouTube player.

See it in action:

{{% pen id="YNmdWp" %}}

_written by: [Dennis Hall (Presentation Layer Architect, Technology)](https://www.linkedin.com/in/dennis-hall-1aa386a)_

