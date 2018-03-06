---
author: mjacobs
date: '2018-03-06'
categories:
- Technology
- Machine learning
tags:
- DAM
- CMS
- GAN
title: 'How Machine Learning Can Transform Digital Asset Management - GAN'
url: /2018/03/06/how-machine-learning-can-transform-digital-asset-management-gan
2018:
- "03"
---

In previous articles I discussed [the opportunities for machine learning in digital asset management](https://www.linkedin.com/pulse/how-machine-learning-can-transform-digital-asset-martin-jacobs) (DAM). Most of these articles focused on leveraging machine intelligence to gain insights into asset content, and use that insight into the digital asset management, publishing and analytics processes. Examples that were highlighted were the [automatic extraction of metadata from an image](/2017/01/11/how-machine-learning-can-transform-digital-asset-management-iii) and detecting the [location of a face to perform better cropping](/2017/01/19/how-machine-learning-can-transform-digital-asset-management-smartcrop).

A different area is the concept of using machine learning to generate or extend digital assets. A recent [article in the New York Times](https://www.nytimes.com/interactive/2018/01/02/technology/ai-generated-photos.html) touched on this. The unique challenge around using machine learning for this purpose is that it is hard to actually test whether the machine learning algorithm has done a good job. 

For example, it is relatively easy to verify whether the discovered metadata of an image is correct, and you could easily create a training set with labeled responses for the network. For a generated image, it is harder to determine whether this image is as good as a real image. Often times, there is not just one good answer. In many cases, there are many or even infinite options that are good.

To address this, the concept of generative adversarial networks (GAN) was developed. A GAN consist of two machine learning algorithms (neural networks), one to generate an image, and another assessing whether the image is real or generated. The 2 algorithms compete with each other. So instead of getting a training set to improve and learn, one network is tested against another network, allowing for unsupervised learning.


Generative Adversarial Network (GANs)
------------------

GANs were first introduced by Ian Goodfellow et al. in a [paper published in 2014](https://arxiv.org/abs/1406.2661). The publication of this paper generated a lot of momentum, and we have seen some great ideas in the use of GAN's for digital assets. 

Some interesting examples are:

- **Generate high resolution images based on lowres.** Use machine learning to generate a high resolution image from a lower resolution version. 
![example result](https://github.com/tensorlayer/srgan/raw/master/img/SRGAN_Result3.png)
An example code repository: https://github.com/tensorlayer/SRGAN

- **Transform images.** Automatically transform an image into a related image. For example, transform a horse into a zebra, a summer landscape into a winter landscape. 
![example result](https://camo.githubusercontent.com/69cbc0371777fba5d251a564e2f8a8f38d1bf43f/68747470733a2f2f6a756e79616e7a2e6769746875622e696f2f4379636c6547414e2f696d616765732f7465617365725f686967685f7265732e6a7067)
An example code repository: https://github.com/junyanz/CycleGAN

- **Transform styles.** - [Transform](https://www.theverge.com/2017/3/30/15124466/ai-photo-style-transfer-deep-neural-nets-adobe) one image into another based on a provided style image. 
![example result](/media/dam_gan/style_transfer.png)
An example code repository: https://github.com/luanfujun/deep-photo-styletransfer

- **Generate images.** Automatically create real looking images. The generation of "celebrity" images was one of the highlighted areas in the referenced New York Times article, and the video below highlights some of output from that work. 
{{< youtube XOxxPcy5Gr4 >}}
An example code repository: https://github.com/facebook/eyescream

- **Generate video frames.** Use still photos to generate a [video](https://www.popsci.com/this-ai-generates-video-from-stills), or extend a video to generate additional video frames based on prior content. The image below from a [Facebook post](https://code.facebook.com/posts/1587249151575490/a-path-to-unsupervised-learning-through-adversarial-networks/) outlines the difference between the results computed from a traditional neural network vs a GAN (the adversarial GDL network)
![example result](https://scontent-ort2-1.xx.fbcdn.net/v/t39.2365-6/13437806_1761667164091469_1027270248_n.jpg?oh=0c9e785a57e13ab874e7d876e102e61f&oe=5ADB9C5B)
An example code repository: https://github.com/cvondrick/videogan

- **Improved image manipulation.** Support the image editing process to make all edits look more natural.
{{< youtube 9c4z6YsBGQ0 >}}
An example code repository: https://github.com/junyanz/iGAN

- **Generate images based on text.** Automatically generate an image based on the provided textual description. A good summary of the techniques used for this are in this Microsoft [post] (https://blogs.microsoft.com/ai/drawing-ai/)
![example result](https://github.com/hanzhanggit/StackGAN/raw/master/examples/bird3.jpg)
An example code repository: https://github.com/hanzhanggit/StackGAN 


GAN & Digital Asset Management
--------------------

The examples above show some interesting new possibilities. Many of these will have a benefit in a DAM context. Obviously, improved asset editing tools built into the DAM will be a first step. The digital asset management system can also start incorporating a cognitive ability to interpret more abstract commands (e.g. 'make this person look happy') to enhance assets.

Going beyond the manual tools, the DAM itself might get an ability to automatically optimize and improve photography leveraging [machine learning](https://thenextweb.com/apps/2017/04/07/adobes-sensei-ai-make-amateur-selfies-look-like-pro-headshots/).

A frequent challenge for many clients is to scale asset production. When assets can be generated on demand, an ability to generate (related) images might become a built in function in digital asset management systems. This will open up new opportunities where asset production is currently a barrier. Richer personalized experiences online experiences, with unique image variations for each individual, can become a possibility.

Another interesting aspect could become digital rights management for assets. If an original photo is used for feeding the neural network, does its rights apply to the output as well?

Online shopping sites will be able to further enhance their ability to create rich immersive imagery and video to highlight products. Again, this can be connected to the visitor, creating a more individualized product catalog.

With the ability to generate unique natural looking variations of images, they can become their own "natural" QR code, providing another way to identify and track a visitor. 

In the end, the concept of stock photos might evolve over time as well. With these new capabilities, high quality stock photos can potentially be generated, allowing us to move away from these [overused](http://overexposedmodel.tumblr.com/) standard [photos](http://www.adweek.com/creativity/vince-vaughns-hilarious-stock-photos-were-made-these-equally-ludicrous-originals-163285/).


_written by: [Martin Jacobs (VP, Technology)](https://www.linkedin.com/in/martinjacobs1)_

