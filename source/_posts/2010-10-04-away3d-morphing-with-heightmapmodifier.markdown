---
layout: post
title: "Away3D Morphing with HeightMapModifier"
date: 2010-10-04 07:38
comments: false
categories: [archive, away3d, heightmap, heightmapmodifier]
published: true
---

<p style="text-align: center;"><a href="/demos/away3d_HeightMapModifier/away3d_HeightMapModifier.html" class="fancybox.iframe"><img title="away3d_HeightMapModifier" src="/images/hmm.jpg" alt="" width="560" height="417" /></a></p>

&rarr; <a href="/demos/away3d_HeightMapModifier/away3d_HeightMapModifier.html">Click here</a> or the image above for the demo.
&rarr; View the <a href="/demos/away3d_HeightMapModifier/srcview/index.html">source code</a>.

As usual, shortly after finishing an Away3D demo an Away3d dev (this time <a href="http://www.closier.nl/blog/" target="_blank">Fabrice Closier</a>) suggests a better way to do it.  In my previous 2 demos I created fluid and morphing effects on planar meshes using a modified version of the SkinExtrude class.

As per Fabrice's suggestion, this time I did the same using the HeightMapModifier class.  No modifications to Away3D source code necessary and it works on any mesh, planar or otherwise.  In this example I apply dynamic height maps to a sphere to create some pretty wild meshes.  Be sure to toggle to wireframe mode so that you can get a good look at how the vertices move with each height map transition.  Here's a snippet of how it works:

``` as3
[Embed("heightmap.jpg")] private var hmImage:Class;

var heightData:BitmapData = Cast.bitmap(hmImage);
var sphere:Sphere = new Sphere();
var heightMapModifier:HeightMapModifier = new HeightMapModifier(sphere, heightData);

// offset determines the minimum height value of each vertice
heightMapModifier.offset = 300;

// scale is the multiplier for the calculated height values
heightMapModifier.scale = ELEVATION_HEIGHT;

// execute the modifier
heightMapModifier.execute();
```

One other cool note to remember is that you can also use negative values for scale.  By doing so you can create indents rather than bumps on your mesh.  See what happens when you turn the "Elevation height" all the way down on this demo.

Also in the example I utilize the EnviroBitmapMaterial to give our target mesh a shiny, reflective appearance.  True reflection is very processor intensive and is outside the realm of feasibility right now for 3D Flash.  But by using environment materials, we can "fake" a reflective surface by using an environment map that closely matches the Away3D scene.  In this case the environment map I used for the EnviroBitmapMaterial is one of the images I used to create the skybox for the scene.  You'll notice the reflective effect even more as the mesh morphs or when you orbit around it.

There you have it, mesh morphing and reflective materials in Away3D.  With a little luck, this'll be the last time you have to hear me talk about it for a while!