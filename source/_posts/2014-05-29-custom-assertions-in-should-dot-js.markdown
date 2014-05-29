---
layout: post
title: "Custom assertions in should.js"
date: 2014-05-29 14:47
comments: true
categories: [node.js,javascript,should.js,testing]
published: false
---

[should.js](https://github.com/visionmedia/should.js/) is my assertion library of choice when unit testing my [node.js](http://nodejs.org/) and [Titanium](http://www.appcelerator.com/titanium/) projects, for a few reasons:

1. Works flawlessly with [mocha](http://visionmedia.github.io/mocha/). Not a surprise since they have the same [author](https://github.com/visionmedia).
2. Works in node.js, browser, and Titanium.
3. Extremely readable and <span style="color:#a00;font-weight:bold;">expressive</span>.
4. Extendable to be even better at #3, if you know how.

Here I'd like to explain exactly how you can do #4. Let's take a simple case. Let's say you have a configuration file that must abide by this format:

### config.json
{% codeblock lang:javascript %}
{
	"name": "string value",
	"value": 1234,
	"isSomething": true
}
{% endcodeblock %}

We'd like to strictly enforce that format using assertions. Lots of them. A ridiculous amount in fact. Yes, it could be done much more tersely, but it helps express the point of customization. Let's do it in a mocha [BDD](http://en.wikipedia.org/wiki/Behavior-driven_development) structure.

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

Here we're effectively asserting the format of the configuration, but we're losing a bit of the expressiveness of should.js in the process. In addition, what if we want to validate the config at the beginning of many tests and keep it [DRY](http://en.wikipedia.org/wiki/Don't_repeat_yourself)?

We've essentially got 11 lines of assertion code when what we really just want to say

> this object should be a valid config

So let's do exactly that by creating a <span style="color:#a00;font-weight:bold;">custom assertion</span> within should.js. And let's go one step further and show how this custom assertion can be placed in a separate module, making our tests as simple, clean, and expressive as possible.

I'm going to explain some of the should.js assertion internals inline, but for more details I'd highly suggest perusing the [source code](https://github.com/visionmedia/should.js), particularly the [extensions](https://github.com/visionmedia/should.js/tree/master/lib/ext).

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

Aaaaaahhh, now that is <span style="color:#a00;font-weight:bold;">nice</span>. I would hope it's pretty clear now how custom assertions can improve the readability and scalability of your test suites. It becomes even more abundantly clear as your test suites grow. But just in case you aren't convinced, here's a few more examples of using custom assertions in should.js to execute critical testing while preserving maximal expressiveness.

### Titanium Proxies

{% codeblock lang:javascript %}
var should = require('should');
{% endcodeblock %}
