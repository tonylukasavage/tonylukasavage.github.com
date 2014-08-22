---
layout: post
title: "Reflection in Away3D"
date: 2010-08-31 15:57
comments: false
categories: [archive, away3d, actionscript3, reflection]
published: true
---

<p style="text-align: center;"><a href="/demos/reflect_away3d/reflect_away3d.html" class="fancybox.iframe"><img title="reflect_away3d" src="/images/reflect3.jpg" alt="" width="584" height="304" /></a></p>

→ <a class="fancybox.iframe" href="/demos/reflect_away3d/reflect_away3d.html">Click here</a> or the image above for the reflection demo
→ <a href="/demos/reflect_away3d/srcview/index.html">View the source code</a>

I alluded to a desire to implement reflections in Away3D in my prior post on reflections in AS3.  Well here it is.  It wasn't quite as easy of a translation as I thought it would be, but with lots of digging through the <a href="http://groups.google.com/group/away3d-dev/browse_thread/thread/4b520ebf4f7953d7/0052eb24c4178190" target="_blank">Away3D dev list</a>, as well as spotting a good example at <a href="http://www.geepers.co.uk/software/viewreflection.html" target="_blank">geepers.co.uk</a>, I managed to get a basic demo up and running.

While there's a good bit of code that goes into this demo, the secret sauce is right here:
``` as3
// must render before making the following calls
_view.render();

// find 2d bounding box of sphere
_drawn = (_view.session.getContainer(_view) as DisplayObjectContainer).getChildAt(0);
_bounds = _drawn.getRect(this);
```

What this code does is give us the DisplayObject that contains our 3D object within the given view.  We are also able to determine the bounds of the DisplayObject and its 2 dimensional position within the view.  With this information we are able to effectively create a snapshot of the visible 3d object.  From there we need to create BitmapData that is the inverse of the DisplayObject.  To do that we apply the appropriate matrix (invert the y scale) to the DisplayObject when it is drawn to BitmapData.  After that we assign the BitmapData to the display Bitmap and then position it according to the bounds of the DisplayObject.

``` as3
// redraw reflection
_bmd = new BitmapData(_drawn.width, _drawn.height, true, 0x00ffffff);
_matrix.createBox(_xscale, -_yscale, 0, _drawn.width/2, _drawn.height * _yscale / 2);
_bmd.draw(_drawn, _matrix);
_bitmapReflect.bitmapData = _bmd;
_bitmapReflect.x = _bounds.x;
_bitmapReflect.y = stage.stageHeight / 2 + _distance;
```

Finally we create an alpha gradient mask that will be applied to the Bitmap in order to give it that cool, fading reflection look.

``` as3
// redraw gradient mask for reflection
_matrix.createGradientBox(_bitmapReflect.width, _bitmapReflect.height * _yscale / 2, Math.PI / 2, 0, 0);
_bitmapReflectGradient.graphics.clear();
_bitmapReflectGradient.graphics.beginGradientFill("linear", [0xffffff, 0xffffff], [0.9, 0], [0, 255], _matrix);
_bitmapReflectGradient.graphics.drawRect(0, 0, _bitmapReflect.width, _bitmapReflect.height);
_bitmapReflectGradient.graphics.endFill();
_bitmapReflectGradient.x = _bitmapReflect.x;
_bitmapReflectGradient.y = _bitmapReflect.y;
```

And there you go, reflections in Away3D.  There are a number of limitations to this method, though:

<ul>
	<li>It can only draw reflections of objects currently visible in the view.  In fact, there should be a check on the
<em>(_view.session.getContainer(_view) as DisplayObjectContainer).getChildAt(0) </em>
call to make sure that the view contains any children.</li>
	<li>The reflection is drawn of the entire view, not just the object in question.  That's why this works best with only one object in the view.  You can use multiple views to get reflections for multiple objects.</li>
	<li>This example only does reflections of the view as its manipulated along the X &amp; Y planes.  Moving the object along the Z plane will not effect the reflection properly.  I'm sure a method utilizing planes could do better.</li>
</ul>

If those limitations don't bother you, then go to town.  If they do, be patient.  I'm working on another idea for reflection in Away3D that will be a lot more flexible, though more complex and processor intensive.

Remember how my previous blog post on shadows (of course you do) showed how you can easily enhance the 3D feel of your site?  Of course you do.  Now you can add reflections to that repetoire.  It's all about subtle changes to give your work a more polished look and feel.  Have fun and let me know if you create reflections this way, or if you have an implementation of your own.