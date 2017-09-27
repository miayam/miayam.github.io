---
layout: post
title: "Day 9: JavaScript Challenge"
category: javascript
tags: js30
short_description: It's a demo-less post. Nothing to show but a lot to explain. We are going to play with the console.
image_preview: /images/javascript.png
category_page: js
---

It's a demo-less post. Nothing to show but a lot to explain. We are going to
play with the console.

![Emi Takei!](/images/emi.jpg){:class="blog-post-image"}

Before this challenge, I only made use of `console.log` for debugging.
To me, that was enough to make sure the outputs of certain program, but there
are other built-in methods from native `console` object available to help us
eradicate bugs and errors. We are going to make the most of it.

To increase my own understanding, I'll take all examples here personal.
I hope you don't mind.

### `Regular Logging`
This is regular `console.log` we often encounter in  our spaghetti code.
{% highlight js %}
  console.log("Are you here with me?");
{% endhighlight %}

### `With Interpolation`
Sometime we need to insert value between text consumed by `console.log`.
Well, what for? To make it easier to change later on!
{% highlight js %}
  (function () {
    var her = 'ちえさ せれな';

    // PHP style
    console.log("is %s here with me?", her);

    // ES6 style
    console.log(`is ${her} here with me?`);
  })();
{% endhighlight %}

### `Styling The Text`
If we would love to emphasize text with color and style, don't hesitate.
Nike says, "Just do it!"
{% highlight js %}
  (function () {
    var her = "メリー メディオーアティ";
    console.log(`%c ${her} is the best ❤`, "color: pink; font-size: 25px;")
  })();
{% endhighlight %}

You will see this in `console`.
<p style="color: pink; font-size: 25px">メリー メディオーアティ is the best ❤</p>

Pay attention. `%c` before text indicates the text are going to be styled with
inline CSS we pass to second parameter.

### `Warning!`
Instead of simply "say what you say" via `console.log`, what if we warn our
users about the one we care the most?
{% highlight js %}
  (function () {
    var her = "ちえさ せれな";
    console.warn(`Don't touch ${her}`);
  })();
{% endhighlight %}

### `Information`
We've warned users before, don't you think we need to kindly inform users
about something too?
{% highlight js %}
  (function () {
    var her = "ちえさ せれな";
    console.info(`I don't own ${her} but I want to hold her hand and kiss \
     her on the cheek like she did to me in my dream`);
  })();
{% endhighlight %}

### `Asserting`
We also can check the truth via `console`. It's quite useful.
{% highlight js %}
  console.assert("I hate a lot of people but I don't hate you" === "I like you",
    "We both know that's bullshit darling... I really like you.")
{% endhighlight %}

`console.assert` only display text whenever the condition `false` like that
expression above. Of course I like ちえさ せれな, I mean it!

### `Displaying Error`
Enough warning, enough conveying, just tell the users that we made a terrible
mistake even if it was a beautiful mistake! Error! Error! Error!
{% highlight js %}
  console.error("I love メリー メディオーアティ, that's a mistake, a beautiful mistake...");
{% endhighlight %}


### `Clearing`
Back then, I liked ちえさ せれな, really liked her. Now, I want to forget
that feeling... It's going to be cleared away... Hopefully.
{% highlight js %}
  console.log('I liked ちえさ せれな');
  console.clear();
{% endhighlight %}


### `Timing`
How long does it take to fetch my profile from [github](https://github.com)?
{% highlight js %}
  // We start here...
  console.time();
  fetch("https://api.github.com/users/miayam")
    .then(function (blob) {
      return blob.json();
    })
    .then(function (data) {
      // We end the timer when we've actually fetched the data...
      console.timeEnd('fetching data from https://api.github.com');
      console.log(data);
    })
{% endhighlight %}


### `Grouping`
The last one, I want to group my crushes with pride!

Here's my girls!
{% highlight js %}
  var crushes = [
    {
      name: "ルル オーリア",
      age: 25,
      status: "single",
      tags: "cute, sexy, hypocrite, obnoxious"
    },

    {
      name: "メリー メディオーアティ",
      age: 26,
      status: "married",
      tags: "cute, pious, intelligent"
    },

    {
      name: "ちえさ せれな",
      age: 23,
      status: "single",
      tags: "cute, fragile, sensitive, emotional"
    }
  ];
{% endhighlight %}


Here's how it should be done!
{% highlight js %}
  (function () {
    crushes.forEach(function (crush) {
      console.groupCollapsed(`${crush.name}`);
      console.log(`I like ${crush.name}`);
      console.log(`She is ${crush.age} years old`);
      console.groupEnd();
    });
  })();
{% endhighlight %}


Copy-paste all the snippets above and run in console. `CTRL` + `SHIFT` + `i` to
open the `console`.

Okay, that's it for today. Until tomorrow.
