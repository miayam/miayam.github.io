---
layout: post
title: "Day 23: JavaScript Challenge"
category: javascript
short_description: I've done the similar challenge in day 20 before (Hawking's voice synthesizer), but it's more challenging (not really).
image_preview: /images/javascript.png
category_page: js
---

I've done the similar challenge in day 20 before (Hawking's voice synthesizer), but it's more challenging (not really).

![si_cantik14.jpg](https://s20.postimg.org/hluk1wo3h/si_cantik14.jpg){:class="blog-post-image"}

I am too tired to explain the challange. Perhaps, the only thing that's worth-explaining is
this part:

{% highlight js %}
  var DMZ = Object.create(null)

  // Adding arguments to callback... Sounds magical!
  whateverDOM.addEventListener('click', callback.bind(DMZ, arg1, arg2, arg3));
{% endhighlight %}

I've read `this` binding mechanism from This & Prototype of YDKJS (You Don't Know JavaScript)
book series and put it into action here.

Passing empty object (`DMZ`) to the first parameter of `Function.prototype.bind` and then passing
any values to the rest of parameters is to set default arguments passed to callback
and have it ignore the `this` binding. Consequently, after it was applied, the callback
would be bound to empty object that has no link to `[[Prototype]]` chain and `arguments` are set
without having to invoke the callback, something like `callback(arg1, arg2);`.

Here's the [demo](/demo_day23){:target="_blank"} and my half-assed solution below.

{% gist miayam/e1e691e48c54590eb137b5e077d17336 %}
