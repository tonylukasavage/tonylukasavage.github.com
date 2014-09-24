---
layout: post
title: "Optional callbacks for flexible APIs in Javascript"
date: 2014-09-24 11:53
comments: true
published: true
categories: node.js, javascript
---

Callbacks are a necessity when developing an asynchronous API in node.js. No, really, I [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). To that end, here's a little trick I originally spotted in the [node.js source code](https://github.com/joyent/node). When creating a function that will require a callback, but has a flexible invocation signature, I always use the `maybeCallback()` function.

{% codeblock lang:javascript %}
// you can use lodash or underscore for this
var isFunction = function(o) {
	return Object.prototype.toString.call(o) === '[object Function]';
}

function maybeCallback(callback) {
	return isFunction(callback) ? callback : function(err) { throw err; }
}
{% endcodeblock %}

<!-- more -->

Essentially, if you give it a function, it gives you the function back. Otherwise, it gives you back a new function that quietly does nothing, unless there's an error, in which case it throws that error. Simple, right?

In node.js, it is a standard convention that the callback for an asynchronous function is the last argument. This is simple enough with concrete APIs, like say [fs.stat](http://nodejs.org/api/fs.html#fs_fs_stat_path_callback):

> **fs.stat(path, callback)**

There's always a `path`, and always a `callback`. No trickery needed in the API creation. But what about an API like [fs.readFile](http://nodejs.org/api/fs.html#fs_fs_readfile_filename_options_callback)?

> **fs.readFile(filename, [options], callback)**

There's always a `filename`, there might `options`, and there should be a `callback`. So how exactly might we structure this under-the-hood? I won't regurgitate the node.js source code here, but let's instead see how we might use `maybeCallback` to set up this API.

```js
function readFile(filename, options, callback) {
	callback = maybeCallback(arguments[arguments.length-1]);
	if (!options || isFunction(options)) {
		options = { /* default values */ };
	}

	// do stuff
}
```

Those few lines of code do the following:

* Use the [arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) object to find the last argument that was provided to the function.
* Use `maybeCallback()` on the last argument to get our callback.
* If `options` doens't exist, or is a function (implying that it's our callback), do your default processing of the options.

This is a common pattern that I use all the time when creating APIs. And giving the users of your modules this flexibility is often key to not just their success, but also their delight in using your code. More users, more feedback, more pull requests, better module. You know how it goes.