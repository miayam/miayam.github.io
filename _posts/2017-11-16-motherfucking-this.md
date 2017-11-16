---
layout: post
title: Negation of "this"
category: javascript
demo: /demo_day30
short_description: More than a month, I haven't written a blog to keep ahead of the game.
image_preview: /images/javascript.png
category_page: js
---

More than a month, I haven't written a blog to keep ahead of the game.

Here I am posting my old note.

## What Is Not `this`?

### 1. It Is Not Function Scope!

It's obnoxious and impossible...
No such thing like bridging motherfucker!

{% highlight js %}
  function greeting() {
    // Fooly expecting `contentText` value on `message` function body!
    console.log(this.contentText);
  }

  function message() {
    var contentText = "Hello world!";
    // Fooly expecting `greeting` says "Hello world!" which is impossible!
    console.log(greeting());
  }
{% endhighlight %}

Therefore, `this` **is not** the content of function body.

### 2. It Is Not Literally Itself

{% highlight js %}
  function greeting() {
    this.count += 1;
  }

  greeting.count = 0;

  for (var i = 1; i < 10; i++) {
    // Expecting that `for statement` increases the `count`
    // property of `greeting` function. Wrong asshole!
    greeting();
  }

  console.log(greeting.count); // Still motherfucking 0!
{% endhighlight %}

Therefore, `this` **is not** literally itself.

## So, What Is `this`?

`this` is an object that's bound to function every time it's invoked.
The default function call will bind to `window` object (global for NodeJS) or
`undefined` if the function is declared in strict mode:

{% highlight js %}
  function callable() {
    'use strict';
  }
{% endhighlight %}

If you want determine the value of `this`, we have to look at its call-site, a fancy
term for location where it's called. We have to trace it with debugger or visualize
all function invocations (call-stack) until it reaches the currently executing function.
The second one from the top is the call-site.

After you found it, ask yourself how it's called. There are 5 rules that `this` binding applies.

1. default binding --> plain old `func();`
2. implicit binding --> `obj.func();`
3. explicit binding --> something like `func.call(obj, arg1, ...)` or `func.apply(obj, [arg1, arg2, ...])`
4. hard binding (a version of explicit binding) --> `func.bind(obj)`
5. new binding --> `new fun();`


Things to note:

{% highlight js %}
  var targetObject = {
    propertyName: "propertyValue"
  };

  Object.getOwnPropertyDescriptor(targetObject, "propertyName");

  // Get targetObject's own properties disregarding its configurability.
  Object.getOwnPropertyNames(targetObject);
{% endhighlight %}
