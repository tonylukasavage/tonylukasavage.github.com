---
layout: post
title: "Mobile Development: Native vs. Adobe Air"
date: 2010-12-07 08:49
comments: false
categories: [archive, mobile, adobe air, android, ios, as3, iphone, ipad]
published: true
---

<strong>DISCLAIMER</strong>: This article is about Adobe Air as an alternative to native API mobile development.  Other mobile frameworks like <a href="http://www.appcelerator.com/">Appcelerator Titanium</a> and <a href="http://www.phonegap.com/">PhoneGap</a> are not discussed.

## The overview
So you want to make an iPhone app?  Wait, you want to run it on Android too?  And any tablet?  And any desktop?  And you want to be able to reuse the code base for all of them?  OK, sounds good, now let me just get the magic elves and unicorns to take care of that for you.  <span style="color:#ff0000;">It will cost you one soul</span>.  Doesn't have to be yours.

Or... you could use the <a href="http://www.adobe.com/products/air/sdk/">Adobe Air SDK</a>.  Yeah, Adobe Air can do all that.  Check out this video from <a href="http://blogs.adobe.com/cantrell/archives/2010/04/one_application_five_screens.html">Christian Cantrell's blog</a> where he shows how a single AS3 code base can be used to create an app for the iPad, iPhone, iPod Touch, Droid, multiple desktops, and the web.  Pretty incredible stuff for indie developers:

<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="640" height="385" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"><param name="allowFullScreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="src" value="http://www.youtube.com/v/22vicDlzmkI?fs=1&amp;hl=en_US&amp;rel=0" /><param name="allowfullscreen" value="true" /><embed type="application/x-shockwave-flash" width="640" height="385" src="http://www.youtube.com/v/22vicDlzmkI?fs=1&amp;hl=en_US&amp;rel=0" allowscriptaccess="always" allowfullscreen="true"></embed></object>

For those wondering how you get past the Steve Jobs stranglehold on the Apple app store with an Adobe Air app, check out the Adobe Labs project <a href="http://labs.adobe.com/technologies/packagerforiphone/">"Packager for iPhone,"</a> which also works for the iPad and iPod Touch.  He also got it running on the <a href="http://blogs.adobe.com/cantrell/archives/2010/11/running-ireverse-on-the-blackberry-playbook.html">Blackberry Playbook emulator</a>.  Its also worthy to note that Adobe Air and Flash are in the pipeline for <a href="http://wmpoweruser.com/flash-coming-to-wp7-devices-confirmed-by-adobe/">Windows Phone 7</a>, <a href="http://www.intomobile.com/2010/10/25/adobe-air-sdk-blackberry-playbook-tablet-android-ios-iphone/">Blackberry phones</a>, and many more mobile devices.

Now if I can do this with one language and one framework rather than 1/2 a dozen, <span style="color:#ff0000;">why even bother learning the Java &amp; Android SDK, Objective-C &amp; iOS, or any other combination that may arise?</span>  At some point you have to have a better answer than "to learn it."  As with any consideration like this, there's lots of pros and cons for each side of the argument.  Here's a few things to consider.
## on the native side...
### People want a uniform user experience
And by "people" I mean "non-technical users."  And by "uniform" I mean "native."  People want all their interface components to have the same look and feel.  Its gives apps a more intuitive nature.  While <a href="http://labs.adobe.com/technologies/flexsdk_hero/">Adobe's Flex Hero</a> interface components are uniform to Adobe Air apps, they don't represent the components found on each individual mobile device.

You can, however, use AS3 libraries like <a href="http://code.google.com/p/as3iphonecomponents/">as3iphonecomponents</a> or <a href="http://xperiments.es/blog/en/as3-android-flash-components/">android-components</a> to preserve that native experience.  As you might be able to guess by their names, they are collections of UI components for the iPhone and Android respectively that mimic those of the native system.  While this solves the uniformity problem, it adds additional complexity to your multiscreen projects thereby undoing some of the efficiency added by the Adobe Air &amp; AS3 workflow.

