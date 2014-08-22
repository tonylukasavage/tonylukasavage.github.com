---
layout: post
title: "Reflection in Away3D, Take 2"
date: 2010-09-14 07:33
comments: false
categories: [archive, actionscript3, away3d, reflection]
published: true
---

<p style="text-align: center;"><a href="/demos/reflect_camera2/reflect_camera.html" class="fancybox.iframe"><img title="reflect_camera" src="/images/bigreflect.jpg" alt="" width="574" height="346" /></a></p>

About 13 seconds after I finished my last "Reflections in Away3D" demo I thought up a much better way to do it.  I guess that's what happens when you apply loosely applicable code to a new scenario.  This method, while a bit more resource intensive, is MUCH more functional. Instead of doing a simple Bitmap inversion with a gradient mask and locking the view to only 2 out of 3 planes at a time, I use Away3D Plane objects and multiple views/cameras to create real-time reflections.  This is a 3D engine after all.

The revision I'm presenting here is just a proof of concept.  In the near future I hope to release a class that encapsulates reflections much like SimpleShadow in Away3D.  You'll recognize SimpleShadow from the my Away3D shadows demo, which was written by the bad-ass Away3D dev and <a href="http://www.closier.nl/prefab/" target="_blank">Prefab</a> creator <a href="http://blog.closier.nl/" target="_blank">Fabrice Closier</a>.  Inspiration for this code definitely comes from his motivational work.  The reflections aren't perfect, the overlapping isn't perfect, but it does help to add a little more dimension to the scene.

<strong>UPDATE:</strong> Normally I would release the source code, but in my ignorance and zeal to get this done I totally missed the <a href="http://www.lidev.com.ar/?p=161" target="_blank">Away3D ReflectivePlane class</a>.  It is designed to do exactly what this plane does using a lot more math, but only one additional camera/view per reflective plane.  It also does realistic reflections relative to the position of the viewing camera.  In other words, way better than what I was offering!

The only problem with ReflectivePlane is that it was designed a few Away3D revisions back and now has some intermittent initialization glitches.  It seemed to me to be better for the Away3d community that I try to recruit ReflectivePlane's author, <a href="http://www.lidev.com.ar/" target="_blank">Alejandro Santander (AKA, "Li")</a>, to help troubleshoot the problems rather than muddy the waters by adding another solution to an already solved scenario.  When we have a resolution to this problem, I'll be sure to let you know... in the form of a demo WITH source code this time!