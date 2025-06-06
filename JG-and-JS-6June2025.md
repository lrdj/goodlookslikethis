---
layout: 2023/page
title: Case study presentation (15 minutes) Helping HMRC launch a conversational UI during COVID — (GOV.UK Beta assessment)
---

<style>

	img { width: 90% }

</style>

<!--

For the case study we would like you to include the following:

- Your role and the team
- The challenge / problem you were trying to solve
- Your design approach / process
- How you collaborated with your team
- How the design impacted the product/service and development decisions
- An overview of the product or service and how it fits into the overall organisational strategy
- How you have ensured user needs and evidence are at the centre of the design process
- How you have navigated the challenges and trade-offs along the way
- How you have socialised the design process
- Any design artefacts

-->

### Case study presentation for JG and JS (15 minutes)
# Helping HMRC launch a conversational UI during COVID — (gov.uk beta assessment)


## 1. Your role and the team

Lead IxD (contract) embedded in an agile team via an integrator supplier to HMRC during the pandemic

### Team:

  - Interaction Designer (me)
  - Content Designer
  - Researcher
  - Product Owner
  - Dev team using Nuance as the CUI platform
  - Stakeholders across policy and customer service

_(NB there was no service designer on the team. I believe it was felt that we were to 'reskin' an app, so no need...)_

### 2. The challenge / problem

**HMRC needed to reduce pressure on its call centres and webchat teams overwhelmed by COVID support scheme queries.**

The working hypothesis: We could use an ML-powered conversational assistant provided by a vendor to answer simple, high-volume questions quickly, 24/7.

The design challenge: How might we ensure the communication and support provided via the tool is trusted by citizens **while complying with govuk accessibility and usability standards** in an already high-stress user environment.


### 3. Your design approach / process

Work was already in progress when I started. A previous IxD had just left the business and I was expected to progress the interface work without delay and be ready for Beta assessment.

#### Discovery: 
I moved quickly to assess the current state, digest the existing prototype, and review current research. I worked closely with UR and CD colleagues to gather what was known from call transcripts, human chat logs, and SME interviews.

#### Interaction concept: 
It quickly became apparent that the existing design and prototype had been built with no understanding of the supporting technology and no focus on preserving user trust. 

The proposed interface was a Javascript embed using all the standard out-of-the-box 'chatbot' patterns. Simply bolting this on top of the govuk pages would not reinforce user trust. I proposed an interaction concept that manifested **"the govuk website is answering my questions"**.

<img src="/i/cases/cui/saas-v-gov.png" alt="A graphic showing a comparison between a classic SaaS chatbot widget and the design proposed by Dug. The graphic make is clear that Dug's design is more effective at complying with GDS standards.">

#### Prototyping: 
I discussed my suggested approach with the design team and product leadership and they agreed this was a more robust solution and more likely to pass service assessment.

The one condition was that this pivot in the design would not slow down delivery.

I quickly rebuilt the prototype using the govuk prototype kit. This asset let us rapidly test tone, paths, and error states and user understanding of the features of the chat UI.

We iterated and tested the prototype and associated static assets daily. We recruited internal and external users and used the generated insights to shape decision trees and utterance structures.


## 4. Team collaboration

- Daily standups and pairing with the content designer and researcher.
- Ran remote sketching sessions with UR and content designer
- Worked closely with the Nuance devs to implement and test flows in real time.
- Facilitated design playback sessions for policy owners and contact centre leads.


## 5. Impact on the product/service

This was an not-ordinary service launch. Everything was high-pressure, there was a sense that we needed to move very fast an many stakeholders seemed happy to compromise with service standard compliance.

Overcoming that challenge meant the collaboration between our content designer, user researcher, and me had a massive impact on the outcome. 

By staying very close and following the thread together we were able to produce a series of effective continual improvements, ultimately ending with a successful service delivery. The service launched quickly and directly contributed to query deflection away from call centre (but of course I don't have the actual numbers).

I believe my contribution was key in successfully passing GDS Beta assessment. With no service designer in the team, the IxD conversation had to be a little broader than it normally is.


## 6. Overview of the service and strategy fit

- The service was in support of a govuk digital response to the COVID crisis.
- It also supported HMRC’s broader transformation approach by enabling cost-effective, automated, but human-centred service delivery (creating questions about the role of 'low-code' in the wider enterprise, but that's another story).
- It became a proof-of-concept for how GOV.UK services can use conversational UIs safely and effectively. The research lead worked with GDS and the CUI interface was discuss on the govuk research blog.


## 7. Ensuring user needs and evidence stayed central

We used evidence from live service data: top queries, failed searches, missed intents.

We recruited for user testing of prototypes. We did sense-making together as a design team and immediately fed our learning into the next iteration. I documented these changes with an eye on the future assessment.


## 8. Navigating challenges and trade-offs

*Challenges*
Platform (Nuance) was very inflexible; workarounds were needed for more accessible interactions.

*Trade-offs*
Prioritised robust, simple flows over wide functionality. Made myself available for pair-programing with the vendor's lead front-end architect. This help defuse misunderstanding and make faster progress


## 9. Socialising the design process

- I presented alongside content and UR colleagues in regular show-and-tells
- We created a prototype “walkthrough” video demo for stakeholders.
- Held remote critique sessions with other government IxDs for feedback and alignment.


## 10. Design artefacts (can be visuals)

<img src="/i/cases/cui/study/chat-flow.png" alt="The visual shows a sample user flow, indicating that Dug was analysing the perfromance of the design across multiple user journeys">
#### Application user flows on mobile. 

These were used to gain support from the vendor in making adjustments to the product.

<img src="/i/cases/cui/study/content-AB-testing.png" alt="A critical part of the UI was how it handled the content from govuk. We tested multiple variations to best align with users' need for clarity and confidence that the information was accurate">
#### Materials for user tests.

Testing the impact on user understanding of the content when handled in multiple different ways by the chatbot.
