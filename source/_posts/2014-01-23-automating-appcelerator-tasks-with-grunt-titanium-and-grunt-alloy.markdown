---
layout: post
title: "Automating Appcelerator: grunt-titanium and grunt-alloy"
date: 2014-01-23 22:04
comments: true
categories: [titanium, alloy, grunt, node.js, javascript, testing, mobile]
published: true
---

{% img right /images/grunt.png 150 150 gruntjs %}

If you follow me on [twitter](https://twitter.com/tonylukasavage), my current love affair with task management via the node.js module [grunt](http://gruntjs.com/) is no secret. Long story short, it is a deliciously simple way to automate development tasks, with a multitude of those tasks (like [linting](https://github.com/gruntjs/grunt-contrib-jshint), [minification](https://github.com/gruntjs/grunt-contrib-uglify), [file watching](https://npmjs.org/package/grunt-contrib-watch), etc...) already done for you. I could babble on about it here, but I think a tweet of mine best encapsulates my experience with it.<!-- more -->

<blockquote class="twitter-tweet" lang="en"><p>I love <a href="https://twitter.com/gruntjs">@gruntjs</a>. I now officially spend next to no time on shit that isn’t integral to the user-facing functionality of my projects.</p>&mdash; Tony Lukasavage (@tonylukasavage) <a href="https://twitter.com/tonylukasavage/statuses/414071952039772160">December 20, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script><br>

In a natural fusion of my current technological entanglements, I took to creating grunt task plugins for [Appcelerator's](http://www.appcelerator.com/titanium/) core cross-platform mobile development tools. As a result, we now have [grunt-titanium](https://npmjs.org/package/grunt-titanium) for the Titanium CLI and [grunt-alloy](https://npmjs.org/package/grunt-alloy) for the Alloy MVC framework. With these plugins you can now automate all functionality involved by these 2 tools, in turn letting you shift your focus onto your mobile app development, **where it should be**.

For a crash course in...

* task automation with grunt, check out their [docs](http://gruntjs.com/getting-started). Seriously, <span style="color:#a00;font-weight:bold;">learn grunt</span>.
* Titanium and Alloy, check out Appcelerator's [guides](http://docs.appcelerator.com/titanium/latest/) and get to building top-of-the-line, cross-platform, **native** mobile apps quickly and easily.

In the meantime, though, check out these few examples of how you can use grunt-titanium and grunt-alloy to super-charge your development workflow. Bear in mind that these are excerpts from a Gruntfile.js implementation, so again, read up on grunt and check out the grunt-titanium and grunt-alloy repos to fully understand how to use these examples.

{% githubrepo tonylukasavage/grunt-titanium %}

{% githubrepo tonylukasavage/grunt-alloy %}

## Create and build a Titanium app

{% codeblock lang:javascript %}
module.exports = function(grunt) {

	// configure the plugins
	grunt.initConfig({
		titanium: {
			should_create: {
				options: {
					command: 'create',
					name: 'app_name',
					workspaceDir: '.'
				}
			},
			should_build: {
				options: {
					command: 'build',
					projectDir: 'app_name',
					buildOnly: true
				}
			}
		}
	});

	// Actually load this plugin's task(s).
	grunt.loadTasks('tasks');

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-titanium');

	grunt.registerTask('default', ['titanium']);
};
{% endcodeblock %}

## Create and compile a Alloy app

{% codeblock lang:javascript %}
module.exports = function(grunt) {

	// configure the plugins
	grunt.initConfig({
		titanium: {
			all: {
				options: {
					command: 'create',
					name: 'app_name',
					workspaceDir: '.'
				}
			}
		},
		alloy: {
			new_app: {
				options: {
					command: 'new',
					args: ['app_name']
				}
			},
			compile: {
				options: {
					command: 'compile',
					platform: 'ios',
					outputPath: 'app_name'
				}
			}
		}
	});

	// Actually load this plugin's task(s).
	grunt.loadTasks('tasks');

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-titanium');
	grunt.loadNpmTasks('grunt-alloy');

	grunt.registerTask('default', ['titanium', 'alloy']);
};
{% endcodeblock %}

Stay tuned. I'll soon be posting about how you can expand this workflow with [ti-mocha](https://github.com/tonylukasavage/ti-mocha) to start automating the runtime testing of your Titanium and Alloy apps!

**PS** - [grunt-clean](https://github.com/gruntjs/grunt-contrib-clean) is a great plugin to use for cleaning up after yourself when creating temporary Titanium/Alloy apps for test automation.

## Resources & Links

* grunt-titanium on [github](https://github.com/tonylukasavage/grunt-titanium) and [npm](https://npmjs.org/package/grunt-titanium)
* grunt-alloy on [github](https://github.com/tonylukasavage/grunt-alloy) and [npm](https://npmjs.org/package/grunt-alloy)
* gruntjs [website](http://gruntjs.com/)
* Titanium SDK [website](http://www.appcelerator.com/titanium/)
* Titanium CLI on [npm](https://npmjs.org/package/grunt-titanium)
* Alloy [website](http://www.appcelerator.com/titanium/alloy/) and [npm page](https://npmjs.org/package/alloy)