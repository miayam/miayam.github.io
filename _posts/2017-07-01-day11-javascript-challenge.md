---
layout: post
title: "Day 11: JavaScript Challenge"
category: javascript
short_description: I was very excited building custom HTML5 video player using vanilla JavaScript.
image_preview: /images/javascript.png
category_page: js
---

I was very excited building custom HTML5 video player using vanilla JavaScript.
Right now, I can say that it's super tiring to rely on Web API alone without
standing on the shoulders of giants (libraries).

![Oh no!](/images/ohno.jpg){:class="blog-post-image"}

The most interesting part in this challenge was adding event listener to events
I've never heard before! Here's the [demo](/demo_day11){:target="_blank"}.

As usual, I can only let the code explain itself.

### HTML
{% gist miayam/fec9b797c34d57410bf2c2102c910716 %}

### JavaScript
{% gist miayam/97782afd8e12cc453ac8fbef5b3b0b00 %}

I wanted to display this video from repository (jekyll page asset), but it
didn't seem to work. I had tried embedding video file from Google Drive,
but it only works well with `iframe`. I gave up, so I turned this lovely video
into a `gif` and it worked (github page doesn't allow video file maybe...).

![Oh no more!](/images/lovely.gif){:class="blog-post-image"}

Enjoy the video, enjoy my spaghetti code. See you next time.
