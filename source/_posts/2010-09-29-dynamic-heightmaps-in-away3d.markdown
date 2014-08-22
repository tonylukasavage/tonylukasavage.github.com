---
layout: post
title: "Dynamic Heightmaps in Away3D"
date: 2010-09-29 07:42
comments: false
categories: [archive, away3d, heightmap, fluid]
published: true
---

<p style="text-align: center;"><a href="/demos/away3d_heightmap/away3d_heightmap.html" class="fancybox.iframe"><img title="away3d_heightmap" src="/images/water.jpg" alt="" width="561" height="420" /></a></p>

→ Click the image above for the demo (or <a class="fancybox.iframe" href="/demos/away3d_heightmap/away3d_heightmap.html">click here</a>).
→ View the <a href="/demos/away3d_heightmap/srcview/index.html">source code</a>.

While there might be other simpler ways to do it (<a href="http://code.google.com/p/as3dmod/" target="_blank">AS3Mod</a> comes to mind), I found myself working with the Elevation and SkinExtrude classes in Away3D and created some cool flowing effects.  The basic idea is that you dynamically create a gradient bitmap in AS3, tween its appearance on each frame, and use that bitmap as a heightmap for a SkinExtrude.  This will give you the effects shown in the demo above.

I had to make a few slight changes to the existing SkinExtrude class in order to make it more efficient to reuse in each frame.  This is the <a href="/demos/away3d_heightmap/srcview/" target="_self">SavageLookSkinExtrude class</a> found in the source code.  It is identical to the SkinExtrude class found in away3d.extrusions, except for the annotated sections that allow me to generate the heightmap extrusion more than once per instantiation.

The inspiration for this demo came from 2 places.  The first is <a href="http://exey.ru/blog/home/fluid-simulation-pv3d-and-away3d" target="_blank">Exey Panteleev's (much better) fluid simulation</a>. The code displayed on his page is for PaperVision3D, but there's a link for the Away3D code as well.  All things being equal, you should be following the footsteps of Exey since his solution performs much better than mine.   I just did this demo cause frankly I'm not that good at 3D math and I could barely understand the math involved in his solution. The only real advantage of my method is that you have more control over the pattern as it is driven by the bitmap.

My other source of inspiration, as well as pure tutelage with Away3D height maps and SkinExtrude, is <a href="http://jasonbejot.com/?p=307" target="_blank">Jason Bejot's "Create Terrain in Away3D" tutorial</a>.  Jason gives a very easy to follow and concise look at how you can use Away3D's Elevation and SkinExtrude classes in conjunction with grayscale height maps to create realistic terrain.  I basically just took his method and put it in motion.

As you can see, there's more than one way to skin this cat.  Play around with it and see what kind of creations you can make with heightmaps and SkinExtrude.  I don't have the time to play with it now, but I feel like bitmaps given the PixelBender treatment might create some pretty wild 3D objects.