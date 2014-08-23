---
layout: post
title: "The Good, The Bad, and The Ugly of Flex \"Hero\""
date: 2011-02-08 10:50
comments: false
categories: [archive, actionscript3, adobe air, android, mobile, as3, air, flex]
published: true
---

<h1><span style="font-weight: bold; font-size: 16px;">Disclaimer</span></h1>
This article is from the perspective of someone whose AS3 and Flex experience is measured in months.  This is meant to show those who aren't long time Flash developers what they can expect with <a href="http://labs.adobe.com/technologies/flexsdk_hero/" target="_blank">Flex "Hero"</a>, <a href="http://labs.adobe.com/technologies/flashbuilder_burrito/" target="_blank">Flash Builder "Burrito"</a>, and <a href="http://www.adobe.com/products/air/" target="_blank">Air for Android</a>.  But I didn't go in alone, the Adobe community is full of smart and helpful people, just check my <a href="http://twitter.com/#!/tonylukasavage/following" target="_blank">Twitter follower list</a> to see some of the names that helped.  Particular thanks to <a href="http://twitter.com/#!/killerspaz" target="_blank">@killerspaz</a>, <a href="http://twitter.com/#!/jesterxl" target="_blank">@jesterxl</a>, and <a href="http://twitter.com/#!/jonbcampos" target="_blank">@jonbcampos</a>.
<h1><span style="font-weight: bold; font-size: 16px;">Overview</span></h1>
Recently I wrapped up my first Flex "Hero" Air for Android app, <a href="https://market.android.com/details?id=air.Repper" target="_blank">Repper</a>.  You can read my earlier blog post about it to download, get source code, or just learn more about it.  I learned a lot about mobile development and deployment, but I want to talk specifically about Flex "Hero" and Flash Builder "Burrito".  Here's this developer's experience and perspective with using Adobe's workflow for mobile development.
<h1><span style="font-weight: bold; font-size: 16px;">The Good</span></h1>
<ul>
	<li> <strong>The Flash Builder "Burrito" workflow</strong> for building Android apps is fantastic.  It was a breeze to setup a basic project and be testing it live on my Droid X.  Some of the specific things I really liked were:
<ul>
	<li>Pre-built templates for projects, components, skins, item renderers, and more speed up the development process</li>
	<li>Built-in emulation for various Android devices</li>
	<li>Testing on a device is very easy to set up</li>
	<li>Managing Flex states through the Design View can be helpful in visualing layouts</li>
	<li>Offers the familiarity and plugins of Eclipse</li>
</ul>
</li>
	<li><strong>ViewNavigator and View</strong> make navigating through applications using multiple views simple.  Using simple functions like pushView() and popView() you can move through your application and pass data with ease.  Check out these posts for a more in depth look at this powerful and intuitive interface:
<ul>
	<li><strong>Mihia Corlan</strong> - <a href="http://corlan.org/2011/01/12/understanding-flex-mobile-views-and-viewnavigator/" target="_blank">Understanding Flex Mobile View and ViewNavigator</a></li>
	<li><strong>Brian Rinaldi</strong> - <a href="http://www.remotesynthesis.com/post.cfm/passing-data-across-views-in-flex-mobile" target="_blank">Passing Data Across Views in Flex Mobile</a></li>
</ul>
</li>
	<li><strong>PersistenceManager</strong> alleviates the hassle of trying to manage data between view states by using Local Shared Objects. Even when your mobile OS decides to close your app for memory or power shortages, the PersistenceManager will preserve your designated data.  Check Jonathan Campos's post on it for more details: <a href="http://www.unitedmindset.com/jonbcampos/2010/11/01/flex-4-5-persistencemanager/" target="_blank">Flex 4.5 PersistenceManager</a></li>
	<li><strong>Flex 4 skinning</strong> is pretty damn nice, especially for someone like me who is about 95% developer, 5% designer.  Using MXML and AS3 you can create design and graphics for your components, keeping them separate from your UI's layout and logic.  This means you can effectively create vector skins using the AS3 drawing classes.  No more importing images just to create gradients and rounded corners.  Not as big a win for designers, but the pure developers out there will love this. Check out <strong>Ryan Frishberg's</strong> article for more details: <a href="http://www.adobe.com/devnet/flex/articles/flex4_skinning.html" target="_blank">Introducing skinning in Flex 4</a>.  The screenshot showing Repper below highlights entirely programmatic design.</li>

