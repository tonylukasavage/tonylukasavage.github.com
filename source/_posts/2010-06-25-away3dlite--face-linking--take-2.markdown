---
layout: post
title: "Away3dLite: Face linking, take 2"
date: 2010-06-25 21:51
comments: false
categories: [archive, away3d, away3dlite, facelink]
published: true
---

<p style="text-align: center;"><a href="/demos/normals_align/sandbox.html" class="fancybox.iframe"><img title="normals_align" src="/images/normals2.jpg" alt="" width="433" height="320" /></a></p>

It was great.  I had a moment of triumph.  In my meager 3D and Away3D experience I managed to get face linking functionality into Away3DLite.  Proud of myself, I posted my success at the <a href="http://groups.google.com/group/away3d-dev/browse_thread/thread/960780192fbb77bd" target="_blank">Away3D Dev</a> list.  But my party was soon rained on by one of the Away3D developers, Peter Kapelyan, who immediately informed that my linked objects weren't aligning as they should be.  It felt a lot like that scene in National Lampoon's Christmas Vacation where Clark finally gets the lights lit on his house, only to have his father-in-law inform him that the little lights weren't twinkling...</p>
<p style="text-align: center;"><object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="425" height="350" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"><param name="src" value="http://www.youtube.com/v/nsaxNehMibg" /><embed type="application/x-shockwave-flash" width="425" height="350" src="http://www.youtube.com/v/nsaxNehMibg"></embed></object>

<p style="text-align: left;">I know Peter, thanks for noticing.</p>
<p style="text-align: left;">To that end, the above demo is the next revision of my prior face linking code.  This time, I got alignment working.  Because I am 3D math deficient (I'm working on it) I was unable to implement the alignment properly without using a container object for the source and the linked objects.  Someone a little more math savvy can surely make use of the upAxis parameter of the lookAt() function to make it work, but I need some studying before I can do it on my own.  Shawn McInerney from the dev list offered up <a href="http://moosemouse.com/up-object-test.html" target="_blank">a potential solution</a>, but it's a little over my head now.  Perhaps someone else perusing this blog can make use of it.</p>
<p style="text-align: left;">I hope Peter didn't take this the wrong way, as I have an abrasive sense of humor that doesn't translate well to written word.  Just in case, <a href="http://www.flashten.com/" target="_blank">here's a link to his site</a> which is extremely clean, cool, slick, and a whole bunch of other adjectives that equal up to awesome.</p>