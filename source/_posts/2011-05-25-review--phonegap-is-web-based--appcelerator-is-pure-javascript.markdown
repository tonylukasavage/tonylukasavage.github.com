---
layout: post
title: "Review: PhoneGap is Web-based, Appcelerator is Pure Javascript"
date: 2011-05-25 10:57
comments: false
categories: [archive, phonegap, mobile, appcelerator, javascript]
published: true
---

## What's The Difference?
I've seen a lot of confusion out there on what the actual distinction is between <a href="http://www.phonegap.com/" target="_blank">PhoneGap</a> and <a href="http://www.appcelerator.com/" target="_blank">Appcelerator Titanium</a> in terms of programming.  Both state that they provide cross-platform mobile development frameworks driven by a Javascript core.  How different can they be?  Turns out, <strong>very</strong>.

The fundamental difference is that PhoneGap is a web based solution where Appcelerator Titanium is a pure Javascript API that creates native code.  As I've gone over the <a href="http://savagelook.com/blog/portfolio/a-deeper-look-at-appcelerator-and-phonegap">differences between these 2 in detail</a> before, I'm going to very strictly stick to the topic of how their code works.  Since people seem to love charts so much, here's a quick review to show the divergence between the two frameworks:

<table border="1" class="compare_table" cellspacing="0">
	<tr class="compare_title">
		<td>&nbsp;</td>
		<td>PhoneGap</td>
		<td>Appcelerator Titanium</td>
                <td>Notes</td>
	</tr>
	<tr>
		<td>Javascript API</td>
		<td><img src="/images/yes.gif"/></td>
		<td><img src="/images/yes.gif"/></td>
                <td>PhoneGap's API interacts as typical JS does in your web code. Appcelerator Titanium API is <strong>NOT</strong> web code, it is used to interact with native code.</td>
	</tr>
	<tr>
		<td>Supports HTML5/CSS3</td>
		<td><img src="/images/yes.gif"/></td>
		<td><img src="/images/no.jpg"/></td>
                <td>PhoneGap is a web app that runs in a native web browser view.</td>
	</tr>
	<tr>
		<td>Supports Web Standards</td>
		<td><img src="/images/yes.gif"/></td>
		<td><img src="/images/no.jpg"/></td>
                <td>PhoneGap looks, feels, and develops like a standard web page. It is also subject to the same browser compatibility concerns.</td>
	</tr>
	<tr>
		<td>Supports DOM based<br>JS libraries</td>
		<td><img src="/images/yes.gif"/></td>
		<td><img src="/images/no.jpg"/></td>
                <td>JS libraries that reference the DOM, like <a href="http://jquery.com/" target="_blank">jQuery</a>, <a href="http://www.prototypejs.org/" target="_blank">Prototype</a>, or any of the new <a href="http://processingjs.org/" target="_blank"><canvas> based libs</a> will only work with Appcelerator Titanium webviews</td>
	</tr>
	<tr>
		<td>Native Code</td>
		<td><img src="/images/no.jpg"/></td>
		<td><img src="/images/yes.gif"/></td>
                <td>Appcelerator Titanium creates a truly native app via a JS API that maps to native code. </td>
	</tr>
	<tr>
		<td>Native UI/Performance</td>
		<td><img src="/images/no.jpg"/></td>
		<td><img src="/images/yes.gif"/></td>
                <td>Appcelerator Titanium performance is limited only by the device. PhoneGap's is limited by the device's web view.</td>
	</tr>
</table>

<h2 style="margin-top:20px;">What Does This Mean?
<ul>
    <li>Web developers will have a much easier transition going to PhoneGap than they would Appcelerator Titanium.</li>
    <li>Application developers without serious web development chops will likely gravitate towards Appcelerator Titanium.  Why learn HTML, CSS, and Javascript when you can just learn Javascript?</li>
    <li>Designer work will be tougher to integrate into an Appcelerator project as all the layouts and assets are done programmatically. PhoneGap, on the other hand is effectively web development, which designers have been working with for a very long time.</li>
    <li>Appcelerator is always going to win on performance.</li>
    <li>There will be an inevitable flood of web developers calling themselves mobile developers because they are familiar with PhoneGap. Beware.</li>
    <li>Appcelerator has a much deeper and more complex integration with each mobile platform.
        <ul>
            <li><strong>Pros</strong>: Native look, feel, and performance</li>
            <li><strong>Cons</strong>: Platform compatibility will be achieved more slowly. Much harder to "code once, deploy everywhere".</li>
        </ul>
    </li>
</ul>
<br><br>

<h2 style="margin-top:20px;">Summary
The above is a hyper-condensed review of the whole story.  As always, I encourage you to try both of these platforms.  They both excel in many areas and offer unique features.  Neither is the wrong choice, but depending on your scenario, one might be better suited than the other.