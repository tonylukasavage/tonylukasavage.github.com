---
layout: post
title: "Web-based STL Viewing: Three.js, WebGL, and Javascript Typed Arrays"
date: 2013-04-10 10:50
comments: true
categories: [javascript, 3d printing, three.js, webgl]
published: true
---

<a class="fancybox.iframe" href="/images/github_stl.png" ><img src="/images/github_stl.png" style="width:33%; float:right; margin-left:10px;"></a>

**Get the full demo:** [jsstl on Github](https://github.com/tonylukasavage/jsstl)

Recently Github announced that they were [integrating a web-based STL viewer into their interface](https://github.com/blog/1465-stl-file-viewing). The [STL file format](http://en.wikipedia.org/wiki/STL_\(file_format\)) has become very well known as of late do to the growing popularity of 3D printing among makers. STL is the format of choice for most 3D printing devices and is as such the format used by almost all accompanying software. So whether you want to print, manage STL files, or convert them to some other format, you need to get to know them well.

<!-- more -->

Seeing as how I'm not a maker but I am intrigued by the 3D printing process, about a year ago I implemented a pure Javascript STL parser (both ascii and binary format) and web-based renderer. It's far from polished, but more than usable. Go ahead and check it out [on Github](https://github.com/tonylukasavage/jsstl). It makes use of a few cool technologies, including [Javascript typed arrays](https://developer.mozilla.org/en-US/docs/JavaScript/Typed_arrays), WebGL, and [three.js](http://threejs.org/).

## Binary Parsing

Parsing the ascii format of STL files was pretty straight forward based on the [specification](http://en.wikipedia.org/wiki/STL_\(file_format\)#ASCII_STL). Verbose, but easy. The binary format on the other hand was a bit trickier. Javascript isn't exactly known for its robust binary data handling. Despite this shortcoming, I really wanted to see if I could handle this in pure Javascript. Enter [Javascript typed arrays](https://developer.mozilla.org/en-US/docs/JavaScript/Typed_arrays).

<div class="warning">Javascript typed arrays are a relatively new addition to some major browsers (see also, IE). Check compatibility here: <a href="http://caniuse.com/typedarrays">caniuse.com/typedarrays</a></div>

I won't go into it all too deeply here, other than to say that they make binary parsing possible in Javascript. ArrayBuffers represent a generic, fixed-length data buffer, in this case used to store the data from a binary formatted STL file. The DataView in turn exposes a low-level interface for reading, manipulating, and writing ArrayBuffers. Both are used in conjunction to read and pull apart the binary STL into a format that can be used by the web-based rendering engine.

This small snippet below shows how a binary STL file can be read using the DataView. Be sure to check out the APIs for [DataView](https://developer.mozilla.org/en-US/docs/JavaScript/Typed_arrays/DataView) and [ArrayBuffer](https://developer.mozilla.org/en-US/docs/JavaScript/Typed_arrays/ArrayBuffer) to get the full scope of what they can do.

{% codeblock lang:javascript %}
// "stl" represents a raw STL binary read from HTTP response data
var parseStlBinary = function(stl) {
	// create three.js geometry object, discussed later
	var geo = new THREE.Geometry();

	// The stl binary is read into a DataView for processing
    var dv = new DataView(stl, 80); // 80 == unused header
    var isLittleEndian = true;

    // Read a 32 bit unsigned integer
    var triangles = dv.getUint32(0, isLittleEndian);

    var offset = 4;
    for (var i = 0; i < triangles; i++) {
        // Get the normal for this triangle by reading 3 32 but floats
        var normal = new THREE.Vector3(
            dv.getFloat32(offset, isLittleEndian),
            dv.getFloat32(offset+4, isLittleEndian),
            dv.getFloat32(offset+8, isLittleEndian)
        );
        offset += 12;

        // Get all 3 vertices for this triangle, each represented
        // by 3 32 bit floats.
        for (var j = 0; j < 3; j++) {
            geo.vertices.push(
                new THREE.Vector3(
                    dv.getFloat32(offset, isLittleEndian),
                    dv.getFloat32(offset+4, isLittleEndian),
                    dv.getFloat32(offset+8, isLittleEndian)
                )
            );
            offset += 12
        }

        // there's also a Uint16 "attribute byte count" that we
        // don't need, it should always be zero.
        offset += 2;

        // Create a new face for from the vertices and the normal
        geo.faces.push(new THREE.Face3(i*3, i*3+1, i*3+2, normal));
    }

    // continue parsing STL faces for rendering...
};
{% endcodeblock %}

## Rendering

Since STLs represent real objects, they obviously need to be rendered in 3 dimensions. On the web we have a few choices for that, but I'm going to let my framework of choice do the selection for me. In this case I used [three.js](http://threejs.org/). Three.js has exposed a 3D rendering API in Javascript that is compatible with both WebGL and the HTML5 canvas element. In this way you can gracefully fail back to canvas when operating in a browser that does not support the higher performing WebGL.

It's not dumb luck that I chose to use this terrific library, I've used it before. Over a year ago I used three.js and [Titanium](http://www.appcelerator.com/platform/titanium-platform/) to create an experimental 3D demonstration across multiple mobile devices using socket communication in realtime. Instead of trying to explain it all, you can check out the screencast I did regarding it below. This is part 3 of a 3 part series. Click [here](http://vimeopro.com/appcelerator/forging-titanium/video/32976053) to check out the previous parts.

<iframe src="http://player.vimeo.com/video/32976053" width="500" height="281" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>

So needless to say I was already primed to use it again. In the STL viewer I would be using it to render the 3D triangle information from the STL files into faces of a mesh. This turned out to be pretty easy with three.js. The snippet below shows how I took the data I read from the STL in the [Binary Parsing](#parsing) section above and then used it to render a series of triangles that would compose a mesh of the STL object.

{% codeblock lang:javascript %}
mesh = new THREE.Mesh(
    // the "geo" object we filled with normals and vertices above
    geo,

    // create a material for the mesh
    new THREE.MeshLambertMaterial({
        overdraw:true,
        color: 0xaa0000,
        shading: THREE.FlatShading
    }
));
{% endcodeblock %}

And that's it. The hard part was done creating that `geo` object. We now have the `mesh` object to which we can add to a prepared three.js scene. For the full code, check the [repo](https://github.com/tonylukasavage/jsstl).

## The Result

To keep things interesting, naturally I chose a weird, frankenstein of an STL in [octocat](http://www.thingiverse.com/thing:10367) that I found on [thingiverse.com](http://www.thingiverse.com) for my testing. I did this for 3 reasons.

1. It was too unusual and cool to pass up.
2. It had both the ascii and binary format available.
3. It's composed of almost 38,000 triangles. I wanted to see how well a web-based 3D renderer could handle a complex model.

So without further ado, here's the end result, provided [your browser supports it](http://caniuse.com/typedarrays). Feel free to use, bend, mold, and/or steal this code as you like. A [digital high five](https://twitter.com/tonylukasavage) would be nice, but is not required.

<iframe src="/projects/stl_viewer/index.html" width="100%" height="300"></iframe>
