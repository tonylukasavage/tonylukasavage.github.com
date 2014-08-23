---
layout: post
title: "A Deeper Look at Appcelerator and PhoneGap"
date: 2011-04-20 12:58
comments: false
categories: [archive, mobile, android, ios, blackberry, appcelerator, phonegap]
published: true
---

<h2><span style="font-size: 20px; font-weight: bold;">Overview</span></h2>
I'd like to start by saying that I think it's important that both of these frameworks exist.  The more I worked with each, the more I found that it wasn't a simple question of which mobile framework was better.  Both have some of the features a cross platform framework should have, and each shines in areas that the other frankly does not.  And that will be the focus of this analysis.  What are the key aspects to a great cross platform mobile framework, and how do <a href="http://www.appcelerator.com/" target="_blank">Appcelerator</a> and <a href="http://www.phonegap.com/" target="_blank">PhoneGap</a> stack up.
<h1>Cross Platform Support</h1>
So this is why we're all here right? Code once, run every where.  That's what we want.  Well in this case, one of these solutions gets you a lot closer than the other.

This is PhoneGap's bread and butter.  By leveraging web views native to the mobile devices, PhoneGap allows you to build as an app as complex and modern as you want while providing the ability to have it gracefully degrade for lower end devices, all in the same code base.  This degradation can be controlled via CSS or even dynamically with javascript and media queries.  You can use the same design and development principles that have guided cross browser development for years.  And the list of mobile platforms they support (which includes iOS, Android, Blackberry, webOS, and Symbian)  is definitely worth bragging about.


Appcelerator, on the other hand, does iOS really, really well.  Android brings some additional headaches and quirks.  Blackberry is still in the beta stage.  They are actually creating native code based on their Javascript API, so the quirks will likely always exist. Appcelerator will constantly be one step behind/removed in their efforts to integrate native functionality.  No fault of their own, it's just the nature of their product.

This is why I think emphasis on Appcelerator being a cross platform framework is misleading.  <strong>While it CAN be a cross platform framework, it is not by nature</strong>.  I mean, how can it be? One of its main selling points is access to native UI components, something that is obviously not part of a cross platform solution.  One code base for multiple mobile platforms is totally a possibility with Appcelerator, but you will likely sacrifice a lot of what makes it great (coming in the following sections) to get to that lowest common denominator.
<h1>Defined Workflow</h1>
The product will only be as good as the tools that support, particularly when you are trying to appeal to an audience as large as mobile developers.  In this respect, Appcelerator is the clear winner.

Earlier this year Appcelerator announced that they had acquired the web development IDE <a href="http://www.aptana.com/" target="_blank">Aptana</a>. Before this point you were stuck with <a href="http://www.appcelerator.com/products/" target="_blank">Titanium Developer</a> which did the job, but was only a project deployment tool, not a true IDE.  Just this month they introduced the first version of the new <a href="http://preview.appcelerator.com/studio/" target="_blank">Titanium Studio</a>, an integration of Titanium Developer and Aptana.  There were a few bugs to wrestle with the earliest versions of this software, but I must say that I am loving it.  It has truly integrated the development and deployment workflow, making it more organized and efficient.  It has built in update checking for not only the studio but also the Titanium SDKs.  Oh, and <strong>did I mention that all of this is free</strong>?


PhoneGap leaves you to your own tools and workflow.  A plus for some, but I would imagine its a minus for those of us who don't come from primarily a web development background.  They give you some direction in the <a href="http://www.phonegap.com/tools" target="_blank">Tools</a> section of their website, but its not what you would call a workflow.  It a different approach, basically leaving the developer to determine what libraries, IDE, touch frameworks, etc... are most appropriate for their project.  This can be problematic for two reasons. 1, new mobile developers are not going to know which tools are the most appropriate and 2, there are A LOT of available touch and JS libraries out there for mobile development.  Choosing can be a project in its own rite. All that said, <a href="http://twitter.com/#!/brianleroux" target="_blank">Brian Leroux</a> of <a href="http://www.nitobi.com/" target="_blank">Nitobi</a>, the makers of PhoneGap, created the <a href="http://xuijs.com/" target="_blank">XUIJS library</a>. Its what I'm using and I'm really digging it so far.
<h1>Programming Language</h1>

Admit it Appcelerator developers, you aren't interested in the Javascript API so much as you are interested in <strong>NOT</strong> writing Objective-C!  Yeah, me too.

