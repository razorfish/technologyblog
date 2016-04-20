---
author: admin
categories:
- Technology
comments: true
date: '2008-09-04'
slug: serious-security-flaw-in-google-chrome
tags:
- Browser
- Google Chrome
- Paras
- Security Flaw
- Wadehra
title: Serious Security Flaw in Google Chrome
url: /2008/09/04/serious-security-flaw-in-google-chrome/index.html
wordpress_id: 57
2008:
- "09"
---


Security expert Aviv Raff discovered a flaw in the newly released Google Chrome browser. He set up a [demo](http://raffon.net/research/google/chrome/carpet.html) of the exploit here. This will download a java file to your desktop if you are using Chrome.

Chrome also has a potentially serious security flaw from the old version of WebKit it is based on. An attacker could easily trick users into launching an executable Java file by combining a flaw in WebKit with a known Java bug and some smart social engineering.

Meanwhile, researcher Rishi Narang disclosed another flaw that causes Chrome to crash just by visiting a malicious link and without user interaction. He setup a Proof of Concept at [http://evilfingers.com/advisory/google_chrome_poc.php](http://evilfingers.com/advisory/google_chrome_poc.php)

This is especially embarrassing for Google as it promoted security in the new browser in its press release and even in the demo video they have on their website.
