---
layout: post
title: "Display Images from the Internet in Android"
date: 2011-05-19 12:59
comments: false
categories: [archive, mobile, android, java]
published: true
---

## The Overview

I'll make my usual yammering quick so you can get straight to the good stuff.  This is just a snippet to show you how you can display an image from the Internet in your native Android app via ImageView.  This is ideal in a few situations, namely when you need to keep app size and initial load time down, or if it isn't feasible to locally store all the images your app will use.
<br>
## The Code

``` java
package com.savagelook;

import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;

import android.app.Activity;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.widget.ImageView;

public class ShowImageActivity extends Activity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // YOUR_LAYOUT is the name of your layout resource
        // IMAGEVIEW_ID is your ImageView in YOUR_LAYOUT
        setContentView(R.layout.YOUR_LAYOUT);
        ImageView imageView = (ImageView)findViewById(R.id.IMAGEVIEW_ID);

        imageView.setImageDrawable(createDrawableFromURL("http://savagelook.com/misc/sl_drop2.png"));
    }

    private Drawable createDrawableFromURL(String urlString) {
        Drawable image = null;
	try {
	    URL url = new URL(urlString);
	    InputStream is = (InputStream)url.getContent();
	    image = Drawable.createFromStream(is, "src");
	} catch (MalformedURLException e) {
	    // handle URL exception
	    image = null;
	} catch (IOException e) {
	    // handle InputStream exception
	    image = null;
	}

	return image;
    }
}
```