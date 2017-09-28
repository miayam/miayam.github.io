---
layout: post
title: "Day 30: JavaScript Challenge"
category: javascript
tags: js30
demo: /demo_day30
short_description: After 4 months trying to get into the DOM and Web API (without libraries, frameworks, or tooling), I finally finish 30 day JavaScript challenge!
image_preview: /images/javascript.png
category_page: js
---

After 4 months trying to get into the DOM and Web API (without libraries, frameworks, or tooling),
I finally finish 30 day JavaScript challenge! It sounds easy, but you have to try it
yourself. It takes a lot of hard work!

![Si cantik 1](https://i.imgur.com/1LIpkwO.jpg?1){:class="blog-post-image"}

What am I going to do now? I am going to learn React, I mean React's source code.
I want to know how it works, not just how to use it smartly like those smart people
out there.

Why I choose React? Because Reddit use it in production and I am a big fan of Reddit.
If Reddit, Craigslist, Mozilla, or Wikipedia happened to use Angular in production,
I will learn and use Angular instead. Just as simple as that. I don't care about the
benchmark, comparison, speed, and whatnot. I am not Software Engineer and I don't
make any decisions. I just want to follow my heart and my heart says React. By the way,
here's the [last demo](/demo_day30){:target="_blank"}.

Here's how I finish the challenge. I will comment on it if it is somewhat necessary.

### Markup
{% highlight html %}
  <h1>Whack-a-mole! <span class="score">0</span></h1>

  <div class="game">
    <div class="hole hole1">
      <div class="mole"></div>
    </div>
    <div class="hole hole2">
      <div class="mole"></div>
    </div>
    <div class="hole hole3">
      <div class="mole"></div>
    </div>
    <div class="hole hole4">
      <div class="mole"></div>
    </div>
    <div class="hole hole5">
      <div class="mole"></div>
    </div>
    <div class="hole hole6">
      <div class="mole"></div>
    </div>
  </div>
  <div>
    <button class="playAgain" style="display: none; margin: 20px auto; height: 50px; font-size: medium">
      Play again!
    </button>
  </div>
{% endhighlight %}

### JavaScript
{% gist miayam/e0c3e6497cb195d4ed8f0f2f82e0afe9 %}

I summarise 30 day JavaScript challenge on a single page. [Here it is](/js30){:target="_blank"}.