<li><strong>Multiscreen development</strong> potential is very appealing and Adobe is working to grow it further.  Christian Cantrell's demo video below shows what Adobe Air is capable of in terms of "code once, deploy everywhere."  Android, iPhone, iPad, Blackberry Playbook, Desktop, and web are all valid targets for your single code base.  While this is very exciting, it is also very young.  Take this all with a grain of mobile salt as this topic shows up again in the "Ugly" section.</li>
<iframe title="YouTube video player" width="640" height="390" src="http://www.youtube.com/embed/22vicDlzmkI" frameborder="0" allowfullscreen></iframe>
<h1><span style="font-weight: bold; font-size: 16px;">The Bad</span></h1>
<ul>
<li><strong>Lack of native component support</strong> can be a deal breaker for some people building mobile apps.  Its not for me nor for lots of people who are comfortable building their own components, but many want the native experience.  But all hope is not lost with the following AS3 libraries available that emulate native components:</li>
<table><tr><td style="vertical-align:middle; text-align:center;">
<br><strong>Nick Jonas</strong> - <a href="http://code.google.com/p/as3iphonecomponents/" target="_blank">as3iphonecomponents</a></td>
<td style="vertical-align:middle; text-align:center;"><br><strong>Kevin Hoyt</strong> - <a href="http://xperiments.es/blog/en/as3-android-flash-components/" target="_blank">android-components</a></td>
</tr></table>
<li><strong>Flex "Hero" is missing some core components</strong> that mobile developers will be expecting to be present. I for one was not expecting to have to build a modal select list from scratch.  Unfortunately, though, Flex "Hero" does not contain the mobile equivalent of a combobox.  You can create it with their scrollable List component paired with a semi-transparent background, but it would be nice to have this out of the box.  Other notable absentees are sliders and tabbed layouts.</li>
<li><strong>Not all native APIs are supported.</strong>  While this should be expected in a cross platform framework, it can sometimes lead to unexpected roadblocks.  In my case, I have only numeric input in my app.  I wanted to default the soft keyboard to the numeric keyset.  Unfortunately this is not possible in Air for Android.  It takes some AS3 parlor tricks just to keep the soft keyboard closed when you don't want it open on a TextInput focus.  There's even more to worry about with Apple development, but I'll mention that in the "Ugly" section.</li>
<li><strong>Simple things can be complicated.</strong> Take for example closing an app when a user leaves with the back button.  Seems easy enough, but it takes 3 event handlers to do it properly and even this method is <a href="http://blog.everythingflex.com/2010/10/13/exiting-an-air-on-android-application/" target="_blank">not without its problems</a>.  Check out the code I used below, thanks to <a href="http://www.flashrealtime.com/tip-close-your-android-air-app-on-back-button/" target="_blank">Tom Krcha</a>:

```  as3
protected function mobileapplication1_creationCompleteHandler(event:FlexEvent):void
{
	if(Capabilities.cpuArchitecture=="ARM")
	{
		NativeApplication.nativeApplication.addEventListener(Event.ACTIVATE, handleActivate, false, 0, true);
		NativeApplication.nativeApplication.addEventListener(Event.DEACTIVATE, handleDeactivate, false, 0, true);
		NativeApplication.nativeApplication.addEventListener(KeyboardEvent.KEY_DOWN, handleKeys, false, 0, true);
	}
}

private function handleActivate(event:Event):void
{
	NativeApplication.nativeApplication.systemIdleMode = SystemIdleMode.KEEP_AWAKE;
}

private function handleDeactivate(event:Event):void
{
	NativeApplication.nativeApplication.exit();
}

private function handleKeys(event:KeyboardEvent):void
{
	if(event.keyCode == Keyboard.BACK)
		NativeApplication.nativeApplication.exit();
}
```

</li>
<li><strong>Debugging on a device can be tricky.</strong>  So tricky in fact that I never got it working.  In all fairness, I didn't try to diagnose it any further after the getting the initial error because the app I was building was so simple.  But the fact remains that it didn't work out of the box for me.  Maybe your experience will be different and I welcome anyone to call me an idiot and tell me what I did wrong.</li>
</ul>

<h1><span style="font-weight: bold; font-size: 16px;">The Ugly</span></h1>
<ul>
<li><strong>Universal mobile device support is minimal at this point.</strong> Android is covered pretty well up through the Air 2.5 SDK, but iPhone/iPad only support Air up to version 2.0.2 via the <a href="http://labs.adobe.com/technologies/packagerforiphone/" target="_blank">Adobe Packager for iPhone</a>.  This leaves out key APIs like camera support and video/sound capture, not to mention the bevy of <a href="http://labs.adobe.com/wiki/index.php/Packager_for_iPhone:Release_Notes" target="_blank">bugs and gotchas</a> that you have to watch out for.  The workflow for deploying apps to iOS devices with the packager is also no picnic.  While the Blackberry Playbook is proudly supporting the Adobe developer community, there's been no official announcement, though there has been mention, of Flash or Air being on Blackberry smart phones.

Long and short, you aren't going to be hitting the widest part of the market when compared to other mobile frameworks like Appcelerator or PhoneGap.  And even if you do, I've experienced first hand how users can be put off by having to install Adobe Air on their phone for the sake of an app.  <span style="color:#ff0000;">Until Air for mobile devices support becomes more common place, it may be viewed as an unnecessary evil by many mobile users</span>.
</li>
<li><strong>Performance can be a problem for even the simplest apps.</strong>  This for me is the most critical area that needs to be improved before people will take Air seriously as a mobile framework.  Simple things like view transitions, scrolling, button interactions, etc... have a noticeable sluggishness that users won't stand for.  Even the cream of the crop among Flex Hero apps, like <a href="http://www.unitedmindset.com/jonbcampos/" target="_blank">Jonathan Campos's</a> nearly 100K user base NetFlix <a href="https://market.android.com/details?id=air.com.unitedmindset.QueueManager" target="_blank">Queue Manager</a>, is not immune to these problems.  Though a majority of the comments are very complimentary, the few detractors have a very common message: we don't want to install Adobe Air and we find it slower than native apps.  Are these types of comments the whole story?  Absolutely not.  Does that mean they can be ignored?  Absolutely not.  The vocal complainers, though not always very helpful, can sometimes spur the necessary advances that can take a product to the next level.
</li>
</ul>
<h1><span style="font-weight: bold; font-size: 16px;">Summary</span></h1>
Hey Adobe, fix the ugly, stay on top of the bad, and keep highlighting the good.

While I am far from swearing off AS3 and Flex development for mobile devices, I think Adobe has a long way to go before it will be able to bring in a significant amount of non-Adobe developers.  Their mobile platform and workflow seems as though it caters entirely to existing Flash and Flex developers.  There just doesn't seem to be an effort to bring in new blood from the outside.  And if that remains the same, Appcelerator, PhoneGap, Sensa Touch, jQuery Mobile, or whatever other platform that comes next and engages larger cores of developers will take away valuable relevance in this land grab for mobile supremacy.