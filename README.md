photoshop-retinize
==================

Photoshop retina script (jsx) - generates multiple images from 1 master

These scripts need to be imported in Photoshop to be used as a batch script.

http://helpx.adobe.com/photoshop/using/scripting.html

How it works
------------
We setup an array where we define the target image's prefix, suffix, width and height

So in this example, we generate 6 images.

// full headers
var pdp_imageSizes = [
    ["pdp","intro-desktop@2x","4000", "1480"],
    ["pdp","intro-desktop","2000", "740"],
    ["pdp","intro-tablet@2x","4000", "1480"],
    ["pdp","intro-tablet","2000", "740"],
    ["pdp","intro-phone@2x","1534", "840"],
    ["pdp","intro-phone","767", "420"]
]

The original filename will be used in the target filename as well.

So, consider we have an original file, PRODUCT.jpg, which is 3000x2000 pixels wide.

The script will then generate 6 images:

pdp-PRODUCTNAME-intro-desktop@2x.jpg
pdp-PRODUCTNAME-intro-desktop.jpg
pdp-PRODUCTNAME-intro-tablet@2x.jpg
pdp-PRODUCTNAME-intro-tablet.jpg
pdp-PRODUCTNAME-intro-phone@2x.jpg
pdp-PRODUCTNAME-intro-phone.jpg

each with the size that was defined in the array.