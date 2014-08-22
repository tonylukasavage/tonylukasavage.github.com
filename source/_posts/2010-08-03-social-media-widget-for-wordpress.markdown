---
layout: post
title: "Social Media Widget for WordPress"
date: 2010-08-03 11:34
comments: false
categories: [archive, wordpress]
published: true
---

I just prettied up my blog's sidebar using the <a href="http://wordpress.org/extend/plugins/social-media-widget/" target="_blank">Social Media Widget for WordPress</a>.  Pretty simple little plugin for adding nice looking social networking icons to your sidebar that link to your personal pages (i.e., my "Follow Me" section).  Easy to install, easy to configure.  But if you are anything like me, you are handsome, smart, smell terrific, and are never satisfied with the out-of-the-box version of anything.  I wanted my icons aligned horizontally, not vertically.  I also wanted them in a different order.  Neither was configurable, so I got under the hood and made a few small source changes.

To get the icons aligning horizontally in my theme I added "display:inline" to the following classes in social_widget.css:

``` css
.socialmedia-buttons img {
    border: 0 !important;
    margin-right: 5px !important;
    display:inline;
}

.socialmedia-buttons a {
    background: none !important;
    display:inline;
}
```

After that I wanted the icons in a different order.  To do this I actually had to get into the PHP for the widget.  Luckily the changes were simple.  All I had to do was cut and paste the specific sections for each icon into the order I wanted.  For example, your social-widget.php file will have a section that looks like this:

``` php
<?php
// Facebook
if ( $facebook != '') {
	?><a href="<?php echo $facebook; ?>" <?php echo $nofollow; ?> <?php echo $newtab; ?>><img src="<?php echo $smw_path; ?>images/<?php echo $icon_pack.'/'.$icon_size; ?>/facebook.png" alt="<?php echo $title; ?> on Facebook" title="<?php echo $title; ?> on Facebook" <?php if($animation == 'fade' || $animation == 'combo') { ?> style="opacity: <?php echo $icon_opacity; ?>; -moz-opacity: <?php echo $icon_opacity;?>;" <?php } ?>class="<?php echo $animation; ?>" /></a><?php
} else {
	echo ''; //If no URL inputed
}

// Twitter
if ( $twitter != '' ) {
    ?><a href="<?php echo $twitter; ?>" <?php echo $nofollow; ?> <?php echo $newtab; ?>><img src="<?php echo $smw_path; ?>images/<?php echo $icon_pack.'/'.$icon_size; ?>/twitter.png"  alt="<?php echo $title; ?> on Twitter" title="<?php echo $title; ?> on Twitter" <?php if($animation == 'fade' || $animation == 'combo') { ?> style="opacity: <?php echo $icon_opacity; ?>; -moz-opacity: <?php echo $icon_opacity;?>;" <?php } ?>class="<?php echo $animation; ?>" /></a><?php
} else {
    echo ''; //If no URL inputed
}
?>
```

Now say you, like me, wanted the Twitter icon before the Facebook icon.  All you have to do is swap there position in the file and they will show up in the desired order:

``` php
<?php
// Twitter
if ( $twitter != '' ) {
    ?><a href="<?php echo $twitter; ?>" <?php echo $nofollow; ?> <?php echo $newtab; ?>><img src="<?php echo $smw_path; ?>images/<?php echo $icon_pack.'/'.$icon_size; ?>/twitter.png"  alt="<?php echo $title; ?> on Twitter" title="<?php echo $title; ?> on Twitter" <?php if($animation == 'fade' || $animation == 'combo') { ?> style="opacity: <?php echo $icon_opacity; ?>; -moz-opacity: <?php echo $icon_opacity;?>;" <?php } ?>class="<?php echo $animation; ?>" /></a><?php
} else {
    echo ''; //If no URL inputed
}

// Facebook
if ( $facebook != '') {
	?><a href="<?php echo $facebook; ?>" <?php echo $nofollow; ?> <?php echo $newtab; ?>><img src="<?php echo $smw_path; ?>images/<?php echo $icon_pack.'/'.$icon_size; ?>/facebook.png" alt="<?php echo $title; ?> on Facebook" title="<?php echo $title; ?> on Facebook" <?php if($animation == 'fade' || $animation == 'combo') { ?> style="opacity: <?php echo $icon_opacity; ?>; -moz-opacity: <?php echo $icon_opacity;?>;" <?php } ?>class="<?php echo $animation; ?>" /></a><?php
} else {
	echo ''; //If no URL inputed
}
?>
```

And there you have it.  With a few simple tweaks I got the Social Media Widget looking just how I want it.  Oh, and while I was writing this post I added the <a href="http://wordpress.org/extend/plugins/wp-syntax/" target="_blank">WP-Syntax Plugin for WordPress</a>.  It is responsible for the sweet syntax highlighting in all the code segments.  I highly suggest it for anyone adding code to their WordPress blogs.