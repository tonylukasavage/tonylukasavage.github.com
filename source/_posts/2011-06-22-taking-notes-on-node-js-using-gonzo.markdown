---
layout: post
title: "Taking Notes on Node.js using Gonzo"
date: 2011-06-22 10:56
comments: false
categories: [archive, adobe air, actionscript3, as3, flex, node.js, gonzo, markdown]
published: true
---

## Gonzo

In case you haven't heard me talking about it on <a href="http://twitter.com/#!/tonylukasavage">Twitter</a>, I'm creating my own markdown editor called <a href="https://github.com/tonylukasavage/Gonzo">Gonzo</a>. If you don't know what markdown is, read up on it at <a href="http://daringfireball.net/projects/markdown/syntax">John Gruber's (creator) blog</a>.  It was created as a way to make web based writing more readable from a writer's perspective.

Here's some of the highlights of the VERY young <strong>Gonzo</strong>:
<ul style="padding-bottom:15px;">
<li>Its open source and <a href="https://github.com/tonylukasavage/Gonzo">hosted on Github</a></lI>
<li>Its written using Adobe Air for desktop, Flex 4, and AS3</lI>
<li>The markdown to HTML parsing is done using <a href="https://gist.github.com/648771">Charles Strahan's Showdown.as</a></lI>
<li>Uses <a href="http://gskinner.com/blog/archives/2007/04/free_extension.html">Grant Skinner's StringUtils.as</a></lI>
<li>Its <strong>3 days old</strong> as of the publishing date of the article</lI>
<li>It generates HTML as you type markdown and shows it live in a preview panel</lI>
<li>Counts your words for those web writers trying to hit quotas</lI>
</ul>

## Test Run

Last night I took <strong>Gonzo</strong> for its maiden voyage in "production." I went to a meetup of the <a href="http://www.meetup.com/Pittsburgh-JavaScript-Developers/">Pittsburgh Javascript Developers</a> and discussed <a href="http://nodejs.org/">Node.js</a>.  I've never looked at Node.js before as server side Javascript always seemed like the avenue of a one trick pony.  After shedding my preconceived notions, it became apparent that using one language throughout your entire technology stack could work miracles with your efficiency.  But its young, alpha, and it changes a lot.

Rather than ramble on from a beginner's stand point, I'll leave you with the notes I took last night at the meetup using <strong>Gonzo</strong>.  First, I'll show you the notes as I entered into <strong>Gonzo</strong>.  Like I said at the beginning, if markdown is unfamiliar, <a href="http://daringfireball.net/projects/markdown/syntax">read up</a>.  Just one glance shows you how much more readable and editable it is than typical HTML markup.

## My Notes in Markdown

```
## Node.js

### Overview

* Server side JS.
* HTTP/TCP built in
* non-blocking, event driven, 1 thread (launches process into event queue)
* not suitable for CPU intensive work
* Node.js is alpha and changes a lot between revisions
* for unix, not Windows friendly
* everything is a callback and gets its own process
	* lots of nested callbacks
* has to run from command line, no GUI for management.
* you can use it as a scripting language like ruby or perl
	* does not have to be event driven if ran this way.
* Having it server side allows you to use JS up and down your whole technology stack

### NPM

* Node package managaer
* A lot like CPAN for perl

### Modules

* [100's of modules](https://github.com/joyent/node/wiki/modules)
* examples
	* Sizzle
		* DOM selections and traversing
	* Paperboy
		* serves static files
	* Jade
		* templating engine
	* ExpressJS
		* web framework
		* use it to deliver RESTful services
	* zombie headless browser
		* useful for testing Node driven services
		* assertions against returned data
		* DOM traversing is all custom code (why?!)
	* Coffeescript
	* multiple cores w/ web workers
	* Node Inspector
		* debugger
			* breakpoints
			* call stack
			* watch expressions
		* command line
		* runs in a webkit browser
		* based on google's v8 engine

### Basic Server

	var http = require("http");

	http.createServer(function (request, response) {
		response.writeHead("Content-Type: "text/html");
		response.write("<html></html>");
		response.end();
	}).listen(8081);

### Emitters

Emitters are used to counter nesting of code. Should probably use constants to define emitter names. Add parameters afer emitter name in `emit()` to pass to callback.

	emitter.emit('eventName', param1, param2);
	emitter.on('eventName', function(param1, param2) {
		// do stuff
	});
```

And now, through the magic of <strong>Gonzo</strong> and Showdown.as, we get to see the markdown translated into HTML.  You can then take the translated HTML and publish it to the web, allowing it to leverage any CSS and formatting your target venue has in place.  Again, notice how much more readable the markdown version is than this HTML version.

## My Notes Translated to HTML via Gonzo

