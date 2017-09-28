---
layout: post
title: "Day 2: JavaScript Challenge"
category: javascript
tags: js30
demo: /demo_day2
short_description: It's so hard to keep up with it. I am struggling even if it's seemingly an easy task (making analogue clock).
image_preview: /images/javascript.png
category_page: js
---

It's so hard to keep up with this challenge. I am struggling even if it's seemingly an easy task (making analogue
clock). Clone my [repo](https://github.com/miayam/js30){:target="_blank"} if you are interested and here's
the [demo](/demo_day2){:target="_blank"}.

My first mistake that takes too long to solve is turning hours into corresponding degree.

I thought it would be like this because there are 24 hours per day.

{% highlight js %}
  var date = new Date();
  var hour = date.getHours();
  var hourDegree = (hour / 24) * 360
{% endhighlight %}

But fool me, the clock will always be like this.



![clock](/images/clock.png){:class="blog-post-image"}
<em class="description">12 is the maximum, stupid!</em>

Here's how I solve it.

{% gist miayam/789e82acc85bca0ca03878c0e48ae5ef %}

Well, that's it for today. I am not sure I can solve tomorrow's challenge.
