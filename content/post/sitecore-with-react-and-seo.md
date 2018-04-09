---
author: Dennis Hall
date: '2016-05-26'
categories:
- Technology
- Architecture
tags:
- Sitecore
- SEO
- React
- Schema.org
title: 'Sitecore with React and SEO'
url: /2016/05/26-sitecore-with-react-and-seo
2016:
- "05"
---
On a recent [Sitecore](https://www.sitecore.net) build-out, the architecture included, among other things, a significant amount of functionality that was provided by a client-side accessed API.  We chose [React](https://facebook.github.io/react/) to connect to and provide the UI for that API.  Since we were already using React for some things, we chose to standardize on React and use it for all of the UI.

The prevailing approach to be found around the web was to write the entire page as a single React component.  The rare article or guide that spoke of using smaller standalone components all suggested supplying the components with their data in the form of JSON.

Let's take a look at the example of a simple, standalone component on React's homepage:

{{< gist dennishall1 f4a503bdf3e9f59675c8c0e3a6e8d677 >}}

On the last line (line 7) above, we see that the property value, `subject="World"`, is being supplied to the component. But let's assume that `"World"` is text that is managed by the CMS.  How would we get that text from the CMS to React? Popular thinking suggests outputting all the data you would need as JSON--and passed directly to React.render, inside of a script tag, much as you see on line 22 below.

{{< gist dennishall1 898ed60c1b76112c139006d0c1d39788 >}}

The problem is, that approach doesn't provide very good SEO value.

So how can we provide the data to our components in an SEO-friendly way? Interestingly, use one of the technologies introduced to assist search engines to improve the semantic value of the data they crawl--**schema.org**.

[Schema.org](https://schema.org/) is a collaborative, community activity with a mission to create, maintain, and promote schemas for structured data on the Internet, on web pages, in email messages, and beyond.

<em>Schema.org vocabulary can be used with many different encodings, including RDFa, Microdata and JSON-LD. These vocabularies cover entities, relationships between entities and actions, and can easily be extended through a well-documented extension model.</em>

Schema.org markup includes the concepts of itemscope, and itemprop.  We adapted this approach to provide a markup structure and attributes that would readily convert to the JSON-full-of-component-props that we need to render React components.

A simplified version of the final result:

{{< gist dennishall1 505d1c54b8eab54c91aebbff247e0829 >}}

As you can see, `data-react="%ReactComponentName%"` attribute-value pair identifies a markup structure as a React component.  Inside this structure, `data-prop="%propertyName%"` attribute-value signifies that the contents of a given html tag represent the value of that property.  For instance, `data-react="HelloMessage"` identifies a markup structure as representing the place in the page where a HelloMessage component should render.  And the markup structure also contains data-prop's to provide the props data for the component.  The first HelloMessage has `data-prop="greeting"` with text contents of `"Hello"`.  This is converted to `{ greeting: "Hello" }` before being passed in when rendering the component.

Consider the following markup:

{{< gist dennishall1 9d09541fb0e5e73c079d8791e8986afb >}}

The above markup gets converted to the JavaScript object below:

{{< gist dennishall1 6111aa35ba3186669701317c2bbc3f70 >}}

As an added convenience, the React components are not rendered into some other DOM Node, as in the previous examples.  Instead, quite naturally, they are rendered in-place right where they are defined in the markup, using the props defined inside the same markup.

And there we have it, Sitecore with React **and SEO**.

<span class="author">AUTHOR</span>  
<a href="https://www.linkedin.com/in/dennis-hall-1aa386a" class="author-name">Dennis Hall</a>  
Presentation Layer Architect, Technology
