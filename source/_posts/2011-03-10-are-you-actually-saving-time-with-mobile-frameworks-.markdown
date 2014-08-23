---
layout: post
title: "Are You Actually Saving Time With Mobile Frameworks?"
date: 2011-03-10 10:37
comments: false
categories: [archive, appcelerator, html5, javascript, mobile, phonegap, air]
published: true
---

<h2>The Short, Blunt Version</h2>
<strong>DISCLAIMER</strong>: Don't leave me nasty comments if this is all you read.

Most of the available "cross platform" mobile frameworks are not as universally and uniformly compatible as they would be announced.  There are inconsistencies that make "code once, run everywhere" very unlikely without at least some tweaking.  The time spent fitting an app to one, universal mold can often force a sacrifice of even more time, quality, and usability.

Using HTML/CSS/JS for mobile development is seen as an advantage only to those who already have a great deal of experience with it.  I say this from a pure language perspective as it carries the obvious advantage of providing portable, standards based code.  If you don't have this experience with Javascript, but do have the talent and/or diversity of background necessary to learn the languages to develop natively, do so.

I'm not saying you can't build a multi-platform, high quality app with a mobile framework.  I am saying that it is not quite as easy as it may appear on paper.  This may seem counter-intuitive, but <span style="color: #ff0000;">as the complexity of your project grows, the less effective a "code once, run everywhere" approach will be</span>.  That said, most mobile frameworks do a terrific job of making small to medium sized projects available to a large audience in a short amount of time.

For the quick feature comparison of the mobile frameworks I'll talk about below, check out my prior post, "Appcelerator vs. PhoneGap vs. Adobe Air".

<hr />

<h2>Naivity</h2>
I approached the world of mobile development with the thought that a cross platform development framework was the one true path.  I mean, how else could a single developer keep up with the plethora of mobile OSes, SDKs, and devices?  And with that notion, I went forward in search of the silver bullet framework that would give me the coveted "code once, run everywhere" solution.

But as you may have expected, I haven't found it.  With my tunnel-vision focus on cross platform development I neglected to pay attention to the multitude of other key factors that can cost developers time.  I also neglected the fact that deploying to every mobile device imaginable is almost never the goal of a particular app.

So what are the problems I've run into?  How have they cost me time?  Does this outweigh the potential time saved with the "code once, run everywhere"?  Is "code once, run everywhere" really achievable for most apps?  Let's dig into these topics and see how they could impact your potential mobile development workflow.

<hr/>

<h2>Most frameworks are babies</h2>
Let's take a look at the 3 frameworks I've looked at so far:
<ul>
	<li><strong>Appcelerator</strong> - mobile SDK started in 2009</li>
	<li><strong>PhoneGap</strong> - started in 2008</li>
	<li><strong>Adobe Air &amp; Flex Hero</strong> - Air for Android and the iOS packager came out in 2010.  Flex "Hero" is still beta.</li>
</ul>
As you can see, all of these frameworks are very young.  And with that youth comes ambition, which in turn can lead to cut corners.  The  competion is fierce in a new and growing market. They know what they need to stand out: <span style="color: #ff0000;">features</span>.  Stability and adherence to standards aren't quite as eye-catching as an app that can leverage cool mobile APIs like geolocation and accelerometers.

It seems that in many cases the frameworks are spreading themselves thin at the expense of solid compatibility and stability.
<h2>How "Cross Platform" Are These Frameworks?</h2>
Here's the mobile OSes aforementioned claim to support:
<ul>
	<li><strong>Appcelerator</strong> - iOS, Android, Blackberry (beta)</li>
	<li><strong>PhoneGap</strong> - iOS, Android, Blackberry, WebOS, Symbian</li>
	<li><strong>Adobe Air &amp; Flex Hero</strong> - iOS, Android, Blackberry Playbook</li>
