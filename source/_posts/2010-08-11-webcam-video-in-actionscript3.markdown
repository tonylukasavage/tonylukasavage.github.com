---
layout: post
title: "Webcam Video in Actionscript3"
date: 2010-08-11 22:21
comments: false
categories: [archive, actionscript3, as3, webcam, video]
published: true
---

<p style="text-align: center;"><a href="/demos/webcam/webcam.html" class="fancybox.iframe"><img title="webcam" src="/images/webcamp.jpg" alt="" width="449" height="321" /></a></p>

Click the above picture for the webcam demo (webcam required).
Right click on the demo, or <a href="/demos/webcam/srcview/index.html" target="_self">click here for the source code</a>.

This is a pretty simple demo compared to some of my other stuff, but it's a key point for a lot of them.  Knowing how to use the webcam independently of an existing library can open up lots of options beside augmented reality.  For that reason, I present this small demo showing off how easy it is to do so in Actionscript3.

Here's a slightly modified excerpt from the full source code that is the meat and potatoes of the demo:

``` as3
var camera:Camera = Camera.getCamera();
camera.setQuality(0,100);
camera.setMode(800,600,60,true);

var video:Video = new Video(800,600);
video.attachCamera(camera);
addChild(video);
```

As you can see, its as simple as creating a Camera object, attaching it to a Video object and adding the Video object to the main sprite.   The demo will show you how to manipulate image quality, camera frame rate, and viewport size.  For more details on all the properties and methods of each, check out the ASDocs on <a href="http://www.adobe.com/livedocs/flash/9.0/ActionScriptLangRefV3/flash/media/Camera.html" target="_blank">Camera</a> and <a href="http://www.adobe.com/livedocs/flash/9.0/ActionScriptLangRefV3/flash/media/Video.html" target="_blank">Video</a>.

What can you do with this besides making yet another video chat application?  I don't know about you, but I'm planning an Away3DLite project that will involve multiple levels of "reflection" based on the images from the webcam.  It will be awesome.  Now I just need to figure out how I'm going to do it.  Details...