---
layout: post
title: "ShadowBox JS for Wordpress"
date: 2010-08-17 21:23
comments: false
categories: [archive, wordpress]
published: true
---

Just a quick update to let you know that my Flash demos will be from now on be displayed in <a href="http://www.shadowbox-js.com/" target="_blank">ShadowBox.js</a> via the <a href="http://sivel.net/wordpress/shadowbox-js/" target="_blank">ShadowBox JS Wordpress plugin</a>.  Its a lightweight javascript library that allows you to show all kinds of media on your website in a slick popup window.  You've probably seen them before on video and image gallery sites.

While the ShadowBox JS plugin will handle all your images, videos, SWFs, etc... by default, I prefer to manually determine which media will utilize it.  And to do so, its as simple as adding "rel=shadowbox" to your anchor tags, which I use in my <a href="http://savagelook.com/blog/code/box2dflashas3-fun">Box2D demo post</a>:

``` html
<a rel="shadowbox;height=600;width=800;"
    href="http://savagelook.com/demos/box2d/box2d.swf"
    target="_self">
  <img class="  " title="Box2D demo"
         src="http://savagelook.com/images/box2d_full.jpg"
         alt="Box2D demo" width="516" height="487" />
</a>
```

I avoided pre-built blogs for the longest time because I'm a ridiculously customization driven programmer, but with what Wordpress has available for free, I wonder why I wasn't using it all along.  I highly suggest ShadowBox.js for your Wordpress blog or any website that needs a little extra eye-catching flair.  And let's face it, if you've been around my blog for any amount of time, it's all about eye candy.