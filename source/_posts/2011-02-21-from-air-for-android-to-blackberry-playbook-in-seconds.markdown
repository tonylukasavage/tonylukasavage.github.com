---
layout: post
title: "From Air for Android to Blackberry Playbook in seconds"
date: 2011-02-21 11:19
comments: false
categories: [archive, android, mobile, blackberry, adobe air, playbook, actionscript3, as3, flex, flash builder 4]
published: true
---

<h1><span style="font-weight: bold; font-size: 16px;">Overview</span></h1>

<p style="text-align: left;"><strong>NOTE</strong>: all source code is available for <a href="https://github.com/tonylukasavage/Repper" target="_blank">Repper at Github</a>.</p>
<p style="text-align: left;">The above image shows my <a href="http://savagelook.com/blog/actionscript3/repper-my-first-flex-hero-mobile-app" target="_self">Air for Android app Repper</a> ported over to the Blackberry Playbook.  The most remarkable thing about this port? It literally took about 60 seconds to complete!  Here is the shockingly simple, comprehensive list of steps I took to accomplish this:</p>

<ol>
	<li>Create a new Flex mobile project in <a href="http://labs.adobe.com/technologies/flashbuilder_burrito/" target="_blank">Flash Builder "Burrito"</a> to <a href="http://docs.blackberry.com/en/developers/deliverables/25068/Install_the_BlackBerry_Tablet_SDK_1347129_11.jsp" target="_blank">target the Blackberry Playbook</a></li>
	<li>Copied the project files from my original Repper project to the new project</li>
	<li>Set up the <a href="http://docs.blackberry.com/en/developers/deliverables/25068/Run_app_FB45_1397696_11.jsp" target="_blank">Playbook simulator run settings</a> in my new project</li>
	<li>Clicked "Run" and voila, Repper on the Playbook!</li>
</ol>
<p style="text-align: left;">All components scaled properly.  All layouts fit to the available screen space appropriately.  All orientation transitions performed as expected.  How was this achieved without having to write a single line of device specific code?  It comes down to 3 simple things: Adobe Air, fluid layouts, and vector graphics skinning via Flex MXML.</p>


<h1><span style="font-weight: bold; font-size: 16px;">Adobe Air</span></h1>
<p style="text-align: left;">Blackberry's use of the <a href="http://us.blackberry.com/developers/tablet/adobe.jsp" target="_blank">Adobe Air SDK for its Playbook development</a> lets Flash/Air/Flex/AS3 developers leverage existing expertise and code to create apps.  The Air SDK for the Playbook also makes available QNX components to give Playbook apps a Blackberry look and feel.  You can choose from either.  This way Flex developers can use their existing paradigms and pure AS3 developers can make use of Blackberry's QNX components.  You can even use both as Renaun Erickson details in <a href="http://renaun.com/blog/2010/12/using-mxml-with-qnx-ui-components-for-the-playbook/" target="_blank">this post</a>.</p>
<p style="text-align: left;">For me the big win was taking Repper, a <a href="http://labs.adobe.com/technologies/flexsdk_hero/" target="_blank">Flex "Hero" </a> app for Android, and porting it directly, unchanged into a working Playbook app.  The Playbook Adobe Air SDK supports Flex "Hero" so everything just worked right out of the gate.  That's the kind of portability that lets an independent developer be extremely productive.</p>

<h1><span style="font-weight: bold; font-size: 16px;">Fluid Layout</span></h1>
<p style="text-align: left;">Using fluid layouts with little to no defined pixel dimensions is key to writing a multi-screen app.  Take a look at this excerpt from the main <a href="https://github.com/tonylukasavage/Repper/blob/master/src/views/RepperHome.mxml" target="_blank">RepperHome.mxml view</a>.</p>

``` xml
        <s:HGroup id="landscapeGroup" includeIn="landscape" height="100%" width="100%"
			  paddingTop="{this.height*0.03}" paddingBottom="{this.height*0.03}" paddingLeft="{this.height*0.03}"
			  paddingRight="{this.height*0.03}" gap="{this.height*0.03}" verticalAlign="middle">
		<s:SkinnableContainer id="landscapeInput" width="36%" skinClass="RepperInputSkin">
			<s:layout>
				<s:VerticalLayout paddingTop="{this.height*0.06}" paddingLeft="{this.height*0.06}"
								  paddingRight="{this.height*0.06}" paddingBottom="{this.height*0.06}"
								  gap="{landscapeInput.height*0.04}" horizontalAlign="right"/>
			</s:layout>
			<s:HGroup width="100%" verticalAlign="middle" gap="0">
				<s:Label text="Weight" width="65%" color="0x000000" fontWeight="bold" fontSize="32"/>
				<s:TextInput width="35%" text="{inputWeight}" keyUp="onWeightKeyUp(event)" restrict="0-9."
							 contentBackgroundColor="0xffffff" color="0x000000"/>
			</s:HGroup>
			<s:HGroup width="100%" verticalAlign="middle" gap="0">
				<s:Label text="# of reps" width="65%" color="0x000000" fontWeight="bold" fontSize="32"/>
				<s:TextInput width="35%" text="{inputReps}" keyUp="onRepsKeyUp(event)" restrict="0-9"
							 contentBackgroundColor="0xffffff" color="0x000000" focusIn="textinput1_focusInHandler(event)"/>
			</s:HGroup>
			<s:Button label="Rep It" click="recalculate();" chromeColor="#111111" />
		</s:SkinnableContainer>
		<local:VDataGroup width="32%" height="100%" dataProvider="{repValues1}" itemRenderer="RepperEntry"/>
		<local:VDataGroup width="32%" height="100%" dataProvider="{repValues2}" itemRenderer="RepperEntry"/>
	</s:HGroup>
```

