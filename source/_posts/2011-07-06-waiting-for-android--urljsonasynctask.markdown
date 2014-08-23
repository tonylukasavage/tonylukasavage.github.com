---
layout: post
title: "Waiting for Android: UrlJsonAsyncTask"
date: 2011-07-06 09:50
comments: false
categories: [archive, mobile, android, json]
published: true
---

When creating my MMA fighter search app for Android, <a href="https://market.android.com/details?id=com.savagelook.knucklehead&feature=search_result" target="_blank">Knuckle Head</a>, I created a class that I have reused a few times since.  Its called UrlJsonAsyncTask and the code necessary to use it is available in my <a href="https://github.com/tonylukasavage/com.savagelook.android" target="_blank">com.savagelook.android project on Github</a>.  The following excerpt describes the problem it was built to solve:

<blockquote>I can’t even count how many times I’ve had to load a <a href="http://developer.android.com/guide/topics/ui/dialogs.html#ProgressDialog" target="_blank">ProgressDialog</a> in Android, query JSON from a remote URL, and then return control back to the app once the query has completed. It’s an incredibly common control flow, and one I’m sick of doing over and over again. I’m sure I’m not alone.

In effort to keep this a <a href="http://en.wikipedia.org/wiki/Don't_repeat_yourself" target="_blank">DRY</a> situation, the class <a href="https://github.com/tonylukasavage/com.savagelook.android/blob/master/com/savagelook/android/UrlJsonAsyncTask.java" target="_blank">UrlJsonAsyncTask</a> in my collection of Android helpers, <a href="https://github.com/tonylukasavage/com.savagelook.android" target="_blank">com.savagelook.android</a>, is dedicated to the aforementioned task. It reduces what can be an 80+ line of code endeavor, per task, down to about 15 or less.</blockquote>

For the rest of the article, head over to the <a href="http://buildmobile.com/waiting-for-android-urljsonasynctask/">full article</a> at <a href="http://buildmobile.com/" target="_blank">BuildMobile.com</a> and check it out.  The full article includes a full explanation of the code, a <a href="https://github.com/tonylukasavage/com.buildmobile.UrlJsonAyncTaskTest" target="_blank">test project</a> with full source, and even a downloadable Android app for testing the functionality yourself.