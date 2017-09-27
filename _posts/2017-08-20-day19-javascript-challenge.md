---
layout: post
title: "Day 19: JavaScript Challenge"
category: javascript
tags: js30
demo: /demo_day19
short_description: Taking a photo from webcam and painting it to canvas seemed magical before this challenge.
image_preview: /images/javascript.png
category_page: js
---

Taking a photo from webcam and painting it to canvas seemed magical before this challenge.

![Si cantik 6](https://i.imgur.com/065fRsM.jpg){:class="blog-post-image"}


Here's the [demo](/demo_day19){:target="_blank"}.

The snippets below seems gibberish, but don't worry, there will be comments to explain how it works. I promise.

### Markup
{% highlight html %}
  <body class="wrapper">
    <div class="photobooth">
      <div class="controls">
        <button class="take-photo-js">
          <span class="photo-icon">&#128247;</span>
        </button>
      </div>

      <canvas class="photo"></canvas>
      <video class="player"></video>
    </div>

    <div class="strip"></div>
    <audio class="snap" src="assets/sounds/snap.mp3" hidden></audio>
    <script src="assets/js/demo19.js"></script>
  </body>
{% endhighlight %}


### JavaScript

{% gist miayam/9120349e9dc6b4d8250864a6b8526137 %}
