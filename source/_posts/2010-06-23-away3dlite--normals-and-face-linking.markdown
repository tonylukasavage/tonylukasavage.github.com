---
layout: post
title: "Away3dLite: Normals and Face Linking"
date: 2010-06-23 23:19
comments: false
categories: [archive, away3d, code demos, away3dlite, facelink, normals]
published: false
---

<p style="text-align: center;"></p>
<p style="text-align: center;"><a href="http://www.savagelook.com/demos/normals/sandbox.html" rel="shadowbox;height=600;width=800;"><img class="aligncenter size-full wp-image-81" title="normals" src="http://savagelook.com/blog/wp-content/uploads/2010/06/normals1.jpg" alt="" width="432" height="323" /></a></p>
The above is a demo of face linking implemented in Away3dLite (right lick to view source).  As you'll see in the demo, face linking allows us to "link" a 3D object to another, rendering it at the center of the source's face and then moving along the face's normal by a given offset.  All credit goes to the original author of the Away3D FaceLink class, as my work was just a minimal modification to port it to Away3DLite.

One thing to note is that this demo required a modification to the Face class, found in away3dlite.core.base.Face.  I simply added a calculated normal and center for the face at creation time and made it available as a public variable.  It's not altogether the cleanest code I've written, but it gives you a good idea of how you might use face linking in your own Away3DLite application.

Just for fun, here's a couple links to other flash apps I've seen that make cool use of faces, vertices, and normals:
<ul>
	<li><a href="http://www.everydayflash.com/blog/index.php/2009/03/16/3d-experiments-with-flash-player-10-and-as3dmod/" target="_blank">EveryDay3D - 3D experiments with Flash Player 10 and AS3Dmod</a></li>
	<li><a href="http://www.closier.nl/blog/?p=85" target="_blank">Fabrice Closier - Away3D FaceLink</a></li>
</ul>