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
  I’ve been experimenting with the GOV.UK prototype kit, using routes to add large language model (LLM)-generated helpful suggestions via API to the front-end experience....
  
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


readit: true 
audiobook: Helpfulness_vs_accuracy.mp3

---

<style>
	.arrow-link {
		display: inline-flex;
		align-items: center;
		gap: 1em;
		}
	.start-arrow { width: 3em; }
</style>

The idea is simple: instead of facing a blank application with difficult questions, less privileged users can type a short, free-text description of what they want to achieve (e.g. "I need help with childcare while I study for a new qualification" or "I have a small business idea I want to pitch"). The LLM then pre-populates the form fields with suggested text, creating a first draft that users can edit, delete, or refine.

<a href="https://ai.goodlookslikethis.com" class="arrow-link">
  <img src="/i/start.png" class="start-arrow">
  <span class="arrow-text">(Check out the prototype)</span>
</a>

Two things are common to the teams I've worked with: 

Firstly, they all put LLM experimentation in a separate 'ai' team, sometimes with an emphasis on governance, sometimes technology, sometimes both, but never in the hands of front-line people actually shaping digital services.

And secondly, most of them are primarily driven by the mitigation of risk (or at least perceived risk). This means that design speculations or futures experimentation don't really happen. This is a shame because I believe this makes it harder to pinpoint areas where the technology can provide a helpful boost to users.

<blockquote style="width:66%;margin:1em 0 1em 0;">
We've spent so much time worrying about precision and accuracy that we may have missed out on the potential to be helpful...
</blockquote>

So I’m sharing some of these examples in case others are interested in how we might use AI to lower barriers to access, promote inclusion, and encourage people to claim the support they deserve (I'm using the cheapest model as a proof of concept—there are many faster and better models available for those with budgets).

It would be great to hear thoughts—especially from public sector colleagues in service delivery, social impact, or those who have witnessed these challenges firsthand.


## Possible future explorations

I haven't looked at these yet, but I'm thinking it could be helpful to create similar experiments for these sorts of services.

### Start up loans (via the British Business Bank)

- The UK government offers loans and mentoring for entrepreneurs, yet many people think they won’t qualify, or that it’s only for “real businesses.”  
- An LLM-powered tool could demystify the process and pre-fill the loan application form, reducing anxiety over formal requirements.

### Adult skills courses & training (local councils)

- City councils and adult education centres offer free or low-cost courses (e.g., digital skills, business basics), but many assume they need prior qualifications or a certain background.  
- A user-friendly interface driven by AI could guide someone through eligibility checks and highlight key course benefits.

### The King's (ex Prince’s) Trust enterprise programme

- This programme helps young people (18–30) start businesses with training, mentorship, and funding. Some individuals assume it’s only for “the really talented” or “unreachable” types.  
- An AI-driven questionnaire could pre-populate a simple pitch outline, making the initial approach less daunting.

### Tax credits or universal credit support for childcare

- Parents juggling work or studies can receive help with childcare costs, but the forms can be complex, and the eligibility criteria confusing.  
- There is a lot more to tax credits than how good or bad the forms may be. It's an incredibly complex space. That said, some form of GPT / agent might be mitigate some difficult language or automatically complete parts of potential applications.

### Local chambers of commerce

- Growth hubs (often run in partnership with local enterprise partnerships) provide free business advice and networking. Many think it’s “only for established companies.”  
- With AI, a user who perhaps has never started a business before might describe their idea in everyday language and get a draft membership application or introduction email tailored to their region's hub.

Have I missed any? What would you like to solve first?