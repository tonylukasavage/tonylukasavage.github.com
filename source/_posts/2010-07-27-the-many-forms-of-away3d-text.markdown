---
layout: post
title: "The Many Forms of Away3D Text"
date: 2010-07-27 22:28
comments: false
categories: [archive, away3d, text, textfield3d, textextrusion, actionscript3, as3]
published: true
---

<p style="text-align: center;"><a href="/demos/text_demo/text_demo.html" class="fancybox.iframe"><img title="text_demo" src="/images/text.jpg" alt="" width="465" height="331" /></a></p>

<a href="http://savagelook.com/demos/text_demo/srcview/index.html" target="_self">Click here for the source code</a> or click on the demo above then right click and select "view source."
Also, <a href="http://savagelook.com/demos/text_demo/srcview/source/f.fla" target="_self">here's a link to the FLA for CS5</a> that can be used to publish the SWF that will contain your target font.  Simply open the FLA in Flash Pro, change the font of the "test" text on the stage, click "Embed" in the character panel to make sure the right font is set, and then publish your SWF.  The resulting SWF will contain your ready-to-be-embedded font.  If the following steps weren't goos enough, let me know.  If I get a complaint or two I'll put up a screenshot walkthrough for the whole process.

Text comes in many forms in Away3D and they all have their own advantages and disadvantages.  Here's a quick run down of the various methods I know for generating text in Away3D, which are all displayed in the demo above.

<strong><span style="text-decoration: underline;">PNG + BitmapMaterial + Plane
</span><span style="font-weight: normal;">With this method, you take a PNG (or any other image format Away3D handles) image file containing the text you would like to display, create a BitmapMaterial from it and apply the BitmapMatierial to a Plane.</span></strong>

<strong><span style="font-weight: normal;"> <strong>Pros</strong>: Fast rendering
<strong>Cons</strong>: Static text, quality depends on image resolution, text is flat </span></strong>

<strong><span style="font-weight: normal;"><strong><span style="text-decoration: underline;">Textfield + MovieClip + MovieMaterial + Plane
</span></strong>Here we create a Textfield with our text and add it to a MovieClip.  We then create a MovieMaterial from the MovieClip and apply it to a plane as in the last example.</span></strong>

<strong><span style="font-weight: normal;"> <strong>Pros</strong>: Fast rendering, dynamic text
<strong>Cons</strong>: Text is still flat</span></strong>

<strong><span style="text-decoration: underline;">TextField + Sprite + BitmapMaterial + Plane
</span></strong>Almost identical to the last example, except this time we create BitmapMaterial from a Sprite.

<strong>Pros</strong>: Faster rendering, dynamic text
<strong>Cons</strong>: Text is still flat

<strong><span style="text-decoration: underline;">TextField3D
</span></strong>We use the TextField3D class in conjunction with wumedia.vector.VectorText.extractFont() and a specially created SWF file that contains the embedded font we want to use in our example.

<strong>Pros</strong>: Vector quality text, dynamic text
<strong>Cons</strong>: Text is still flat, can only use embedded font

<strong><span style="text-decoration: underline;">TextField3D + TextExtrusion
</span></strong>We expand on the last example by using the TextExtrusion class with the TextField.  This creates a 3 dimensional outline of our vector text finally giving us some depth.

<strong>Pros</strong>: Vector quality text, dynamic text, 3 dimensional
<strong>Cons</strong>: Can only use embedded font, fonts have arbitrary "winding" when drawn so determining which side of the text is the "back side" is tricky and can screw up shading materials.

<strong><span style="text-decoration: underline;">3DS Model (high and low poly)
</span></strong>You can always forgo the ins and outs of dynamic text and do it yourself in the modeling program of your choice.  In this case I used 3DS Max 2010 to create low and high(er) poly text.

<strong>Pros</strong>: Full control over appearance of text
<strong>Cons</strong>: Text is totally static

So there's the list of methods I'm aware of.  You got any more?  See anything glaringly stupid above?  Let me know either way.