---
author: mjacobs
date: '2016-02-10'
categories:
- Technology
- Cloud-Computing
- Automation
tags:
- AWS
- infrastructure
title: 'The Cloud and the 100% Automation Rule'
url: /2016/02/10/the-cloud-and-the-100-automation-rule
2016:
- "02"
---

Automation and the Cloud go hand-in-hand. Without automation, the Cloud is just classic deployment with rented servers, instead of your own. You’ll need automation if you want to successfully deliver in the Cloud. This was the case early on in the Cloud era, and becomes even more important now.

As Cloud environments evolve and extend, Cloud architectures consist of far more distinct elements than a standarddedicated architecture. With the emergence of new tools like [AWS Lambda](https://aws.amazon.com/lambda/), which allows you to run code without provisioning servers, these distinctions are becoming even more pronounced.

As we know, manual tasks are tricky. It can be challenging to consistently perform manual tasks correctly due to quickly changing technology and human error. For that reason, 100% automation becomes an important objective. Any deviation from full automation will create additional challenges.

For example, AWS Cloud hosting quickly becomes complex as organizations struggle to choose between [many different instance types](https://aws.amazon.com/ec2/instance-types/). You might not know whether you’d be better off using M3, M4 or C3.

Each decision has its own cost implications. Unless you have achieved the 100% automation target, you are often locked into an instance type due to the difficulties and risks of switching to another one, eliminating an opportunity to benefit from getting the optimal cost/performance benefit.

Our automation tools have greatly improved but we still have work to do. Unfortunately, 100% automation is not always possible. Frequently, manual steps are still required. When you do so, ensure that the manual process is automated as much as possible. I’ll highlight it with a couple of examples.

Provisioning
------------

Many tools automate the setup process for provisioning development, test, and production environments.From Cloudformation to Ansible, Chef, and Puppet, many steps can be automated, and as a result are traceable and reproducible. That said, it would be nice to automate the updates to the provisioning stack further.

To start, the provisioning stack is often a static representation of an ideal architecture. But we live in a fast-paced world, and business moves quickly. Making automation work in dynamic environments can be tricky, particularly when infrastructure needs change, new capabilities are launched, or pricing needs to be optimized. Once your largely static architecture is in place, it is hard to keep it evolving to take advantage of new capabilities.

AWS launched a NAT gateway offering recently, eliminating the need for a NAT instance. For the majority of AWS customers, switching to a NAT gateway will improve the reliability of the overall architecture. Unfortunately, it can be difficult to ensure that this switch happens pro-actively.

I would recommend a scheduled review of new provider capabilities for inclusion. If something is needed, a high priority ticket is submitted to ensure that these new capabilities are incorporated with the same priority as code enhancements or defects. If necessary, the provisioning of new environments can be blocked until these tickets are addressed.

Management
----------

Tools that automate environment management also exist. Many Cloud environments can deploy patches and upgrades automatically.

However, commercial or open source products are often deployed in these Cloud environments, and many don’t have the tools to automate the communication of new releases, patches or other updates. Checking for updates becomes a manual process.

To automate the manual process, use a tool like [versionista.com](http://versionista.com/) to check whether a vendor page lists hotfixes and release updates changes. Similar to the provisioning scenario, if a change gets detected, create a ticket automatically with the right priority, ensuring its implementation.

Optimization
------------

We will start to see real savings once we optimize Cloud infrastructure. However, once the architecture is in place it is challenging to optimize further. This must be a critical core capability for any technology team.

We can optimize development and test environments. Often neglected after a system has launched, we have managed to eliminate manual processes by implementing an automatic shutdown of instances after low usage. The DNS entry for the instance is redirected to the continuous integration environment, allowing testers or developers with the right privileges to restart the instance.

We can also improve upon cost management. A common approach for disaster recovery is to copy data snapshots to another region. However, as the site evolves the data size increases and the disaster recovery process becomes more expensive. How do you track when you should re-architect the process?

Cost management tools like Amazon Cost Explorer focus on products (e.g. EC2, bandwidth), not processes or features. To ensure optimal cost management, you should automatically map the cost data mapped to your processes using tags. Enforce the existence of tags through automated checking, and also automate the processing of the report. This will provide the team with clear indications on where to invest in optimization.

Challenges in Automation
------------------------

Automation, like anything else, has its challenges. For a Cloud-optimized environment, it is critical to reach for the 100%. If you cannot achieve that, automate the necessary manual processes 100%.

<span class="author">AUTHOR</span>  
<a href="https://www.linkedin.com/in/martinjacobs1" class="author-name">Martin Jacobs</a>  
GVP, Technology
