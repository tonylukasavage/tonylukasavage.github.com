---
layout: post
title: "Packet capture with C++ &amp; Linux"
date: 2010-11-17 11:28
comments: false
categories: [archive, packet capture, linux, c/c++]
published: true
---

As part of a larger project I'm working on I need to refamiliarize myself with some old friends: C and <a href="http://www.tcpdump.org/" target="_blank">libcap</a>.  While I do have a healthy dislike for coding in C, I have a much healthier respect for those who have used it to create some pretty fantastic stuff.  It still takes conscious effort to not spend all my time wrapping C code in C++ objects, but I digress.

libpcap is a C library used to capture and analyze network packets off the wire, otherwise known as packet sniffing.  Some of the more prominent applications out there using it right now are <a href="http://www.snort.org/" target="_blank">Snort intrusion detection system</a>, <a href="http://www.wireshark.org/" target="_blank">Wireshark network analyzer</a> (formerly known as Ethereal), and the proprietor of libpcap, <a href="http://www.tcpdump.org/" target="_blank">tcpdump</a>.

Why would you want to be able to analyze packets in code and not use one of these applications?  Because packet sniffing, in the hands of someone knowledgeable in network protocols, can be a great, non-intrusive way to gather discrete or statistical information and tie it to other coded business logic.  There's also that little, evil, <a href="http://www.blackhat.com/" target="_blank">don-your-black-hat</a>, I-wanna-be-a-hacker kind of feel to seeing packets you have no explicit reason to see.  Motives aside, let's see a simple example of how it works in Linux with a little C++ tacked on.

## The Code

``` c
#include <iostream>
#include <pcap.h>

using namespace std;

static int packetCount = 0;

void packetHandler(u_char *userData, const struct pcap_pkthdr* pkthdr, const u_char* packet) {
	cout << ++packetCount << " packet(s) captured" << endl;
}

int main() {
	char *dev;
	pcap_t *descr;
	char errbuf[PCAP_ERRBUF_SIZE];

	dev = pcap_lookupdev(errbuf);
	if (dev == NULL) {
		cout << "pcap_lookupdev() failed: " << errbuf << endl;
		return 1;
	}

	descr = pcap_open_live(dev, BUFSIZ, 0, -1, errbuf);
	if (descr == NULL) {
		cout << "pcap_open_live() failed: " << errbuf << endl;
		return 1;
	}

	if (pcap_loop(descr, 10, packetHandler, NULL) < 0) {
		cout << "pcap_loop() failed: " << pcap_geterr(descr);
		return 1;
	}

	cout << "capture finished" << endl;

	return 0;
}
```

## The Output

``` bash
1 packet(s) captured
2 packet(s) captured
3 packet(s) captured
4 packet(s) captured
5 packet(s) captured
6 packet(s) captured
7 packet(s) captured
8 packet(s) captured
9 packet(s) captured
10 packet(s) captured
capture finished
```

In this very basic example we are simply setting up a network interface to use libpcap, capturing a few packets, and exiting with a message.  Pretty vanilla, but there's a good bit going on here.  let's break it down in more detail.

## The Breakdown
``` c
#include <iostream>
#include <pcap.h>
using namespace std;
```

Here along with standard includes we also include pcap.h.  This is the header file that is necessary for all libpcap operations and constants.
<hr><br><br>

``` c
static int packetCount = 0;
void packetHandler(u_char *userData, const struct pcap_pkthdr* pkthdr, const u_char* packet) {
	cout << ++packetCount << " packet(s) captured" << endl;
}
```

This is the callback packet handler function that will do all the heavy lifting when it comes to network analysis.  This callback is referenced later by the <a href="http://www.manpagez.com/man/3/pcap_loop/" target="_blank">pcap_loop()</a> function.  Every packet that pcap receives will be passed to this function.  Here's the explanation of the parameters:
<ul>
	<li><strong>userData </strong>- a pointer to user defined data that can be passed into each callback, as defined in the <a href="http://www.manpagez.com/man/3/pcap_loop/" target="_blank">pcap_loop()</a> call's 4th parameter.</li>
	<li><strong>pkthdr </strong>- the pcap packet header that includes relevant information about the packet as it relates to pcap's capture.</li>
	<li><strong>packet </strong>- a pointer to the actual packet that will be analyzed.</li>
</ul>
For the sake of this example, we won't be doing any protocol analysis and will simply be counting the number of packets that pass over our listening interface.
<hr><br><br>

``` c
int main() {
	char *dev;
	pcap_t *descr;
	char errbuf[PCAP_ERRBUF_SIZE];
```

The start of our packet capture program.
<ul>
<li><strong>dev</strong> - this will hold the name of the interface on which we will sniff</li>
<li><strong>descr</strong> - The descriptor, or handle, for the libpcap packet capture</li>
<li><strong>errbuf</strong> - a character buffer to contain any potential errors from libpcap.  The max error size is defined by <strong>PCAP_ERRBUF_SIZE</strong> in pcap.h.</li>
</ul>
<hr><br>