You would think this topic would be a deadlock, right?  Its just Appcelerator's Javascript API versus PhoneGap's use of the standard web stack of HTML/CSS/JS.  It basically the same thing... or is it?  Remember how I said in the last section that PhoneGap gives you free reign to choose whatever framework you want for development?  Well, Appcelerator doesn't, and it is definitely to the chagrin of many Javascript savvy developers.

PhoneGap is HTML/CSS/JS.  Anything you can do with it on a normal web page you can do in a mobile browser's web view.  This means any chunk of Javascript you find anywhere that you like can potentially be integrated into you app.  This ranges from your favorite frameworks like <a href="http://jquery.com/" target="_blank">jQuery</a> and <a href="http://www.prototypejs.org/" target="_blank">Prototype</a>, mobile  libraries like <a href="http://www.sencha.com/products/touch/" target="_blank">Sencha Touch</a>, or even graphical ones like Grant Skinner's <a href="http://easeljs.com/" target="_blank">EaselJS</a> or one of these many <a href="http://javascript.open-libraries.com/multimedia/3d/fantastic-javascript-3d-libraries/" target="_blank">3D libraries</a>.  Performance and device support permitting, you can use any Javascript you want.

Appcelerator's API unfortunately is purely Javascript, is has no ties to the DOM.  But wait, doesn't the most popular Javascript library in the world assume the presence of the DOM window and document?! Yep, that's right, <strong>you can't use any part of jQuery that requires the DOM</strong> (which is almost all of it) in your Appcelerator code.  The one exception is that you can still use jQuery and other DOM reliant libraries in a <a href="http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.WebView-object" target="_blank">Titanium.UI.WebView</a>, but you can't use it with the actual Appcelerator API.  Annoying to me, but I can see this being REALLY aggravating  to long time web developers accustomed to using jQuery with everything.
<h1>Deployment Support</h1>
If you've spent any time in mobile development, you know that deploying your finished app to markets and app stores can be a truly daunting task.  There's certificates, app signing, icons, logos, promotional images, supporting text, and the task of keeping it all organized.  It can quickly become a mess.  While both Appcelerator and PhoneGap both give you detailed instructions on how to build app store ready apps from your development environment and offer professional services, <strong>PhoneGap takes it one huge step further</strong>.

<a href="https://build.phonegap.com/" target="_blank">PhoneGap Build</a> is currently a free beta service that you need to get your ass signed up for now.  While I highly encourage you to check it out for yourself, here's the insanely easy workflow:
<ol>
	<li>Upload you PhoneGap project to PhoneGap Build (or use its Github integration)</li>
	<li>Configure your platform specific accounts with certificates and signing keys (all PhoneGap supported platforms available)</li>
	<li>Watch as PhoneGap Build creates deployable binaries for each of these platforms and delivers you download links for each</li>
</ol>

Now that is the type of workflow I'm looking for! A quick note on step #2 is that iOS is the only platform that requires a certificate to get a testable binary.  You'll want to set up certificates and keys before you deploy the the market/app store, but you can test the binary without them.
<h1>Speed of Development</h1>
All this flexibility and platform support has to bite PhoneGap in the ass somewhere, right?  Speed of development, if you can't tell by it name, is another place that Appcelerator excels.

Appcelerator allows developers to start building an app that looks, feels, and performs like a native one very quickly.  Some of the big reasons are the following:
<ul>
	<li>Their Javascript API is infinitely easier than Objective-C, and some might also say Java (but not me)</li>
	<li>Tons of ready-to-use native UI components</li>
	<li>You are not required to adhere to the MVC architectural pattern</li>
	<li>The double-edged sword of loosely typed Javascript allows you to create custom components like table views and rows very easily</li>
	<li>The new Titanium Studio gives you one place to develop and build for multiple platforms</li>
</ul>
&nbsp;

<iframe src="http://player.vimeo.com/video/8730218?title=0&amp;byline=0&amp;portrait=0&amp;color=9a0707" width="400" height="225" frameborder="0"></iframe>

PhoneGap, though, is a bare bones framework.  It looks to provide mobile API support (things like location, accelerometer, etc...) across all major vendors.  The UI is left up to you and your chops as a web developer.  To that end <strong>most people are left to go find another touch framework to layer on top of PhoneGap</strong>.  <a href="http://www.sencha.com/products/touch/" target="_blank">Sencha Touch</a>, <a href="http://jquerymobile.com/" target="_blank">jQuery Mobile</a>, <a href="http://jqtouch.com/" target="_blank">JQTouch</a> are all popular options.  There's even efforts to create <a href="http://nachbaur.com/blog/native-ui-controls-in-phonegap-coming-along-nicely" target="_blank">web based "native" components</a>.  You can also take my route and build most of it from scratch using <a href="http://xuijs.com/" target="_blank">XUIJS</a>.

