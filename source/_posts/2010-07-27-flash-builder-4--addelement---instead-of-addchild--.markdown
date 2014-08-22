---
layout: post
title: "Flash Builder 4: addElement() instead of addChild()"
date: 2010-07-27 07:56
comments: false
categories: [archive, flex 4, flash builder 4, actionscript3, as3]
published: true
---

Here's a quick tip for those of you who are also switching to Flex 4.x/Flash Builder 4 from Flex 3.x/Flex Builder 3.  In the past when you wanted to add a Flash DisplayObject to the main Application canvas you'd wrap the DisplayObject in a UIComponent, then add the UIComponent to the Application as a child, like this:

<pre style="background:#cccccc;"><code style="color:#000000; font-weight:bold; font-size:1.1em;">var sprite:Sprite = new Sprite();
var ui:UIComponent = new UIComponent();
ui.addChild(sprite);
this.addChild(ui);</code></pre><br>

Try that in Flash Builder 4 and you'll encounter a fun error that looks like this:

<pre style="background:#cccccc;"><code style="color:#000000; font-weight:bold; font-size:1.1em;">Error: addChild() is not available in this class. Instead, use
addElement() or modify the skin, if you have one.</code></pre><br>

To resolve it, simply change the last line of the previous code to use addElement() instead (change in <span style="color: #ff0000;">red</span>):

<pre style="background:#cccccc;"><code style="color:#000000; font-weight:bold; font-size:1.1em;">var sprite:Sprite = new Sprite();
var ui:UIComponent = new UIComponent();
ui.addChild(sprite);
<span style="color: #ff0000;">this.addElement(ui);</span></code></pre><br>