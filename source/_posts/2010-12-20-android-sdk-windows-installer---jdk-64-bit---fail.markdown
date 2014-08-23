---
layout: post
title: "Android SDK Windows Installer + JDK 64 bit = FAIL"
date: 2010-12-20 23:34
comments: false
categories: [archive, android, mobile, quick tip, jdk, windows]
published: true
---

Just a quick tip, when installing the Android SDK via Windows installer with the 64 bit JDK installed, you may get a "Java SE Development Kit (JDK) not found" error.

The problem is that the Android SDK is not recognizing the 64 bit JDK (duh).  In order to work around this, you can do one of two things:
<ol>
<li>Uninstall the 64 bit JDK and install the 32 bit JDK</li>
<li>Download the Android SDK Windows ZIP file instead of the installer</li>
</ol>

<span style="color:#ff0000;">I'd highly suggest the second option</span>, as it lets you keep the better version of the JDK and doesn't really require much more work.  Just download the ZIP file, extract it where ever you want (C:\android-sdk-windows), and then run the "SDK Manager.exe" to install all the SDK platforms to develop against.  After that, add the following 2 directories to your system path (you don't have to, but it'll make things easier from the command line):
<ul>
<li>C:\android-sdk-windows\tools</li>
<li>C:\android-sdk-windows\platform-tools</li>
</ul>
Make sure you restart any open command lines to take advantage of the new PATH.  That's it.  You are now free to use your favorite workflow, be it native Java or Adobe Air mobile development.  Happy Androiding!