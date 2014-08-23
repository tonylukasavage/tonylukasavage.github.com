---
layout: post
title: "Swipes, or \"Flings\", for Navigation in Android"
date: 2011-03-31 10:35
comments: false
categories: [archive, mobile, android]
published: true
---

<h2>Download the Project</h2>
<ul style="margin-bottom:20px;"><li><a href="http://savagelook.com/misc/Fling.zip"><strong>Eclipse project and full source for "Fling"</strong></a></li></ul>

<h2>Overview</h2>
I'll keep the narrative on this one brief and get you right to the good stuff.  I wanted to be able to navigate through the activities in an Android app just like Tweetdeck.  One swipe of the finger and you quickly transition to the next column.  Take a look at how it looks when you swipe your finger from right to left.

In Android, they call this a "fling".  Think of a fling as a touch and drag with a specific direction and speed threshold.  Once that speed threshold is surpassed, the fling is triggered.  Here's the bare bones code necessary to get fling gestures working in your Android app.  Also, I use custo animations based on the ones from the Android SDK to determine how my activities will transition.  A left to right fling should obviously have the opposite appearance as a right to left fling.  Big thanks to <a href="http://stackoverflow.com/questions/937313/android-basic-gesture-detection" target="_blank">this post</a> as it makes up a majority of the logic and code in this sample.

<h2>src/MainActivity.java</h2>

This is where the heavy lifting is done.  The important things to note are the use of a custom gesture listener to handle our fling event and the use of <a href="http://developer.android.com/reference/android/app/Activity.html#overridePendingTransition(int, int)" target="_blank">overridePendingTransition()</a> to apply our custom transition animations to the activity we just started.

``` java
package com.savagelook;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.GestureDetector;
import android.view.GestureDetector.SimpleOnGestureListener;
import android.view.View;
import android.view.MotionEvent;

public class MainActivity extends Activity {
    private static final int SWIPE_MIN_DISTANCE = 120;
    private static final int SWIPE_MAX_OFF_PATH = 250;
    private static final int SWIPE_THRESHOLD_VELOCITY = 200;
    private GestureDetector gestureDetector;

    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);

        gestureDetector = new GestureDetector(new MyGestureDetector());
        View mainview = (View) findViewById(R.id.mainView);

        // Set the touch listener for the main view to be our custom gesture listener
        mainview.setOnTouchListener(new View.OnTouchListener() {
            public boolean onTouch(View v, MotionEvent event) {
                if (gestureDetector.onTouchEvent(event)) {
                    return true;
                }
                return false;
            }
        });
    }

    class MyGestureDetector extends SimpleOnGestureListener {
        @Override
        public boolean onFling(MotionEvent e1, MotionEvent e2, float velocityX, float velocityY) {
	    Intent intent = new Intent(MainActivity.this.getBaseContext(), MainActivity.class);

            if (Math.abs(e1.getY() - e2.getY()) > SWIPE_MAX_OFF_PATH) {
                return false;
            }

            // right to left swipe
            if(e1.getX() - e2.getX() > SWIPE_MIN_DISTANCE && Math.abs(velocityX) > SWIPE_THRESHOLD_VELOCITY) {
    		startActivity(intent);
    		MainActivity.this.overridePendingTransition(
			R.anim.slide_in_right,
			R.anim.slide_out_left
    		);
    	    // right to left swipe
            }  else if (e2.getX() - e1.getX() > SWIPE_MIN_DISTANCE && Math.abs(velocityX) > SWIPE_THRESHOLD_VELOCITY) {
    		startActivity(intent);
    		MainActivity.this.overridePendingTransition(
			R.anim.slide_in_left,
			R.anim.slide_out_right
    		);
            }

            return false;
        }

        // It is necessary to return true from onDown for the onFling event to register
        @Override
        public boolean onDown(MotionEvent e) {
	        	return true;
        }
    }
}
```

<h2>res/layout/main.xml</h2>

A standard main.xml. The only change you'll find here is that we've given the main view, our LinearLayout, an ID so it is accessible in MainActivity.java.

``` xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:layout_width="fill_parent"
    android:layout_height="fill_parent"
    android:id="@+id/mainView"
    >
	<TextView
	    android:layout_width="fill_parent"
            android:layout_height="wrap_content"
	    android:text="@string/hello"
	/>
</LinearLayout>
```

<h2>AndroidManifest.xml</h2>

Again, a standard manifest with one small change.  I added <strong>android:noHistory="true"</strong> so that as we load new activities with each fling, the view stack doesn't grow out of control.  You can remove this if you would like to go back to a previous activity after each fling using the back button.

``` xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
      package="com.savagelook"
      android:versionCode="1"
      android:versionName="1.0">

    <application android:icon="@drawable/icon" android:label="@string/app_name">
        <activity android:name=".MainActivity"
                  android:label="@string/app_name"
                  android:noHistory="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>
</manifest>
```

<h2>res/anim/slide_in_right.xml</h2>

This along with the next 3 animations are the custom transition animations used to move our activities in and out with each fling.  They are just copies of the animations in the Android SDK.  In my case, they were found in <strong>ANDROID_SDK/platforms/android-8/data/res/anim</strong>.  Create your own <strong>anim</strong> folder under <strong>res</strong> in your project and add these there.

``` xml
<set xmlns:android="http://schemas.android.com/apk/res/android">
	<translate android:fromXDelta="50%p" android:toXDelta="0"
            android:duration="@android:integer/config_mediumAnimTime"/>
	<alpha android:fromAlpha="0.0" android:toAlpha="1.0"
            android:duration="@android:integer/config_mediumAnimTime" />
</set>
```

<h2>res/anim/slide_out_right.xml</h2>

``` xml
<set xmlns:android="http://schemas.android.com/apk/res/android">
	<translate android:fromXDelta="0" android:toXDelta="50%p"
            android:duration="@android:integer/config_mediumAnimTime"/>
	<alpha android:fromAlpha="1.0" android:toAlpha="0.0"
            android:duration="@android:integer/config_mediumAnimTime" />
</set>
```

<h2>res/anim/slide_in_left.xml</h2>

``` xml
<set xmlns:android="http://schemas.android.com/apk/res/android">
	<translate android:fromXDelta="-50%p" android:toXDelta="0"
            android:duration="@android:integer/config_mediumAnimTime"/>
	<alpha android:fromAlpha="0.0" android:toAlpha="1.0"
            android:duration="@android:integer/config_mediumAnimTime" />
</set>
```

<h2>res/anim/slide_out_left.xml</h2>

``` xml
<set xmlns:android="http://schemas.android.com/apk/res/android">
	<translate android:fromXDelta="0" android:toXDelta="-50%p"
            android:duration="@android:integer/config_mediumAnimTime"/>
	<alpha android:fromAlpha="1.0" android:toAlpha="0.0"
            android:duration="@android:integer/config_mediumAnimTime" />
</set>
```

<h2>Summary</h2>
Its a little more work than you might expect for this functionality, but you do get a lot of opportunities to tinker with it.  You can change the speed threshold for when flings occur.  You can change both the current and incoming transition animations. You can even get creative and make transitions based on vertical or diagonal flings as well.  Thats the beauty, and sometimes curse, of Android: near infinite flexibility.