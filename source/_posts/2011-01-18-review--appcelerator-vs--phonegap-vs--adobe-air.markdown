---
layout: post
title: "Review: Appcelerator vs. PhoneGap vs. Adobe Air"
date: 2011-01-18 08:43
comments: false
categories: [archive, mobile, appcelerator, phonegap, adobe air]
published: true
---

## Overview

<span style="font-size:18px;"><strong>UPDATE:</strong> This was originally posted January 18th, 2011. All 3 platforms have changed immensely since. </span>

I have been charged with deciding on a mobile framework for deploying a single code base to multiple devices (iPhone, iPad, Android, Blackberry).  Naturally, I was gravitating towards Adobe Air since most of my personal work these days has been in AS3.  I wanted to see what else was out there, though, and was pretty <span style="color: #ff0000;">surprised that Adobe Air wasn't my choice in the end</span>.

In addition to one other commercial platform I did not fully assess (too expensive), I looked at <a href="http://www.adobe.com/devnet/devices.html" target="_blank">Adobe Air for mobile</a>, <a href="http://www.appcelerator.com/" target="_blank">Titanium Appcelerator</a> and <a href="http://www.phonegap.com/" target="_blank">PhoneGap</a>.  All are free to use frameworks for centralized mobile development.  The gist is to be able to create apps for multiple devices off the same code base.  With iPad &amp; Blackberry support, speed to market, and the ability to use Contacts &amp; Multitouch as my critical points, I began digging.
## General Functionality
<table class="compareTable" border="1" cellspacing="0" cellpadding="0">
<tbody>
<tr class="topHeader odd">
<td width="20%"></td>
<td width="15%">Titanium Appcelerator</td>
<td width="15%">PhoneGap</td>
<td width="15%">Adobe Air for Mobile</td>
<td width="35%">Notes</td>
</tr>
<tr>
<td class="leftHeader">Android Support</td>
<td><img src="/images/yes.gif" alt="" /></td>
<td><img src="/images/yes.gif" alt="" /></td>
<td><img src="/images/yes.gif" alt="" /></td>
<td class="notes">Adobe Air requires Android 2.2+</td>
</tr>
<tr class="odd">
<td class="leftHeader">iPhone/iPad</td>
<td><img src="/images/yes.gif" alt="" /></td>
<td><img src="/images/yes.gif" alt="" /></td>
<td><img src="/images/yes.gif" alt="" /></td>
<td class="notes">Adobe Air creates iOS apps with the <a href="http://labs.adobe.com/technologies/packagerforiphone/">Packager for iPhone</a></td>
</tr>
<tr>
<td class="leftHeader">Blackberry Phone</td>
<td><img src="/images/warn.jpg" alt="" /></td>
<td><img src="/images/yes.gif" alt="" /></td>
<td><img src="/images/no.jpg" alt="" /></td>
<td class="notes">Appcelerator support is currently beta.</td>
</tr>
<tr class="odd">
<td class="leftHeader">Blackberry Playbook</td>
<td><img src="/images/warn.jpg" alt="" /></td>
<td><img src="/images/yes.gif" alt="" /></td>
<td><img src="/images/yes.gif" alt="" /></td>
<td class="notes">Appcelerator support is currently beta.</td>
</tr>
<tr>
<td class="leftHeader">Symbian</td>
<td><img src="/images/no.jpg" alt="" /></td>
<td><img src="/images/yes.gif" alt="" /></td>
<td><img src="/images/no.jpg" alt="" /></td>
<td class="notes"></td>
</tr>
<tr class="odd">
<td class="leftHeader">Palm</td>
<td><img src="/images/no.jpg" alt="" /></td>
<td><img src="/images/yes.gif" alt="" /></td>
<td><img src="/images/no.jpg" alt="" /></td>
<td class="notes"></td>
</tr>
<tr>
<td class="leftHeader">Windows Phone 7</td>
<td><img src="/images/no.jpg" alt="" /></td>
<td><img src="/images/warn.jpg" alt="" /></td>
<td><img src="/images/no.jpg" alt="" /></td>
<td class="notes"><a href="https://github.com/mrlacey/phonegap-wp7" target="_blank">phonegap-wp7</a> is a 3rd party attempt for PhoneGap.</td>
</tr>
<tr class="odd">
<td class="leftHeader">Native UI support</td>
<td><img src="/images/yes.gif" alt="" /></td>
<td><img src="/images/warn.jpg" alt="" /></td>
<td><img src="/images/warn.jpg" alt="" /></td>
<td class="notes">PhoneGap and Adobe Air both require 3rd party libraries.  PhoneGap has <a href="http://nachbaur.com/blog/native-ui-controls-in-phonegap-coming-along-nicely" target="_blank">UIControls for PhoneGap</a>.  Adobe Air has <a href="http://code.google.com/p/as3iphonecomponents/" target="_blank">as3iPhoneComponents</a> and <a href="http://xperiments.es/blog/en/as3-android-flash-components/" target="_blank">android-components</a></td>
</tr>
<tr>
<td class="leftHeader">Native code support</td>
<td><img src="/images/yes.gif" alt="" /></td>
<td><img src="/images/yes.gif" alt="" /></td>
<td><img src="/images/no.jpg" alt="" /></td>
<td class="notes">Appcelerator allows <a href="http://developer.appcelerator.com/doc/mobile/guides" target="_blank">module development</a>. PhoneGap uses <a href="https://github.com/phonegap/phonegap-plugins" target="_blank">custom Javascript handlers</a>.</td>
</tr>
<tr class="odd">
<td class="leftHeader">Desktop deployment</td>
<td><img src="/images/yes.gif" alt="" /></td>
<td><img src="/images/warn.jpg" alt="" /></td>
<td><img src="/images/yes.gif" alt="" /></td>
<td class="notes">PhoneGap has 3rd party libraries on Github: <a href="https://github.com/phonegap/phonegap-mac" target="_blank">phonegap-mac</a> &amp; <a href="https://github.com/davejohnson/phonegap-windows" target="_blank">phonegap-windows</a></td>
</tr>
<tr>
<td class="leftHeader">Deploy without Mac?</td>
<td><img src="/images/no.jpg" alt="" /></td>
<td><img src="/images/no.jpg" alt="" /></td>
<td><img src="/images/yes.gif" alt="" /></td>
<td class="notes">Adobe Air uses the <a href="http://labs.adobe.com/technologies/packagerforiphone" target="_blank">Packager for iPhone/iPad</a></td>
</tr>
<tr class="odd">
<td class="leftHeader">IDE &amp; Tools</td>
<td><a href="http://developer.appcelerator.com/tools" target="_blank">Titanium Developer</a></td>
<td><a href="http://www.phonegap.com/tools" target="_blank">PhoneGap Tools</a></td>
<td><a href="http://labs.adobe.com/technologies/flashbuilder_burrito/" target="_blank">Flash Builder</a>, <a href="http://www.fdt.powerflasher.com/developer-tools/fdt/home/" target="_blank">FDT</a>, <a href="http://www.flashdevelop.org/wikidocs/index.php?title=Main_Page" target="_blank">FlashDevelop</a></td>
<td class="notes">Appcelerator has no current IDE, but recently acquired <a href="http://www.aptana.com/" target="_blank">Aptana</a></td>
</tr>
<tr>
<td class="leftHeader">Interpreting</td>
<td>Javascript mapped to native code</td>
<td>Rendered in web view control</td>
<td>Adobe Air runtime</td>
<td class="notes"></td>
</tr>
<tr class="odd">
<td class="leftHeader">Community Resources</td>
<td><a href="http://developer.appcelerator.com/" target="_blank">Developer Center</a></td>
<td><a href="http://docs.phonegap.com/" target="_blank">Docs</a>, <a href="http://wiki.phonegap.com/w/page/16494772/FrontPage" target="_blank">Wiki</a>, <a href="http://groups.google.com/group/phonegap/browse_thread/thread/314586c71c847073/65338b5ded637980?pli=1" target="_blank">IRC</a>, and <a href="http://groups.google.com/group/phonegap" target="_blank">Mailing List</a></td>
<td><a href="http://www.adobe.com/devnet/devices.html" target="_blank">Mobile and Devices Development Center</a></td>
<td class="notes"></td>
</tr>
<tr>
<td class="leftHeader">Languages used</td>
<td>JS</td>
<td>HTML, JS, CSS</td>
<td>Actionscript3</td>
<td class="notes">Appcelerator also uses PHP, Ruby, and Python for desktop app development</td>
</tr>
<tr class="odd">
<td class="leftHeader">Support</td>
<td><a href="http://www.appcelerator.com/products/plans-pricing/" target="_blank">$2,189 per year per developer</a></td>
<td><a href="http://www.nitobi.com/services/phonegap/" target="_blank">ranges from $1,000 - $25,000 per year</a></td>
<td><a href="http://www.adobe.com/support/" target="_blank">Adobe Support</a></td>
<td class="notes">Adobe offers no professional mobile support for apps, just their products.</td>
</tr>
</tbody>
</table>
## Device APIs
Beyond the overall support structure of the frameworks I wanted to get into the specific device API functionality.  This was a little harder to track down, but the list here should be accurate as of the writing of this post.  As I said earlier, contacts and multitouch were the only criticals, but I wanted to know what else these frameworks offered.  I'm assuming anyone reading this far would find this information valuable as well.
<table class="compareTable" border="1" cellspacing="0" cellpadding="0">
<tbody>
<tr class="topHeader odd">
<td class="leftHeader" width="20%"></td>
<td width="15%">Titanium Appcelerator</td>
<td width="15%">PhoneGap</td>
<td width="15%">Adobe Air for Mobile</td>
<td class="notes" width="35%">Notes</td>
</tr>
<tr>
<td class="leftHeader">Accelerometer</td>
<td><img src="/images/yes.gif" alt="" /></td>
<td><img src="/images/yes.gif" alt="" /></td>
<td><img src="/images/yes.gif" alt="" /></td>
<td class="notes"></td>
</tr>
<tr class="odd">
<td class="leftHeader">Geolocation</td>
<td><img src="/images/yes.gif" alt="" /></td>
<td><img src="/images/yes.gif" alt="" /></td>
<td><img src="/images/yes.gif" alt="" /></td>
<td class="notes"></td>
</tr>
<tr>
<td class="leftHeader">Vibration</td>
<td><img src="/images/yes.gif" alt="" /></td>
<td><img src="/images/yes.gif" alt="" /></td>
<td><img src="/images/no.jpg" alt="" /></td>
<td class="notes"></td>
</tr>
<tr class="odd">
<td class="leftHeader">Camera</td>
<td><img src="/images/yes.gif" alt="" /></td>
<td><img src="/images/yes.gif" alt="" /></td>
<td><img src="/images/warn.jpg" alt="" /></td>
<td class="notes">Not yet supported Adobe Air for iPhone/iPad</td>
</tr>
<tr>
<td class="leftHeader">Contacts</td>
<td><img src="/images/yes.gif" alt="" /></td>
<td><img src="/images/yes.gif" alt="" /></td>
<td><img src="/images/no.jpg" alt="" /></td>
<td class="notes"></td>
</tr>
<tr class="odd">
<td class="leftHeader">Multitouch</td>
<td><img src="/images/yes.gif" alt="" /></td>
<td><img src="/images/yes.gif" alt="" /></td>
<td><img src="/images/yes.gif" alt="" /></td>
<td class="notes"></td>
</tr>
<tr>
<td class="leftHeader">SQLite</td>
<td><img src="/images/yes.gif" alt="" /></td>
<td><img src="/images/yes.gif" alt="" /></td>
<td><img src="/images/yes.gif" alt="" /></td>
<td class="notes"></td>
</tr>
<tr class="odd">
<td class="leftHeader">File System IO</td>
<td><img src="/images/yes.gif" alt="" /></td>
<td><img src="/images/yes.gif" alt="" /></td>
<td><img src="/images/yes.gif" alt="" /></td>
<td class="notes"></td>
</tr>
<tr>
<td class="leftHeader">SMS</td>
<td><img src="/images/yes.gif" alt="" /></td>
<td><img src="/images/yes.gif" alt="" /></td>
<td><img src="/images/yes.gif" alt="" /></td>
<td class="notes">All support SMS via the "sms:" URL prefix.</td>
</tr>
<tr class="odd">
<td class="leftHeader">Phone API</td>
<td><img src="/images/yes.gif" alt="" /></td>
<td><img src="/images/yes.gif" alt="" /></td>
<td><img src="/images/yes.gif" alt="" /></td>
<td class="notes"></td>
</tr>
<tr>
<td class="leftHeader">Copy/Paste</td>
<td><img src="/images/yes.gif" alt="" /></td>
<td><img src="/images/yes.gif" alt="" /></td>
<td><img src="/images/yes.gif" alt="" /></td>
<td class="notes"></td>
</tr>
<tr class="odd">
<td class="leftHeader">Sounds</td>
<td><img src="/images/yes.gif" alt="" /></td>
<td><img src="/images/warn.jpg" alt="" /></td>
<td><img src="/images/warn.jpg" alt="" /></td>
<td class="notes">PhoneGap cannot record sounds. Adobe Air cannot record sound for iPhone/iPad</td>
</tr>
<tr>
<td class="leftHeader">Bluetooth</td>
<td><img src="/images/no.jpg" alt="" /></td>
<td><img src="/images/no.jpg" alt="" /></td>
<td><img src="/images/no.jpg" alt="" /></td>
<td class="notes"></td>
</tr>
<tr class="odd">
<td class="leftHeader">Video Capture</td>
<td><img src="/images/yes.gif" alt="" /></td>
<td><img src="/images/no.jpg" alt="" /></td>
<td><img src="/images/warn.jpg" alt="" /></td>
<td class="notes">Adobe Air cannot record video for iPhone/iPad.</td>
</tr>
</tbody>
</table>
## Summary
That's what I've got so far.  Let me know if and when some of these assessments change.  I'm also eager to hear other people's thoughts.  Feel free to chime in.

The long and short of my recommendations:
<ul>
	<li>Go Adobe Air if performance isn't critical and you have AS3 experience.  The tools and workflow for using pure AS3 or Flex Hero make turning out mobile apps very smooth.  Watch out for performance, particularly on iOS.</li>
	<li>Go PhoneGap if you needed the widest range of support for devices.  If you need it to run everywhere, this is your framework. Beware of the less than stellar documentation and wiki, though.</li>
	<li>Go Appcelerator everything else. The native UI and ability to access native code is a big win.  Also, the community, IDE, and documentation are top notch.  <span style="color: #ff0000;">Appcelerator was my choice in the end, but that doesn't mean its right for you</span>.</li>
</ul>