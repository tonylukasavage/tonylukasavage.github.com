---
layout: post
title: "Away3D: Carousel Gallery"
date: 2010-08-06 22:09
comments: false
categories: [archive, away3d, carousel, gallery]
published: true
---

<p style="text-align: center;"><a href="/demos/carousel/sandbox.html" class="fancybox.iframe"><img title="carousel" src="/images/carousel.jpg" alt="" width="431" height="322" /></a></p>

At the request of one of my readers (a list that is probably about 12 people long), here is a demo and source code for the carousel gallery included in the 3d version of savagelook.com shown in my last blog post.  It's a customizable ring of planes that can display any type of away3d material, in this case BitmapMaterials.  You simply need to pass in an array of materials during initialization and the CarouselGallery handles the rest.

<p style="text-align: left;">This example uses a simple rotation in the render loop, but my 3d savagelook.com example uses mouse interaction to make it cycle.  You could even add left and right arrows if you wanted to have it move one image in those respective directions.  You could achieve this by simply rotating along the Y axis by a number of degress equal to 360 divided by the number of planes in the carousel.</p>

<p style="text-align: left;">I hope anyone else who wanders tot his site finds it useful or inspirational for their own work.  Oh, and the time to completion for the first code request I received was about a day and half.  So if you have any ideas or requests for me, feel free to send them along in a comment or email and I'll get to them as soon as possible.  People's feedback is what keeps me active and on my toes with this stuff.</p>