Or you could just forgo the whole uniformity thing and have a designer make all your components.
### Native code will perform better
This is kind of a no-brainer.  In my experience, and in talking with mobile users, responsiveness and performance is consistently better in native mobile applications.  And not just that it is consistently better, but also that it is consistent across devices.  I've heard many complaints about packaged Flash apps running crazy slow on Apple devices but fine elsewhere.  This is especially true of resource intensive apps like games.  Granted this isn't shocking news, but it is a concern for those trying to preserve the user experience.

But this doesn't necessarily apply to everyone.  If you are building a simple data and UI component driven app, Adobe Air should be more than enough to handle that with smooth performance.  And those resource intensive apps that may not run as well as native apps now are going to be catching up soon.  Adobe is constantly increasing performance on mobile devices.  Recently they have had a strong focus on <a href="http://blogs.adobe.com/cantrell/archives/2010/10/gpu-rendering-in-adobe-air-for-android.html">GPU processing for graphics</a> and will even be releasing a full, low level 3D API called "Molehill"</a> mid 2011.  As long as they keep this pace with performance enhancements, there's no reason to believe that Flash and Air games won't be as prevalent on mobile devices as they are on the web.

### Steve Jobs can shut you down
Until just a few months ago, deploying AS3 written apps to Apple devices was impossible.  This was because Apple had a restriction that no 3rd party development tools could be used to create Apple apps.  You used the Apple sanctioned workflow or you were SOL.

Luckily Steve came to his senses and lifted the ban and Adobe re-released the <a href="http://labs.adobe.com/technologies/packagerforiphone/">iPhone packager</a>.  But it shines light on a dangerous precedent.  There's nothing to stop him from doing it again at some point in the future.  Hell, <a href="http://www.engadget.com/2010/10/20/macbook-air-all-substance-no-flash/">MacBook Airs are not even preinstalled with Flash anymore</a>.  <span style="color:#ff0000;">If Apple drops the hammer, <strong>BOOM</strong>, there goes a significant portion of your mobile audience.</span>

### Native functionality
Without native coding, you are at the mercy of what Adobe has currently implemented and abstracted.  Things like <a href="http://developer.android.com/guide/topics/intents/intents-filters.html">Android Intents</a> hit the cutting room floor for the sake of creating a single framework. While Adobe does a good job of either capturing all available functionality (like Geolocation, microphones, and cameras) or creating similar functionality, it will be by nature, a step behind the advances in mobile development.  This could be offset if Adobe maintains a close relationship with the major mobile players.

## on the adobe air side...
### Spend more time creating, less time battling compatibility
This is why we're here, isn't it?  With a single language, framework, and workflow <span style="color:#ff0000;">you can create a code base that can be applied to any device that can support Adobe Air or Flash.</span>  That should be mighty intriguing to any indie developer.  You can cut your development time down to a fraction of  what it would be if you had to learn every mobile device's framework.  You are instantly building to multiple devices and broadening your target audience with almost no additional effort.
### Flash, Air, and AS3 resources are abundant
The mobile APIs out there are well documented and have strong, growing communities.  Adobe's communities, though, are even more so.  They have been around a much longer time than these relatively new APIs and are chock full of expert developers, designers, examples, and code.  The sheer volume of resources available to AS3 and Flash based projects is incredible, just look at this list of available <a href="http://www.flashrealtime.com/flash-game-library-engine-list/">game engines</a> for example.  Need inspiration?  Check out one of the many open Flash sites out there, like <a href="http://wonderfl.net">wonderfl.net</a>.