The long and short is that if you are only building for iOS, or maybe also Android, Appcelerator will likely get you from concept to completion faster than PhoneGap.
<h1>Documentation</h1>
Documentation is key when undertaking any new technology.  Both frameworks have their ups and downs here.

Appcelerator maintains a newly improved collection of there documentation on their <a href="http://wiki.appcelerator.org/display/guides/Home#" target="_blank">new Confluence site</a>.  While it is fairly comprehensive, it is also a bit jumbled, particularly the <a href="http://wiki.appcelerator.org/display/guides/Getting+Started+with+Titanium" target="_blank">"Getting Started" section</a>.  Its all there if you have the patience to find what you are looking for.  You'll find installation, setup, examples, tutorials, the works.  You can also find a comprehensive listing of their <a href="http://developer.appcelerator.com/apidoc/mobile/latest" target="_blank">mobile API here</a>.  The problems I see with their documentation are the following:
<ul>
	<li>Its sometimes hard to tell what version of their SDK examples apply to</li>
	<li>Often Titanium objects have properties that don't apply, or don't behave as the documentation indicates</li>
	<li>You are sometimes left digging through the Q &amp; A section to find the quirks for specific Titanium objects</li>
	<li>Examples given for Titanium objects are WAY too simplistic</li>
	<li>How 'bout a few more "Hello, World!" scale tutorials before you throw us at the <a href="https://github.com/appcelerator/KitchenSink/" target="_blank">Kitchen Sink</a>?!</li>
	<li>Im sure this will change after the Titanium Studio release gets some traction, but the "Getting Started" section is still using Titanium Developer as its chosen workflow</li>
</ul>
<strong>PhoneGap's <a href="http://www.phonegap.com/start" target="_blank">"Get Started" section</a> is a thing of beauty</strong>.  In a very clean, concise layout, the PhoneGap site walks you through how to set up your computer for each individual platform you wish to develop for.  It list requirements, toolsets, and easy to follow instructions.  It helps ease the intimidation that can come with trying to develop for so many platforms. Once you get it up and running, PhoneGap's <a href="http://docs.phonegap.com/" target="_blank">API documentation</a> is incredibly easy to follow.  A simple layout lists everything PhoneGap is capable of doing.  Clicking on these capabilities then takes you to the API specific documentation that lists usage, examples, device support, and any quirks that are currently known.  It takes a lot of the guess work and frustration out of the inevitable troubleshooting that ensues with cross platform mobile development.

&nbsp;

PhoneGap definitely shines in the documentation department.  In all fairness, though, Appcelerator has a hell of a lot more to document.  PhoneGap's lack of UI components accounts for a large part of its documentation being so easy to follow.
<h1>Community</h1>
An active and knowledgable community is one of my biggest factors in choosing any technology.  Appcelerator and PhoneGap both have a wiki and blog, and also offer these a few more resources.

Appcelerator has their <a href="http://developer.appcelerator.com/questions/created" target="_blank">Q &amp; A section</a> of their site.  It allows users to submit questions about Appcelerator to the community.  Users can submit answers, vote on others' answers, and receive points and badges for participation.  If StackOverflow has taught us anything, its that people like being rewarded for participation, no matter how meaningless.  On top of this free resource, they also offer training, certification, and professional services for those looking to take their Appcelerator'ing to the next level.  I hand out on Twitter a lot, so its worth mentioning that you can get some great help and info regarding Appcelerator by following <a href="http://twitter.com/#!/appcelerator" target="_blank">@appcelerator</a>, <a href="http://twitter.com/#!/fusion94" target="_blank">@fusion94</a>, <a href="http://twitter.com/#!/aaronksaunders" target="_blank">@aaronksaunders</a> and <a href="http://twitter.com/#!/chadauld" target="_blank">@chadauld</a>.

