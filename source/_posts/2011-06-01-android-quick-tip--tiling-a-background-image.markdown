---
layout: post
title: "Android Quick Tip: Tiling a Background Image"
date: 2011-06-01 13:55
comments: false
categories: [archive, android]
published: true
---

## Android Quick Tip
Often times you'll want to tile, or repeat, a small image as the background of an Android view or layout.  This is just like using the 'background-image' and 'background-repeat' CSS options, and almost as easy.  First and most importantly, you'll need an image to tile.  If you don't have one of your own, use the one below (right click and "Save Image").

## carbon_fibre.gif
<a href="/images/carbon_fibre.gif"><img class="size-full wp-image-2977" title="Carbon Fiber tile" src="/images/carbon_fibre.gif" alt="Carbon Fiber tile" width="24" height="22" /></a>

Now, in your project's <strong>res/drawable</strong> path, create a file named <strong>tile_background.xml</strong>.  Fill the file with the following XML:

## tile_background.xml

``` xml
<?xml version="1.0" encoding="UTF-8" ?>
<bitmap
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:src="@drawable/carbon_fibre"
    android:tileMode="repeat"
    />
```

Now all you have to do is set the <strong>android:background</strong> attribute of your target view or layout to the tile_background.xml drawable id, like so:

## sample_layout.xml

``` xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:layout_width="fill_parent"
    android:layout_height="fill_parent"
    android:background="@drawable/tile_background"
    >
</LinearLayout>
```

And if <strong>sample_layout.xml</strong> was the assigned content view for your main activity, you would see this when you started your app:

<a href="/images/device.png"><img src="/images/device-168x300.png" alt="tiled" title="tiled" width="168" height="300" class="alignnone size-medium wp-image-2987" /></a>