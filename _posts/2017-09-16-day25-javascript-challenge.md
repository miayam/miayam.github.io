---
layout: post
title: "Day 25: JavaScript Challenge"
category: javascript
short_description: It's very important for the one who build user-facing features on top of DOM and Web API to understand event propagation, bubbling, and capturing.
image_preview: /images/javascript.png
category_page: js
---

It's very important for the one who build user-facing features on top of DOM and Web API to
understand event propagation, bubbling, and capturing. What the heck are those terms about?
Here's the [demo](/demo_day25){:target="_blank"} to help explain how it works.

![Si cantik 18](https://i.imgur.com/7NmbulG.jpg?1){:class="blog-post-image"}


## Event propagation

Event propagation is a process of handling multiple event listeners triggered by a
single event because of both event listeners on nesting and nested
elements listen to the same event type ('click' for example). Let's say we
attach event listener to both parent and child elements:


{% highlight html %}
  <nav onclick="alert('I like you ちえさ せれな')" >
    <button class="clickable">Click me~</button>
  </nav>

  <script>
    function askHerOut() {
      console.log("I would love to ask ちえさ せれな out on a date");
    }

    var button = document.querySelector('.clickable');
    button.addEventListener('click', askHerOut);
  </script>
{% endhighlight %}

### 1. Event Bubbling

If we click on inner element (`button`), the engine will run a function that handles event on
current target element (`askHerOut`) and soon after it was invoked, the built-in `alert`
function that handles event on its parent element will run eventually even if we don't
actually click on it. It starts from within and then bubbles up until it reaches heaven (kidding).

### 2. Event Capturing

What if we reverse that process? What will happen? Instead of bubbling, the engine is
capturing listeners for nesting elements and then sink down to elements at lower levels.
In other words, the handler that listens to event on outermost target element—`alert('I like you ちえさ せれな')`—will
run first and then sink down to inner nested elements—`askHerOut()`, on and on, until it reaches
the inner core of the earth (kidding).

{% highlight html %}
  <nav onclick="alert('I like you ちえさ せれな')" >
    <button class="clickable">Click me~</button>
  </nav>

  <script>
    function askHerOut() {
      console.log("I would love to ask ちえさ せれな out on a date");
    }

    var button = document.querySelector('.clickable');
    button.addEventListener('click', askHerOut, { capture: true });
  </script>
{% endhighlight %}

### 3. One Time Event Listener

Sometime we want to click a button, see it functions correctly, and then disable it.
How can we do that?

{% highlight html %}
  <nav onclick="alert('I like you ちえさ せれな')" >
    <button class="clickable">Click me~</button>
  </nav>

  <script>
    function askHerOut() {
      console.log("I would love to ask ちえさ せれな out on a date");
    }

    var button = document.querySelector('.clickable');
    button.addEventListener('click', askHerOut, { once: true });
  </script>
{% endhighlight %}

It's only a distillation that barely covers the whole nitty-gritty of
event propagation. I recommend you to read these articles:

* [https://www.sitepoint.com/event-bubbling-javascript/](https://www.sitepoint.com/event-bubbling-javascript/){:target="_blank"}
* [http://www.javascripter.net/faq/eventbubbling.htm](http://www.javascripter.net/faq/eventbubbling.htm){:target="_blank"}


Well, both event capturing and bubbling are expensive, what if we attach event listener
to a thousand elements nesting to each other? If we click on one of them, it will bubble
up or sink down to upper or lower levels. Don't we only intend to click on a single element
and see it works correctly? Event delegation is the solution! I blogged about
[that](/javascript/2017/07/30/day15-javascript-challenge){:target="_blank"} months ago.

That's it for today. I wonder how is it like to be in relationship? I always think having a
girlfriend is a tremendous waste of time, but I want to taste it for a bit. Just for a
week and see what happens.
