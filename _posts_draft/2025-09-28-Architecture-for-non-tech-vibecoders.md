---
# Title appears on index card and also as the h1 on the post
title: "Is startup a noun or a verb?"

# Subtitle is the text that appears in the card on the index page. 
subtitle: >
  Thoughts on VC funding for a Friday afternoon. This is a LinkedIn post prompted by a paper on the impact of IA on the future of startups.

hero_image: /i/build.webp

hero_image_alt: >
  What does the journey to the future look like for today's entrepreneurs?
  
categories:
  - business
  - technology

tags:
  - Creativity
  - AI
  - VC
  - Startups
  - Technology

layout: 2023/post


# Intro is the larger body copy under the h1 on the post itself
intro: >
  Once upon a time, starting a business was a verb. “Starting up” was a difficult, exciting, and vulnerable phase in the long, slow process of establishing and developing a business.<br><br>At some point, “startup” became a noun — as in “let’s do a startup.”


readit: false 
audiobook: 

---


https://govservicedesign.net/programme/architecture-skills-non-technical-people-who-want-vibe-code


Skip to main content
Main navigation
Service Design in Government
Tickets
Programme 2026
Keynotes
Pre-event party
Sponsors
Location
Contact
Videos
Archive
More SDinGov
Architecture skills for non-technical people who want to vibe-code
Session type:
Workshop
Presented by:
Dug Falby
Government Digital Service

Session time:
23 Sep 14:00 — 15:00
Session duration:
60 minutes
About the session
Theme: Vibe coding

***You will get benefit from the training if you do not have a device, but we highly recommend you bring a laptop for this session*** 

All the excitement around vibe coding obscures the fact that for most non-technical folk, the end results never actually work as advertised.

This workshop is about learning some basic skills to help you end up with a proper app that will run on your work machine and do exactly what you need it to do.

Tools like Replit and Loveable use complicated code and host your app remotely. You have no idea how it works, it's not private, and you don't really control what's happening.

In this workshop we'll learn some very basic IT architecture, learn how to use apps like Claude Code in the Terminal and Github Desktop and create an application that is private to us and does exactly what we need.

Participant takeaways:

understand the difference between cloud-hosted and locally-run applications
get a practical mental model of how simple apps are structured
use AI coding tools with confidence and appropriate scepticism
build and run a working local app on your own machine
know how to iterate and maintain what you've built
This session:

includes interaction
has a number cap: 30 participants
is for non-technical people
it would be beneficial if you bring a laptop for the session
About the speaker(s)
Dug Falby
Dug is a senior service designer at the Government Digital Service, working on the One Login digital identity programme. 

He brings over 18 years of experience leading design and digital transformation across public and private sectors, including roles at the Department for Environment, Food and Rural Affairs (Defra), His Majesty’s Revenue and Customs (HMRC), Accenture and Dixons Stores Group. 

He has built and led design practices at scale, from boutique consultancies to global tech firms. Recognised as a BIMA100 (British Interactive Media Association) in service design consulting, Dug is a practitioner, facilitator and advocate who believes good design is something you do together. 

He is also an enthusiastic amateur builder of AI-powered tools that run locally and do exactly what he needs.

Pronouns: He/Him
Contact
 LinkedIn
 SDinGov
 info@govservicedesign.net
 +44 (0)1223 900 107
Useful Links
About the Organisers
Mailing List
Call for Sessions 2026 - Closed
What our participants say
COVID-19
Code of Conduct
Terms & Conditions
Complaints & Feedback
Privacy Notice
Cookies
Guidelines for submitting a proposal
Speaker Expenses
Service Design in Government is organised by Software Acumen Limited®, based in Cambridge, England. We build communities to help technology professionals grow.

© 2013-2026 Software Acumen Limited®. Service Design in Government and the Service Design in Government logos are trademarks of Software Acumen Limited®.

Ripple® is a registered trademark of Software Acumen Limited® .

Software Acumen Limited® | Registered in Cardiff | Registration No. 05210967 | VAT No. 896 7958 26

The diversity charter
We use analytics cookies to help us improve your experience on our website. For full details read our cookies policy.

Yes I accept cookies Disable cookies


---



convo on Slack


publish the demo? Do you deploy it locally and screenshare. Do you pop it on vercel, and share it publically, etc like how Alejandro suggested?
Dug Falby  [11:45 AM]
depends on a few factors. If it's done in the protokit and for whatever reason I'm not set up on the orgs integration flow (github --> Heroku or similar) then I'd save to a private repo and push to Render. They still have a free tier where you have to spin up your instance so a short delay to access proto.
Once you start getting a few examples live your hosting cost starts to grow so at that point you probably want to consider a monorepo (so only one service spin-up on a host covers all your protos).
The other thing I've done is just work on localhost and present work by desktop share. Less snazzy of course but sometimes that's all that available.
Another option I use is to convert the kit (Express app etc) into a Jekyll site. This means you can still use all the HTML patterns in the design system but when it comes time to host, you can push to github and use vanila GH-Pages. This is free and works well. Of course that's a bit clunky and you lose a lot of the nice node parts of the kit, but most stuff that's built on node can be made to work with JS in the browser - you know, like in olden times;-) I do this a lot for personal projects where I don't want the extra cost of the service instance...
Finally (and I don't know if you're vibe-coding on Claude.ai or working in a repo) it's worth remembering that your vibe-coded proto doesn't have to be react native+tailwind hosted on the SaaS platform. The same tool that defaults to React can just as easily create static components that you can download and run locally. If your machine is locked down and you can't spin up a Python or Jekyll or Node server on your localhost, you can ask your SaaS AI product to create an all-in-one HTML file which contains your demo data in json, the scripting in JS, the markup in HTML and even fully documented config and documentation all in a single file. Drag that file onto a web browser and boom, you're away:-) (edited)



