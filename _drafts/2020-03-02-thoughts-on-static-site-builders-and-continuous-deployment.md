---
title: "Thoughts on static site builders and continuous deployment"
subtitle: "I’ve been working with some developers recently and decided to evaluate a website production workflow built around Jekyll, a static site generator..."
featured_image: /i/jekyll.png
tags:
 - devops
 - "design ops"
 - jekyll
 - "static site"
---
<div class="gallery" data-columns="4">
  <img src="/i/content-workshop/a.jpg">
  <img src="/i/content-workshop/b.jpg">
  <img src="/i/content-workshop/c.jpg">
  <img src="/i/content-workshop/d.jpg">
  <img src="/i/content-workshop/e.jpg">
  <img src="/i/content-workshop/f.jpg">
  <img src="/i/content-workshop/g.jpg">
  <img src="/i/content-workshop/h.jpg">
</div>
<p class="caption">Before jumping into a real-time publishing exercise, your team needs to reflect on the content to make difficult choices about what gets published and why. Having a strong consensus on content strategy will create a foundation which will keep the crazy from overwhelming people.</p>

I’ve been interested in these for a while, not least because this site is generated and hosted using Movable Type, the daddy of static site generators.

> We’re launching our new website before it’s ready.

_But Dug, there are bits that don’t work; there are pages missing and also some weird copy?!? What’s up with that?_

> Well yes, you’re right, there are, thanks for asking...

The rough edges will evaporate over the next few weeks as our teams rapidly iterate from our first minimum viable product (MVP) release through our subsequent rapid iterations.

This isn’t random, it’s a choice we’ve made. How often do you have the chance to rethink your website and in the process run a live-ammunition test of the principles you’ve been suggesting your customers live by? Well, not everyday but this time we’re grabbing the opportunity and jumping in at the deep end.

We want to practise what we preach, eat our dog-food and keep our possibilities as real as we can.

## So what has this meant in detail

Well, as is fitting for cross-silo digital thinking, the decisions we made to organise the design and production teams and the decisions we made about application architecture and design were all intertwined and taken by a connected group of experts. We decided we didn’t want to break just the traditional technology/design silo but also the geography one as well. For this project we wanted round-the-clock connectivity between our associates working in remote locations and our two studio-based teams in Edinburgh and London.

We decided to go for it and experiment with technology.

## Collaborating in the digital workplace

For this project we are collaborating using a network of services that connect each designer’s laptop to a distributed version control system. The copywriting and development environment is compiled on each machine and connects to the central hub. We are using an always-on Slack channel to ensure feedback is rapid and everyone stays up-to-date with project developments. We are experimenting with using Github as the digital asset manager (DAM) to handle both graphics, content and code version control. Documentation and training on the new platform is also being handled using Slack.

- Team collaboration around assets and content was managed on Github which allowed painless version control
- Code was managed on Github with seamless localhost working using the Ruby environment and Foreman
- Deployment happens automatically so communication between design and development teams focused more on creativity and quality and less on support and action requests
- Designers in all locations shared the same spec of local build so connectivity was not required at all times to continue working.

## What we feel is going well

- The teams have successfully adopted new tools
- Great use of Slack allowed consistent chatter, design reviews and easy debugging
- Great use of GitHub allowed collaborative development, issue tracking and version control
- Rapid development, deployment, feedback, iteration loop
- Jekyll and templating
- Local development environment was reproducible with very few hiccups
- The team managed to ship the MVP release on time

## Continuous deployment

We defined our MVP as delivering one clear message and it does.

Also, from kick-off to DNS migration took 10 days, not bad for a corporate website. Even better when you consider release 1.5 is due in a few days and r2 will ship shortly after that. With every release we’ll improve the quality and clarity of the copy; make the imagery stronger and better positioned, fix bugs and add missing content.

<!--

We're experimenting in real-time with a static site generator (what's a static site generator you ask? https://davidwalsh.name/introduction-static-site-generators) built into a continuous deployment environment. Our dev team has set this environment up:

* Code created and managed on Github
* Service hosted on Github pages
* Foreman used to run localhost environment versions
* Sass for CSS componentisation
* Markdown used as text interpreter
* Static site build using Jekyll with automatic rebuild on edit commit
* Page environment variables stored in Yaml front matter
* Templating logic coded in Liquid
* The environment is configured so that when edits are committed to the production branch, the build is triggered automatically and the live website is updated. The system isn't perfect yet, but the speed and performance implications of static pages combined with the benefits of continual deployment make this a potentially disruptive platform approach.

To quote from wikipedia continual deployment brings numerous benefits to customers:

Accelerated time to market: continuous deployment lets an organisation deliver the business value inherent in new software releases to customers more quickly 
Building the right product: frequent releases let the application development teams obtain user feedback more quickly
Improved productivity and efficiency: significant time savings for developers, testers, operations engineers, etc. through automation
Reliable releases: the risks associated with a release have significantly decreased, and the release process has become more reliable
Improved product quality: the number of open bugs and production incidents has decreased significantly
Improved customer satisfaction

-->

## To be clear, we’ve not lost our marbles.

We understand our customers need lovely reliable tools like Sitecore and AEM to drive their experiences but these agile and lean approaches are an area of digital technology that is quickly evolving and becoming ever more flexible and efficient. We want to make sure we live the experiences we ask our customers to live. We want to help customers benefit from our knowledge and experience in these new approaches.

To be honest, it’s a little scary working in public this way but you just can’t buy the energising effect it has on our team and we want to share that energy with our customers.

Onwards to the next iteration:-)

