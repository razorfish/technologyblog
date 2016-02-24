---
author: mjacobs
categories:
- Technology
comments: true
date: '2008-04-03'
slug: developing-with-linq
tags:
- Development
- LINQ
title: Developing with LINQ
url: /2008/04/03/developing-with-linq
wordpress_id: 33
---


Once in a while you encounter tools that change the way you work and write your code. Firebug is an obvious example of this. Having worked with .NET 3.5 the last couple of months, I started using a great tool that made C# development much faster. The tool is [LINQPad ](http://www.linqpad.net/), written by [Joseph Albahari](http://www.albahari.com/). It lets you query your SQL Server database using LINQ. It is very easy to map your database, and immediately start writing code.

LINQPad supports everything in C# 3.0 and Framework 3.5:



	
  * LINQ to SQL

	
  * LINQ to Objects

	
  * LINQ to XML


It has code snippets for pretty much all LINQ constructs.

In the results pane of the LINQPad tool, you can not only see the results of your query, but also the lambda expression it was evaluated into, as well as the resulting SQL that was executed against the database.

Not only does it speed up development, testing your queries for correctness and performance is also much simpler.
