---
layout: post
title: "Away3dLite: Bitmaps and BlendModes"
date: 2010-08-10 12:20
comments: false
categories: [archive, away3d, away3dlite, filters, blending]
published: true
---

<p style="text-align: center;"><a href="/demos/image3d/sandbox.html" class="fancybox.iframe"><img title="face_picking" src="/images/image3d1.jpg" alt="" width="433" height="322" /></a></p>

I finally took some time away from Away3D... and dove into Away3DLite!  Away3dLite is quite simply your choice when you need performance over functionality.  It strips a lot of the heavier features from Away3D and leverages improvements in Flash Player 10 directly.  For this reason it's only compatible with Flash Player 10 (sorry 2.x users).  Away3dLite in the right hands, though, is no slouch in the visual flair department.

In this demo I take a JPG, slice and dice it up into cubes, apply a color material to each cube that is the "color average" of a chunk of BitmapData, then let you change the background color and blend mode to get some interesting visual effects.  The demo below has almost 5000 faces and 400 color materials, which would likely bring Away3D down to a crawl in terms of frame rate.  With Away3dLite, though, I'm currently getting a steady ~27 frame per second!  Great performance and cool effects all rolled into one great package.

You can right click and "view source" on the demo to get a look at exactly what I did, but there's one section of code in particular I'd like to point out here.  In Away3D, if you want to apply Flash filters and blending, you needed to do the following:

``` as3
var object:Cube = new Cube();
object.ownCanvas = true;
object.filters = [new GlowFilter()];
object.blendmode = BlendMode.ADD;
view.scene.addChild(object);
```

In Away3DLite, things are slightly different.  In Away3DLite, objects don't have their own canvas by default, I assume as a performance boost.  To give your objects a canvas and achieve the same as the above code, you have to create your own canvas in the layer property of Object3D and add it to the view, like this:

``` as3
var object:Cube6 = new Cube6();
object.layer = new Sprite();
object.layer.filters = [new GlowFilter()];
object.layer.blendmode = BlendMode.ADD;
view.addChild(cube.layer);
view.scene.addChild(cube);
```

Hopefully this saves somebody switching from Away3D to Away3DLite a few minutes (or hours).

<strong><span style="text-decoration: underline;">Featured Away3dLite Code</span></strong><span style="text-decoration: underline;"><strong>e: </strong></span>
<ul>
	<li>flash.display.BitmapData.getPixel()</li>
	<li>flash.display.BlendMode</li>
	<li>away3dlite.primitives.Cube6</li>
	<li>away3dlite.core.base.Object3D.layer</li>
</ul>