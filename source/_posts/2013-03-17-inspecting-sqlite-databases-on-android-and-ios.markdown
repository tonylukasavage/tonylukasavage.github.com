---
layout: post
title: "Inspecting SQLite databases on Android and iOS"
date: 2013-04-08 10:30
comments: true
categories: [mobile, ios, android, sqlite]
published: false
---

{% img right /images/sqlite_logo.png %}

One aspect of the [Alloy MVC framework](https://github.com/appcelerator/alloy) for building cross-platform mobile apps is simple integration with local storage via SQLite databases. SQLite is a powerful and relatively simple way to store data for offline use, or just to cache remote data speed up interactions. Unfortunately, the current data and structure of SQLite databases can sometimes be tricky to ascertain when housed on mobile devices, emulators, and simulators. This is especially true when developing for multiple platforms and having gone through multiple iterations of your data structure.

<!-- more -->

Jump to: [sqlite3 command](#sqlite3) | [Android](#android) | [iOS](#ios) | [SQLite database inspection](#inspecting)

There's some common things it would be great to know quickly about your deployed databases, like:

* What SQLite database files are installed?
* What tables are created on those databases?
* What is the structure of the tables? Primary keys?
* What records are present on the tables? This is critical in determining if you model layer is working as expected.

In order to make this a little less painful of an experience, let's take a look at a very simple way to inspect SQLite databases, and where we can find those databases on various mobile platforms. First we'll need a tool to actually interact with a SQLite database...

<a name="sqlite3"></a>
## sqlite3

My weapon of choice is generally the command line. For that reason I tend to stick to the [sqlite3](http://www.sqlite.org/download.html) command line tool. It comes preloaded on Mac OSX and is available for all other major OSes. Interacting with a SQLite database becomes as easy as:

{% codeblock lang:text %}
$ sqlite3 /path/to/database
SQLite version 3.7.12 2012-04-03 19:43:07
Enter ".help" for instructions
Enter SQL statements terminated with a ";"
sqlite> .tables
table1
table2
table3 
{% endcodeblock %}

You can quickly get to know the rest of the commands by executing `.help` in the sqlite3 prompt. Remember to include the `.` before the name of the command.

{% codeblock lang:text %}
$ sqlite3
SQLite version 3.7.12 2012-04-03 19:43:07
Enter ".help" for instructions
Enter SQL statements terminated with a ";"
sqlite> .help
.backup ?DB? FILE      Backup DB (default "main") to FILE
.bail ON|OFF           Stop after hitting an error.  Default OFF
.databases             List names and files of attached databases
.dump ?TABLE? ...      Dump the database in an SQL text format
                         If TABLE specified, only dump tables matching
                         LIKE pattern TABLE.
.echo ON|OFF           Turn command echo on or off
.exit                  Exit this program
.explain ?ON|OFF?      Turn output mode suitable for EXPLAIN on or off.
                         With no args, it turns EXPLAIN on.
.header(s) ON|OFF      Turn display of headers on or off
.help                  Show this message
.import FILE TABLE     Import data from FILE into TABLE
.indices ?TABLE?       Show names of all indices
                         If TABLE specified, only show indices for tables
                         matching LIKE pattern TABLE.
.log FILE|off          Turn logging on or off.  FILE can be stderr/stdout
.mode MODE ?TABLE?     Set output mode where MODE is one of:
                         csv      Comma-separated values
                         column   Left-aligned columns.  (See .width)
                         html     HTML <table> code
                         insert   SQL insert statements for TABLE
                         line     One value per line
                         list     Values delimited by .separator string
                         tabs     Tab-separated values
                         tcl      TCL list elements
.nullvalue STRING      Print STRING in place of NULL values
.output FILENAME       Send output to FILENAME
.output stdout         Send output to the screen
.prompt MAIN CONTINUE  Replace the standard prompts
.quit                  Exit this program
.read FILENAME         Execute SQL in FILENAME
.restore ?DB? FILE     Restore content of DB (default "main") from FILE
.schema ?TABLE?        Show the CREATE statements
                         If TABLE specified, only show tables matching
                         LIKE pattern TABLE.
.separator STRING      Change separator used by output mode and .import
.show                  Show the current values for various settings
.stats ON|OFF          Turn stats on or off
.tables ?TABLE?        List names of tables
                         If TABLE specified, only list tables matching
                         LIKE pattern TABLE.
.timeout MS            Try opening locked tables for MS milliseconds
.vfsname ?AUX?         Print the name of the VFS stack
.width NUM1 NUM2 ...   Set column widths for "column" mode
.timer ON|OFF          Turn the CPU timer measurement on or off
{% endcodeblock %}

<a name="android"></a>
## Android

_This section assumes you have an android SDK toolkit on your path._

The nice thing about the Android interface is that we can use a single command to find the SQLite databases on both emulators and devices. Assuming you have an open emulator and/or connected Android devices, execute `adb devices` to get a listing of their serial numbers.

{% codeblock lang:text %}
$ adb devices
List of devices attached 
emulator-5560   device
MYSERIAL        device
{% endcodeblock %}

So now connecting to an emulator or device is easy. Just pick the target serial number and execute `adb -s MYSERIAL shell`. We'll use this shell for the duration of the :

{% codeblock lang:text %}
$ adb -s MYSERIAL shell
# 
{% endcodeblock %}

All commands from here on in will assume you are already connected via `adb shell`.

Now that we're connected to the target Android device/emulator, let's get a list of the SQLite databases installed on our target app. To find that, we'll first need our target app's ID. It's typically a domain name format, like `com.somedomain.someapp`. If you don't know how to find your app ID, you can always list the installed apps on your device/emulator with the adb shell and search there:

{% codeblock lang:text %}
# ls data/data
com.android.email
com.android.alarmclock
com.android.settings
com.google.android.apps.maps
com.android.wallpaper.livepicker
com.android.vending
com.android.htmlviewer
...
com.appcelerator.Harness
{% endcodeblock %}

In this case we'll use `com.appcelerator.Harness` as the target app, which happens to be the test harness app I used for testing [Alloy](https://github.com/appcelerator/alloy). Now we just need to list the databases installed on this app:

{% codeblock lang:text %}
# ls data/data/com.appcelerator.Harness/databases
users
Titanium
{% endcodeblock %}

In this case we find 2 installed databases, `users` and `Titanium`. Congrats, you found your Android SQLite databases. To start inspecting, you just need to open up the database file with the `sqlite3` command while in the adb shell. That is, Android already has `sqlite3` available at its shell, so you can use it directly from the shell:

{% codeblock lang:text %}
# sqlite3 data/data/com.appcelerator.Harness/databases
SQLite version 3.6.22
Enter ".help" for instructions
Enter SQL statements terminated with a ";"
sqlite>
{% endcodeblock %}

Now you've got yourself full access to the live SQLite database on your Android emulator/device. To take a look at a handful of useful ways to inspect your database from the sqite3 prompt, check out the [inspecting your SQLite database](#inspecting) section.

<a name="ios"></a>
## iOS

_These instructions are relevant to OS X 10.8.2. I'll be happy to update if there's differences in earlier versions._

Unlike Android, you'll have to take a different approach in locating your SQLite database(s) depending on whether you are inspecting a simulator or device. It's actually pretty easy on the simulator. Devices, on the other hand, are a bit more of a pain in the ass to work with with respect to SQLite databases. So it goes with iOS.

### Simulator

To find a SQLite database on an iPhone/iPad simulator, let's first track down a listing of all the installed applications. To find this you'll need your current Mac username as well as the iOS version of the simulator you are running. For this example let's assume the following: 

* My username is **tlukasavage**
* iOS SDK version is **6.1**

To list the applications we now execute the following. You can use Finder, but I prefer the CLI:

{% codeblock lang:text %}
$ cd /Users/tlukasavage/Library/Application\ Support/iPhone\ Simulator/6.1/Applications
$ ls 
25D2F0D4-B225-4E19-A830-4EE6DB0093A0 
70F04874-8486-46FE-AD01-DFD04CB3B361 
A8D5AC32-4C09-452D-8DC0-BCA15178721F
4A84AB30-3306-4108-93BE-A9AC3217A89B 
88045DAE-C8F1-4B58-8E0D-B382C8E5D0FC 
D1F75E68-C8A7-442E-A5E5-8485ACD4420B
{% endcodeblock %}

Now you need to select which app ID is the one that corresponds to your installed app. For this example, we'll assume it's `25D2F0D4-B225-4E19-A830-4EE6DB0093A0`. Once you've determined that, we'll dig a little bit deeper to find the actual location of that app's SQLite databases. Bear in mind, if the following directories don't exist in your app, you likely don't actually have a SQLite database installed. We'll continue from the previous code block:

{% codeblock lang:text %}
$ cd 25D2F0D4-B225-4E19-A830-4EE6DB0093A0/Library/Private\ Documents
$ ls
_alloy_.sqlite
some_other_db.sqlite
test.sqlite
{% endcodeblock %}

Hey look, there's our databases! Now that we have the location, opening up the databases is as easy as issuing the `sqlite3` command:

{% codeblock lang:text %}
$ sqlite3 _alloy_.sqlite
SQLite version 3.7.12 2012-04-03 19:43:07
Enter ".help" for instructions
Enter SQL statements terminated with a ";"
sqlite>
{% endcodeblock %}

You can now hop to the [inspecting your SQLite database](#inspecting) section to see what you can do with it.

### Device

_This section assumes you have XCode 4+_

It's unfortunate, but on iOS we don't really have a good CLI method for accessing the on-device SQLite database like we do with Android. For this, we'll need to crack open Xcode, and more specifically Organizer. 

Open up Xcode and then hit `SHIFT+CMD+2` or go to `Window -> Organizer` to open up Organizer. In there we'll find a listing of your currently configured iOS devices. Follow these steps to retrieve the SQLite database (and additional application data) on your target device:

1. Select the device in the left panel, in my case **Tony Lukasavage's iPad**.
2. Expand the device and select **Applications**.
3. In the top right panel select your target application, in this case **Harness**.
4. In the "Data Files in Sandbox" panel, make sure your SQLite database file is present under the "Library/Private Documents" folder. In this case it's **\_alloy\_.sqlite**.
5. Download the application data in a "xcappdata" file by clicking on the **Download** button at the bottom of Organizer. It should save the file with a long file name that includes your app's ID and a timestamp. In this case, mine is **com.appcelerator.Harness 2013-04-07 13.24.32.633.xcappdata**.

{% img /images/organizer1.png %}

Now that you have the app data downloaded, we just need to navigate to the embedded SQLite database and you'll be free to use `sqlite3` on it. Assuming you downloaded the xcappdata file to your current path, this is how you would find it:

{% codeblock lang:text %}
$ cd com.appcelerator.Harness\ 2013-04-07\ 13.24.32.633.xcappdata/AppData/Library/Private\ Documents
$ sqlite3 _alloy_.sqlite
SQLite version 3.7.12 2012-04-03 19:43:07
Enter ".help" for instructions
Enter SQL statements terminated with a ";"
sqlite>
{% endcodeblock %}

Though a bit more effort than the simulator, you now have full access to the SQLite database from your iOS device. Move on to the next section for some tips of what you can do with it to learn more about your app.

<a name="inspecting"></a>
## Inspecting the SQLite database 

Now that you've found your app's SQLite database, here's a hadful of useful commands to inspect its state and contents. While it takes various methods to access these database files, interacting is exactly the same on all when using the `sqlite3` tool.

### Commands

{% codeblock List tables installed on current database lang:text %}
sqlite> .tables

android_metadata  migrations        users
{% endcodeblock %}

{% codeblock Show CREATE statement for table "users" lang:text %}
sqlite> .schema users

CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,color TEXT);
{% endcodeblock %}

{% codeblock Show table info for table "users" lang:text %}
sqlite> pragma table_info('users');

cid | name | type | notnull | dflt_value | pk
0|id|INTEGER|0||1
1|name|TEXT|0||0
2|color|TEXT|0||0
{% endcodeblock %}

{% codeblock SELECT rows from table "users" lang:text %}
sqlite> SELECT * FROM users;

1|Tony|blue
2|Chris|red
3|Bryan|red
4|Christian|blue
5|Ingo|orange
{% endcodeblock %}

This is only a very small sampling of quick things you can check to find the current state of your SQLite databases. For more details on the full functionality of the sqlite3 command, be sure to check out the [full documentation](http://www.sqlite.org/docs.html).

## Additional Tools

### SQLite Manager

I'd highly suggest taking the time to learn the CLI and the syntax of SQLite itself. If, however, you prefer a GUI...

![SQLite Manager screenshots](/images/sqlite_manager.png)

Honestly, I'm not a huge fan of Firefox, but it has one nice thing going for it: [SQLite Manager](https://addons.mozilla.org/en-us/firefox/addon/sqlite-manager/). SQLite Manager is a Firefox add-on that provides a simple, clean interface for interacting with SQLite databases. Not much in the way of bells and whistles, but hey, this is SQLite, there's not a lot of bells and whistles in the first place. The nice part about it is it's free and it will work anywhere Firefox will.

You can choose and SQLite app you like, but I recommend this one for the sake of its price, availability, and simplicity. If you aren't a command line warrior, this is a solid tool to lean on.
