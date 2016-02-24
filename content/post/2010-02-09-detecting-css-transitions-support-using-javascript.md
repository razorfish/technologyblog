---
author: dnichols
categories:
- Methodology
- Mobile
- Technology
comments: true
date: '2010-02-09'
slug: detecting-css-transitions-support-using-javascript
tags:
- cross browser support
- css
- css 3
- css animation
- css transitions
- Javascript
- progressive enhancement
- WebKit
title: Detecting CSS transitions support using JavaScript
url: /2010/02/09/detecting-css-transitions-support-using-javascript
wordpress_id: 355
---


Progressive enhancement is one of the cornerstones of good web design: You build a solid foundation that supports a broad range of different browsers, and then add features either as you detect support for them or in a way that doesn't interfere with less capable browsers.

One of the awesome new features that's in recent versions of Safari, Safari Mobile (iPhone browser), Chrome, the Android browser, and in Palm's webOS is [CSS transitions](http://webkit.org/blog/138/css-animation/). Transitions work by smoothly interpolating between two states of a CSS property over time. For example, using the simple style rules below, you could have a link gradually change from yellow to red when the user moves the mouse over it:

    
    a {color: yellow; -webkit-transition: color 1s linear;}
    a:hover {color: red;}


In a more complicated example, you could use CSS transitions to slide an element off-screen when a replacement element is introduced, like the way that the "pages" slide off-screen when you click through an iPhone's contacts.

This introduces a problem: What if you're using JavaScript to add the new element, and you want to remove the old element after it's off screen, and you need to support multiple browsers?

You need to be able to detect that the browser supports CSS transitions so that you know not to remove the element until it's done animating, and so that you know that it's OK to remove the element right away for browsers that don't support CSS transitions. Here's how you can detect support using JavaScript:

    
    var cssTransitionsSupported = false;
    (function() {
        var div = document.createElement('div');
        div.innerHTML = '<div style="-webkit-transition:color 1s linear;-moz-transition:color 1s linear;"></div>';
        cssTransitionsSupported = (div.firstChild.style.webkitTransition !== undefined) || (div.firstChild.style.MozTransition !== undefined);
        delete div;
    })();


The variable `cssTransitionsSupported` will be set to `true` when transitions are supported, or to `false` when transitions are not supported.

You can then either use the `webkitTransitionEnd` (or `mozTransitionEnd`) events to detect when the transition is finished, or else immediately perform the action when transitions aren't supported.
