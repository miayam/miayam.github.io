---
layout: post
title: "Day 16: JavaScript Challenge"
category: javascript
tags: js30
demo: /demo_day16
short_description: Dynamically changing box shadow in accord to mouse movement is quite fun to me.
image_preview: /images/javascript.png
category_page: js
---

Dynamically changing box shadow in accord to mouse movement is quite fun to me.

If you add event listener that listens to `mousemove` event to
[block-level element](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements){:target="_blank"} that
wraps another [block-level element](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements){:target="_blank"} (`div` that consists of `article` for example),
the target element it listens to (`event.target`) sometime confuses us. We expect
the coordinate of mouse movement be relative to parent element,
but when we hover over the upper right corner of its child element, the mouse coordinate
(`event.offsetX` and `event.offsetY`) turn to `(0, 0)`. That's strange.

To fix this problem, we have to adjust the child element's coordinate by
adding the gap width between parent and child element to the current
coordinate. It's not that fancy, not as fancy
as メリー メディオーアティ's teaching method.

Here's how it's done.

### Markup

{% highlight html %}
  <div class="hero">
    <article contenteditable>
      <img class="logo logo-js" src="miayam.png" alt="logo">
    </article>
  </div>
{% endhighlight %}



### JavaScript

{% gist miayam/92d64a2571e45df9a85deb688e135d1d %}

As usual, I will explain the snippet above incrementally but thoroughly.
Here's the [demo](/demo_day16){:target="_blank"}.
