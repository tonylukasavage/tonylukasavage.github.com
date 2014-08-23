---
layout: post
title: "Create Your Own QR Code"
date: 2010-12-09 11:54
comments: false
categories: [archive, qr, javascript, qr code, google api]
published: true
---

## The Generator
<table>
<tr>
<td><strong>Text for QR Code:</strong> <form onsubmit="return false;"><input type="text" id="qrvalue" value="http://tonylukasavage.com" style="width:250px;"></input>
<button onclick="document.getElementById('qrimg').src = 'http://chart.apis.google.com/chart?cht=qr&chs=150x150&chl=' + document.getElementById('qrvalue').value;">Encode</button></form></td>
<td><img id="qrimg" src="http://chart.apis.google.com/chart?cht=qr&chs=150x150&chl=http://tonylukasavage.com"/></td>
</tr>
<tr>
<td colspan="2"><script type="text/javascript"><!--
google_ad_client = "pub-8526874234699762";
/* 728x90, created 12/19/10 */
google_ad_slot = "6406672624";
google_ad_width = 728;
google_ad_height = 90;
//-->
</script>
<script type="text/javascript"
src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
</script></td>
</tr>
</table>

## The Overview
QR codes are basically just bar codes on steroids.  They allow you to encode up to 4,296 characters in a format that can be read by most modern bar code scanning devices.  More specifically, QR codes make it much simpler to direct smart phone users to your website (or anywhere else you want).

So why do you want to do this?  Here's a few reasons that range in practicality:
<ul>
<li>Direct mobile phones to personally hosted mobile applications (no need for market fees)</li>
<li>Direct users from physical storefronts or magazine articles to your website</li>
<li>Leave encoded messages for mobile users</li>
<li>To be super cool and trendy</li>

</ul>

## The Code
Here's the Google Chart API URL you hit in order to create your own QR code.  Pop it into a browser and it will return your image.  There are more optional criteria you can send, which are detailed in the <a href="http://code.google.com/apis/chart/docs/gallery/qr_codes.html">API's QR code section</a>.  Be sure to change the sections highlighted in <span style="color:#ff0000;">RED</span> to the values that fit your needs.
<div style="border:1px solid #bbbbbb; background-color:#eeeeee; padding-left:15px;">
http://chart.apis.google.com/chart?cht=qr&chs=<span style="color:#ff0000;">HEIGHT</span>x<span style="color:#ff0000;">WIDTH</span>&chl=<span style="color:#ff0000;">YOURTEXT</span>
</div>

Now let's say you wanted to copy my website and have your own generator.  It's pretty simple.  Here's the tiny bit of HTML and javascript I used to make it happen:

``` html
<table>
  <tr>
    <td>
      <strong>Text for QR Code:</strong>
      <form onsubmit="return false;">
        <input type="text" id="qrvalue" value="http://savagelook.com" style="width:250px;"/>
        <button onclick="document.getElementById('qrimg').src = 'http://chart.apis.google.com/chart?cht=qr&chs=150x150&chl=' + document.getElementById('qrvalue').value;">Encode</button>
      </form>
    </td>
    <td>
      <img id="qrimg" src="http://chart.apis.google.com/chart?cht=qr&chs=150x150&chl=http://savagelook.com"/>
    </td>
  </tr>
</table>
```

And here's another version from <a href="http://ericharrison.info/qr/">Eric Harrison</a> with no tables

``` html
<div style="padding:15px 50px;">
  <img id="qrimg" src="http://chart.apis.google.com/chart?cht=qr&chs=150x150&chl=http://savagelook.com" style="float:left;margin-right:25px;" />
  <form onsubmit="return false;">
    <input type="text" id="qrvalue" value="http://savagelook.com" style="width:60%;font-size:125%;" /><br />
    <input type="button" style="padding:5px;font-size:125%;margin-top:10px;" onclick="document.getElementById('qrimg').src = 'http://chart.apis.google.com/chart?cht=qr&chs=150x150&chl=' + document.getElementById('qrvalue').value;" value="Encode" />
  </form>
  <br style="clear:both;" />
</div>
```

As you can see, its not rocket science, but it sure can add a little techie flare.  Have fun and be sure to let me know if you add a QR coding to your geek repetoire!