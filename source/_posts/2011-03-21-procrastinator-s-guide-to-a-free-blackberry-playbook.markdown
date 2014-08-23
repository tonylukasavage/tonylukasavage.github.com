---
layout: post
title: "Procrastinator's Guide to a Free Blackberry Playbook"
date: 2011-03-21 16:28
comments: false
categories: [archive, blackberry, actionscript3, flex, playbook, mobile, as3]
published: true
---

This past week my fitness calculator app, Repper, was approved for the Blackberry App World.  In return for enduring Research in Motion's arduous app submission process, I will be awarded with a free <a href="http://us.blackberry.com/playbook-tablet/" target="_blank">Blackberry Playbook</a> once they are officially released to the public.  Because I'm so pleased with this news, I thought I would share what I perceive as the easiest route to getting your hands on a free Playbook yourself.

<span style="color: #ff0000;">You only have til March 31st to submit your app</span>, according to the <a href="http://us.blackberry.com/developers/tablet/playbook_offer.jsp" target="_blank">latest version of their offer</a>.  While this date has been pushed back a number of times, I suspect this may be the hard deadline.  You don't need to be approved by the due date, you just need to have your app submitted.  You may think I'm exaggerating here, but creating the app is the easy part, submitting is the real pain in the ass.

So before I get into too many boring details, let me lay out the list of things you need to do in order to reduce the amount of surprise time sucks you will encounter:
<ul>
	<li><a href="https://appworld.blackberry.com/isvportal/signup/signupterms.seam?pageIndex=1&amp;cid=295177" target="_blank">Sign up to be a Blackberry vendor</a></li>
	<li><a href="https://www.blackberry.com/SignedKeys/" target="_blank">Get your code signing keys</a></li>
	<li><a href="http://us.blackberry.com/developers/tablet/adobe.jsp" target="_blank">Follow the getting started guide</a> for setting up your AS3/Flex development environment (or <a href="http://us.blackberry.com/developers/tablet/webworks.jsp" target="_blank">WebWorks</a> if that's your thing)</li>
	<li>Convert an existing AS3/Flex project or create a new app (<strong>IF YOU ONLY READ ONE SECTION, READ THIS</strong>)</li>
	<li><a href="http://docs.blackberry.com/en/developers/deliverables/23959/Signing_your_application_1422721_11.jsp" target="_blank">Sign</a> and submit your app to the Blackberry App World through the <a href="https://appworld.blackberry.com/isvportal/home/login.seam?pageIndex=1&amp;cid=296029" target="_blank">vendor portal</a>.</li>
	<li>Wait for approval</li>
</ul>
The steps necessary are listed in a very specific order to maximize efficiency, particularly becoming a vendor and getting code signing keys.  Read the section below detailing each step to find out why.  So again, <strong>DO THE STEPS IN ORDER</strong>, it will save you time in the end.
<h2>Sign up to be a Blackberry vendor</h2>
This is simple enough. You just need to fill out a form with relevant personal information do that Blackberry has a record of who you are.  In the early stages of this process you actually needed to submit a notarized letter, if you were an individual and not a company, in order to complete the registration.  From what I understand this is no longer required so it should make your life a little easier.

<span style="color: #ff0000;">Blackberry is also waiving their usual $200 registration fee for developers during this period</span>.  So whether or not you plan to hit this deadline, it may be worthwhile just to sign up and get in for free.

You will do this first because this process may take a few business days to complete.  They review the vendor registration submissions and Blackberry has not been terribly quick with approvals at any step in this process.  In fact, that is the most common complaint about the app submission process so far is simply how long it takes to complete.  So get this done first and don't wait for approval to move on to the next step.
<h2>Get your code signing keys</h2>
This is another step that is as simple as filling out forms, but again requires Blackberry's intervention to approve.  Also bear in mind that the code signing key you will receive will only work on one workstation once registered and cannot be transfered to another workstation.  You have to request another key is you want it to work on another workstation.  I have requested 2 keys thus far and both have taken at least 2 business days to arrive via email.

<span style="color: #ff0000;">Like the last step, get this done now and don't wait for the key to arrive to move on</span>.  Hopefully by the time you are ready to submit your app to the App World you'll have received your vendor approval and signing key.
<h2>Follow the Getting Started Guide</h2>
I'm not going to go into a great deal of detail here because the Blackberry documentation lays it out very well.  Just follow <a href="http://us.blackberry.com/developers/tablet/adobe.jsp" target="_blank">the guide found here</a> and you'll be fast on your way to your Blackberry Playbook "Hello, World!".

One thing to keep in mind is that you must be building against the 0.9.4 SDK. I initially made the mistake of hanging on to the old 0.9.3 SDK and Blackberry has requested that I rebuild against the latest version before being able to make my app available on the App World.  Its not a huge deal, but will require you to go through the whole app update process if you don't do it right the first time.  That said, they still extended me the offer of the free Playbook without yet having made this change.
<h2>Create your app</h2>
I know, I'm trivializing what sounds like a big step.  But here's the thing: <span style="color: #ff0000;">I've not heard of one Playbook app that has been turned down due to perceived usefulness or quality</span>.  The only apps that I have heard being rejected are ones that actually don't work.  This is common in the case of people trying to implement multitouch or gesture support when the simulator does not properly emulate the behavior.

In other words, put together a simple application that is useful to a niche group.  Or better yet, convert an existing AS3 or Flex Hero project to a Playbook app.  Check out my prior post to see how I did this in literally seconds.

For me, Repper was a no brainer.  It is a simple fitness calculator that determines your 1-15 rep max on exercises.  It was originally built using Flex Hero in Air for Android.  Its currently available on the <a href="https://market.android.com/details?id=air.Repper" target="_blank">Android Market</a> if you wanna take a look at it there.  You can see there is no rocket science.  Blackberry has no high expectations for the functionality of an app for which developers have no device.  KISS is the key factor here.  Wait til you have one of these Playbooks in your hand before you try to get really creative with it.

Don't get me wrong, I'm not encouraging fart app development here.  I'm just saying that at this point in the game Blackberry is happy handing out Playbooks to competent, motivated developers.  The quality of this one app is not what they are banking on.  They are hoping that with their generous gesture that they may woo more than a handful of mobile developers to spend their time on Blackberry Playbook apps rather than iPad or Android tablets.

In short, no excuses.  Create a useful, simple app.  Its not that hard and you know it.
<h2>Submit your app to the App World</h2>
Before digging into the specifics of the submission and signing process, here's the things you'll need:
<ul>
	<li>Your signing certificate (CSJ file)</li>
	<li>A less than 4000 character description of your app</li>
	<li>A 480x480 product image for the App World</li>
	<li>At least one screenshot that is no larger than 640x640</li>
	<li>An 86x86 PNG icon, which includes a 5 pixel transparent buffer around it.  This effectively makes the icon content 76x76 or less.</li>
</ul>
First you are going to sign your release build of your application using your CSJ signing certificate.  This is an intimidating and somewhat complex process.  I highly suggest picking from the choices at the bottom of their <a href="http://docs.blackberry.com/en/developers/deliverables/23959/Signing_your_application_1422721_11.jsp" target="_blank">code signing guide</a> and following them to the letter.  I personally had no problems with the workflow for signing apps through Flash Builder 4.5 "Burrito", but I've heard that some people had issues.  The safest route might be to follow the command line instructions for the entire process.  Again I emphasize, follow the instructions to the letter and don't try to frankenstein multiple guides together, it makes it harder to troubleshoot the issues.

After you have successfully signed your app, you just need to submit it to the App World through the <a href="https://appworld.blackberry.com/isvportal/home/login.seam?pageIndex=1&amp;cid=297207" target="_blank">vendor portal</a>. Just go to "Manage Products" and click the "Add Product..." button.  You will be walked through the steps necessary to submit your signed BAR app file.  So long as you have all the items I mentioned above in the list, and a successfully signed app, it should be pretty smooth sailing.  Finding these things out during the submission process was quite frustrating.

Carve out at least an hour for the above process, because it will take some time.  The code signing can be especially time consuming from the command line, but it seems to be the one sure fire way to get the app successfully signed.

If you followed my advice and became a vendor and requested your signing keys first, you won't find yourself waiting for days once you've reached this part of the process... like I did.
<h2>Wait for approval</h2>
Now that you finally have your app submitted, you just have to sit back and relax... and relax.... and relax... and do your taxes... and ge your car inspected... and renew your driver's license... you get the idea.  It takes a LONG time to get approved.  I've not heard of anyone getting their first app approved in under 2.5 weeks, with many waiting as long as 7.  But once again, as long as you get the app submitted before the deadline, you are still eligible for the free Playbook.

Once you finally do get approved you'll receive an email telling you as much.  It may also include additional steps you must take in order for your app to be made available in the App World, like mine did.  Shortly following this, for me it was a day later, you'll receive a congratulations notice for your free Playbook.  Included in this email should be a link to a purchase order for your Playbook with a cost of $0.00.  <span style="color: #ff0000;">I have not heard of a single case where an app was approved but the developer did not receive a free Playbook offer</span>.  Fill it out, send it in, and join us in the patient wait for the release date.

Hope you follow these steps and find yourself with your very own free Blackberry Playbook too!  Let me know if you happen upon success yourself.