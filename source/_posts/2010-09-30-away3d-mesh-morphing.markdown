---
layout: post
title: "Away3D Mesh Morphing"
date: 2010-09-30 08:50
comments: false
categories: [archive, away3d, heightmap, morph]
published: true
---

<p style="text-align: center;"><a href="/demos/away3d_morph/away3d_morph.html" class="fancybox.iframe"><img title="away3d_morph" src="/images/morph.jpg" alt="" width="561" height="355" /></a></p>

→ <a class="fancybox.iframe" href="/demos/away3d_morph/away3d_morph.html">Click here</a> or the image above for the demo.
→ View the <a href="/demos/away3d_morph/srcview/index.html">source code</a>.

As I have a way of doing, I immediately started working on a better demo upon finishing the last one on height maps in Away3D.  In this demo I use simple bitmap transitioning and my modified Away3D SkinExtrude class (SavageLookSkinExtrude) to create a morphing effect.  Basically one mesh's vertices will smoothly transition to the position of the next mesh's vertices based on the given height maps.

I mentioned <a href="http://exey.ru/blog/home/fluid-simulation-pv3d-and-away3d" target="_blank">Exey Panteleev's fluid simulation in PaperVision3D and Away3D</a> in my last post as a method superior to dynamic height maps for creating a flowing, fluid mesh in Away3D.  I still stand by the point.  But as shown in this demo, dynamic height maps offer many more possibilities as provided by the control you have over the 2D height maps.  In fact, you can have a designer, with no knowledge of Away3D of 3D math, create your height maps and you can handle the morphing.

The shapes you can morph are only limited by your imagination... OK, that's not entirely true.  The shapes will be limited by your ability to create, or find, height maps that suit your needs.  Also, with this method you are limited to morphing the plane that is the base of the SkinExtrude, or in this case the SavageLookSkinExtrude.  Morphing other 3D meshes or primitives is beyond the scope of this technique, and to be honest, beyond my expertise at this point in time.

Even with those limitations, though, this method offers some really eye catching dimension to the toolkit of a hopelessly code driven 3D artist like myself.  Play around with it and let me know if you come up with something cool.  I'd love to see this method work with some more interesting height maps, like facial maps.

<strong>NOTE:</strong> I'm currently inquiring on the <a href="http://groups.google.com/group/away3d-dev/browse_thread/thread/f5dd17752c1d051f" target="_blank">Away3D Dev list</a> how to get the subdivision size of the SkinExtrude smaller so that I can get more accuracy and precision.  Unfortunately as it stands triangles start to disappear when the subdivision size goes lower than 20.  I'll update this post if we come up with a solution.  Please let me know if you come up with one yourself.