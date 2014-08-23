---
layout: post
title: "Android Quick Tip: Remove ListView Dividers"
date: 2011-05-31 12:59
comments: false
categories: [archive, android, mobile, java]
published: true
---

## Quick Tip

If you want to remove the dividers from an Android ListView, execute the following code on your ListView object.

``` java
ListView listView = (ListView)findViewById(R.id.your_listview_id);
listView.setDivider(null);
listView.setDividerHeight(0);
```

or if you are trying to remove dividers from a ListActivity, do this in your onCreate() method:

``` java
this.getListView.setDivider(null);
this.getListView.setDividerHeight(0);
```

And there you go, no more dividers.  Enjoy.