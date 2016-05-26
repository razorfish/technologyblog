---
author: mjacobs
date: '2016-03-03'
categories:
- Technology
- Cloud-Computing
- Automation
tags:
- AWS
- infrastructure
title: 'Diffusing Automation Arguments: The Inevitability of Automation'
url: /2016/03/03/diffusing-automation-arguments-the-inevitability-of-automation
2016:
- "03"
---

As mentioned in one of my [previous posts](https://www.linkedin.com/pulse/cloud-100-automation-rule-martin-jacobs?trk=prof-post), delivering a successful Cloud architecture necessitates the use of automation. Unfortunately, replacing manual tasks with code takes effort, and is therefore not always used. Here are some key arguments against the adoption of automation:

Priority
--------

**“We are already on a tight deadline with all the application features that need to be incorporated.”**

Automation is critical to the success and longevity of your product. What’s also true, though, is that this is an industry of tight deadlines, stretch goals, and additional features. You might wonder if you have time to automate.

In this case, unit testing is an interesting comparable situation. Often times, unit testing hasn’t always taken priority in the application development process due to time constraints. It has been put off until the end of development phase with a secondary status. However, unit testing has slowly received the priority it deserves, as it has become clear it provides the benefits in the long run.

And as much as testing is important, automation is even more critical. Automation is an actual part of your runtime application, and should be treated at the same level as your code. The features and capabilities for automation should therefore be included in the application/solution backlog and should be given the same treatment as other features and functionality.

Skills
------

**“We don’t have the skills in-house. Even if we were to use a vendor, we wouldn’t be able to maintain it.”**

No doubt, automation is a serious challenge. Automation requires a fundamental shift in mindset for organizations around the need to develop these skills. You may remember that in the early days of web development, it took quite some time for front-end development to become a respected and critical role as say database administration. The automation architect will face a similarly arduous battle for the coming years. For any organization that leverages the Cloud and maintains their own technology platforms, it is a critical role that must be filled or grown within the organization.

Time
----

**“It is faster to do it without automation.”**

This is often true for the initial setup. However, considering how quickly Cloud architecture continues to evolve, the time gained from a hasty initial setup could quickly be lost in subsequent change management.

With Cloud architectures incorporating more distinct elements, ensuring consistency across environments is virtually impossible without automation. As a result, without automation, the likelihood of generating defects due to environment mismatches increases quickly when your Cloud architecture grows.

Technologies in Use
-------------------

**“The application technologies we use don’t support automation”**

As you architect your application, you identify critical non-functional requirements. For example, security and performance are always part of the decision criteria for the overall architecture stack, and if the technologies selected cannot support the level of performance required, you would evaluate alternative options and select and migrate your architecture to the new solution.

The same applies for automation. If automation cannot be supported with the existing technologies, it is necessary to look at alternatives, and evolve your architecture.

Overwhelming Choices
--------------------

**“We are confused by the technology landscape.”**

The amount of solutions in the marketplace can certainly feel paralyzing. There’s [Ansible](https://www.ansible.com/), [Chef](https://www.chef.io/chef/), and [PuppetLabs](https://puppetlabs.com/). There are provisioning tools such as AWS Cloud Formation, [Heat](https://wiki.openstack.org/wiki/Heat), [Terraform](https://www.terraform.io/), and [Cloudify](http://getcloudify.org/). Solutions are constantly evolving, and new vendors are always showing up.

It is difficult to make the right choice of technologies. The selection should be made with the same mindset as selecting the enterprise set of programming languages. It requires an evaluation of which is best suited for the organization. Additionally, a combination of these technologies might be the right solution as well.
As you embark on applying automation, here are some tips for being successful:

- Select a set of automation technologies and stick with it. There will always be pressure to explore alternatives, especially with a quickly changing vendor landscape, but it is important to fully understand your selected technologies before looking at alternatives.
- Start simple. [Amazon Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/) or [Heroku](https://www.heroku.com/) are great ways to begin to incorporate automation into your application development workflow and understand how it can further drive productivity and quality.
- Avoid the framework syndrome and focus primarily on building the automation that is needed for your application. Don’t try to build a framework for automation in the enterprise. The landscape is constantly evolving and frameworks quickly become outdated and superseded.

_written by: [Martin Jacobs (GVP, Technology)](https://www.linkedin.com/in/martinjacobs1)_

