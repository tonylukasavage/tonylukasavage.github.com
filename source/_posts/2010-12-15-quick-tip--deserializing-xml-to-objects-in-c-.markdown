---
layout: post
title: "Quick Tip: Deserializing XML to objects in C#"
date: 2010-12-15 11:41
comments: false
categories: [archive, quick tip, programming, xml, serialization, csharp, .net]
published: true
---

## The Overview
Here's a quick example of how you can deserialize XML into C# objects.  This will be brief, so feel free to ask questions in the comments for more details.

We are going to write a small class and program to deserialize <a href="#objectsxml">objects.xml</a> into a <a href="#myobject">MyObject</a> object that can then be used in the main program, <a href="#program">Program</a>.  Its not rocket science, but <span style="color:#ff0000;">it beats the hell out of manually parsing XML</span> to get the information we need.

## The Code

### <a name="objectsxml">objects.xml</a>

``` xml
<ArrayOfMyObject>
  <MyObject>
    <name>ObjectName</name>
    <intValue>123</intValue>
    <timestamp>2010-12-15T08:54:11</timestamp>
    <elementNameDifferentThanObjectPropertyName>ridiculously long name</elementNameDifferentThanObjectPropertyName>
  </MyObject>
  <MyObject>
    <name>AnotherObject</name>
    <intValue>235435</intValue>
    <timestamp>2010-12-15T08:59:51</timestamp>
    <elementNameDifferentThanObjectPropertyName>seriously, its way too long</elementNameDifferentThanObjectPropertyName>
  </MyObject>
  <MyObject>
    <name>TheLastObject</name>
    <intValue>6543333</intValue>
    <timestamp>2010-12-15T09:04:43</timestamp>
    <elementNameDifferentThanObjectPropertyName>no way this is gonna be the property name</elementNameDifferentThanObjectPropertyName>
  </MyObject>
</ArrayOfMyObject>
```

### <a name="myobject">MyObject.cs</a>

``` csharp
using System;
using System.Xml.Serialization;

namespace MyNamespace
{
    public class MyObject
    {
        public string name;
        public int intValue;
        public DateTime timestamp;

        [XmlElement("elementNameDifferentThanObjectPropertyName")]
        public string extraValue;

        public MixOrder()
        {
            name = "";
            intValue= 0;
            timestamp = new DateTime();
            extraValue = "";
        }
    }
}
```

Notice I used the XmlElement attribute for the XML field with the obscenely long name.  XmlElement specifically represents <a href="http://msdn.microsoft.com/en-us/library/system.xml.serialization.xmlelementattribute.aspx">System.Xml.Serialization.XmlElementAttribute</a>.  This allows us to assign an element or attribute of the XML to a public property of the deserialized object even if their names don't match.  This is useful in the case of undesirable XML element names that are hard to work with or break coding conventions.  Also, and more importantly, as the XML you deserialize changes over time, <span style="color:#ff0000;">you can just adjust the name of the XmlElement attribute if necessary without changing the functionality of the object</span>.

### <a name="program">Program.cs</a>

``` csharp
using System;
using System.Xml;
using System.Xml.Serialization;
using MyNamespace;

namespace TestConsoleApplication
{
    class Program
    {
        static void Main(string[] args)
        {
            List<MyObject> myObjects = new List<MyObject>();
            XmlSerializer serializer = new XmlSerializer(typeof(List<MyObject>));
            XmlReader reader = XmlReader.Create("objects.xml");
            myObjects = (List<MyObject>)serializer.Deserialize(reader);

            // now you can perform operations on your list of MyObject objects,
            // no manual XML parsing necessary.

            Console.WriteLine("Press <ENTER> key to exit.");
            Console.ReadLine();
        }
    }
}
```

I leave the processing of the object up to you, but the process is clear.  We create a XmlSerializer that corresponds to the type of our object, create a XmlReader for the XML, then use the serializer to deserialize the XML from the reader.  From there you have a successfully populated List<MyObject> list.  Do with it what you will.

In the words of the Beastie Boys, "That's it, that's all, that's all there is."  See ya at the next quick tip.