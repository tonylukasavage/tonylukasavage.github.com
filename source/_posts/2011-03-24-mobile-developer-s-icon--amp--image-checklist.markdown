---
layout: post
title: "Mobile Developer's Icon &amp; Image Checklist"
date: 2011-03-24 09:51
comments: false
categories: [archive, android, ios, mobile, blackberry, playbook, iphone, ipad, apple]
published: true
---

<h2>Overview</h2>
If there's one thing I've learned from delving into iOS, Android, and Blackberry app development, it's that there's a lot more to creating a mobile app than just coding it.  One of the things that can catch you off guard, especially if you are devoid of design ability like me, is the amount of icons and images necessary to deploy your apps.  This becomes even more daunting when you intend to deploy to multiple platforms.

The other concern is that it isn't always evident from the development tools how many different graphics you need to account for all scenarios.  A new iOS developer will likely be unaware that you need a 58x58 pixel icon for iPhone 4 Spotlight and Settings.  To attempt to alleviate some of this confusion, I put together these charts to detail what I know so far about the graphics required for submitting mobile apps to the various Android, iOS, and Blackberry markets.

<h2>Icons</h2>
<table class="compareTable" border="1" cellspacing="0" cellpadding="0" style="margin-bottom:25px;">
<tbody>
<tr class="topHeader odd">
<td width="10%"></td>
<td width="15%">Android</td>
<td width="15%">iOS</td>
<td width="15%">Blackberry Playbook</td>
<td width="45%">Notes</td>
</tr>
<tr>
<td class="leftHeader">29x29</td>
<td></td>
<td><img src="/images/yes.gif" alt="" /></td>
<td></td>
<td class="notes">iPhone Settings and Spotlight, iPad Settings</td>
</tr>
<tr class="odd">
<td class="leftHeader">36x36</td>
<td><img src="/images/yes.gif" alt="" /></td>
<td></td>
<td></td>
<td class="notes">low pixel density icon</td>
</tr>
<tr>
<td class="leftHeader">48x48</td>
<td><img src="/images/yes.gif" alt="" /></td>
<td></td>
<td></td>
<td class="notes">medium pixel density icon</td>
</tr>
<tr class="odd">
<td class="leftHeader">50x50</td>
<td></td>
<td><img src="/images/yes.gif" alt="" /></td>
<td></td>
<td class="notes">iPad Spotlight. iOS will trim 1 pixel off each side and add a drop shadow, making it 48x48</td>
</tr>
<tr>
<td class="leftHeader">57x57</td>
<td></td>
<td><img src="/images/yes.gif" alt="" /></td>
<td></td>
<td class="notes">standard iPhone icon</td>
</tr>
<tr class="odd">
<td class="leftHeader">58x58</td>
<td></td>
<td><img src="/images/yes.gif" alt="" /></td>
<td></td>
<td class="notes">iPhone 4 Settings and Spotlight</td>
</tr>
<tr>
<td class="leftHeader">64x64</td>
<td></td>
<td><img src="/images/warn.jpg" alt="" /></td>
<td></td>
<td class="notes">optional small custom document icon</td>
</tr>
<tr class="odd">
<td class="leftHeader">72x72</td>
<td><img src="/images/yes.gif" alt="" /></td>
<td><img src="/images/yes.gif" alt="" /></td>
<td></td>
<td class="notes">Android high pixel density icon, iPad icon</td>
</tr>
<td class="leftHeader">86x86</td>
<td></td>
<td></td>
<td><img src="/images/yes.gif" alt="" /></td>
<td class="notes">standard Playbook icon. It will trim 5 pixels off each side, making it 76x76</td>
</tr>
<tr class="odd">
<td class="leftHeader">96x96</td>
<td></td>
<td><img src="/images/warn.jpg" alt="" /></td>
<td></td>
<td class="notes">Potential icon size if iPad gets a high ppi screen</td>
</tr>
<tr>
<td class="leftHeader">114x114</td>
<td></td>
<td><img src="/images/yes.gif" alt="" /></td>
<td></td>
<td class="notes">standard iPhone 4 icon</td>
</tr>
<tr class="odd">
<td class="leftHeader">144x144</td>
<td></td>
<td><img src="/images/warn.jpg" alt="" /></td>
<td></td>
<td class="notes">Potential icon size if iPad gets a high ppi screen</td>
</tr>
<tr>
<td class="leftHeader">320x320</td>
<td></td>
<td><img src="/images/warn.jpg" alt="" /></td>
<td></td>
<td class="notes">optional large custom document icon</td>
</tr>
</tbody>
</table>

<br><br>

