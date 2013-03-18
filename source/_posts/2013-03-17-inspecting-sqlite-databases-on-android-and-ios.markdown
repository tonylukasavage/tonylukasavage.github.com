---
layout: post
title: "Inspecting SQLite databases on Android and iOS"
date: 2013-03-17 12:30
comments: true
categories: mobile, ios, android, sqlite
published: false
---

One aspect of the [Alloy MVC framework](https://github.com/appcelerator/alloy) for building cross-platform mobile apps is simple integration with local storage via SQLite databases. SQLite is a powerful and relatively simple way to store data for offline use, or just to cache remote data speed up interactions. Unfortunately, the current data and structure of SQLite databases can sometimes be tricky to ascertain when housed on mobile devices, emulators, and simulators. This is especially true when developing for multiple platforms and having gone through multiple iterations of your data structure.

In order to make this a little less painful of an experience, let's take a look at a very simple way to inspect SQLite databases, and where we can find those databases on various mobile platforms. First, we'll need something to actually read the databases...

## SQLite Manager

![SQLite Manager screenshots](/images/sqlite_manager.png)

Honestly, I'm not a huge fan of Firefox, but it has one nice thing going for it: [SQLite Manager](https://addons.mozilla.org/en-us/firefox/addon/sqlite-manager/). SQLite Manager is a Firefox add-on that provides a simple, clean interface for interacting with SQLite databases. Not much in the way of bells and whistles, but hey, this is SQLite, there's not a lot of bells and whistles in the first place. The nice part about it is it's free and it will work anywhere Firefox will.

You can choose and SQLite app you like, but I recommend this one for the sake of its price, availability, and simplicity.

## iOS

### Simulator

### Device

## Android

### Emulator

### Device
