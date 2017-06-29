---
layout: post
title: "Bogus Module Dependency Manager"
category: javascript
short_description: I wonder how module dependency manager like RequireJS or webpack really works.
image_preview: /images/javascript.png
category_page: js
---

I wonder how module dependency manager like [RequireJS](http://requirejs.org){:target="_blank"}
or [webpack](https://webpack.js.org/){:target="_blank"} really works.

![Yuu Aoi San!](/images/yuu.jpg){:class="blog-post-image"}

After rereading the last chapter of Scope & Closure of YDKJS
(You Don't Know JavaScript) book series, I impose myself to explain this
interesting code with my own words.

{% highlight js %}
  var MyModules = (function Manager() {
      var modules = {};

      function define(name, deps, impl) {
          for (var i=0; i<deps.length; i++) {
              deps[i] = modules[deps[i]];
          }
          modules[name] = impl.apply( impl, deps );
      }

      function get(name) {
          return modules[name];
      }

      return {
          define: define,
          get: get
      };
  })();
{% endhighlight %}

As a person with beginner's mind, I always think I already know about
something but God knows that I know nothing about it.

To begin with, let's this snippet speaks volume before we go any further.

{% gist miayam/ea51a98052dc3f25fb43cd4c7ed97153 %}

Without familiarity with `apply`, `call` or `bind`, the snippet above would
be hardly understood. If you find it confusing, it's well advised to review
`apply` before rereading my comments on the snippet. [Here's the best
JavaScript documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) that explains `apply` thoroughly.

![Yuu Aoi San!](/images/yuu2.jpg){:class="blog-post-image"}
<em class="description">I am sorry, she is too cute!</em>

***

Well done! After reading the documentation about `apply`, I am sure you
understand the snippet more than I do. With that premise, I can say that you
recognize that the `$mod` or `ModuleManager` make any objects (modules)
we define persist throughout the runtime. Those modules resides in private
variable, `modules`.

{% highlight js %}
  // There... cannot be accessed directly.
  var modules = {};
{% endhighlight %}

Let's say I'd like to have a module that greets anyone I meet.

{% highlight js %}
  // $mod and ModuleManager are two sides of the same coin.
  $mod.define('greeting', [], function greeting() {
    var attributes = {
      sayHello: function sayHello(name) {
        return `Hello ${name}, nice to meet you.`;
      }
    };

    return attributes;
  });
{% endhighlight %}

Here's how I make use of it.

{% highlight js %}
  var greeting = $mod.get('greeting');
  greeting.sayHello('チージア セリーナ');
{% endhighlight %}

Right now, my heart burns with high dosage of cuteness. I really want to confess
this feeling to the ones I like the most, but I need to greet them before I do
that. Why not I make use of existing module ('greeting') we just defined? Don't
repeat yourself they say!

{% highlight js %}
  $mod.define('confession', ['greeting'], function confession(greeting) {
    var attributes = {
      // pick up line for each girl (we can override it)
      pickUpLines: {},

      // log the name of my crushes for later use
      names: [],

      // `crushes` is an array of girl's name I like
      confess: function confess(crushes) {
        crushes.map(function (name, index) {
          (function (name, index) {
            // log the girl's name
            attributes.names[index] = name;
            // log the default pick up line
            attributes.pickUpLines[name] = function pickUpLine() {
              var wording = greeting.sayHello(name);
              return `${wording} I love you.`;
            };
          })(name, index);
        });
      },

      // Melt a girl's heart with implicit words.
      setCustomPickUpLine: function setCustomPickUpLine(wording, name) {
        attributes.pickUpLines[name] = function pickUpLine() {
          return `Dear ${name}, ${wording}`;
        }
      }
    };

    return attributes;
  });
{% endhighlight %}

Alright! Now I can confess my feeling to multiple girls at once! I am fabulous!

{% highlight js %}
  var confession = $mod.get('confession');
  confession.confess([
    'ルル オーリア',
    'メリー メディオーアティ',
    'オーリア ラフマ'
  ]);
{% endhighlight %}

Oh, for that cute girl endowed with sparkling finger nails, I have prepared a
special pick up line I borrow from a friend. I am sure I can touch her heart
with it.

{% highlight js %}
  confession.setCustomPickUpLine("I hate a lot of people but I don't \
  hate you, therefore I love you.", 'オーリア ラフマ');
{% endhighlight %}

List my pick up lines toward those cute girls.

{% highlight js %}
  confession.names.map(function (name) {
    var pickUpLine = confession.pickUpLines[name]();
    console.log(`${pickUpLine}`);
  });

  // Hello ルル オーリア, nice to meet you. I love you.

  // Hello メリー メディオーアティ, nice to meet you. I love you.

  // Dear オーリア ラフマ, I hate a lot of people but I don't hate you,
  // therefore I love you.
{% endhighlight %}

You know what, I lie about me loving them. I am sure it's not about "love", it's
a mere infatuation, a long lasting desire of attachment that would vanish in no
time. It's hormonal. One thing I can tell them truthfully is that I love my
family and my hobbies. I am sorry darling.

{% highlight js %}
  $mod.define('lying', ['confession'], function lying(confession) {
    var attributes = {
      lieToThem: function lieToThem() {
        confession.names.map(function (name) {
          var apology = "I am sorry... That was a lie.\n\n";
          var wording = confession.pickUpLines[name]();
          console.log(`I once said, "${wording}" ${apology}`);
        });

        return "That's it."
      }
    };

    return attributes;
  });
{% endhighlight %}

Truth be told.

{% highlight js %}
  var lying = $mod.get('lying');
  lying.lieToThem();

  // I once said, "Hello ルル オーリア, nice to meet you. I love you."
  // I am sorry... That was a lie.

  // I once said, "Hello メリー メディオーアティ, nice to meet you. I love you."
  // I am sorry... That was a lie.

  // I once said, "Dear オーリア ラフマ, I hate a lot of people but
  // I don't hate you, therefore I love you."
  // I am sorry... That was a lie.
{% endhighlight %}

That's it for today. I want to kiss オーリア ラフマ on the cheek.
