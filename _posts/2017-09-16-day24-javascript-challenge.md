---
layout: post
title: "Day 24: JavaScript Challenge"
category: javascript
short_description: It's about sticky navigation bar most modern web pages bother to have.
image_preview: /images/javascript.png
category_page: js
---

It's about sticky navigation bar most modern web pages bother to have. Here's the
[demo](/demo_day24){:target="_blank"}.

![Si cantik 7](https://i.imgur.com/TttfRII.jpg?1){:class="blog-post-image"}

First thing first, we have to determine the distance of navigation bar relative to
its parent (`html` tag). After that, stick the navigation bar at the point where the
top edge of the current `viewport` (an area to display the web content in the browser)
touches or passes through the top of navigation bar. In other words, the gap between
the top edge of the page and navigation bar has been passed through (hidden because we
scroll down the scroll bar).

{% highlight js %}
  var nav = document.getElementById('main');
  var gapHeightBettweenParentAndNav = nav.offsetTop;

  function fixNav() {
    if (window.scrollY >= gapHeightBettweenParentAndNav) {
      // Stick the damn navigation.
      nav.classList.add('nav--fixed');

      // And so on...
    }
  }

  window.addEventListener('scroll', fixNav);
{% endhighlight %}

The only thing left is adding approriate CSS to style the sticky bar.
Here's how I do that.


{% highlight css %}
  .nav--fixed {
    position: fixed;
    box-shadow: 0 5px rgba(0, 0, 0, 0.1);
  }
{% endhighlight %}

Here's the markup.

{% highlight html %}
  <nav id="main">
    <ul>
      <li class="logo"><a href="#">LOST.</a></li>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Images</a></li>
      <li><a href="#">Locations</a></li>
      <li><a href="#">Maps</a></li>
    </ul>
  </nav>
{% endhighlight html %}

It's very common to see a logo slide in after the top edge of the current `viewport` touched or
passed through the navigation bar. How about adding more useless feature to our existing code?

{% highlight js %}
  (function (window, undefined) {
    var nav = document.getElementById('main');
    var gapHeightBettweenParentAndNav = nav.offsetTop;
    var logo = document.querySelector('.logo');
    var siteWrap = document.querySelector('.site-wrap');

    function fixNav() {
      if (window.scrollY >= gapHeightBettweenParentAndNav) {
        nav.classList.add('nav--fixed');
        logo.classList.add('logo--shown');
        siteWrap.classList.add('site-wrap--bigger');

        // Fill the area the navigation bar left after its potition
        // being fixed relative to the `viewport`.
        document.body.style.paddingTop = `${nav.offsetHeight}px`;
      } else {
        nav.classList.remove('nav--fixed');
        logo.classList.remove('logo--shown');
        siteWrap.classList.remove('site-wrap--bigger');
        document.body.style.paddingTop = 0;
      }
    }

    window.addEventListener('scroll', fixNav);
  })(window)

{% endhighlight js %}

Be careful! Once you decide to fix the block-level element's position relative to the `viewport`, the area that element
previously took up before being fixed will vanish. We have to add padding to its parent element, so the
place where the navigation bar left would be filled appropriately.


That's it for today. I think I kind of miss メリー メディオーアティ.
