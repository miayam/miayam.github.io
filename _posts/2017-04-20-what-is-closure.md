---
layout: post
title: What Is Scope?
category: javascript
short_description: Scope is a set of rules that determines where and how a variable can be looked-up.
image_preview: /images/javascript.png
category_page: js
---

Scope is a set of rules that determines where and how
a variable can be looked-up. Always refer [to this](https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch1.md).

It seems trivial for newbie like me but there's actually a lot of things to ponder.
Anyway, how JavaScript engine works then? Let's pretend to be one.

I am an **ENGINE**. I have **COMPILER** and **SCOPE** to translate human language (ECMAScript).

When I see statement like:

{% highlight js linenos%}
  var b = 20;
{% endhighlight %}

I'll be using **COMPILER** to do the following:

*  Turn it into chunks of meaningful word (token) I can understand. `var`, `b`, `=`, `20`. (1)
*  Those words must be organized in a way I could look them up in my human-to-machine dictionary.
   This organized words are called AST (Abstract Syntax Tree). It's like trying to make a sentence in
   accord to machine grammar rules. (2)
*  Now list of translated words are understood, I can figure out what human want me to do. (3)

Human want me to use up memory for variable `b` and stick the value `20` into it. To do so, I'd like to
make use of **SCOPE** to accomplish the task. **SCOPE** is a magical room containing collection of variables.

Imagine I am in the building.

*  Microsecond ago, during compilation, **COMPILER** encountered `var b`, that means I have to declare variable `b`.
   I then check **SCOPE** collection, see if variable `b` already exist. If so, proceed to do other task and
   ignore the declaration because I know where to find `b`. Otherwise, put the new variable `b`
   into **SCOPE** collection. (4)

*  During execution, how could I possibly stick the value `20` into `b`? Well firstly while running, look
   up `b` in the current **SCOPE**. If there is a variable called `b` accesible, assign the value `20` to it.
   Otherwise, go to the next room (**SCOPE**) upstairs that might have knowledge of it, so on until I reach
   the limit, the top level floor (global **SCOPE**). If nowhere to find `b`, I yell at human "ERROR!!!" (5)

**Note:**
What **COMPILER** has done for **ENGINE** are lexing (1), parsing (2) and code generation (3).
Point (4) and (5) explain how **COMPILER** interact with **SCOPE** during compilation and how **ENGINE**
execute the generated code from code generation.
