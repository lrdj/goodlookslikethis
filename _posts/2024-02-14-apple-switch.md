---
layout: 2023/post
title: "Apple is experimenting with a new HTML form control?"

subtitle: >
  Do we need a new control to convey the meanings of "off" and "on"? I'm not sure we do, but Apple seems to think we do

# hero_image: /i/meaning.jpg

categories:
  - W3C

tags:
  - html
  - WCAG
  - markup
  - semanticweb
  - designsystems
  - accessibility
 
---

[Hidde de Vries](https://www.linkedin.com/in/hiddedevries/) just posted on this Linkedin

> Apple is experimenting with a new HTML form control: 
> A switch (not in spec just yet). 
> It is designed as an attribute for “&lt;input type=checkbox&gt;”.  
> You'd turn a checkbox into a switch by adding the "switch" attribute...

Apple is specifying ways to reference the parts of the switch, ie the thumb bit, the surround, the shadows etc.

This introduces something new and not quite right to the spec. If you remove CSS from markup, the user agent should be able to convey the meaning and purpose of the element. I worry this adds complexity and moves away from a semantic web approach (Joe Lanman expresses this better than me on the thread)

So I wondered, if Apple thinks we need to express the "on" or "off" state of a page or application component, how might we do it without introducing a new element? 

Here's a standard html checkbox with a bit of CSS attached:

<div style="margin:2em; padding: 2em; width: 33%; display: flex;border: 1px solid #ddd; background: #efefef;">

<style>
  /* Style the wrapper to include the checkbox and text within a border */
  .switch-wrapper {
    display: inline-block;
    border: 2px solid #aaa;
    padding: 0.25em 0.5em;
    border-radius: 5px;
    background: #fff;
  }

  /* Style for the label to show "OFF" by default */
  .switch + label::after {
    content: "OFF";
    margin-left: 0.5em;
    font-size: small;
    font-family: sans-serif;
    text-transform: uppercase;
    font-weight:bold;
    color: red;
  }

  /* Change label content to "ON" when the checkbox is checked */
  .switch:checked + label::after {
    content: "ON";
    font-weight:bold;
    color: green;
  }
</style>

<div class="switch-wrapper">
  <input type="checkbox" id="toggle" class="switch">
  <label for="toggle"></label>
</div>


</div>


Well, yes, it's ugly, I'm not a UI expert, but it does clearly show the two required states without the need for introducing a new element. 

Note that you can add all the CSS bells and whistles you want (word colour, bold text etc.) but that the central meaning is conveyed by the checkbox control itself. If you use assistive tech to use this page you should be able to know what the status of the checkbox is WITHOUGHT and visual aids.

Also, this has me wondering. Now that everyone is so keen to break HTML's mental model of what is a page, how are users expected to understand a permanent thing like a switch? In single-page-apps and react-driven things (or Linkedin itself) the page is impermanent to the point of rendering bookmarks useless. For that matter, the 'back' button is compromised as well. This you remembered something on the previous page? Click back and nope, it's gone.

I think we need to be careful of messing up the internet more that we already have...

