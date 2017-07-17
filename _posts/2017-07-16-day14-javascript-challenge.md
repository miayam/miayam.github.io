---
layout: post
title: "Day 14: JavaScript Challenge"
category: javascript
short_description: Copying Array or Object can be tremendously confusing if we don't know that they are different from primitive typed values like string, boolean, or number.
image_preview: /images/javascript.png
category_page: js
---

Copying `Array` or `Object` can be tremendously confusing if we don't know that
they are different from primitive typed values like `string`, `boolean`, or
`number`.

![She is the best!](/images/she_is.jpg){:class="blog-post-image"}

Let's start with `string`, `boolean`, and `number`.
I can guarantee that we can copy primitive typed values
this way.

{% highlight js %}
  var year = 2017;
  var thisYear = year;
{% endhighlight %}

If we change the value of `year` to something else,
then nothing happens to `thisYear`. As expected.

{% highlight js %}
  year = 2016;
  console.log(year); // 2016
  console.log(thisYear); // 2017
{% endhighlight %}

The same thing goes to `boolean` and `string` values.

{% highlight js %}
  var name = 'Robert';
  var hisName = name;
  var right = true;
  var left = right;

  name = 'James';
  right = false;

  console.log(name); // James
  console.log(hisName); // Robert
  console.log(right); // false
  console.log(left); // true
{% endhighlight %}

Let's say we have an array.

{% highlight js %}
  var players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
{% endhighlight %}

We try to make a copy of array the same way we
copy `number`, `boolean`, and `string`.

{% highlight js %}
  var team = players;
{% endhighlight %}

You might think we can just do something like this, expecting that `players`
will not be affected.

{% highlight js %}
  team[0] = 'Pop';
{% endhighlight %}

However what happens when we update that array?

{% highlight js %}
  console.log(players); // ['Pop', 'Sarah', 'Ryan', 'Poppy']
  console.log(team); // ['Pop', 'Sarah', 'Ryan', 'Poppy']
  console.log(`Both share the same memory.`);
{% endhighlight %}

Now here is the problem! We have edited the original array too!
Why? It's because that is an array reference, not an array copy.
They both point to the same array! So, how do we fix this?

* By using old fashioned `[].slice`.

{% highlight js %}
  var team = players.slice();
  team[0] = "James";
  console.log(players); // ['Wes', 'Sarah', 'Ryan', 'Poppy']
  console.log(team); // ['James', 'Sarah', 'Ryan', 'Poppy']
{% endhighlight %}

* By using `[].concat`.

{% highlight js %}
  var team = [].concat(players);
  team[0] = "James";
  console.log(players); // ['Wes', 'Sarah', 'Ryan', 'Poppy']
  console.log(team); // ['James', 'Sarah', 'Ryan', 'Poppy']
{% endhighlight %}

* By using the new ES6 spread.

{% highlight js %}
  var team = [...players];
  team[0] = "James";
  console.log(players); // ['Wes', 'Sarah', 'Ryan', 'Poppy']
  console.log(team); // ['James', 'Sarah', 'Ryan', 'Poppy']
{% endhighlight %}

`Object` and `Array` act the same way when it comes to copying its own
properties. Let's say we have a `person` object.

{% highlight js %}
  var person = {
    name: "Dudung",
    lastName: "Stevenson"
  };
{% endhighlight %}

This kind of statement is completely wrong.

{% highlight js %}
  var newPerson = person;
{% endhighlight %}

How we fix that?

* Using `Object.assign` instead.

{% highlight js %}
  var newPerson = Object.assign({}, person, {isHandsome: false});
  console.log(newPerson);
  // {
  //   name: "Dudung",
  //   lastName: "Stevenson",
  //   isHandsome: false
  // }

  console.log(person);
  // It doesn't change.
  // {
  //   name: "Dudung",
  //   lastName: "Stevenson"
  // }
{% endhighlight %}

* We will hopefully soon see `...spread`. It's next
generation of `EcmaScript`. Every cool kid will be using this frantically. It's
the future!

{% highlight js %}
  var newPerson = {...person};
{% endhighlight %}

Things to note that this is only 1 level deep, both for `Arrays` and
`Objects`. [Lodash](https://lodash.com/docs/4.17.4#cloneDeep){:target="_blank"}
has a `cloneDeep` method, but you should think twice before using it.

Well, I borrow too many words from Wes Bos. I owe him a beer. That's it
for today.
