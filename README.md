photoshop-retinize
==================

Photoshop retina script (jsx) - generates multiple images from 1 master image

How to use
----------

These scripts need to be imported in Photoshop to be used as a batch script.

http://helpx.adobe.com/photoshop/using/scripting.html

How it works
------------
We setup an array where we define the target image's prefix, suffix, width and height

So in this example, we generate 6 images.

<pre><code>
// full headers<br>
var pdp_imageSizes = [<br>
    ["pdp","intro-desktop@2x","4000", "1480"],<br>
    ["pdp","intro-desktop","2000", "740"],<br>
    ["pdp","intro-tablet@2x","4000", "1480"],<br>
    ["pdp","intro-tablet","2000", "740"],<br>
    ["pdp","intro-phone@2x","1534", "840"],<br>
    ["pdp","intro-phone","767", "420"]<br>
]
</code></pre>

The original filename will be used in the target filename as well.

So, consider we have an original file, PRODUCT.jpg, which is 3000x2000 pixels wide. (original image should always be as wide or higher than the largest image in your array).
Also: put the array in an order so that largest images will be generated first.

The script will then generate 6 images:

` pdp-PRODUCTNAME-intro-desktop@2x.jpg <br>
` pdp-PRODUCTNAME-intro-desktop.jpg <br>
` pdp-PRODUCTNAME-intro-tablet@2x.jpg <br>
` pdp-PRODUCTNAME-intro-tablet.jpg <br>
` pdp-PRODUCTNAME-intro-phone@2x.jpg <br>
` pdp-PRODUCTNAME-intro-phone.jpg <br>

each with the size that was defined in the array.

If you have any more questions regarding useage, get in touch via tomhermans.com/contact
