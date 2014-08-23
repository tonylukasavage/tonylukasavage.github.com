---
layout: post
title: "SVN commit that ignores unversioned files"
date: 2011-06-02 14:20
comments: false
categories: [archive, linux, svn, bash, shell]
published: true
---

## SVN Commit Fun
I know, I know, I should be using <a href="http://git-scm.com/">Git</a>.  Well, I do. I use it for everything I have under my control.  Unfortunately, like many, I still have obligations that require me to use SVN on a regular basis.  And when I roll with SVN, I roll command line.  No, its not an elitist, terminal God point of view.  I happen to like <a href="http://tortoisesvn.net/" target="_blank">TortoiseSVN</a>, but 90% of my SVN versioned work is on Linux servers.

If you're like me, you'll find yourself frequently using this lazy command line syntax inside your project directory to catch all your changes in one commit:

``` bash
svn commit * -m "you should always leave a message!"
```

And there's a very good chance you've run into this error, or something similar:

```
svn: Commit failed (details follow):
svn: '/path/to/unversioned_file' is not under version control
```

As it turns out, there doesn't appear to be a way to ignore unversioned files in the <em>svn commit</em> options.  Now before you sart leaving comments about the <strong>svn:ignore</strong> property of the SVN configuration, realize that it only applies to the <em>svn add</em>, <em>svn import</em>, and <em>svn status</em> commands.  It has no impact on <em>svn commit</em> calls so we need another solution.

To that end, I put together a simple one-liner shell script to perform an SVN commit on all versioned files within the current directory, ignoring all unversioned files.  Here it is:

``` bash
svn status | grep ^[^?] | awk '{print $2}' | xargs svn commit -m "my commit message"
```

In case that makes no sense, it performs the following operations:

<ol>
<li>Call <em>svn status</em> to get a full list of relevant project files.</li>
<li>The question mark (?) in <em>svn status</em> signifies an unversioned file. The <em>grep</em> regular expression only matches files that do not start with that question mark.</li>
<li>Use <em>awk</em> to print the second column from the <em>svn status</em> call, which is the filename.</li>
<li>Use <em>xargs</em> to feed the filename list from <em>awk</em> to our <em>svn commit</em> call.</li>
</ol>

You can take this all one step further (as I have) and turn it into a bash script accepting your commit message as its only argument (signified by the <strong>${1}</strong>).

``` bash
#!/bin/bash
svn status | grep ^[^?] | awk '{print $2}' | xargs svn commit -m "${1}";
```

There you go, happy SVN'ing.