``` c
	dev = pcap_lookupdev(errbuf);
	if (dev == NULL) {
		cout << "pcap_lookupdev() failed: " << errbuf << endl;
		return 1;
	}
```

Here we use <a href="http://www.manpagez.com/man/3/pcap_lookupdev/" target="_blank">pcap_lookupdev()</a> to find an available network interface on which to sniff.  The name of the interface is returned in the <strong>dev</strong> character array.  If there is an error or if no interface is available, <a href="http://www.manpagez.com/man/3/pcap_lookupdev/" target="_blank">pcap_lookupdev()</a> returns a NULL value and fills the <strong>errbuf</strong> with the relevant error information.  Returning a failure value then populating an error buffer is common practice for libpcap functions that end in error.
<hr>

``` c
	descr = pcap_open_live(dev, BUFSIZ, 0, -1, errbuf);
	if (descr == NULL) {
		cout << "pcap_open_live() failed: " << errbuf << endl;
		return 1;
	}
```

Next we create our packet capture descriptor using <a href="http://www.manpagez.com/man/3/pcap_open_live/" target="_blank">pcap_open_live()</a>.  This is how we will enable our target network interface for sniffing.  It will return a valid descriptor on success, a NULL on failure.  The parameters are as follows:

<ul>
<li><strong>device</strong> - the name of the network interface to be used by libpcap for sniffing.  We found it using <a href="http://www.manpagez.com/man/3/pcap_lookupdev/" target="_blank">pcap_lookupdev()</a>.</li>
<li><strong>snaplen</strong> - the maximum snap length, or packet size, to be handled by this descriptor.  We using the system defined <strong>BUFSIZ</strong> constant.</li>
<li><strong>promisc</strong> - Determines whether or not the interface will listen in <a href="http://en.wikipedia.org/wiki/Promiscuous_mode" target="_blank">promiscuous mode</a>.  Promiscuous mode will analyze packets not specifically addressed for your machine, like if you were attached to a hub or a <a href="http://en.wikipedia.org/wiki/Port_mirroring" target="_blank">mirrored switch port</a>.  1 turns it on, 0 turns it off.</li>
<li><strong>to_ms</strong> - this is the packet read timeout in milliseconds.  Specify -1 for no timeout.</li>
<li><strong>errbuf</strong> - In case of an error, this is where a descriptive message will be left.</li>
</ul>
<hr>

``` c
	if (pcap_loop(descr, 10, packetHandler, NULL) < 0) {
		cout << "pcap_loop() failed: " << pcap_geterr(descr);
		return 1;
	}
	cout << "capture finished" << endl;

	return 0;
}
```

And here's the call we've been waiting for: <a href="http://www.manpagez.com/man/3/pcap_loop/" target="_blank">pcap_loop()</a>.  This will take our pcap descriptor and start sniffing packets, sending them all to our packet handler callback function, aptly named packetHandler().  Here's <a href="http://www.manpagez.com/man/3/pcap_loop/" target="_blank">pcap_loop()'s</a> parameters:
<ul>
<li><strong>descr</strong> - the packet capture descriptor that we have initialized in the previous steps.</li>
<li><strong>count</strong> - the number of packets to capture before <a href="http://www.manpagez.com/man/3/pcap_loop/" target="_blank">pcap_loop()</a> exits.  Use -1 or 0 to use no limit.</li>
<li><strong>callback</strong> - this is the callback function that is called every time pcap sniffs a packet.  As specified above in the packetHandler() function, it receives relevant user data, pcap headers, and full packet data.  It is the work horse of the packet analysis process.  If creating a callback of your own, be sure to follow the function signature given in packetHandler().</li>
<li><strong>userData</strong> - this is an array of unsigned bytes to be sent in with each packet.  You can use it to hold any relevant user data you would like to send to the callback as its first paramater.   You can also specify NULL if you wish to pass no user data to the callback.</li>
</ul>
<hr>

## The Summary

With this basic example you can now use C/C++ to capture network packets.  But keeping a count of packets isn't terribly interesting, is it?  No, I don't think so either.  So what should I do next?  If you managed to make it all the way to this summary, you can help me decide what aspects of packet capture or C/C++ to show case next.  Comment on one of the following or ad your own idea and I'll probably do it next!

<ul><li>Learn how to use <a href="http://en.wikipedia.org/wiki/Berkeley_Packet_Filter" target="_blank">Berkeley packet filters</a> to focus and make more efficient your packet sniffing.</li>
<li>Process offline packet capture dumps from some of the other programs I mentioned earlier.  It's a critical skill for testing.</li>
<li>Use libpcap to learn more about the interfaces on your system?</li>
<li>Wrap this ugly C code in some much more developer friendly C++ objects.</li>
<li>Get right into the nitty gritty and start learning how to analyze packet data.</li>
</ul>

The choice is your's guys.