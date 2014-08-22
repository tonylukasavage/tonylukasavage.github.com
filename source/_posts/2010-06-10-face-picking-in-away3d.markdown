---
layout: post
title: "Face picking in Away3D"
date: 2010-06-10 22:43
comments: false
categories: [archive, away3d, code demos, face picking, screenvertex, blogroll]
published: false
---

<p style="text-align: center;"><a href="/demos/face_picking/sandbox.html" target="_self" rel="shadowbox;height=600;width=800;"><img class="aligncenter size-full wp-image-21" title="face_picking" src="/images/face_picking.jpg" alt="" width="445" height="331" /></a></p>

Here's a quick demo of individual face picking and manipulation in Away3D.  Using your mouse you can click to select any visible face of the sphere to change its color, as well as receive information about the face itself.  The face's number, 3D coordinates, and screen coordinates will appear in the upper left hand portion of the view.

Hopefully you'll find it useful.  As usual, you can right click and select "view source" to see the source code for the demo.

<span style="text-decoration: underline;">Featured Away3D code</span>
<ul>
	<li>away3d.cameras.Camera3D.screen()</li>
	<li>away3d.core.draw.ScreenVertex</li>
	<li>away3d.core.draw.DrawTriangle</li>
	<li>away3d.core.base.Mesh.faces</li>
</ul>