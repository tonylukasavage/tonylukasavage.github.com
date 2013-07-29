---
layout: post
title: "Automata: Conway's \"Game of Life\" using Appcelerator Titanium"
date: 2013-07-29 11:23
comments: true
categories: [titanium, ios, mobile, javascript]
---

<a class="fancybox.iframe" href="/images/automata.png" ><img src="/images/automata.png" style="width:33%; float:right; margin-left:10px;"></a>

**Get the source:** [Automata on Github](https://github.com/tonylukasavage/Automata)

Every once in a while I like to engage in some wildly impractical coding experiments. You know the sort, the "Hey, I got Gentoo running on my toaster!" stuff. Today's experiement was implementing [Conway's Game of Life](http://en.wikipedia.org/wiki/Conway's_Game_of_Life) using nothing more than [Appcelerator Titanium](http://www.appcelerator.com/platform/titanium-platform/) views and deploying it to iOS. Let me explain a bit more why this is a <span style="font-weight:bold; color:#a00;">ridiculous</span> idea...

<!-- more -->

## Why It's A Bad Idea

#### _So_ Not What Titanium Is Built For

Titanium makes high-quality, cross-platform mobile applications leveraging native UI and functionality. It does exceptionally well with data-driven apps that make heavy use of the underlying mobile platform's own UI. It will win the app bake-off against any other cross-platform mobile framework there is, and often times native counterparts as well.</shamelessemployerpromotion>

It is, however, _not_ well-suited for any type of gaming. It is not a rendering canvas. It is not a game/particle engine. It has no standard render loop like you would expect in those aforementioned tools. Implementing any kind of graphical game-like experience is <span style="font-weight:bold; color:#a00;">ill-advised</span>. But sometimes ill can be a good thing. Just ask the Beastie Boys (RIP MCA).

Despite that fact, you should see what the Appcelerator-funded Lanica is doing with the [Platino](http://lanica.co/products/). Now _there's_ a game engine. Be sure to hit up [Carlos Icaza](https://twitter.com/carlosicaza), former co-founder/CEO of Ansca (makers of the [Corona SDK](http://www.coronalabs.com/products/corona-sdk/)), if you want more info about it.

But I digress...

#### Titanium Has Webviews!

Any normal person implementing this in Titanium would use a webview. Why? Because webviews, depending on the platform, actually have rendering facilities for these exact type of experiences. You could use an HTML5 canvas or even a WebGL surface to render this zero-person game, like I did with my experiment rendering [3D STL files on the web](https://github.com/tonylukasavage/jsstl), just like Github.

## Why It's A Good Idea

Because writing code to see "what if" is what makes a <span style="font-weight:bold; color:#a00;">hacker</span> a <span style="font-weight:bold; color:#a00;">hacker</span>.

## Automata

Here's a test run of Automata on my iPhone Simulator (6.1) using Titanium SDK 3.1.1. As you can see, as the number of live cells dwindles, the speed increases drastically, as is to be expected. Despite it's limitations, Titanium makes for a pretty cool demo of this game.

<iframe src="http://player.vimeo.com/video/71266653" width="500" height="281" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>

## The Blood And Guts

In order to implement the Game of Life with nothing more than Appcelerator Titanium [Views](http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.View) I needed to do the following:

#### Implement a crude render loop.

And by crude, I mean really crude, along the lines of:

{% codeblock lang:javascript %}
while(true) {
	// render current generation of cells

	// calculate next generation based on current state
}
{% endcodeblock %}

This so far only plays well with iOS. The perpetual while loop seems to prevent the UI from updating on Titanium's other supported platforms. Perhaps some toying around with `setInterval` or other timing methods could alleviate this limitation.

#### Implement The Game Of Life Algorithm

I needed to execute the game in performance-conscious JavaScript. I'm sure someone can squeeze a little more performance out of this, but this section accounts for less than 1% of the actual execution time. It doesn't really seem worth the time investment to push it further.

{% codeblock lang:javascript %}
function getNextState(x, y, alive) {
	var count = 0,
		xm1 = x > 0,
		xp1 = x+1 < xSize,
		ym1 = y > 0,
		yp1 = y+1 < ySize;

	if (xm1) {
		if (ym1 && cells[x-1][y-1].lastAlive) { count++; }
		if (cells[x-1][y].lastAlive) { count++; }
		if (yp1 && cells[x-1][y+1].lastAlive) { count++; }
	}
	if (xp1) {
		if (ym1 && cells[x+1][y-1].lastAlive) { count++; }
		if (cells[x+1][y].lastAlive) { count++; }
		if (yp1 && cells[x+1][y+1].lastAlive) { count++; }
	}
	if (ym1 && cells[x][y-1].lastAlive) { count++; }
	if (yp1 && cells[x][y+1].lastAlive) { count++; }

	// A cell's next generation is alive if:
	// - It is currently alive and has 2-3 adjacent cells
	// - it is current dead, but has exactly 3 neighboring cells
	return (alive && (count === 2 || count === 3)) || (!alive && count === 3);
}
{% endcodeblock %}

#### Handle Titanium's UI state

Titanium's UI handling of each cell needed to be handled in an even more performance-conscious manner, as this is where over 99% of the execution time would eventually end up. The views are wrapped in a plain JS object in order to keep track of state and toggle the UI's dead/alive rendering as infrequently as possible. The single `cell.proxy.visible` assignment below accounts for over 99% of the total execution time on each loop. Future versions of Titanium are actually planning to make these "native bridge crossings" much faster. Automata can serve as a bar by which some of these improvements can be measured.

{% codeblock lang:javascript %}
// render current generation
for (x = 0; x < xSize; x++) {
	for (y = 0; y < ySize; y++) {
		cell = cells[x][y];

		// minimze number of times we need to modify the proxy object
		if (cell.alive !== cell.lastAlive) {
			cell.proxy.visible = cell.alive;
		}

		// save the state
		cell.lastAlive = cell.alive;
	}
}
{% endcodeblock %}

## Final Notes

* Despite abusing Titanium to no end, it was still able to render the game.
* Titanium UI proxies are where the majority of execution time is consumed. This is true of all Titanium apps. It would be interesting to see if it was possible to make tweaks to the native bridge crossing to speed this particular app up significantly. (batching updates, custom APIs via modules)
* Changing `opacity` instead of `visible` had no discernable affect on performance.
* Creating the live cells on-demand, rather than all cells up front, resulted in slower performance. In this particular case, the initial overhead of creating all possible cells suits the app much better.
* I'm curious if anyone out there has any clever ideas for speeding this up. I'm all ears.

## Resources & Links

* Source Code: [https://github.com/tonylukasavage/Automata](https://github.com/tonylukasavage/Automata)
* Carlos Icaza presenting Lanica's Platino: [http://player.vimeo.com/video/52802376](http://player.vimeo.com/video/52802376)
* Conway's Game of Life: [http://en.wikipedia.org/wiki/Conway's_Game_of_Life](http://en.wikipedia.org/wiki/Conway's_Game_of_Life)

