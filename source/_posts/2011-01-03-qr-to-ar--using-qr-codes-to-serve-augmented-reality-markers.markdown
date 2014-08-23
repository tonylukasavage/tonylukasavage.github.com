---
layout: post
title: "QR to AR: Using QR Codes to serve Augmented Reality Markers"
date: 2011-01-03 07:58
comments: false
categories: [archive, actionscript3, augmented reality, away3d, featured, mobile, qr, qr code, as3, flartoolkit, flarmanager]
published: false
---

<h1>The Demo</h1>
Scan 1 of the 4 QR codes below with your mobile device.  Here's an <a href="http://www.androidzoom.com/android_applications/shopping/barcode-scanner_clh.html" target="_blank">Android Barcode app</a> and <a href="http://www.iphoneness.com/iphone-apps/5-best-barcode-iphone-applications/" target="_blank">a couple iPhone apps</a> if you don't already have one.  
<table cellpadding="10">
  <tr>
    <td><img src="http://chart.apis.google.com/chart?cht=qr&chs=150x150&chl=http://savagelook.com/ar/markers/patt001.png"/></td>
    <td><img src="http://chart.apis.google.com/chart?cht=qr&chs=150x150&chl=http://savagelook.com/ar/markers/patt002.png"/></td>
    <td><img src="http://chart.apis.google.com/chart?cht=qr&chs=150x150&chl=http://savagelook.com/ar/markers/patt003.png"/></td>
    <td><img src="http://chart.apis.google.com/chart?cht=qr&chs=150x150&chl=http://savagelook.com/ar/markers/patt004.png"/></td>
  </tr>
</table>
The resulting link will take you to an augmented reality image marker.  It doesn't mean much by itself, but take a look at what can be done with this <span style="color:#ff0000;">"QR to AR" method</span>:
<iframe title="YouTube video player" class="youtube-player" type="text/html" width="600" height="488" src="http://www.youtube.com/embed/bnY5aJSL4Bg" frameborder="0"></iframe>
<h1>The Overview</h1>
<strong>NOTE:</strong> If you are totally unfamiliar with augmented reality, check out these previous posts: <a href="http://savagelook.com/blog/away3d/away3d-augmented-reality">Augmented Reality</a> and <a href="http://savagelook.com/blog/away3d/away3dlite-augmented-reality-free-camaro">Augmented Reality with Away3dlite</a>.

What's one of the biggest blockers to augmented reality taking off?  <span style="color:#ff0000">The difficulty in distributing the augmented reality markers</span> necessary to make the technology work.  If you've seen an augmented reality site, you've read the off-putting instructions to print an image to a sheet of paper to hold in front of your webcam.  If you are a massive publication like Esquire, then its not so big of an issue.   

<object width="640" height="385"><param name="movie" value="http://www.youtube.com/v/wp2z36kKn0s?fs=1&amp;hl=en_US&amp;rel=0"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/wp2z36kKn0s?fs=1&amp;hl=en_US&amp;rel=0" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="640" height="385"></embed></object> 

But if you have no problem distributing AR markers, you probably aren't reading this and don't need my help.  But if you do, you might want to try the "QR to AR" method of distribution shown at the top of this post.  You should always offer the method of printing your AR marker, but with the widespread use of mobile technology, this is another viable method.

In short, the positive is that this method is easy to distribute and is more likely to be tried than with the "print this marker" method.  The negative is that augmented reality is already a technology that depends heavily on a quality image.  Consider the following when attempting to use the "QR to AR" method:  

<ul>
<li>Mobile phones can add difficulty with their reflective and glowing surface</li>
<li>Good lighting and webcam quality is critical for the best possible augmented reality experience</li>
<li>Disable auto-orient on your device, if possible, otherwise the image will turn when your phone does</li>
</ul>

<span style="color:#ff0000;">This isn't necessarily meant as a practical solution</span> to augmented reality marker distribution and use, just a simple attempt to think outside the box.  Hopefully it encourages people smarter than me to think of even more clever ways to bring augmented reality to the masses.

Special thanks to all techs involved here: <a href="http://words.transmote.com/wp/flarmanager/">FLARManager</a>, <a href="http://www.libspark.org/wiki/saqoosha/FLARToolKit/en">FLARToolkit</a>, <a href="http://away3d.com/">Away3D</a>, and my trusty Droid X using the <a href="http://code.google.com/p/zxing/">Barcode Scanner app from Zxing</a>.