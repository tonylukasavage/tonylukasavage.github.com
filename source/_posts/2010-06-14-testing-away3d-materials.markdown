---
layout: post
title: "Testing Away3D Materials"
date: 2010-06-14 17:12
comments: false
categories: [archive, away3d, code demos, materials]
published: false
---

<p style="text-align: center;"><a href="http://www.savagelook.com/demos/materials/sandbox.html" rel="shadowbox;height=600;width=800;"><img class="aligncenter size-full wp-image-31" title="materials" src="http://savagelook.com/blog/wp-content/uploads/2010/06/materials.jpg" alt="" width="451" height="335" /></a></p>
In an effort to learn more about the vast array of materials available in Away3D I put together this little demo.  It's just an adjustable sphere that you can change the segment count of with a drop down for selecting materials to apply to it.  It's got just one light: a DirectionalLight3D pointing straight at it.  This, of course, only affects the shaded materials as you can see in the demo.  By the way, anyone know why I'm getting no color on the ShadingColorMaterial?

Discussion on ShadingColorMaterial not working in Away3D 3.5: <a href="http://groups.google.com/group/away3d-dev/browse_thread/thread/aaf9d9c73a12473f/b49add76061e9388">http://groups.google.com/group/away3d-dev/browse_thread/thread/aaf9d9c73a12473f/b49add76061e9388</a>

### Featured Away3D Code:

* away3d.materials.AnimatedBitmapMaterial
* away3d.materials.VideoMaterial
* away3d.materials.PhongColorMaterial
* away3d.materials.ShadingColorMaterial
* away3d.materials.Dot3BitmapMaterialF10
* away3d.materials.Dot3BitmapMaterial
* away3d.materials.WireframeMaterial
* away3d.materials.WireColorMaterial
* away3d.materials.ColorMaterial
* away3d.lights.DirectionalLight3D

As usual, right click to view the source of the demo.
