---
layout: post
title: "Offline packet capture analysis with C/C++ &amp; libpcap"
date: 2010-12-19 21:49
comments: false
categories: [archive, packet capture, c/c++, c++, linux, programming, libpcap]
published: true
---

## The Overview

At the request of one of my faithful readers in my original article on packet capture with libpcap, I decided to post a guide to offline packet capture processing.  Why is this useful?  Because popular packet capture programs like <a href="http://www.wireshark.org/">Wireshark</a> or <a href="http://www.tcpdump.org/">tcpdump</a> can save captures to files that can be processed later.  You can then apply your specialized code to these previously captured packets.

## The Code

<strong>NOTE:</strong> This program makes use of the <a href="http://wiki.wireshark.org/SampleCaptures?action=AttachFile&do=view&target=http.cap">http.cap</a> Wireshark packet capture sample.

``` cpp
#include <iostream>
#include <pcap.h>
#include <net/ethernet.h>
#include <netinet/ip.h>
#include <netinet/in.h>
#include <netinet/tcp.h>
#include <arpa/inet.h>

using namespace std;

void packetHandler(u_char *userData, const struct pcap_pkthdr* pkthdr, const u_char* packet);

int main() {
	pcap_t *descr;
	char errbuf[PCAP_ERRBUF_SIZE];

	// open capture file for offline processing
	descr = pcap_open_offline("http.cap", errbuf);
	if (descr == NULL) {
		cout << "pcap_open_live() failed: " << errbuf << endl;
		return 1;
	}

	// start packet processing loop, just like live capture
	if (pcap_loop(descr, 0, packetHandler, NULL) < 0) {
		cout << "pcap_loop() failed: " << pcap_geterr(descr);
		return 1;
	}

	cout << "capture finished" << endl;

	return 0;
}

void packetHandler(u_char *userData, const struct pcap_pkthdr* pkthdr, const u_char* packet) {
	const struct ether_header* ethernetHeader;
	const struct ip* ipHeader;
	const struct tcphdr* tcpHeader;
	char sourceIp[INET_ADDRSTRLEN];
	char destIp[INET_ADDRSTRLEN];
	u_int sourcePort, destPort;
	u_char *data;
	int dataLength = 0;
	string dataStr = "";

	ethernetHeader = (struct ether_header*)packet;
	if (ntohs(ethernetHeader->ether_type) == ETHERTYPE_IP) {
		ipHeader = (struct ip*)(packet + sizeof(struct ether_header));
		inet_ntop(AF_INET, &(ipHeader->ip_src), sourceIp, INET_ADDRSTRLEN);
		inet_ntop(AF_INET, &(ipHeader->ip_dst), destIp, INET_ADDRSTRLEN);

		if (ipHeader->ip_p == IPPROTO_TCP) {
			tcpHeader = (tcphdr*)(packet + sizeof(struct ether_header) + sizeof(struct ip));
			sourcePort = ntohs(tcpHeader->source);
			destPort = ntohs(tcpHeader->dest);
			data = (u_char*)(packet + sizeof(struct ether_header) + sizeof(struct ip) + sizeof(struct tcphdr));
			dataLength = pkthdr->len - (sizeof(struct ether_header) + sizeof(struct ip) + sizeof(struct tcphdr));

			// convert non-printable characters, other than carriage return, line feed,
			// or tab into periods when displayed.
			for (int i = 0; i < dataLength; i++) {
				if ((data[i] >= 32 && data[i] <= 126) || data[i] == 10 || data[i] == 11 || data[i] == 13) {
					dataStr += (char)data[i];
				} else {
					dataStr += ".";
				}
			}

			// print the results
			cout << sourceIp << ":" << sourcePort << " -> " << destIp << ":" << destPort << endl;
			if (dataLength > 0) {
				cout << dataStr << endl;
			}
		}
	}
}
```

## The Breakdown

``` cpp
#include <iostream>
#include <pcap.h>
#include <net/ethernet.h>
#include <netinet/ip.h>
#include <netinet/in.h>
#include <netinet/tcp.h>
#include <arpa/inet.h>

using namespace std;

void packetHandler(u_char *userData, const struct pcap_pkthdr* pkthdr, const u_char* packet);
```

These are the includes and declarations necessary for reading the packet captures.  The first 2 are self explanatory, the following 5 includes might be less so.  These are used for parsing and transforming data found in packets.  The functions and structures included in these headers are integral to packet processing and are available natively on Linux systems (Ubuntu in this case).
<hr><br>

``` cpp
    int main() {
	pcap_t *descr;
	char errbuf[PCAP_ERRBUF_SIZE];

	// open capture file for offline processing
	descr = pcap_open_offline("http.cap", errbuf);
	if (descr == NULL) {
		cout << "pcap_open_live() failed: " << errbuf << endl;
		return 1;
	}
```

After entering the main execution, we go straight to opening our target packet capture file, <a href="http://wiki.wireshark.org/SampleCaptures?action=AttachFile&do=view&target=http.cap">http.cap</a>.  To do this we use <a href="http://www.manpagez.com/man/3/pcap_open_offline/">pcap_open_offline()</a> and give it the capture filename and an error buffer as parameters.  If all goes well, we get a pcap_t descriptor returned.  If not, check the error buffer for details.
<hr><br>

