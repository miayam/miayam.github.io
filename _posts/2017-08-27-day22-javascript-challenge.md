---
layout: post
title: "Day 22: JavaScript Challenge"
category: javascript
short_description: I don't think following along and highlighting the link while hovering over it is important.
image_preview: /images/javascript.png
category_page: js
---

I don't think following along and highlighting the link while hovering over it is important.

![Si cantik 13](https://i.imgur.com/pvvZUjM.jpg?1){:class="blog-post-image"}

I would say it's superfluous for a web page to have this kind of feature. Craig Newmark will look
away and insult us in his mind! Well, if it was for fun, I wouldn't attach too much importance to his
thinking. Here we are copying Stripe new web page!

If we hover over link on Stripe, we can see "mega menu" follow along the link without
concealing or popping.

![Stripe](https://i.imgur.com/6xDzyq4.png){:class="blog-post-image"}

It's a nice thing to have, right? However, without this challenge, I mightn't have known the way
we get element's size and its position relative to the `viewport` via DOM element methods.
By the way, `viewport` is just an area to display the web content in the browser. No wonder that
we got smaller `viewport` if we open the web console.

Each DOM element has access to those properties. Here's how we do that:


{% highlight js %}
  var myHeart = document.querySelector('[data-heart]');
  var myDomRect = myHeart.getBoundingClientRect();

  console.log(myDomRect);

  // For more about it, visit http://mzl.la/2ggxdcl
{% endhighlight %}

To get the next challenge right, we only make it resembles small portion of Stripe's feature
and take that cute "mega menu" aside. Cuteness will find its way.

Alright then, here's the [demo](/demo_day22){:target="_blank"} and my solution below.

{% gist miayam/f3096461eb28c930fed86a8cec441e6d %}

That's it for today.

I was a bit nervous when チージア セリーナ gets closer to me.
That was probably the last time I felt her cuteness. Well, I
have to understand that we just move in different circle.
I've already given up since I confessed my feeling via
Telegram. What a coward! Well, I've said that and I am proud
of that.
