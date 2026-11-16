---
layout: 2023/post
title: "The accountability gap"

subtitle: >
  Three programmes in three corners of government, and the same thing missing each time.

hero_image: /i/the-accountability-gap-lighter.webp

hero_image_alt: >
  A blue-tinted detail of William Blake's Newton: a naked, muscular figure sits on a lichen-covered rock, bent double over a scroll, measuring a diagram with a pair of compasses.

hero_image_caption: >
  William Blake, Newton (1795). Back turned to what you're supposed to be describing.

intro: >
  As a contractor I'm seeing the same thing all over the place: genAI arrives on a programme and nobody decides who answers for what it produces. Over the past few years I've watched it happen in some different-shaped teams: in-house in central government, contracting in local government, and in a large central gov department through a major digital integrator. 

categories:
  - Leadership
  - Transformation
  - Culture

tags:
  - AI
  - LLM
  - Leadership
  - Accountability
  - Service design
  - Organisational culture

series: ai-accountability

readit: false
audiobook:
comments: true

# Cut from this draft, kept for a possible post of its own:
#   There's a longer-term cost too. Judgement is learned by making. When we
#   stop hiring juniors and apprentices who learn to make things, we close the
#   place where our future judges are trained.

---

I've blended the project details as this isn't about pointing fingers. All three scenarios tell of digital professionals feeling the same pain. I think we need to resolve this issue as a practice pretty darn quick as if we don't, the owners and buyers of the technology will do it for us...

## We dropped user research

On the first programme, user research was dropped in favour of asking a chatbot. This made things happen more quickly, but what went missing was research's paper trail: the discussion guide, the recruitment screeners, the anonymised sensemaking on the SharePoint. With that, the institutional learning from the process of product development was lost. 

Nobody met a user, so nobody could say where an insight originated. I didn't see where the decisions based on those non-insights ultimately went, but [I argued previously](/better-uses.html) that any resulting errors caused by those decisions would almost certainly move downstream to hit the people using the service.

## We didn't have time for sensemaking so we gave it to Copilot

On the second, workshop transcripts went straight into an AI assistant and came out as documents that early-stage teams were then told to build on. The output was plausible enough to keep, but uncertain enough that we couldn't 100% rely on it. 

The most frequent failure of an AI summary is not inventing things but leaving them out, which sucks because you can't proofread what isn't there.[^1] The end result of this process was very competent business analysts, under pressure to deliver, raising issues that turned out not to be issues, and time-strapped subject-matter experts confirming, again, that they weren't. This ended up with frequent escalations about wasting senior people's time.

## Someone vibe-coded our design reference

In this last scenario, the team maintained an enormous master design Figma file by hand, but the de facto master was elsewhere: the logic lived in configuration files and every word of content sat in a single data file. 

A contractor asked an LLM to read all those files and build a working twin of the live service, one the team could test with users and change in minutes. The twin matched exactly, because it was built from the same source. 

With a mandate and an owner it could have been the team's own tool. 

It had neither: nobody had decided who would own it or what the team's work would become once it existed. When the team saw it, their first reaction was "but Figma…" So their first taste of a change that may well come anyway was an undermining one.

<!--
 The technology worked, the team turned it down, and the way the service was maintained did not improve at all.
-->

## What am I seeing here?

What these three teams never got was a decision about who answers for the output. That decision was leadership's to make and it didn't happen. 

The decision needs to come in two halves. 

- Someone has to answer for whether it's right 
- and someone has to answer for what it's for

The second half is the easy one to forget. The genrated twin was right, but being right wasn't enough.

On none of these programmes did anyone in charge treat it as a decision at all.

The result is organisations undermining their own assets and skills, and wasting the effort of the dedicated and talented humans they already have.

## So what?

I have no performance metrics for any of these observations. What I do have is months of Teams calls, watching the same things happen to capable people. 

The unmanaged use of genAI tools is moving teams' mastery from making things to judging outcomes. We are currently messing about with the making without formally naming the judging as the job, and without giving people the authority to do it.

While this may seem a little abstract, it's worth remembering Daniel Pink's work on innate motivation.[^2] He rates "mastery" and "autonomy" as two of the three main drivers, and what we're doing is putting a question mark next to both of those.

## What do we need to agree here?

This is a leadership gap, and it's cultural before it's technical. 

None of the three teams mentioned above could have closed it themselves, because deciding who answers for something takes authority they didn't have. Service designers have a question for it: where does the human sit, and what do they see before something happens? That belongs on the blueprint before a new tool is introduced, with two names next to it: who vouches for the output, and who decides what it's for. As [Joel](https://www.experienceartisan.com) put it after the last post, "I want a name against whoever answers for the miss."

These are digital leadership issues but they are really a smaller part of something bigger. As a society we're surrendering a lot of our autonomy to the people who build these tools, but that's for another post.

So, to anyone leading a team through this: for each thing your AI produces, who vouches for it, and who decides what it's for?

## Notes:

[^1]: Dave Saunders, [Your AI Meeting Summary Is Probably Missing Something](https://hackernoon.com/your-ai-meeting-summary-is-probably-missing-something), HackerNoon, 4 August 2026. He draws on a study of 35 meetings summarised by an earlier generation of model, so treat it as indicative.

[^2]: Daniel H. Pink, *Drive: The Surprising Truth About What Motivates Us* (2009).