``` html

<h2>Node.js</h2>

<h3>Overview</h3>

<ul>
<li>Server side JS. </li>
<li>HTTP/TCP built in</li>
<li>non-blocking, event driven, 1 thread (launches process into event queue)</li>
<li>not suitable for CPU intensive work</li>
<li>Node.js is alpha and changes a lot between revisions</li>
<li>for unix, not Windows friendly</li>
<li>everything is a callback and gets its own process
<ul><li>lots of nested callbacks</li></ul></li>
<li>has to run from command line, no GUI for management.</li>
<li>you can use it as a scripting language like ruby or perl
<ul><li>does not have to be event driven if ran this way.</li></ul></li>
<li>Having it server side allows you to use JS up and down your whole technology stack</li>
</ul>

<h3>NPM</h3>

<ul>
<li>Node package managaer</li>
<li>A lot like CPAN for perl</li>
</ul>

<h3>Modules</h3>

<ul>
<li><a href="https://github.com/joyent/node/wiki/modules">100's of modules</a></li>
<li>examples
<ul><li>Sizzle
<ul><li>DOM selections and traversing</li></ul></li>
<li>Paperboy
<ul><li>serves static files</li></ul></li>
<li>Jade
<ul><li>templating engine</li></ul></li>
<li>ExpressJS
<ul><li>web framework</li>
<li>use it to deliver RESTful services</li></ul></li>
<li>zombie headless browser
<ul><li>useful for testing Node driven services</li>
<li>assertions against returned data</li>
<li>DOM traversing is all custom code (why?!)</li></ul></li>
<li>Coffeescript</li>
<li>multiple cores w/ web workers</li>
<li>Node Inspector
<ul><li>debugger
<ul><li>breakpoints</li>
<li>call stack</li>
<li>watch expressions</li></ul></li>
<li>command line</li>
<li>runs in a webkit browser</li>
<li>based on google's v8 engine</li></ul></li></ul></li>
</ul>

<h3>Basic Server</h3>

<pre><code>var http = require("http");

http.createServer(function (request, response) {
    response.writeHead("Content-Type: "text/html");
    response.write("<html></html>");
    response.end();
}).listen(8081);
</code></pre>

<h3>Emitters</h3>

<p>Emitters are used to counter nesting of code. Should probably use constants to define emitter names. Add parameters after emitter name in <code>emit()</code> to pass to callback.</p>

<pre><code>emitter.emit('eventName', param1, param2);
emitter.on('eventName', function(param1, param2) {
    // do stuff
});
</code></pre>
```

And finally below is the above generated HTML copied directly into my blog.  The CSS that governs my blog does its work on the elements and makes it look relatively web ready.  Obviously if I put a little more effort in (as I will soon), I can tailor the CSS to play well with my generated HTML.  For now, though, you can see the basic formatting applied.  So without cluttering your writing with HTML you can still effortlessly generate web ready content.

## Gonzo Generated HTML on my Blog

<h2>Node.js</h2>

<h3>Overview</h3>

<ul>
<li>Server side JS. </li>
<li>HTTP/TCP built in</li>
<li>non-blocking, event driven, 1 thread (launches process into event queue)</li>
<li>not suitable for CPU intensive work</li>
<li>Node.js is alpha and changes a lot between revisions</li>
<li>for unix, not Windows friendly</li>
<li>everything is a callback and gets its own process
<ul><li>lots of nested callbacks</li></ul></li>
<li>has to run from command line, no GUI for management.</li>
<li>you can use it as a scripting language like ruby or perl
<ul><li>does not have to be event driven if ran this way.</li></ul></li>
<li>Having it server side allows you to use JS up and down your whole technology stack</li>
</ul>

<h3>NPM</h3>

<ul>
<li>Node package managaer</li>
<li>A lot like CPAN for perl</li>
</ul>

<h3>Modules</h3>

<ul>
<li><a href="https://github.com/joyent/node/wiki/modules">100's of modules</a></li>
<li>examples
<ul><li>Sizzle
<ul><li>DOM selections and traversing</li></ul></li>
<li>Paperboy
<ul><li>serves static files</li></ul></li>
<li>Jade
<ul><li>templating engine</li></ul></li>
<li>ExpressJS
<ul><li>web framework</li>
<li>use it to deliver RESTful services</li></ul></li>
<li>zombie headless browser
<ul><li>useful for testing Node driven services</li>
<li>assertions against returned data</li>
<li>DOM traversing is all custom code (why?!)</li></ul></li>
<li>Coffeescript</li>
<li>multiple cores w/ web workers</li>
<li>Node Inspector
<ul><li>debugger
<ul><li>breakpoints</li>
<li>call stack</li>
<li>watch expressions</li></ul></li>
<li>command line</li>
<li>runs in a webkit browser</li>
<li>based on google's v8 engine</li></ul></li></ul></li>
</ul>

<h3>Basic Server</h3>

<pre><code>var http = require("http");

http.createServer(function (request, response) {
    response.writeHead("Content-Type: "text/html");
    response.write("<html></html>");
    response.end();
}).listen(8081);
</code></pre>

<h3>Emitters</h3>

<p>Emitters are used to counter nesting of code. Should probably use constants to define emitter names. Add parameters after emitter name in <code>emit()</code> to pass to callback.</p>

<pre><code>emitter.emit('eventName', param1, param2);
emitter.on('eventName', function(param1, param2) {
    // do stuff
});
</code></pre>

<div style="height:15px;"></div>

## Screenshot of Gonzo in Action

<a href="/images/gonzo_example.jpg"><img src="/images/gonzo_example-e1308748863352.jpg" alt="Gonzo in action" title="Gonzo in action" width="700" height="474" class="alignnone size-full wp-image-3169" /></a>

## Summary and TODO

Right now what is shown here is basically the extent of <strong>Gonzo's</strong> functionality.  It's very young, but I plan to develop it aggressively.  After this post, all of my blog content will likely first be written in markdown in <strong>Gonzo</strong>.  I welcome contributors to the <a href="https://github.com/tonylukasavage/Gonzo">Gonzo Github repository</a>, but in all honesty, I'd wait a week or two before joining in.  Its likely to change A LOT over that period of time.

I'll end with the current TODO list for Gonzo.  Please feel free to add your own idea in the comments.
<ul>
<li>Add ability to edit and apply CSS within Gonzo</li>
<li>More robust "project" environment to allow grouping of markdown and CSS with generated HTML</li>
<li>Spell Checker, likely via <a href="http://labs.adobe.com/technologies/squiggly/">Squiggly</a></li>
<li>Major UI polish <em>(gonna need help here)</em></li>
<li>Create Mac and Windows native downloads on the <a href="https://github.com/tonylukasavage/Gonzo">Github site</a></li>
</ul>