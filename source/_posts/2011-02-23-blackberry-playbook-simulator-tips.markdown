---
layout: post
title: "Blackberry Playbook Simulator Tips"
date: 2011-02-23 09:41
comments: false
categories: [archive, playbook, mobile, blackberry]
published: true
---

<h1><span style="font-weight: bold; font-size: 16px;">Overview</span></h1>
Interested in <a href="http://us.blackberry.com/playbook-tablet/?CPID=KNC-kw328392_p6&amp;HBX_PK=rim|005248ec-5d49-ba89-6310-0000150c9969" target="_blank">Blackberry Playbook</a> development?  Well you should be if you want to <a href="http://us.blackberry.com/developers/tablet/v_offer.jsp" target="_blank">get one for free</a>.  And to get one for free, you need to develop for it before the device is even available.  How do we do that?  With the freely available <a href="http://docs.blackberry.com/en/developers/deliverables/25068/Configure_VM_BB_tablet_simulator_1347134_11.jsp" target="_blank">simulator</a>.

While Blackberry does a good job of getting you up and running with their <a href="http://docs.blackberry.com/en/developers/deliverables/25068/" target="_blank">Getting Started guide</a>, they leave a few useful tidbits out about the simulator itself.  How do you minimize apps?  How do you change the orientation of the simulator?  Before we answer that you need to know one bit of information.  The "<strong>bezel</strong>" in the simulator is the black area surrounding the actual Blacberry Playbook OS running in your VMWare virtual machine player.  This is important to know as it is the area where many useful gestures start and end for the simulator.

Now with that in mind, here's a list of items I've found so far that will help you move a little faster in your Playbook development.

<h1><span style="font-weight: bold; font-size: 16px;">Tips</span></h1>
<ul>
	<li><strong>Minimize your running app</strong> by holding the mouse button down while over the bottom bezel, then dragging it up into your app, like a touch "swipe".  The simulator doesn't have an easy, built-in way to close apps once you open them in development.  This tip will let you get back to your Playbook interface if you haven't already coded a custom close or minimize into your app.</li>
	<li><strong>Change orientation</strong> by doing the same as above, but end your "swipe" in the bottom right hand corner of your app.</li>
	<li><strong>Cycle through currently open apps</strong> by mouse "swiping" from either the left or right bezel into your app.  As you might expect this will transition you to the next open app horizontally.</li>
	<li><strong>Quickly find your simulator's IP address</strong> by clicking the hammer icon at the top of the simulator's active screen.</li>
</ul>
And that's what I've got so far.  I'll be sure to update if I find more.  Please share your own tips for the simulator as well.  Good luck and have fun with this cool new device.