``` cpp
        // start packet processing loop, just like live capture
	if (pcap_loop(descr, 0, packetHandler, NULL) < 0) {
		cout << "pcap_loop() failed: " << pcap_geterr(descr);
		return 1;
	}

	cout << "capture finished" << endl;

	return 0;
}
```

Just like in a live packet capture, we use <a href="http://www.manpagez.com/man/3/pcap_loop/">pcap_loop()</a> to set up a handler callback for each packet to be processed. We give it the following:
<ul>
<li>descr - the descriptor we just created with <a href="http://www.manpagez.com/man/3/pcap_open_offline/">pcap_open_offline()</a></li>
<li>count - 0 (zero), to indicate there is no limit to the number of packets we want to process</li>
<li>callback - The name of our packet handler function</li>
<li>userdata - NULL, to indicate that we will be passing no user defined data to the callack</li>
</ul>
When the entire file has been processed, we will print the "capture complete" message and then exit.
<hr><br>

``` cpp
    void packetHandler(u_char *userData, const struct pcap_pkthdr* pkthdr, const u_char* packet) {
	const struct ether_header* ethernetHeader;
	const struct ip* ipHeader;
	const struct tcphdr* tcpHeader;
	char sourceIp[INET_ADDRSTRLEN];
	char destIp[INET_ADDRSTRLEN];
	u_int sourcePort, destPort;
	u_char *data;
	int dataLength = 0;
	string dataStr = "";
```

Here we define the packet handler callback, as per the libpcap specifications.  For more details, check out my <a href="http://savagelook.com/blog/code/packet-capture-with-c-linux">original post on packet capture</a>.  The following declarations define variables that will help us parse meaningful data out of the packets.  These include packet header data, IP addresses, source/destination ports, and payload data.

There's LOTS more useful information to be analyzed from the average packet.  Check out the structure defined in the network includes at the beginning of the code for more details.  Actually, it would probably be a hell of a lot easier to just download and fire up <a href="http://www.wireshark.org/">Wireshark</a>.  It will give you a greater appreciation for what can be learned from a packet.
<hr><br>

``` cpp
        ethernetHeader = (struct ether_header*)packet;
	if (ntohs(ethernetHeader->ether_type) == ETHERTYPE_IP) {
		ipHeader = (struct ip*)(packet + sizeof(struct ether_header));
		inet_ntop(AF_INET, &(ipHeader->ip_src), sourceIp, INET_ADDRSTRLEN);
		inet_ntop(AF_INET, &(ipHeader->ip_dst), destIp, INET_ADDRSTRLEN);
```

I'm not going to delve to deeply into the specifics of network protocols, as that could be a post... check that... that could be a book of its own.  Basically here we are parsing the ethernet header from the packet and using its type to determine if it is an IP packet or not.  We use the <a href="http://linux.about.com/library/cmd/blcmdl3_ntohs.htm">ntohs()</a> to convert the type from network byte order to host byte order.

If it is an IP packet, we parse out the IP header and use the <a href="http://pubs.opengroup.org/onlinepubs/009695399/functions/inet_ntop.html">inet_ntop()</a> function to convert the IP addresses found in the IP header into a human readable format (i.e., xxx.xxx.xxx.xxx).  <span style="color:#ff0000">In a lot of older examples you'll see the use of <a href="http://beej.us/guide/bgnet/output/html/multipage/inet_ntoaman.html">inet_ntoa()</a>, but this is not thread-safe and is deprecated.</span>
<hr><br>

``` cpp
		if (ipHeader->ip_p == IPPROTO_TCP) {
			tcpHeader = (tcphdr*)(packet + sizeof(struct ether_header) + sizeof(struct ip));
			sourcePort = ntohs(tcpHeader->source);
			destPort = ntohs(tcpHeader->dest);
			data = (u_char*)(packet + sizeof(struct ether_header) + sizeof(struct ip) + sizeof(struct tcphdr));
			dataLength = pkthdr->len - (sizeof(struct ether_header) + sizeof(struct ip) + sizeof(struct tcphdr));
```

Similar to above, I use the IP header to determine if this is a TCP packet (they all should be since its a HTTP capture) and then parse out the TCP header.  With the TCP header we can then determine the source and destination ports, with <a href="http://linux.about.com/library/cmd/blcmdl3_ntohs.htm">ntohs()</a> again, and then determine the contents of the packet payload.
<hr><br>

``` cpp
			// convert non-printable characters, other than carriage return, line feed,
			// or tab into periods when displayed.
			for (int i = 0; i < dataLength; i++) {
				if ((data[i] >= 32 && data[i] <= 126) || data[i] == 10 || data[i] == 11 || data[i] == 13) {
					dataStr += (char)data[i];
				} else {
					dataStr += ".";
				}
			}

			// print the results
			cout << sourceIp << ":" << sourcePort << " -> " << destIp << ":" << destPort << endl;
			if (dataLength > 0) {
				cout << dataStr << endl;
			}
		}
	}
}
```

In the final step of the packet handler we display the results of our rudimentary analysis.  First we iterate through the bytes of the payload and save it in a format that is human friendly.  If you try to print it out with the non-printable characters in there you will get some very messy results in your console.  After this cleanup we simply output the packet data we have extracted and display it in the console.

## The Summary
So now that you can process packets offline, what do you want to do with them?  I don't know about you, but aside from obvious applications to network analysis, <span style="color:#ff0000;">I'd like to use this data for trending, visualization, or even generative art and sound</span>.  But then again I'm weird.  What are you gonna do?