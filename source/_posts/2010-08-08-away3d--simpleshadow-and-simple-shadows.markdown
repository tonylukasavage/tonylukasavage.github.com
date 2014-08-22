---
layout: post
title: "Away3D: SimpleShadow and Simple Shadows"
date: 2010-08-08 23:37
comments: false
categories: [archive, away3d, shadows, simpleshadow]
published: true
---

<p style="text-align: center;"><a href="/demos/shadows/Shadows.html" class="fancybox.iframe"><img title="shadows" src="/images/shadows.jpg" alt="" width="441" height="302" /></a></p>

<p style="text-align: left;"><strong>Click the above picture for a demo.  Right click on the demo to view source.</strong> Be sure to pay close attention to the apply() and positionPlane() methods of SimpleShadow.</p>

<p style="text-align: left;">You want to quickly add perspective and depth to a scene?  Look no further than shadows.  Shadows can make a minimalistic scene look fantastic.  Take a look at <a href="http://flashten.com/" target="_blank">the website of Peter Kapelyan</a>, one of the Away3D's developers, and you'll see what I mean.  Luckily, in Away3D they are easily available in more than one form.  Note, though, that shadows in Away3D are not actually created by light sources as this would be extermely expensive in terms of performance.</p>

<p style="text-align: left;">The above demo shows Away3D's built-in SimpleShadow class (left) vs. a shadow created simply by adding a plane with a shadow BitmapMaterial (right).  Both are pretty easy to do, and both have their pros and cons:</p>

|                                 | SimpleShadow | BitmapMaterial method |
|---------------------------------|--------------|-----------------------|
| Built into Away3D               | X            |
| Shadow confirms to object shape | X            | specific to object
| Fast performance                |              | X
| Shadow handles rotation         | X            | only one one axis
| Handles translation             | X            | X
| Handles scaling                 | X            | needs to be added
| Handles distance                | X            | needs to be added

<p style="text-align: left;">"Shadow conforms to object shape" means that no matter what type of 3D object you are applying the SimpleShadow to, the shadow will accurately represent its overall shape.  With the BitmapMaterial method the shadow image must be created specifically for a particular 3D object to maintain an accurate representation.  So for a cube you need to create a square shadow image, for a sphere you need to create a circle shadow, and so on.</p>

<p style="text-align: left;">By "needs to be added" I mean that there's no reason this functionality could not be added to the BitmapMaterial method.  The reason its not there now is the reason that SimpleShadow won't perform as well as the BitmapMaterial method.  All those extra calculations and shadow redrawing are what will slow down a scene that has one too many SimpleShadows.</p>

The clear winner might appear to be SimpleShadow, but if functionality always won over performance we wouldn't have a need for Away3DLite.  In general, if you have a scene with only a few shadows and you would like those shadows to appear realistic relative to the object casting them, use SimpleShadow.  If performance is the main concern, like in a scene with many objects casting a shadow, the BitmapMaterial method would likely suit you best.

These are the 2 methods I've seen for creating shadows in Away3D, but there may be others.  If you find any, let me know.  Otherwise, enjoy!

<strong>UPDATE</strong>: I conversed with SimpleShadow's creator, Fabrice Closier, and he was confused as to why I said SimpleShadow's performance was slower.  I should clarify that SimpleShadow is slower only when the shadow needs to be redrawn frequently with the apply() method.  In a still scene or when the shadows in the scene do not often need to be redrawn, the performance should be very similar to that of the BitmapMaterial method.