PhoneGap maintains a connection with the community with their <a href="http://groups.google.com/group/phonegap" target="_blank">Google Group</a> and on IRC at <a href="http://webchat.freenode.net/?channels=#phonegap" target="_blank">irc.freenode.net #phonegap</a>.  They also offer <a href="http://www.phonegap.com/services" target="_blank">professional services and training</a>.  The core of the PhoneGap team is very involved with the community and I've often been found chatting with <a href="http://twitter.com/#!/phonegap" target="_blank">@phonegap</a>, <a href="http://twitter.com/#!/andrecharland" target="_blank">@andrecharland</a>, <a href="http://twitter.com/#!/brianleroux" target="_blank">@brianleroux</a>, and <a href="http://twitter.com/#!/davejohnson" target="_blank">@davejohnson</a> on Twitter.

Other than wishing PhoneGap had some kind of a forum system better than a Google group, I think both frameworks do a very good job of listening to and staying engaged in the community.
<h1>Extensibility</h1>
No developer I have ever known is just happy with the tools he's given.  We want to be able to add to and modify anything we get our hands on.  Both frameworks are very extendable via modules and offer open source licenses, though PhoneGap's option of <a href="http://www.opensource.org/licenses/bsd-license.php" target="_blank">"New" BSD</a> or <a href="http://www.opensource.org/licenses/mit-license" target="_blank">MIT license</a> is a little nicer than Appcelerator's <a href="http://www.opensource.org/licenses/apache2.0.php" target="_blank">Apache 2.0 license</a>.

Appcelerator offers <a href="http://wiki.appcelerator.org/display/guides/Module+Developer+Guide+for+Android" target="_blank">Android</a> and <a href="http://wiki.appcelerator.org/display/guides/Module+Developer+Guide+for+iOS" target="_blank">iOS</a> module development guides.  These allow you to build native components in their native SDKs and then be able to access them in your Appcelerator app via the Javascript API.  Anywhere Appcelerator falls short in terms of supporting any API or UI component, you are free to pick it up and make it happen.  Its not the simplest process and effectively removes the possibility of  cross platform code, but can be a strong tool for a single platform scenario.

<strong>UPDATE</strong>: In addition, Tony Guntharp also gave me this blog post detailing how modules can be developed in other languages as well: <a href="http://developer.appcelerator.com/blog/2011/04/tiphp-tipython.html">http://developer.appcelerator.com/blog/2011/04/tiphp-tipython.html</a>

PhoneGap also supports additional modules, or plugins, to its framework in the same fashion that Appcelerator does.  You can develop native code and then write hooks back to PhoneGap to access it in your project.  Again, this undoes any cross platform compatibility unless you make the native component for all supported platforms.  There's a <a href="http://wiki.phonegap.com/w/page/36752779/PhoneGap-Plugins" target="_blank">guide to creating plugins found here</a>.

<strong>Appcelerator on Github:</strong> <a href="https://github.com/appcelerator" target="_blank">https://github.com/appcelerator</a>
<strong>PhoneGap on Github:</strong> <a href="https://github.com/phonegap/phonegap" target="_blank">https://github.com/phonegap/phonegap</a>
<h1>Summary</h1>
So as I stated at the beginning, I think both of these frameworks are important and have their place in the mobile landscape.  From my personal perspective, as they both stand now, PhoneGap is the true cross platform solution.  <a href="http://twitter.com/#!/fling" target="_blank">Brian Fling</a>, author of <a href="http://oreilly.com/catalog/9780596155452" target="_blank">"Mobile Design and Development"</a>, rang the point home throughout his book that the future of mobile development lies in web based applications that adhere to a structure of graceful degradation.  I initially thought he was a web developer who didn't want to learn Objective-C or Java.  After spending some time with native development and multiple cross platform frameworks, I find myself coming to the same conclusion.

But that's not to say that PhoneGap is the end all, be all of mobile development.  I happen to think that for iOS & Android projects, Appcelerator could likely be your best choice.  Unless you have prior experience with Objective-C, I would advise anyone with even a basic knowledge of Javascript to give it a shot before resorting to native development.  Trust me, you won't miss Interface Builder, and outlets, and actions, and all kinds of other iOS MVC fun.  Oh, and you're sure to enjoy the native UI and performance that Titanium uniquely provides.

<strong>NOTE:</strong> I would have liked to include Adobe Air as I did in my past comparison, but I honestly have not used it in 2+ months and there have been serious changes since.  I've been focusing on cross platform solutions that can hit the big three mobile devices out there: Android, iOS, and Blackberry.  Soon as Blackberry supports Adobe Air you better believe I'm coming back to re-evaluate it.  I'll take AS3 and/or Flex over HTML/CSS/JS any day.