</ul>
Now here's been my experience with each so far, your mileage may vary.  I will try to keep it as high level as possible.
<ul>
	<li><strong>Appcelerator</strong> - iOS is their flagship.  You can tell by the very Mac-ish look to their Titanium Developer project application that this is their focus.  Appcelerator does iOs very well.  Android on the other hand has been a bit frustrating.  Many features and even core functionality are lagging behind in Android in terms of stability.  Simple things like orientation lock and layouts work well in iOS but not so much in Android.  This leads to inconsistent behavior between the two platforms, which is kinda the whole point of the framework.

I have not yet tried Blackberry development, but if Android is a production release and has these issues, I worry what I may run into.</li>
	<li><strong>PhoneGap</strong> - <span style="color: #ff0000;">This is the one framework I've experimented with so far that has a relatively uniform experience across all its supported platforms</span>.  The core functionality is there, operates the same, and with a consistent level of performance.  Granted PhoneGap is an entirely contained web app and has no native UI component access, though <a href="http://docs.phonegap.com/" target="_blank">most APIs are supported</a>.  This, though, should be the expected experience with a cross platform mobile app.  Give me the same thing on every device to which I deploy!</li>
	<li><strong>Adobe Air &amp; Flex Hero</strong> - Because these mobile apps run against the Adobe Air runtime you get a nearly identical experience across the supported platforms.  Flex Hero comes with a wide array of mobile components for your use, though some are notable missing.  The big hitch with consistency is performance.

Blackberry Playbook development churns out great, performant content.  Blackberry made available an AS3 SDK along with the ability to use Flex Hero.  Because of this forethought and respect for the existing technology, Flash/Flex developers are really enjoying this platform and I think users will too.

On Android, Air performs OK.  There's just enough lag on transitions and load time to drive you nuts as a developer, but likely won't be a deal breaker for users.

iOS seems to be a sore point for some developers.  The performance is reported to be less than desirable when compared with the other supported platforms.  Also, the <a href="http://labs.adobe.com/technologies/packagerforiphone/" target="_blank">Adobe iOS packager</a> that allows you to deploy Adobe Air mobile applications to iOS currently only supports Air 2.0, leaving out some popular APIs like camera and video.  We are all familiar with the battles between Apple and Adobe and why these performance issues exist.  The users don't care though and are likely to turn away from apps that seem sluggish as these might.</li>
</ul>
So as you can see, "cross platform" and "code once, run everywhere" aren't quite as cut and dry as we would be led to believe.  I'm not saying that frameworks should be dismissed for these reasons, but they simplicity of universal deployment and satisfactory user experience in many cases is overstated.
<h2>Do You Really Need To Support All Those Mobile OSes</h2>
I could ramble on about market share, market viability, and targeted deployment, but I'll just let these few charts do the talking and let you render your own decision:

<h2>Javascript</h2>
I'm not here to start a holy war about whether or not Javascript is quality language.  We all know the effectiveness of a programming language is largely determined by the person wielding it.  But let's be honest, Javascript is no Java, C#, or even Objective-C.  And with the exception of Adobe Air and Flex Hero, almost all mobile frameworks use HTML/CSS/JS as their technology stack.

There's no classes, no types, and the available IDEs and debugging facilities are weak in comparison to its native language SDK counterparts.  As I hear many of my Flash/Flex friends saying from time to time, its a reminder of all that was wrong with the original version of Actionscript.  jQuery and other frameworks make it more tolerable, but its still tough sledding when you are accustomed to a more full featured language.
<h2>Debugging</h2>
This is where you are ging to spend the majority of your life as a developer.  If you don't, you're a better dev than I.  And let me tell you something: debugging sucks in Javascript.  Compound this with the fact that it is pretty much impossible to debug Javascript on a mobile device and you have a recipe for may, many lost hours chasing bugs.

