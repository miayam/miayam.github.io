---
layout: post
title: "Day 10: JavaScript Challenge"
category: javascript
short_description: It's been 15 days since the last challenge. In this challenge, we are going to "steal" multiple checkbox selection's feature from Gmail.
image_preview: /images/javascript.png
category_page: js
---

It's been 15 days since the last challenge. In this challenge, we are going to
"steal" multiple checkbox selection's feature from Gmail. Great artist steal
they say! Here's the [demo](/demo_day10){:target="_blank"}.

![Stop it! I can't handle it!](/images/ah.jpg){:class="blog-post-image"}

It's really different from Wes Bos solution. I don't fully watch the video.

Now I realize how tedious it is to work with the DOM without any help from
third-party libraries (JQuery perhaps?). I have to "polyfill" simple method
for iterating each DOM element because `Array.prototype.forEach` cannot handle
NodeList. I feel sorry for being a newbie.

For more about the polyfill, [visit this blog](https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/){:target="_blank"}. I think
Todd Motto did a really good job explaining how to deal with NodeList.

I hope you can get what I mean.

### Markup
{% highlight html %}
  <main>
    <div class="inbox">
      <div class="item">
        <input type="checkbox" class="item__checkbox">
        <p>This is an inbox layout.</p>
      </div>
      <div class="item">
        <input type="checkbox" class="item__checkbox">
        <p>Check one item</p>
      </div>
      <div class="item">
        <input type="checkbox" class="item__checkbox">
        <p>Hold down your Shift key</p>
      </div>
      <div class="item">
        <input type="checkbox" class="item__checkbox">
        <p>Check a lower item</p>
      </div>
      <div class="item">
        <input type="checkbox" class="item__checkbox">
        <p>Everything inbetween should also be set to checked</p>
      </div>
      <div class="item">
        <input type="checkbox" class="item__checkbox">
        <p>Try do it with out any libraries</p>
      </div>
      <div class="item">
        <input type="checkbox" class="item__checkbox">
        <p>Just regular JavaScript</p>
      </div>
      <div class="item">
        <input type="checkbox" class="item__checkbox">
        <p>Good Luck!</p>
      </div>
      <div class="item">
        <input type="checkbox" class="item__checkbox">
        <p>Don't forget to tweet your result!</p>
      </div>
    </div>
  </main>
{% endhighlight %}

### JavaScript
{% gist miayam/84fbdc276836f18da9e79f9ed4f49d53 %}

Okay, that's it for today.
