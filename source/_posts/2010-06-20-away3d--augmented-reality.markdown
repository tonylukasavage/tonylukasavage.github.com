---
layout: post
title: "Away3D: Augmented Reality"
date: 2010-06-20 21:49
comments: false
categories: [archive, away3d, augmented reality, flartoolkit, flarmanager]
published: true
---

<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="425" height="350" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"><param name="src" value="http://www.youtube.com/v/PYBgPjxeQ-8" /><embed type="application/x-shockwave-flash" width="425" height="350" src="http://www.youtube.com/v/PYBgPjxeQ-8"> </embed></object>

Here's a quick demo I did of using <a href="http://en.wikipedia.org/wiki/Augmented_reality" target="_blank">augmented reality</a> in Away3D.  The quick description is that your webcam is used to identify the position and orientation of the marker (which I'm holding).  With these values identified, <a href="http://www.libspark.org/wiki/saqoosha/FLARToolKit/en" target="_blank">FLARToolkit </a>and <a href="http://words.transmote.com/wp/flarmanager/" target="_blank">FLARManager </a>are used to translate your Away3D scene and objects relative to the marker.  You are adding interaction into your Away3D apps using natural movements rather than the typical mouse and keyboard combos.

While the demo itself doesn't give a great picture of the practical applications, they are showing up more quickly then you might imagine.  One particularly interesting example is the Layar browser, which uses global positioning rather than marker identification to make its alterations to reality.  Rather than try to explain it, check it out here:

<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="425" height="350" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"><param name="src" value="http://www.youtube.com/v/b64_16K2e08" /><embed type="application/x-shockwave-flash" width="425" height="350" src="http://www.youtube.com/v/b64_16K2e08"></embed></object>

And I'm sure plenty more applications are on the way.  Want to get on board and start churning out your own augmented reality (AR) apps in Flash?  Check out <a href="http://www.libspark.org/wiki/saqoosha/FLARToolKit/en" target="_blank">FLARToolkit </a>and <a href="http://words.transmote.com/wp/flarmanager/" target="_blank">FLARManager </a>for yourself.  You may also want to take a look at the original <a href="http://www.hitl.washington.edu/artoolkit/" target="_blank">ARToolkit</a>, which is based in C++, or <a href="http://nyatla.jp/nyartoolkit/wiki/index.php?NyARToolkit%20for%20Java.en" target="_blank">NyARToolkit</a>, the Java/C# port on which FLARToolkit is based.

Too lazy for all that research?  Stay tuned and I'll post up the source from the bare bones example I had in the first video of this post.