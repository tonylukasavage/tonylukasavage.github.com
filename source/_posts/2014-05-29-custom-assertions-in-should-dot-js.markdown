---
layout: post
title: "Custom assertions in should.js"
date: 2014-05-29 14:47
comments: true
categories: [node.js,javascript,should.js,testing]
published: false
---

[should.js][] is my assertion library of choice when unit testing my [node.js][] and [Titanium][] projects, for a few reasons:

1. Works flawlessly with [mocha][]. Not a surprise since they have the same [author][tj].
2. Works in node.js, browser, and Titanium.
3. Extremely readable and <span class="readme">expressive</span>.
4. Extendable to be even better at #3, if you know how.

Here I'd like to explain exactly how you can do #4. I was originally inspired by [this post][inspiration], but the method therein made available only a small subset of should.js's assertion functionality. To quote Freddy Mercury, **_♫ I want it all, and I want it now. ♫_**

## Test Case

Let's say you have a configuration file that must abide by this format:

### config.json
{% codeblock lang:javascript %}
{
	"name": "string value",
	"value": 1234,
	"isSomething": true
}
{% endcodeblock %}

We'd like to strictly enforce that format using assertions. Lots of them. A ridiculous amount in fact. Yes, it could be done much more tersely, but it helps express the point of customization. Let's do it in a mocha [BDD][] structure.

## No Custom Assertions

### test.js
{% codeblock lang:javascript %}
var mocha = require('mocha'),
	should = require('should');

describe('config', function() {

	it('should be valid', function() {
		// assuming getConfigToTest() returns the object to be tested...
		var config = getConfigToTest();

		should.exist(config);
		config.should.be.an.Object;
		(function() {
			JSON.stringify(config);
		}).should.not.throw();
		should.exist(config.name);
		config.name.should.be.a.String;
		should.exist(config.value);
		config.value.should.be.a.Number;
		should.exist(config.isSomething);
		config.isSomething.should.be.a.Boolean;
	});

});
{% endcodeblock %}

Here we're effectively asserting the format of the configuration, but we're losing a bit of the expressiveness of should.js in the process. We've essentially got 11 lines of assertion code when what we really just want to say is

> this object should be a valid config

In addition, what if we want to validate the config at the beginning of many tests and keep it [DRY][]? It's undoubtedly getting messy fast here.

## Custom Assertions

Let's say "this object is a valid config" _exactly_ by creating a <span class="readme">custom assertion</span> within should.js. And let's go one step further and show how this custom assertion can be placed in a separate module. This will make our tests as simple, clean, and expressive as possible.

I'm going to explain some of the should.js assertion internals inline, but for more details I'd highly suggest perusing the [source code][should.js], particularly the [extensions][].

### assertions.js
{% codeblock lang:javascript %}
var should = require('should');

should.Assertion.add(
	// the name of the custom assertion
	'ValidConfig',

	// the implementation of the custom assertion
	function() {
		// `this.params` defines what text is associated with the
		// pass/fail state of your custom assertion
		this.params = { operator: 'to be a valid config' };

		// `this.obj` refers to the object in the should.js chain upon
		// which the assertion will be applied. `foo` would be `this.obj`
		// in this example:
		//
		//     foo.should.be.a.String;
		//
		var config = this.obj;

		// the assertion itself, just as above
		should.exist(config);
		config.should.be.an.Object;
		(function() {
			JSON.stringify(config);
		}).should.not.throw();
		should.exist(config.name);
		config.name.should.be.a.String;
		should.exist(config.value);
		config.value.should.be.a.Number;
		should.exist(config.isSomething);
		config.isSomething.should.be.a.Boolean;
	},

	// is this a getter, meaning no function call?
	//
	//     foo.should.be.a.String         // getter
	//     foo.should.be.equal('string'); // not a getter
	//
	true
);
{% endcodeblock %}

and now are unit test looks like this:

### test.js
{% codeblock lang:javascript %}
var assertions = require('./assertions'),
	mocha = require('mocha'),
	should = require('should');

describe('config', function() {

	it('should be valid', function() {
		getConfigToTest().should.be.a.ValidConfig;
	});

});
{% endcodeblock %}

Aaaaaahhh, now that is _<span class="readme">nice</span>_. It should be pretty clear at this point how custom assertions can improve the readability and scalability of your test suites. It becomes clearer as your test suites grow.

## Examples

Just in case you aren't convinced, here's a few more examples of using custom assertions in should.js to execute critical testing while preserving maximal expressiveness.

### Titanium Proxies

Remember, [Titanium proxies don't play well with should.js][tiproxy], so you need to wrap them manually before running assertions.

#### assertions.js

{% codeblock lang:javascript %}
var should = require('should');
should.Assertion.add('TitaniumProxy', function() {
	this.params = { operator: 'to be a Titanium proxy' };
	should(this.obj).be.an.Object;
	should(this.obj.applyProperties).be.a.Function;
}, true);
{% endcodeblock %}

#### usage

{% codeblock lang:javascript %}
var assertions = require('./assertions'),
	should = require('should'),
	win = Ti.UI.createWindow();

should(win).be.a.TitaniumProxy;
{% endcodeblock %}

### Format Validation

Here's a simple case of validating that a given object is an XML string using [xmldom](https://github.com/jindw/xmldom).

#### assertions.js

{% codeblock lang:javascript %}
var should = require('should'),
	DOMParser = require('xmldom').DOMParser;

should.Assertion.add('Xml', function(str) {
	this.params = { operator: 'to be a valid XML string' };
	this.obj.should.be.a.String;
	(function() {
		new DOMParser().parseFromString(str);
	}).should.not.throw();
}, true);
{% endcodeblock %}

#### usage

{% codeblock lang:javascript %}
var assertions = require('./assertions'),
	should = require('should');

var xml = '<root><node/></root>';
xml.should.be.XML;
{% endcodeblock %}

### Complex matchers

You can even do some really complex validating using functions instead of getters. Here's an example of asserting that a chunk of Javascript will be be minified into an expected string using [uglifyjs](https://github.com/mishoo/UglifyJS2).

#### assertions.js

{% codeblock lang:javascript %}
var should = require('should'),
	UglifyJS = require("uglify-js");

should.Assertion.add('minifyTo', function(str) {
	this.params = { operator: 'to be a valid XML string',
		expected: str,
		showDiff: true
	};

	this.obj.should.be.a.String;
	(function() {
		var result = UglifyJS.minify('test.js').code;
		result.should.equal(str);
	}).should.not.throw();
}, false);
{% endcodeblock %}

#### usage

{% codeblock lang:javascript %}
var assertions = require('./assertions'),
	should = require('should');

var code = 'var  foo = "bar"; var quux = 123;';
code.should.minifyTo('var foo="bar",quux=123;');
{% endcodeblock %}


## Resources & Links

* should.js on [github][should.js] and lots of assertion [examples][extensions]
* mocha [website][mocha] and [github](https://github.com/visionmedia/mocha)
* ["Custom assertions with should.js"][inspiration] by Andrew Swerlick

[inspiration]: http://beyondoverload.wordpress.com/2012/01/19/custom-assertions-with-should-js/
[should.js]: https://github.com/visionmedia/should.js
[extensions]: https://github.com/visionmedia/should.js/tree/master/lib/ext
[node.js]: http://nodejs.org/
[Titanium]: http://www.appcelerator.com/titanium/
[mocha]: http://visionmedia.github.io/mocha/
[tj]: https://github.com/visionmedia
[BDD]: http://en.wikipedia.org/wiki/Behavior-driven_development
[DRY]: http://en.wikipedia.org/wiki/Don't_repeat_yourself
[tiproxy]: http://tonylukasavage.com/ti-mocha/#caveats
