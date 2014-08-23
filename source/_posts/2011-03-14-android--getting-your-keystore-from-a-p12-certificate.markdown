---
layout: post
title: "Android: Getting your keystore from a p12 certificate"
date: 2011-03-14 08:15
comments: false
categories: [archive, android, mobile]
published: true
---

Last night I ported my fitness mobile app <a href="https://market.android.com/details?id=air.Repper&amp;feature=search_result" target="_blank">Repper</a>, a rep max calculator for Android (and other devices soon), to native Android from Flex Hero for Adobe Air.  When I finished all the coding, the one big problem I had with updating my app in the market was that I didn't have the same keystore I used to sign the original app.  Or at least I thought I didn't.

When generating an Air for Android app with Flash Builder "Burrito", you create a p12 certificate file.  To sign your Android app with Eclipse using the export signing process, you need the actual keystore used by the certificate.

The resolution to this situation is simple.  Simply use the `<strong>keytool</strong>` command that comes with the Java JRE to get the keystore file from the p12 certificate.  So if you created and used 'savagelook.p12' in Flash Builder to sign your original Android app, these following command would give you the keystore necessary to sign your app with Eclipse.

<pre lang="plain">
keytool -importkeystore -srckeystore savagelook.p12
-destkeystore savagelook.keystore -srcstoretype pkcs12
</pre>

Now all you would need to do update your mobile app in the Android Market is run the Eclipse Export Wizard for your app and use the keystore generated above to sign it.