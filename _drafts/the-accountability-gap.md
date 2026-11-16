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
  As a contractor I see the same thing all over the place: genAI arrives on a programme and nobody decides who answers for what it produces.

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

readit: false
audiobook:
comments: true

# Cut from this draft, kept for a possible post of its own:
#   There's a longer-term cost too. Judgement is learned by making. When we
#   stop hiring juniors and apprentices who learn to make things, we close the
#   place where our future judges are trained.
# Also cut for length (second version):
#   When I showed the team, their first reaction was "but Figma…"
#   So the first taste of a change that may well come anyway was an
#   undermining one, for them and for me.
---

Over the past couple of years I've watched it happen in three very different places: in-house in central government, contracting in local government, and contracting in a large department through a major integrator. I've blended the details for discretion. All three are feeling the same pain, and I think we need to nail this down as a practice pretty darn quick.

## Three programmes

On the first, user research was dropped in favour of asking a chatbot. The outputs came quickly, which was the point. What went missing was the trail research leaves behind: the discussion guide, the recruitment criteria, the anonymised transcripts on the team wiki. Nobody met a user, so nobody can say where a finding came from, and the next person to join inherits conclusions with nothing underneath them. A chatbot also can't surprise you, and research earns its cost by finding the person nobody predicted. The errors didn't disappear. They moved downstream to the people using the service, where they are slowest and most expensive to find. (I wrote about [who absorbs the errors](/better-uses.html) last time.)

On the second, workshop transcripts went straight into an AI assistant and came out as documents that early-stage teams then built on. The output wasn't terrible, and that was the problem. It was plausible enough to keep and uncertain enough that nobody could rely on it. Very competent analysts kept raising issues that turned out not to be issues, and time-strapped subject experts kept confirming, again, that they weren't. The usual failure of an AI summary is not inventing things but leaving them out, and you can't proofread what isn't there.[^1]

On the third I was on the other side. The team maintained a master design file by hand, but the real master was elsewhere: the logic lived in configuration files and every word of content sat in a single data file. So I had an LLM read those files and build a working twin of the live service, one the team could test with users and change in minutes. It matched exactly, because it was built from the same source. I thought I was handing them a gift. But I'd built it with no mandate, and nobody had decided who would own it or what the team's work became once it existed. The technology worked, and the way the service was maintained did not improve at all.

## What they had in common

Two of these tools made things less certain and one made them more, so the tool isn't the variable.

What was missing each time was a decision about who answers for the output, and that comes in two halves. Someone has to answer for whether it's right. Someone has to answer for what it's for. The first two programmes had nobody for the first. Mine had nobody for the second.

The result is organisations undermining their own assets and skills, and wasting the effort of the people they already have.

I have no performance metric for any of this. What I have is months of calls, watching the same thing happen to capable people. GenAI moves a team's mastery from making to judging. Take away the making without naming judging as the job, and without giving people the authority to do it, and you've removed both. Daniel Pink calls mastery and autonomy two of the three drivers of motivation, alongside purpose.[^2] Neither shows up in a status report, which is why this is so easy to miss.

## What we need to agree

This is a leadership gap, and it's cultural before it's technical. Service designers have a question for it: where does the human sit, and what do they see before something happens? That belongs on the blueprint before the tool is switched on, with two names next to it: who vouches for the output, and who decides what it's for. As [Joel](https://www.experienceartisan.com) put it after the last post, "I want a name against whoever answers for the miss."

_[Dug: this is the section to build out. What else goes in the practice?]_

It's a small version of something bigger. As a society we're surrendering a lot of our autonomy to the people who build these tools, but that's for another post.

So, to anyone leading a team through this: for each thing your AI produces, who vouches for it, and who decides what it's for?

## Notes:

[^1]: Dave Saunders, [Your AI Meeting Summary Is Probably Missing Something](https://hackernoon.com/your-ai-meeting-summary-is-probably-missing-something), HackerNoon, 4 August 2026. He draws on a study of 35 meetings summarised by an earlier generation of model, so treat it as indicative.

[^2]: Daniel H. Pink, *Drive: The Surprising Truth About What Motivates Us* (2009).
