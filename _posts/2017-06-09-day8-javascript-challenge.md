---
layout: post
title: "Day 8: JavaScript Challenge"
category: javascript
tags: js30
demo: /demo_day8
short_description: Let's play around with the canvas! What a great API!
image_preview: /images/javascript.png
category_page: js
---

Let's play around with the canvas! What a great API!

As usual, I don't want to explain anything unnecessary. Just play with the
[demo](/demo_day8){:target="_blank"}. Clone my
[repo](https://github.com/miayam/js30){:target="_blank"}
if you are interested.

I hope my hobby doesn't conflict with yours. I don't mind getting into
fistfight to resolve it (kidding).

I hope the code explain itself. Thanks for reading.

### Markup

{% highlight html %}
<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>HTML5 Canvas</title>
  </head>
  <body>
  <canvas id="draw" width="800" height="800"></canvas>
  <script src="canvas.js"></script>
  <style>
    html, body {
      cursor: url("/images/personal_life.png"), auto;
      margin:0;
    }
  </style>
  </body>
{% endhighlight %}

### JavaScript
{% gist miayam/fe5f5de21ccf22e8fca34e05097de1ac %}
