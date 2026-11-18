---
layout: 2023/post
title: "Three retros I never got to run"

subtitle: >
  GenAI tools turned up in the work of three teams I worked with recently. In every case, we experienced mixed results. Now, if I could wind back the clock and run a retro with each, what would those people put on their boards?

hero_image: /i/three-retros.webp

hero_image_alt: >
  A black-and-white line-screen image of Dug in his home-made exoskeleton suit, visor pushed up over round glasses, reaching towards a glass wall covered in sticky notes while a colleague in glasses looks on beside him.

hero_image_caption: >
  Change is hard, and working in teams is hard, and sharing what we feel when things aren't working is also hard. Retros can help.

intro: >
  Recently I worked with three teams who all had AI stuff (LLM-powered chatbots like Claude and Copilot) turn up in their work so I thought I'd write about what happens to people's work when a tool arrives. Whose job changes? What care gets lost? What gets compromised or cut across? In each case, nobody treated those questions as important.

categories:
  - Leadership
  - Transformation
  - Culture

tags:
  - AI
  - LLM
  - Leadership
  - Retrospectives
  - Service design
  - Organisational culture

series: ai-accountability

date: 2026-11-16

readit: false
audiobook:
comments: true

# Kept for possible posts of their own:
#
#   There's a longer-term cost too. Judgement is learned by making. When we
#   stop hiring juniors and apprentices who learn to make things, we close the
#   place where our future judges are trained.
#
#   The accountability post: where does the human sit, and what do they see
#   before something happens? Two names on the blueprint: who vouches for the
#   output, and who decides what it's for. The earlier version of this post
#   ("The accountability gap", series: ai-accountability) is in git at c97d3e3.

---

While I was getting busy experimenting with LLMs with my web-dev and service design hats on, the rest of the world was trying to fit them into their workplace. 

In this story, I've blended the details of what I saw, as this isn't about pointing fingers. But I keep wondering: if I could wind back the clock and run a retro with each team, what would end up on the board?

## We dropped user research

User research was dropped in favour of asking a chatbot. This made things happen more quickly, but what went missing was research's paper trail: the discussion guide, the recruitment screeners, the anonymised sensemaking on the SharePoint. Nobody met a user, so nobody could say where an insight originated.

The team's retro board:

- **Stop:** treating chatbot answers as research findings.
- **Start:** keeping the paper trail, whatever the tool.
- **Continue:** using the model for exploration support and workshop stimulus.

## We didn't have time for sensemaking so we gave it to Copilot

Discovery workshop transcripts went straight into an AI assistant and came out as documents that alpha teams were told to use as evidence. 

The most frequent failure of an AI summary is actually leaving things out, which sucks because you can't proofread what isn't there.[^1] In this project, we ended up with very competent business analysts raising issues that turned out not to be issues, and time-strapped subject-matter experts confirming, again, that they weren't.

The team's retro board:

- **Stop:** handing summaries on as evidence.
- **Start:** budgeting time to check the genAI outputs against the transcripts, as a group.
- **Continue:** using the tools to track and query the linkages between service features and policies.

## Someone vibe-coded our design reference

This team had a process. The design lead owned a static prototype and, with a dedicated interaction designer, updated it on a release schedule to keep it in step with live. The content designers owned a single Figma file as the reference. It didn't work 100%, but the people and the intention were there.

All of it was synced by hand. The suggestion was to pull dynamically from the same sources as the live service, and an LLM built a working twin that did just that: a tool the team could use to test with users and change in minutes if necessary.

What goes on this team's board really depends on who's in the room.

The design team's post-its:

- **Stop:** breaking our Figma workflow.
- **Start:** fixing how this is going to work before it lands on us. We're super busy and under pressure to deliver, all this workslop isn't helping, and we don't want to design in code. We use design tools.

And I think product leadership and the developers might say:

- **Start:** making it official. Make it someone's job to own and maintain it.
- **Continue:** pulling from the same sources as live, with more time for the interactions themselves.

Both asks are reasonable...

## What am I seeing here?

There isn't much in the "continue" column. 

What's there looks the same each time: the model helping with someone's thinking, with a person still doing the judging. That's where I [ended up last time](/better-uses.html).

What the three boards share is that each time, a tool changed whose job something was, and it was handled as a delivery question. On the first two teams the work went away and the care went with it. On the third the care was already there, and the tool messed with it.

So it's cultural before it's technical. The twin might have been the right way to go, but it wasn't right for that team.

Which is why I keep coming back to the retro. It's a small piece of accountability: the place where a team says what a change is doing to their work, and where each action has a name assigned to it. It keeps the people leading the work answerable to the people doing it. All three teams did retros. AI never came up in them.

I don't know yet what good looks like here, but I'm going to keep looking. If your team has found it, [happy to chat](mailto:dug@goodlookslikethis.com).

## Notes:

[^1]: Dave Saunders, [Your AI Meeting Summary Is Probably Missing Something](https://hackernoon.com/your-ai-meeting-summary-is-probably-missing-something), HackerNoon, 4 August 2026. He draws on a study of 35 meetings summarised by an earlier generation of model, so treat it as indicative.
