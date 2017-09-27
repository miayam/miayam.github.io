---
layout: post
title: "Day 15: JavaScript Challenge"
category: javascript
short_description: LocalStorage and event delegation are concepts I am familiar with. However, I am very excited doing this challenge!
image_preview: /images/javascript.png
category_page: js
---

`LocalStorage` and event delegation are concepts I am familiar with. However,
I am very excited doing this challenge!

![sumpah kawai pisaaaan!](/images/saya.jpg){:class="blog-post-image"}

Have you ever imagined adding event listener to element that never exist
or will only exist in the future? That's impossible, right? However, our
assumption sometime tells otherwise.

Let's say we want to delete item from to-do list (which is dynamically
created and destroyed) whenever we click ✖ button on it. If we attach event
listener to ✖ button, you won't get anything works correctly if the item
was newly created because you cannot attach event listener to nonexistence
DOM element. Perhaps, it functions correctly for existing elements because
it's already on the page, but we've been wrong conceptually. That's why we
need event delegation to fix that problem.

Event delegation is not that fancy! It's like attaching event listener
to parent element (as for `ul`, there must be a bunch of `li` inside it), so
child elements can function specifically without having to attach any event
listeners to them.

Pay attention to this snippet:

{% highlight html %}
  <ul id="parent">
    <li>
      <a href='#'>Clik me and I don't care!</a>
      <span>Click me and I care!</span>
      <input type="checkbox">
    </li>
  </ul>
{% endhighlight %}

{% highlight js %}
  var parentElement = document.getElementById('parent');

  // We only handle 'click' event for <span> element and ignore the others.
  function handleClickForSpan(event) {
    if (event.target.matches('span')) {
      event.target.style.color = 'red';
    }
  }

  // We only handle 'click' event for <input type="checkbox"> and ignore the
  // others.
  function handleClickForCheckBox(event) {
    // Hide parent element (`li`) if we check the check box.
    if (event.target.matches('input')) {
      event.target.parentNode.style.display = "none";
    }
  }

  parentElement.addEventListener('click', handleClickForSpan);
  parentElement.addEventListener('click', handleClickForCheckBox);
{% endhighlight %}

Perhaps, my wording is not as cute as ちえさ せれな. I will let David Walsh
explain it if you find my explanation confusing. Here's his
[blog](https://davidwalsh.name/event-delegate){:target="_blank"}.

I finish the challenge this way. Have a look at
the [demo](/demo_day15){:target="_blank"}. I am off now!

I promise, I will explain this snippet incrementally but thoroughly.

### HTML

{% highlight html %}
  <div class="wrapper">
    <h2>LOCAL TAPAS</h2>
    <p></p>
    <ul class="item-list">
      <li>Loading Tapas...</li>
    </ul>
    <form class="form">
      <input type="text" name="item" placeholder="Item Name" required>
      <input type="submit" value="+ Add Item">
    </form>
  </div>
{% endhighlight %}

### JavaScript

{% gist miayam/0f0a478f92b8b31f8e677442faf025b6 %}


Alright then, that's it for today. I long ちえさ せれな's cute ponytail.
I cannot wait any longer!
