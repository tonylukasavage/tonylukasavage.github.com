---
layout: post
title: "Handling Global Configuration in Android"
date: 2011-06-03 09:42
comments: false
categories: [archive, android, java, mobile]
published: true
---

## The Problem
You have configuration variables and data that you want to share globally in your Android app.  You want all Activities to be able to access and edit the same instance of application specific data.

## Generic Solution
You could create a <em>Configuration</em> class <a href="http://www.glenmccl.com/tip_002.htm" target="_blank">loaded with static members</a> or as a <a href="http://en.wikipedia.org/wiki/Singleton_pattern" target="_blank">Singleton</a>.  Now you've got a shared, single instance of your configuration that can be accessed anywhere in your application.  But there are 2 minor drawbacks to this method in the context of Android development.

<ol>
<li>You now have to initialize your configuration in a separate class, in this case, your startup Activity.</li>
<li>You'll need to carry this new <em>Configuration</em> class around in all your projects.</li>
</ol>
<br>

Neither of these problems are critical, but let's see if we can do better.

## Android Solution
In Android it is possible to extend the <a href="http://developer.android.com/reference/android/app/Application.html" target="_blank">Application</a> class in order to store additional application specific information... like say configuration data.  These additional members are then accessible in any Activity via the <a href="http://developer.android.com/reference/android/content/Context.html#getApplicationContext()" target="_blank">getApplicationContext()</a> method.

The first step in this process is extending your app's Application object.  Android gives your app a generic Application object by default, so you may have never even had to look at this class directly.  But as you'll see below, its pretty simple to extend.

<span style="font-weight:bold; font-size:125%;">SampleApplication.java</span><br>

``` java
public class SampleApplication extends Application {
    private String mStringValue;

    @Override
    public void onCreate() {
        // Here you could pull values from a config file in res/raw or somewhere else
        // but for simplicity's sake, we'll just hardcode values
        mStringValue = "SavageLook.com";
        super.onCreate();
    }

    public String getStringValue() {
        return mStringValue;
    }

    public void setStringValue(String value) {
        mStringValue = value;
    }
}
```

As you can see above, extending the Application class as <strong>SampleApplication</strong> is quite simple.  You add class members for each bit of configuration data you would like to share throughout your application.  In this example, we are simply saving a String value (mStringValue) that can then be accessed and modified in any Activity in SampleApplication.

After you've added your members and any necessary getters/setters, you need to override the <strong>onCreate()</strong> method.  In the onCreate() method you can then initialize your class members with your configuration data.  You can do this any way you want. To keep the example simple, I hardcoded the configuration value (mStringValue), but I commonly store configuration data in JSON files in res/raw and load them into my extended Application object.  I won't get into those details, though, as that will likely be a whole other blog post. <span style="color:#ff0000;">Make sure you call super.onCreate() when you are finished</span>.

<strong>NOTE</strong>: It's not necessary to initialize your members in the onCreate(). For application-wide configuration data you would likely always do it in onCreate(), but you are technically free to manipulate the extended Application object anywhere in your app code.

<span style="font-weight:bold; font-size:125%;">AndroidManifest.xml</span><br>

``` xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
      package="com.yourdomain"
      android:versionCode="1"
      android:versionName="1.0">

    <!-- Android 'uses' elements... -->

    <application
        android:icon="@drawable/icon"
        android:label="@string/app_name"
        android:name=".SampleApplication">
        <activity android:name=".SampleActivity">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>
</manifest>
```

The final modification to make our Android app use the new SampleApplication class is setting it in the <strong><application></strong> element of the AndroidManifest.xml file.  The only change we make to AndroidManifest.xml is adding the <strong>android:name</strong> attribute to the <application> element.  Just add this attribute and set it equal to the name of your extended Application object, in this case <strong>SampleApplication</strong>.

OK, so now your app is using your new SampleApplication class.  How do we access the stored data in its members?  See the basic usage below.

<span style="font-weight:bold; font-size:125%;">Sample usage in any Activity</span><br>

``` java
public class SampleActivity extends Activity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        SampleApplication sampleApp = (SampleApplication)getApplicationContext();
        String localStr = sampleApp.getStringValue();
        // perform operations on localStr
        sampleApp.setStringValue(localStr);

        // The rest of your Activity code...
    }
}
```

All you have to do is call <a href="http://developer.android.com/reference/android/content/Context.html#getApplicationContext()" target="_blank">getApplicationContext()</a> and cast it to the type of your new Application object (SampleApplication).  The resulting SampleApplication object can now be used the get/set any of the members you defined for it in SampleApplication.java.

## Summary
Now you have a solid, Android native way to share data globally in your app code.  While I'm a big fan of portable solutions, I feel this Android specific one is worth to have a clear distinction between the onCreate() of my Application versus my Activities.  Hopefully this walkthrough was clear because this is something you will likely do very frequently when developing Android apps.

One final note. I can already envision some lazy developers' minds churning, "I can use this instead of Intent extras!"... Don't!  Intent extras have a specific interaction context which is important not only to functionality, but also to readability of your code.  Don't undo this by just feeding them into the global Application object.  Extending your Application object is a complement to Intent extras, not a replacement.