<p style="text-align: left;">If you look at every component and container in this chunk of Flex MXML you'll notice that no defined pixel dimensions are used.  Every component's size is determined using percentages or data bindings.  I'm not going to lie, specifying dimensions in this manner will take more time and requires a bit of trial and error to get right.  It helps if you do it with the expectation that another, dissimilar device will be using this same layout in the future.  I did, and in this case the little bit of extra forethought paid off huge in terms of portability.</p>
Because of design via fluid layouts, Repper appears properly in both portrait and landscape orientation on the Blackberry Playbook with no additional effort.
<h1><span style="font-weight: bold; font-size: 16px;">Vector Graphics via Flex MXML Skinning</span></h1>
<p style="text-align: left;">The final factor that made Repper such a breeze to port to the Playbook was Flex Hero's ability to create vector graphics via Flex MXML.  By utilizing this capability you can create skins for your components that scale as the app scales.  No external artwork of any kind is necessary.  While this is not ideal for designers or highly stylized apps, a developer like me loves it.

Here's another excerpt from Repper.  This time it shows how I used fluid dimensions once again to create vector graphic skins for my <a href="https://github.com/tonylukasavage/Repper/blob/master/src/RepperEntry.mxml" target="_blank">RepperEntry</a> components via the <a href="https://github.com/tonylukasavage/Repper/blob/master/src/RepperEntrySkin.mxml" target="_blank">RepperEntrySkin.mxml class</a></p>

``` xml
    <s:Rect id="background" x="0" y="{this.height/6}" height="66%" width="100%" radiusX="10" radiusY="10">
	<s:filters>
		<s:DropShadowFilter blurX="16" blurY="16"/>
	</s:filters>
	<s:stroke>
		<s:SolidColorStroke weight="3"/>
	</s:stroke>
        <s:fill>
		<s:LinearGradient rotation="-90">
			<s:GradientEntry color="#bbbbbb"/>
			<s:GradientEntry color="#ffffff"/>
	        </s:LinearGradient>
        </s:fill>
    </s:Rect>
    <s:Rect x="0" y="{this.height/6}" height="66%" width="60%" radiusX="10" radiusY="10">
	<s:filters>
		<s:DropShadowFilter blurX="8" blurY="8" angle="0"/>
	</s:filters>
	<s:stroke>
		<s:SolidColorStroke weight="3"/>
	</s:stroke>
	<s:fill>
		<!--- @private -->
		<s:LinearGradient rotation="-90">
			<s:GradientEntry color="#000000"/>
			<s:GradientEntry color="#444444"/>
		</s:LinearGradient>
		<!-- <s:SolidColor color="#333333"/> -->
	</s:fill>
    </s:Rect>
```

As you can see, percentages and binding are used to create skins for my components that are appropriately scaled regardless of the dimensions of the device.  Not having to create skin resources for each device and orientation is a tremendous time saver.  Especially for someone like myself who has no patience or talent for it.

<h1><span style="font-weight: bold; font-size: 16px;">Summary</span></h1>
Lesson for the day: with a little forethought and a penchant for Adobe Air, magic can happen.  OK, maybe not magic, but you'll have more time to explore the possibility of creating magic now that you won't be wasting it on porting your mobile apps.  Yes, I know, I've griped a bit lately about Flex Hero on <a href="http://twitter.com/#!/tonylukasavage" target="_blank">twitter</a>, but there are undoubtedly some things it does very well.

In fact, if you think about it, anyone that openly supports Adobe and their efforts to create a viable cross-platform mobile development environment has done very well with it.  I'm trying to think of who isn't supporting it?  Who's at the "core" of the issue?  I feel like day to day they are trying to keep the doctor away.  Supporting Adobe should be as appealing as American pie.  Oh well, hopefully some day they will have their thinking jolted like Isaac Newton did from a falling piece of fruit.