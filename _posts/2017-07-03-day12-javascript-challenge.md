---
layout: post
title: "Day 12: JavaScript Challenge"
category: javascript
short_description: Type "magic" and see what happens next! I can assure you how interesting it is!
image_preview: /images/javascript.png
category_page: js
---

Type **"magic"** and see what happens next! I can assure you how interesting it is!

![Oh my!](/images/3beauty.jpg){:class="blog-post-image"}

For more about konami code, visit [this wikipedia page](https://en.wikipedia.org/wiki/Konami_Code){:target="_blank"}.

Here's my stupid code.

{% gist miayam/85001d163e17bbcc8cf7966057d13060 %}

<script type="text/javascript" src="http://www.cornify.com/js/cornify.js"></script>
<script>
  (function (window, undefined) {
    var easterEgg = "magic"; //
    var pressedKeys = [];

    window.addEventListener('keyup', function (event) {
      var secretwords = null;

      pressedKeys.push(event.key);

      // Get the last 5 characters because easter egg words consist of 5 words.
      // "magic" is the easter egg words.
      secretwords = pressedKeys.slice(-easterEgg.length).join('');

      if (secretwords === easterEgg) {
        // Add rainbow or unicorn to the screen.
        cornify_add();

        // Empty array if the secret words correct.
        pressedKeys.splice(0);
      }
    });
  })(window, undefined);
</script>
