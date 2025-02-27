---
layout: 2023/post
title: "Integrating LLMs as middleware"
subtitle: >
  I’ve been experimenting with the GOV.UK prototype kit, using routes to add large language model (LLM)-generated helpful suggestions via API to the front-end experience....

index_image: "/i//llm-in-the-middle.png"
hero_image: "/i/llm-in-the-middle.png"

hero_image_alt: >
  One way to mitigate LLM's propensity for hallucination is to use them to generate suggestions but not the end copy or data.

intro: >
  <i>"I don't deserve this. This isn't for people like me."</i> or <i>"Why bother applying, I'll never get it."</i> People from less privileged backgrounds sometimes miss out on grants, services, and development opportunities simply because the application process feels intimidating or overly complicated.  
  
tags:
 - inclusion
 - digitaltransformation
 - gov
 - publicsector
 - innovation
 - accessibility
 - socialimpact
 - AI
 - LLM

---

On paper, they have the right to claim, but in some cases, they feel, "this isn’t for someone like me," or they become overwhelmed by the length or complexity forms themselves.

Some of this is down to language and form design, and teams driving GOV.UK services have been working to overcome that for years with great results. But what if there was a way to give someone a head start? To suggest possible ways to fill in the form or use the tool?

With this in mind, I’ve been experimenting with the GOV.UK prototype kit, using routes to add large language model (LLM)-generated helpful suggestions via API to the front-end experience.

The idea is simple: instead of facing a blank application with rigid questions, users can type a short, free-text description of what they want to achieve (e.g. "I need help with childcare while I study for a new qualification" or "I have a small business idea I want to pitch"). The LLM then pre-populates the form fields with suggested text, creating a first draft that users can edit, delete, or refine.

<a href="https://ai.goodlookslikethis.com">(Check out the prototype)</a>

I’m sharing these in case others are interested in how we might use AI to lower barriers, promote inclusion, and encourage people to claim the support they deserve (I'm using the cheapest model as a proof of concept—there are many faster and better models available for those with budgets).

It would be great to hear thoughts—especially from public sector colleagues in service delivery, social impact, or those who have witnessed these challenges firsthand.


# UK Context examples

Below is a condensed list of five UK-focused scenarios illustrating where someone might *not* claim a benefit or use a public service due to perceived barriers—and a few demo tool ideas to show how LLMs might be able to help reduce those barriers.

1. **Start up loans (via the British Business Bank)**  
   - The UK government offers loans and mentoring for entrepreneurs, yet many people think they won’t qualify or that it’s only for “real businesses.”  
   - An LLM-powered tool could demystify the process and pre-fill the loan application form, reducing anxiety over formal requirements.

2. **Adult skills courses & training (local councils)**  
   - City councils and adult education centres offer free or low-cost courses (e.g., digital skills, business basics), but many assume they need prior qualifications or a certain background.  
   - A user-friendly interface driven by AI could guide someone through eligibility checks and highlight key course benefits.

3. **The Prince’s Trust enterprise programme**  
   - This programme helps young people (18–30) start businesses with training, mentorship, and funding. Some individuals assume it’s only for “the really talented” or “unreachable” types.  
   - An AI-driven questionnaire could pre-populate a simple pitch outline, making the initial approach less daunting.

4. **Tax credits or universal credit support for childcare**  
   - Parents juggling work or studies can receive help with childcare costs, but the forms can be complex, and the eligibility criteria confusing.  
   - An LLM-based tool mitigate some difficult language and automatically complete parts of the application.

5. **Local growth hubs & chambers of commerce**  
   - Growth hubs (often run in partnership with local enterprise partnerships) provide free business advice and networking. Many think it’s “only for established companies.”  
   - With AI, a user can describe their idea in everyday language and get a draft membership application or introduction email tailored to their region's hub.

