---
layout: post
title: "Cropping and Compressing Video with VirtualDub and Xvid"
date: 2011-01-01 12:36
comments: false
categories: [archive, xvid, virtualdub, video editing, camstudio]
published: true
---

## The Video
Cropping a video seems like a fairly common task for anyone creating video demos or guides.  To help you out, I created a video that walks you through how to use <a href="http://www.virtualdub.com/">VirtualDub</a> and the <a href="http://www.xvid.org">Xvid codec</a> to crop and compress a video.  Its all quick, simple, and free.  If you don't feel like sitting through a video and think you can manage it yourself, follow the steps below the video.

Download the video here: <a href="http://savagelook.com/misc/virtualdub_xvid_crop.avi" rel="nobox">virtualdub_xvid_crop.avi</a>

<iframe title="YouTube video player" class="youtube-player" type="text/html" width="600" height="488" src="http://www.youtube.com/embed/L5FotwP5p-U" frameborder="0"></iframe>

## The Steps
<ol>
<li>Download and extract <a href="http://virtualdub.sourceforge.net/">VirtualDub</a></li>
<li>Download and install the <a href="http://www.xvid.org/Downloads.15.0.html">Xvid codec</a></li>
<li>Open your video in VirtualDub</li>
<li>Goto <strong>Video -> Filter...</strong></li>
<li>Because you can't crop without a filter, click <strong>Add...</strong></li>
<li>Select <strong>brightness/contrast</strong> from the list and click <strong>OK</strong> twice</li>
<li>Click <strong>Cropping...</strong></li>
<li>Change to your desired offset values for the X1, X2, Y1, Y2 which are left, right, top and bottom respectively.  <span style="color:#ff0000;">Make sure your final dimensions are a multiple of 2 or you will get an error when you attempt to save</span>.</li>
<li>Click <strong>OK</strong> to finish, then <strong>OK</strong> again to set your filter and cropping.</li>
<li>Goto <strong>Video -> Compression...</strong></li>
<li>Select the <strong>Xvid Codec</strong> from the list of video compression methods.  No settings need to be changed.  Click <strong>OK</strong> when done.</li>
<li>Goto <strong>File -> Save as AVI...</strong></li>
<li>Select the name and path for your cropped and compressed video and click <strong>Save</strong></li>
<li>Wait for the resulting video compression and saving operations to finish</li>
<li>Congrats! You now have your video cropped and compressed to the specifications you need.</li>
</ol>

## The Result
And here's an example of an original video and its cropped version.  As you can see, the original was a capture from my desktop and the cropped version shows only the Youtube video.

<table>
<tr>
<td><h2>Original Video</h2><iframe title="YouTube video player" class="youtube-player" type="text/html" width="480" height="390" src="http://www.youtube.com/embed/sSs1cD68aUA" frameborder="0"></iframe></td>
</tr><tr>
<td><h2>cropped Video</h2><iframe title="YouTube video player" class="youtube-player" type="text/html" width="640" height="390" src="http://www.youtube.com/embed/_W-M8Er4tic" frameborder="0"></iframe></td>
</tr>
</table>