<h2>Distribution Images</h2>
<table class="compareTable" border="1" cellspacing="0" cellpadding="0" style="margin-bottom:25px;">
<tbody>
<tr class="topHeader odd">
<td width="10%"></td>
<td width="15%">Android Market</td>
<td width="15%">Apple App Store</td>
<td width="15%">Blackberry App World</td>
<td width="15%">Amazon App Store</td>
<td width="30%">Notes</td>
</tr>
<tr>
<td class="leftHeader">screenshot sizes</td>
<td>320x480, 480x800, 480x854, 1280x800</td>
<td><strong>iPhone</strong>: 320x480, 480x320, 320x460, 480x300 <strong>iPhone 4</strong>: 640x960, 960x640 <strong>iPad</strong>: 768x1024, 1024x768, 748x1024, 1004x768</td>
<td>640x640 or smaller</td>
<td>480x854, 854x480</td>
<td class="notes">required # of screenshots:
<strong>Android</strong>: at least 2
<strong>Apple</strong>: at least 1
<strong>Blackberry</strong>: 1-50
<strong>Amazon</strong>: 3-10</td>
</tr>
<tr class="odd">
<td class="leftHeader">114x114</td>
<td></td>
<td></td>
<td></td>
<td><img src="/images/yes.gif" alt="" /></td>
<td class="notes">device icon</td>
</tr>
<tr>
<td class="leftHeader">180x120</td>
<td><img src="/images/yes.gif" alt="" /></td>
<td></td>
<td></td>
<td></td>
<td class="notes">Promotional graphic (no alpha)</td>
</tr>
<tr class="odd">
<td class="leftHeader">480x480</td>
<td></td>
<td></td>
<td><img src="/images/yes.gif" alt="" /></td>
<td></td>
<td class="notes">Product icon that should match your 86x86 icon</td>
</tr>
<tr>
<td class="leftHeader">512x512</td>
<td><img src="/images/yes.gif" alt="" /></td>
<td><img src="/images/yes.gif" alt="" /></td>
<td></td>
<td><img src="/images/yes.gif" alt="" /></td>
<td class="notes">Large/High resolution product icon</td>
</tr>
<tr class="odd">
<td class="leftHeader">1024x500</td>
<td><img src="/images/yes.gif" alt="" /></td>
<td></td>
<td></td>
<td></td>
<td class="notes">Feature graphic for market</td>
</tr>
</tbody>
</table>

<h2>Additional Notes</h2>
<strong>For Android</strong>, your 36x36, 48x48, and 72x72 pixel icons should be placed in the <strong>drawable-ldpi</strong>, <strong>drawable-mdpi</strong>, and <strong>drawable-hdpi</strong> folders of your Android project respectively.  Be sure to specify the name of the file you will be using in the <strong>android:icon</strong> attribute of the <strong><application></strong> element in your AndroidManifest.xml file.  Android also allows you to include a promotional video.

<strong>For iOS</strong> you simply need to add your appropriately sized and named icons to your <strong>Resources</strong> directory in your XCode project.  Here's a mapping of the icon sizes to the required name of the icon file. <strong>NOTE</strong>: There is purposely no extension on the 512x512 iTunesArtwork file.
<ul>
<li>29x29 - Icon-Small.png</li>
<li>50x50 - Icon-Small-50.png</li>
<li>57x57 - Icon.png</li>
<li>58x58 - Icon-Small@2x.png</li>
<li>72x72 - Icon-72.png</li>
<li>114x114 - Icon@2x.png</li>
<li>512x512 - iTunesArtwork</li>
</ul>

<strong>For Blackberry Playbook</strong>, you need to specify the name of your 86x86 application icon in your application's <strong>blackberry-tablet.xml</strong> file.  Below is a sample of how you would set that up.

``` xml
<qnx>
    <icon>
        <image>86x86.png</image>
    </icon>
    <publisher>My Company</publisher>
    <category>core.games</category>
    <splashscreen>my_splashscreen.jpg</splashscreen>
</qnx>
```

<strong>For the Amazon App Store</strong> you can also submit promotional images of various sizes and up to 5 promotional videos.

<h2>Summary</h2>
So as you can see, you've got a lot to consider when it comes to presenting your mobile application to the masses.  As a developer, I'm looking for the simple solution here.  For me, the easiest thing to do was use this <a href="http://www.command-tab.com/2008/09/20/iphone-and-ipod-touch-icon-template/" target="_blank">512x512 iOS icon template</a>, create my icon, and scale it down to all the required sizes.  If you happen to be reading this post and know a better/easier workflow, please let me know.

Here's a few references to check out to get some additional information on mobile app icons and market images:
<ul>
<li><a href="http://developer.apple.com/library/safari/#documentation/UserExperience/Conceptual/MobileHIG/IconsImages/IconsImages.html" target="_blank">iOS Human Interface Guidelines - Custom Icon and Image Creation Guidelines</a></li>
<li><a href="http://developer.apple.com/library/ios/#qa/qa1686/_index.html" target="_blank">App Icons on iPad and iPhone</a></li>
<li><a href="http://developer.android.com/guide/practices/ui_guidelines/icon_design.html" target="_blank">Android Icon Design Guidelines</a></li>
<li><a href="http://docs.blackberry.com/en/developers/deliverables/22301/Designing_application_icons_tablet_1401556_11.jsp" target="_blank">Blackberry Playbook - Designing Application Icons</a></li>
</ul>