---
layout: post
title: "Day 29: JavaScript Challenge"
category: javascript
tags: js30
demo: /demo_day29
short_description: Making a custom timer myself for procrastinator like me is quite fun and useful. What an interesting challenge!
image_preview: /images/javascript.png
category_page: js
---

Making a custom timer for procrastinator like me is quite fun and useful. What an interesting challenge!
Here's the [demo](/demo_day29){:target="_blank"}.

![Si cantik 11](https://i.imgur.com/nj0aPDN.jpg?1){:class="blog-post-image"}

I can only show the markup and JavaScript code here. Nothing to explain.

### Markup
{% highlight html %}
  <body>
    <div class="timer">
      <div class="timer__controls">
        <button data-time="20" class="timer__button">20 Secs</button>
        <button data-time="300" class="timer__button">Work 5</button>
        <button data-time="900" class="timer__button">Quick 15</button>
        <button data-time="1200" class="timer__button">Snack 20</button>
        <button data-time="3600" class="timer__button">Lunch Break</button>
        <form name="customForm" id="custom">
          <input type="text" name="minutes" placeholder="Enter Minutes">
        </form>
      </div>
      <div class="display">
        <h1 class="display__time-left"></h1>
        <p class="display__end-time"></p>
      </div>
    </div>

    <script src="scripts.js"></script>
  </body>
{% endhighlight %}

### JavaScript
{% gist miayam/ea34cc4d1da41b7c91dfaced3777dc35 %}
