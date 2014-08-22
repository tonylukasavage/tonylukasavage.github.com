---
layout: post
title: "Away3D Motion Blur"
date: 2010-10-14 08:47
comments: false
categories: [archive, actionscript3, away3d, motion blur, tweenlite]
published: true
---

<p style="text-align: center;"><a href="/demos/away3d_motion/away3d_motion.html" class="fancybox.iframe"><img title="away3d_motion" src="/images/motionblur.jpg" alt="" width="445" height="331" /></a></p>

→ <a class="fancybox.iframe" href="/demos/away3d_motion/away3d_motion.html">Click here</a> or the image above for the demo.
→ View the <a href="/demos/away3d_motion/srcview/index.html">source code</a>.

This was a just for fun idea that popped into my head yesterday.  I'm always trying to find programmatic ways to add to the appeal of some of my 3D effects.  What better way to jazz up some 3D objects than to view them as though you're wasted?!

I've got a lot of irons in the fire lately, so this one was quick and dirty.  Basically I create an extra View3D in which to render the "blurred" objects.  I take a snapshot of this view (50 in fact), overlay it on a separate background View3D, and use <a href="http://www.greensock.com/tweenlite/" target="_blank">TweenLite</a> to gradually fade the opacity of each snapshot.

In the end you get this pretty neat motion blur effect on your 3D objects.  There's a lot more that could be added to this to spice it up.  If I had more time to devote to it I would add a BlurFilter toggle, which makes the motion blur look better but affects performance.  Other settings you could vary to alter the effect are:
<ul>
	<li>The speed of the objects</li>
	<li>The number of snapshots taken</li>
	<li>How fast the snapshots fade</li>
	<li>The scale of the fading snapshots</li>
</ul>
and I'm sure there's more.  Try it out.  You could give your scenes a truly inebriated look by using only one View3D.  By doing this you'll motion blur the entire viewable scene.  Maybe I'll strap on some Away3D beer goggles in the future and give that a shot!  Let me know if you beat me to it.