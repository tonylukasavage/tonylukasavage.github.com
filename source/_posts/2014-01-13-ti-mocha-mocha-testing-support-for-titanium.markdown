---
layout: post
title: "ti-mocha: Mocha testing support for Titanium"
date: 2014-01-13 21:12
comments: true
categories: [titanium, javascript, testing, mobile]
published: true
---

{% githubrepo tonylukasavage/ti-mocha %}

The Appcelerator community has long been asking for a clear choice for unit testing. While many (including myself) have used [Jasmine](https://github.com/pivotal/jasmine), I have over time gained preference for another. [Mocha](http://visionmedia.github.io/mocha/) has quickly become my unit testing framework of choice for all node.js development, due to its stability, flexibility, and the consistently awesome work of its author, [TJ Holowaychuk](https://github.com/visionmedia). There _was_ one small problem. <!-- more -->It didn't work out of the box with Titanium. And even once you got past the critical breaking issues, you still had the fact that Titanium Studio and the [Titanium.API](http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.API) log functions weren't compatible with almost any of mocha's [reporters](http://visionmedia.github.io/mocha/#reporters).

<a class="fancybox.iframe" href="/images/timocha.png" ><img src="/images/timocha.png" style="width:50%; float:right; margin-left:10px;"></a>

But no longer. [ti-mocha](https://github.com/tonylukasavage/ti-mocha) resolves these issues and is ready for use in your Titanium apps. I'm not going to ramble on here, since pretty much everything is covered on the [documentation website](http://tonylukasavage.com/ti-mocha/), but here's the highlights:

* Full support for the mocha framework
* Compatible with the [should.js](https://github.com/visionmedia/should.js/) assertion library, which I highly recommend
* The `ti-spec` and `ti-spec-studio` Titanium reporters, optimized for terminal and Titanium Studio, respectively
* Detailed examples of how to use ti-mocha + should.js in your Titanium apps
* A bunch more, so just got check it out

You've got one less reason to not be unit testing your Titanium apps. So grab [ti-mocha](http://tonylukasavage.com/ti-mocha/), get to it, and let me know what you think.



## Resources & Links

* ti-mocha [website](http://tonylukasavage.com/ti-mocha/) and [github](https://github.com/tonylukasavage/ti-mocha)
* mocha [website](http://visionmedia.github.io/mocha/) and [github](https://github.com/visionmedia/mocha)
* jasmine [github](https://github.com/pivotal/jasmine)
* should.js [github](https://github.com/visionmedia/should.js/)
* Titanium [website](http://www.appcelerator.com/titanium/)
