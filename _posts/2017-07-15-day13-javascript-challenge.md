---
layout: post
title: "Day 13: JavaScript Challenge"
category: javascript
demo: /demo_day13
tags: js30
short_description: It's all about debounce function and the scroll event I care about.
image_preview: /images/javascript.png
category_page: js
---

It's all about `debounce` function and the 'scroll' event I care about.

![My dear!](/images/aoi_oh_aoi.jpg){:class="blog-post-image"}

As I understand it, `debounce` function will prevent event listener
to fire every time the event it listen to occurred. Scrolling and resizing
are the best candidates because the function that listen to those activities
runs almost repeatedly and will significantly impact the browser's performance.
`debounce` function will set the duration for event listener to delay until
certain amount of time have elapsed since the last time `debounce` function
was invoked. `debounce` makes use of `window.setTimeout`, and for good reason.
[Lodash](https://lodash.com/docs/4.17.4#debounce){:target="_blank"} and
[Underscore.js](http://underscorejs.org/#debounce){:target="_blank"}
have one of this kind.

Well, I cherry-pick the wording from blogs and documentations and cannot make
sure its originality. I am tired by the way.

Here's the [demo](/demo_day13){:target="_blank"} and a bit of explanation below...

{% gist miayam/fd94bb4549231a00dd9eee7e41f4eabc %}
