---
layout: post
title: "Day 1: JavaScript Challenge"
category: javascript
short_description: In this lovely month, I would love to spend my meaningless life on something that's meaningful. It's 30 day JavaScript challenge.
image_preview: /images/javascript.png
category_page: js
---

In this lovely month, I would love to spend my meaningless life on something
that's meaningful. It's
[30 day JavaScript challenge](https://javascript30.com/){:target="_blank"}.

![Lala Larissa](/images/lovely_month.jpg){:class="blog-post-image"}

This is the first challenge. It's not tricky but lots of fun.
Clone my [repo](https://github.com/miayam/js30){:target="_blank"}
if you are interested and here's the [demo](/demo_day1){:target="_blank"}.

It's quite interesting because this is the first time I manipulate SVG image
using JavaScript. I forget that SVG is just XML-based vector image and can be
parsed into the DOM.

{% highlight js %}
  // we can query element on SVG image by its id attribute
  // just like regular HTML file.
  document.querySelector('#Snare-Drum')
{% endhighlight %}

Here's my simple boring JavaScript code...

{% gist miayam/78981e95652fcfc0bda9336a44aa5464 %}

Until today I have added event listener to `click`, `keyup`, `keydown`,
`submit`, and `change` in my daily JavaScript code. Now, I know there are
lots of interesting events can be triggered in the browser. In my case,
they are `animationend` and `transitionend`.

Here's CSS code that manipulates SVG image when certain character on
keyboard typed.

{% highlight css %}
  /* It's for manipulating SVG image */
  .animation {
    animation-duration: 0.1s;
    animation-name: rollDrum;
  }

  @keyframes rollDrum {
    from {
      transform-origin: 50% 50%;
      transform: scale(0.99);
    }

    to {
      transform-origin: 50% 50%;
      transform: scale(1.05);
    }
  }

  /* It's for manipulating key button */
  .playing {
    transform: scale(1.1);
    border-color: #ffc600;
    box-shadow: 0 0 1rem #ffc600;
  }
{% endhighlight %}

I hope I can manage to finish the rest of the
challenges. I am not sure, but tomorrow's challenge is waiting...