Let's look at Appcelerator and PhoneGap: <span style="color: #ff0000;"><del datetime="2011-03-10T18:24:52+00:00">They have no ability to debug on a device</del></span> (I've had suggestions to try <a href="http://pmuellr.github.com/weinre/" target="_blank">WEINRE</a> and <a href="http://jsconsole.com/remote-debugging.html" target="_blank">JSConsole</a>).  Appcelerator often refers to a "debug" function you can use, but it is simply a logging capability called debugging.  With PhoneGap the suggested method of debugging is running your code against the desktop version of Webkit and using its debugging capabilities.  Neither of these situation is very ideal.

Adobe Air and Flex Hero debug the way you would expect an application to be debugged.  Air can do full integrated, on-device debugging in a number of IDEs (<a href="http://www.jdoqocy.com/click-4249024-10772054" target="_top">Flash Builder</a> and <a href="https://www.cleverbridge.com/429/?affiliate=15006&amp;scope=cart&amp;cart=71011" target="_blank">FDT</a> spring to mind).  This is what should be expected.  While Javascript based mobile frameworks are using web technology, they can no longer expect developer to abide by the web's workflow.  When developing native apps we want application debugging, not web debugging.

Do not underestimate the impact that poor debugging capabilities will have on not only the timeline of your project, but also the quality.  In both cases, you just might be better served going the native route.
<h2>2 Layers Of Potential Bugs</h2>
We all know that Android, iOS, Blackberry, and any other mobile OS you may encounter is going to have bugs and quirks in its SDK.  The same could be said of all software.  If you are using a mobile framework to develop against these SDKs, you now have 2 layers of potential bugs and quirks.  It can often be difficult and time consuming to determine which one is the culprit... after you've ruled out your own code of course!

While PhoneGap and Adobe Air suffer from this to a degree, the impact is less on these two frameworks.  This is because they make no attempt to handle native components.  They rely on your own HTML/CSS/JS or Flex/AS3 components respectively to serve your UI.  Some see this as a drawback and taking away from the native user experience.  I, on the other hand, see it as a step towards true uniformity in your app.  <span style="color: #ff0000;">You need to make a decision: Do I want a native or uniform experience?</span>

Appcelerator suffers more from this situation.  By taking their unique approach of offering a Javascript SDK by which you can create native components, you are given the opportunity to create a native experience without having to engage in native development.  This is very appealing to many developers.  I know it was to me.  The unfortunate side-effect of this is that you many times will not get exactly what you would expect out of a component.  Due to the need to abstract functionality in order to make one code set apply to many different mobile OS components, you may find configurability difficult.  Determining whether something is misbahving in your app because of your code, your framework, or your SDK becomes quite troubling.

<hr/>

<h2>Summary</h2>
I gave the summary at the beginning, since I don't know if a lot of you have the stomach for this much negativity in one blog post.  There was a lot to say and detail, but the short, blunt intro summary is my current sentiment on the state of mobile development.

Just to be clear, its not all gloom and doom for mobile frameworks.  Check out the post I did a little while back detailing all the areas where these mobile frameworks can make your life much easier.  And these frameworks are getting better everyday.  PhoneGap is quickly <a href="http://wiki.phonegap.com/w/page/28291160/roadmap-planning" target="_blank">closing the gap</a> (pun) between itself and the other mobile frameworks in terms of features.  Appcelerator is making some major moves by creating a community of Titans to bring more notoriety to the cause.  They are also due to release the first public beta of their new IDE, a fusion between <a href="http://www.appcelerator.com/" target="_blank">Titanium Developer</a> and <a href="http://www.aptana.com/" target="_blank">Aptana</a>, sure to help the current state of Javascript development.  And Adobe is aggressively garnering support for its <a href="http://labs.adobe.com/" target="_blank">pre-release programs</a> for Air, Flash Player, and Flash Builder.  I believe new features along with improved performance across all platforms is going to be the fruit of this labor.

So I haven't given up yet and will continue to actively pursue these platforms.  I may wait for a bit more dust to settle though before engaging in a large scale project with any of them.  I'm sure folks braver than I are more than able to have success doing so right now.