Now lets move on to the tools invovled.  Love them or hate them, Adobe knows how to make design and development software.  Expensive, yes, but worth every penny.  They have the design to development workflow that helps apps stand out down to a science.  Let's say you don't believe me, or you don't want to pay the money.  That's fine, because there's plenty of free tools for creating Flash and Air content out there too.  Check out <a href="http://www.flashdevelop.org/wikidocs/index.php?title=Main_Page">FlashDevelop</a> or <a href="http://www.fdt.powerflasher.com/">FDT</a> for great alternatives to the Adobe suite.
### Reuse existing AS3 code
I know what you're thinking: Can't I also reuse existing Java in Android or Objective-C on the iPhone?  Well yes, but not to the level that you can with AS3.  Let's say you have a game that logs top scores, uses a physics engine, and has some built in menus.  Chances are that most of these things, with some serious effort, can be translated into the mobile API of your choice.  But even if that is the case, you still need to integrate that all into the mobile API's framework, which can be a daunting task.

With Flash or Air, though, you can literally compile or package the application AS IT IS to any mobile format that Adobe supports.  <a href="http://blogs.adobe.com/air/2010/04/adobe_air_applications_for_and.html">Wanna make your old flash game a mobile app</a>?  Run it through the appropriate compiler or packager and you are good to go, no changes necessary.  Now don't get too excited.  Chances are you will need to do some scaling and appearance tweaking in descriptor files to accommodate your target devices, but the transition is much simpler than with mobile APIs and native code.
### Flex "Hero" and flash builder "Burrito" makes things a lot easier


Before the MobileApplication framework added to the <a href="http://opensource.adobe.com/wiki/display/flexsdk/Flex+SDK">Flex SDK</a>, mobile development was very possible, but still felt like a flash app instead of a mobile app.  With Flex "Hero" Adobe focused on creating a framework for multiscreen development, but also to be able to create apps that behaved like mobile apps.

What do I mean by "behaved like mobile apps?"  Well, mobile apps typically operate as a stack of full screen views.  Gestures or menu options are used to navigate between the views.  Things like "Back", "Menu", and "Search" buttons need to be handled in a way the user expects.  The app also needs to be able to close itself when no longer in use.  These are just a few of the things that give that mobile feel that are not typical of flash apps.  These are now present in Hero.

And how do we simply and quickly leverage this new functionality in the Flex SDK?  With <a href="http://labs.adobe.com/technologies/flashbuilder_burrito/">Flash Builder "Burrito"</a> of course!  Burrito is currently a preview release of Flash Builder that supports the creation, development, debugging, and deployment of Air for Android apps (And you can bet other devices are just around the corner).  Complete with design view and dimension emulation for the various target Android devices it supports.  I highly suggest trying it out since its now available free for a 60 day trial.

## The Summary
Condensing the majority of your mobile development down to one framework can cause one indie developer to match the work of a team of native mobile developers.  But there are drawbacks.  The factors listed above point out the potential shortcomings of an abstracted Adobe Air solution.  If you are not willing to deviate from native workflows or only need to develop for one platform, perhaps the Adobe Air path is not for you.

If you are a mobile developer, you owe it to yourself to spend some time with Adobe Air's workflow for deploying mobile applications.  <span style="color:#ff0000;">If you are an INDIE mobile developer</span>, especially with an AS3 background, you are shooting yourself in the foot productivity-wise if you are not pursuing this further.  Here's some links to help you on your way to multiscreen development bliss:

&rarr; <a href="http://opensource.adobe.com/wiki/display/flexsdk/Flex+SDK">Flex SDK</a>
&rarr; <a href="http://www.adobe.com/products/air/sdk/">Air SDK</a>
&rarr; <a href="http://opensource.adobe.com/wiki/display/flexsdk/Hero">Flex "Hero" SDK</a>
&rarr; <a href="http://labs.adobe.com/technologies/flashbuilder_burrito/">Flash Builder "Burrito"</a>
&rarr; <a href="http://labs.adobe.com/technologies/packagerforiphone/">Packager for iPhone</a>

If you do go down this path, let me know, I'd love to hear your experience.  If not, why not?