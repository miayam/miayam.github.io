---
layout: post
title: "Day 20: JavaScript Challenge"
category: javascript
short_description: Mozilla has yet to implement SpeechRecognition interface for Firefox, so I turn the challenge into Stephen Hawking's voice synthesizer.
image_preview: /images/javascript.png
category_page: js
---

Mozilla has yet to implement `SpeechRecognition` interface for Firefox, so I turn the challenge
into Stephen Hawking's voice synthesizer. Utter the words you type, darling!

![Si cantik 4](https://i.imgur.com/meETn3N.jpg){:class="blog-post-image"}

It only requires 13 lines of JavaScript code (including the comments). Here's the [demo](/demo_day20){:target="_blank"}.

### Markup
{% highlight html %}
  <h1 class="title">Type What You Say <span>&#128266;</span></h1>

  <div class="words" contenteditable>
  </div>

  <script src="scripts.js"></script>
{% endhighlight %}

### JavaScript

{% gist miayam/cf75db54e529a666cb0ca13723fb9e10 %}



