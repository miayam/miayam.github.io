---
layout: post
title: "Day 7: JavaScript Challenge"
category: javascript
short_description: As for now, I am romantically attached to 4 girls who I met in high school, college, and office. How could I manage them?
image_preview: /images/javascript.png
category_page: js
---

As for now, I am romantically attached to 4 girls who I met in
high school, college, and office. How could I manage them?

How about making use of JavaScript's array built-in method to take care of them?

Here's a simple array that represent those 4 cute girls.

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
      name: "チージア セリーナ",
      age: 23,
      status: "single",
      tags: "cute, fragile, emotional"
    },

    {
      name: "オーリア ラフマ",
      age: 23,
      status: "single",
      tags: "cute, clean, simple"
    }
  ];
{% endhighlight %}

Nah, this challenge introduce us to `Array.prototype` built-in method like
`some`, `find`, `findIndex`, and `every`. It's simply boring because there's
no point to have a [demo](/demo_day7){:target="_blank"}
for this kind of challenge. Well, here's
the [repo](https://github.com/miayam/js30){:target="_blank"} if you are
so keen.

Let's see how I manage those precious ones.

It's been 7 years I haven't met with her, ルル オーリア. My friends told me that
she had a feeling for me but I wasn't sure back then. Well, I didn't approach
her because she was/is obnoxious (I've never approached a girl before). How can
I get information about her if I only remember that she is obnoxious?

{% highlight js %}
  var her = crushes.find(function (crush) {
    return crush.tags.split(',').includes('obnoxious');
  });

  console.log(her);
{% endhighlight %}

I recently hate her, チージア セリーナ. I don't know why she is so sensitive. Overreacting over
something that has nothing to do with her. What a weak soul. She is fragile
and emotional because she is the youngest (only 23). I really want to
delete her from the list. How could I do that if I would?

{% highlight js %}
  var herIndex = crushes.findIndex(function (crush) {
    return crush.tags.split(',').includes('emotional') && crush.age === 23;
  });

  console.log('before I delete her: ');
  console.table(crushes);
  crushes.splice(herIndex, 1);
  console.log('after I delete her: ');
  console.table(crushes);
{% endhighlight %}

I want to make sure that every girl I am romantically attached to is cute.
I am really sure though!

{% highlight js %}
  var cuteness = crushes.every(function (crush) {
    return crush.tags.split(',').includes('cute');
  });

  console.log(cuteness); // true
{% endhighlight %}

Well, they are so cute and I believe cuteness has nothing to do with age.
メリー メディオーアティ is a year older than me. Oh, I forget, I am not
romantically attached to her, I am in love with her. I am willing to spend
my time, money and energy on her. Unfortunately, she is married. Truth be told,
some of my crushes are not single at all...

{% highlight js %}
  var unmarriageable = crushes.some(function (crush) {
    return crush.status === 'married';
  });

  console.log(unmarriageable); // true
{% endhighlight %}

I save the best for last. She has beautiful hand. It's clean and sparkling. I
can tell her present by listening to her high pitch laughter. I admire her
vigorous attitude. I even dreamed of her kissing me on the cheek. I really
want to make a confession about this feeling. Maybe next time.

I like オーリア ラフマ. Let me sniff you from short distance, my dear!
