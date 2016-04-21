---
author: mgidda
categories:
- General
comments: true
date: '2011-02-23'
slug: the-nosql-movement
title: The NoSQL Movement
url: /2011/02/23/the-nosql-movement
wordpress_id: 560
2011:
- "02"
---


The NOSQL movement that has recently taken on a momentum of its own, NoSQL is not an out pouring of frustration with databases, but is taken to stand for ‘Not Only’ SQL, and is seen as response to technical architectures where traditional database/data query technologies are not the ‘de facto’ approach to data storage and management.







Personally I believe that this movement began with Eric Brewers CAP theorem in 2000. Brewer was talking about trade-off decisions that need to be made in highly scalable systems. He postulated that there were three core system requirements that any distributed system had to exhibit those of Consistency, Availability, and Partition tolerance hence the ‘CAP’ of CAP theorem. However he went on to make the distinction and state that any scalable system could only be guaranteed to have any two of these attributes.







The result of this was that Werner Vogels CTO of Amazon in 2008 coined the term ‘Eventual Consistency’, i.e that Availability and Partition tolerance were the running attributes that were most important and that system inconsistencies could be resolved in time i.e that continuous consistency is not usually required. As continuous consistency is the raison d’etre of the database, this has meant that the classic role of the RDBMS has changed or at least has undergone a rethink in the context of extremely scalable distributed processing.  The fact many of the Internet scale businesses (Google, Amazon, Facebook etc) have been instrumental in developing ‘open source’ NoSQL products for their own line of business applications has added to the impetus behind this movement. The very nature and price point of cloud computing and storage for our enterprises, has meant that we are able to store, process, and analyze much more of our own business data, more often than not we are able to make use of the ‘NoSQL’ tools that have been developed by these leading internet business.







Products like Hadoop/Hive originally developed by Google for doing massive data mining using the Map/Reduce pattern have evolved into Cloud based services like ‘Elastic Map Reduce’ from Amazon, and has been taken on as a top-level project by the Apache foundation, and thus available to use at the public or private cloud level by any company with the requirement to process petabytes of data.







The NoSQL movement has also had increasing adoption and impetus from those application domains where the problems to be solved do not necessarily fit snugly into the classic ‘Relational’ model. A wide range of NoSQL products has sprung up which use different logical models to represent ‘semi-structured’ data these include Map/Key-Value oriented (Voldemort, Dynomite), Column Familiy oriented (BigTable, HBase, Hypertable), Document oriented (Couch DB, MongoDB ), and Graph oriented (Neo4j, Infogrid)







At the same time traditional schema based database structures are more often considered too inflexible to accommodate changing business models. Our own experience of working with O2 on a telecoms product catalogue has lead us to consider a NoSQL solution as the natural path in the ecommerce platform evolution. The O2 business model and the types of products that it sells now include not only handsets, tariffs, and accessories but broadband, games, ringtones, consoles, financial services, content, and could progress onto many other as yet not envisioned physical and logical product offerings.  We have been looking at NoSQL ‘Graph’ databases as a way of modeling products, their attributes, relationships, and eligibilities to customer segments in an attempt to develop a product catalogue that can continue to offer flexibility as the business evolves.







The case outlined is not uncommon, whereby data, and the approach to dealing with it necessitates a cloud technology landscape, one that is a departure from the intrinsic constraints of fixed datacenters and the RDBMS. Another good example of this is Razorfish’s own EDGE platform. Historically this application and its data would have made exclusive use of Enterprise level database infrastructure, hosted in a proprietary datacenter in a DR configuration. The volume of data however has been growing exponentially, as has the compute power required, necessitating an entirely new approach. This approach has been to use Amazon EMR consisting of the Apache Hadoop/Hive/HBase product sets, to both host and process the increasing data volumes. This approach makes the most use of the utility of Amazon’s cloud as well as the frameworks that others have positioned on that cloud i.e NoSQL databases.







It can be seen that patterns for managing data in modern web centric enterprises, through the use of the new application class of NoSQL on the cloud, are a better choice for anticipating change and trends (compared to RDBMS solutions) given their support for unstructured data, horizontal scalability through partitioning, and high availability support.
