---
layout: post
title: "Hello, Blackberry Playbook!"
date: 2011-01-27 09:04
comments: false
categories: [archive, qnx, mobile, blackberry, playbook, flash builder 4, as3]
published: true
---

Time to say "Hello, World!" to the newest kid on the tablet device block, the <a href="http://us.blackberry.com/playbook-tablet/?CPID=KNC-kw328210_p6&amp;HBX_PK=rim|43b44ecc-8ee6-6429-a24f-000072e4f275" target="_blank">BlackBerry Playbook</a>.  Why bother developing for a tablet that isn't even publicly available yet?  Because Research in Motion (RIM) is offering <a href="http://us.blackberry.com/developers/tablet/playbook_offer.jsp" target="_blank">free Playbooks to developers</a> who create "useful" applications for it.  Thats right, if you join the RIM vendor list (free registration for a limited time only) and submit a quality app, you will receive a free Playbook.  Great incentive to bring developers to your platform.

So how do you get started? Go to the P<a href="http://us.blackberry.com/developers/tablet/" target="_blank">laybook developers site</a> and follow the instructions there.  Be warned, though, that its not the simplest setup.  Right now RIM has workflows for developing Playbook apps in Blackberry WebWorks and Adobe Air (via Flash Builder <a href="http://www.adobe.com/support/flex/downloads_updaters.html#flex4" target="_blank">4.0.1</a> or "<a href="http://labs.adobe.com/technologies/flashbuilder_burrito/" target="_blank">Burrito</a>").  For my first go around I chose the <a href="http://us.blackberry.com/developers/tablet/adobe.jsp" target="_blank">Flash Builder 4.0.1 workflow</a>.

Wanna take a quick peek at the code involved with the Hello World (seen above) for this workflow?

### AIRHelloWorld.as

``` as3
package
{
	import flash.display.Sprite;
	import flash.events.MouseEvent;
	import flash.text.TextField;
	import flash.text.TextFormat;
	import qnx.ui.buttons.Button;
	import qnx.ui.buttons.LabelButton;

	// The following metadata specifies the size and properties of the canvas that
	// this application should occupy on the BlackBerry PlayBook screen.
	[SWF(width="1024", height="600", backgroundColor="#cccccc", frameRate="30")]
	public class AIRHelloWorld extends Sprite
	{
		public function AIRHelloWorld()
		{
			var helloButton:LabelButton = new LabelButton();
			helloButton.label = "Hello World!";
			helloButton.x = (stage.stageWidth - helloButton.width)/2;
			helloButton.y = (stage.stageHeight - helloButton.height)/2;

			var myFormat:TextFormat = new TextFormat();
			myFormat.color = 0xAA0000;
			myFormat.size = 24;
			myFormat.italic = true;
			myFormat.align = "center";

			var text:TextField = new TextField();
			text.text = "Close";
			text.setTextFormat(myFormat);

			var closeButton:Button = new Button();
			closeButton.addChild(text);
			closeButton.addEventListener(MouseEvent.CLICK, closeWindow);
			closeButton.x = (stage.stageWidth - closeButton.width)/2;
			closeButton.y = helloButton.y - helloButton.height;

			addChild(helloButton);
			addChild(closeButton);

			stage.nativeWindow.visible = true;
		}

		private function closeWindow(event:MouseEvent):void{
			stage.nativeWindow.close();
		}
	}
}
```

All of you AS3 and Flash developers should be pretty pleased.  You get the comforts of your language of choice with the ability to access native QNX components; the best of both worlds.

## Setup Pitfalls
I can't stress enough that you need to follow the instructions exactly or you won't get it working.  I speak from experience.  Perhaps you can save yourself a few minutes (or hours) of searching for the resolution to the cryptic errors you may encounter by looking at the problems I ran into.  But really, all of these could be avoided by following the instructions exactly as written.

### The Flash Builder 4.0.1 update must be installed

They only mention 4.0.1 about a dozen times but I figured "how important can a point release be?".  Turns out, very.  You'll see this if you ignore it too:

```
An internal error occurred during: "Launching AIRHelloWorld".
com.adobe.flexide.launching.air.ApolloLaunchConfiguration.getAIRProfile()Ljava/lang/String;
```

Just download and install the <a href="http://www.adobe.com/support/flex/downloads_updaters.html#flex4" target="_blank">Flash Builder 4.0.1 update</a> and all will be resolved.

<h2 style="text-decoration:underline;">Adobe Air 2.5 must be installed</h2>
Again, they are clear as day about this, but you need to install the <a href="http://www.adobe.com/products/air/sdk/" target="_blank">Adobe Air 2.5 SDK</a>.  The version that comes with Flash Builder 4 is only 2.0.2, or might be 1.5, I can't remember off hand.  You can find the version of Air your BlackBerry Tablet SDK is installed against by looking at the app config XML file (AIRHelloWorld-app.xml) in your project.  The first node, <strong>application</strong>, indicates the Air version used:

``` xml
<application xmlns="http://ns.adobe.com/air/application/2.5">
```

In any case, if its not the right version you have to install Air 2.5 or you'll see an error similar to this:

```
Error: Cannot find node: versionNumber
```

This is because the versionNumber node in your app configuration isn't supported before Air 2.5.  In order to fix this error, you need to reinstall the BlackBerry Tablet SDK and make sure to point it at the directory of <a href="http://www.adobe.com/products/air/sdk/" target="_blank">Adobe Air 2.5</a> during the install.  If someone knows a better way to do it without having to reinstall the Blackberry Tablet SDK I'm all ears.

### Put your Playbook Simulator in Development Mode
Even if you remember to put your Playbook Simulator in Development Mode as per the instructions, you'll probably forget (like me) that you need to do that whenever you restart the simulator.  I'm not aware of a way to set Development Mode ON by default.  Here's the error you'll see:

```
Using icon: C:\development\AIRHelloWorld\bin-debug\blackberry-tablet-icon.png
Package created: C:\development\AIRHelloWorld/AIRHelloWorld.bar
Sending Install and Launch request...
Error: Device is not in the development mode. Switch to Development from Security settings on the device.
```

All you have to do is follow the instructions <a href="http://docs.blackberry.com/en/developers/deliverables/21877/Enable_development_mode_1359171_11.jsp" target="_blank">here</a>, which will tell you to do the following:
<ol>
<li>Activate the Playbook Simulator</li>
<li>Click the gear icon at the top right</li>
<li>Click "Security"</li>
<li>Click "General" under "Security Settings"</li>
<li>Toggle "Development Mode" to <strong>ON</strong> under "Development Settings"</li>
</ol>
<br>

## Summary
That's all I got so far. It looks like a terrific platform and is really engaging a lot of the development community by integrating native access through external SDKs.  Soon as my plate clears up a bit I'm gonna hit this full steam and add myself to the list of the <del datetime="2011-01-27T13:49:44+00:00">lucky</del> talented developers (like <a href="http://www.jasonfincanon.com/" target="_blank">Jason Fincanon</a>) getting themselves a free Playbook.