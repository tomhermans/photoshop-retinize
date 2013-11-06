// get a reference to the current (active) document and store it in a variable named "doc"
doc = app.activeDocument;  

// change the color mode to RGB.  Important for resizing GIFs with indexed colors, to get better results
doc.changeMode(ChangeMode.RGB);  

// these are our values for the end result width and height (in pixels) of our image
var currentImageWidth = 500;
var currentImageHeight = 500;


// full headers
var pdp_imageSizes = [
    ["pdp","intro-desktop@2x","4000", "1480"],
    ["pdp","intro-desktop","2000", "740"],
    ["pdp","intro-tablet@2x","4000", "1480"],
    ["pdp","intro-tablet","2000", "740"],
    ["pdp","intro-phone@2x","1534", "840"],
    ["pdp","intro-phone","767", "420"]
]

// full width editorial
var e1_fw1_imageSizes = [
    ["e1-fw1","desktop@2x","2800", "1240"],
    ["e1-fw1","desktop","1400", "620"],
    ["e1-fw1","tablet@2x","1400", "620"],
    ["e1-fw1","tablet","708", "314"],
    ["e1-fw1","phone@2x","900", "399"],
    ["e1-fw1","phone","450", "200"],
];

// 6-col editorial
var e1_6col_imageSizes = [
    ["e1-6col","desktop@2x","1160", "840"],
    ["e1-6col","desktop","580", "420"],
    ["e1-6col","tablet@2x","1160", "840"],
    ["e1-6col","tablet","580", "420"],
    ["e1-6col","phone@2x","740", "539"],
    ["e1-6col","phone","370", "268"]
]

var exportFolder = '/export/'

// our web export options
var options = new ExportOptionsSaveForWeb();
options.quality = 75;
options.format = SaveDocumentType.JPEG;
options.optimized = true;

// Loop through array of resizes
var numImageSizes = pdp_imageSizes.length;


// 6-col editorial - e1_6col_imageSizes
for (var i = 0; i < numImageSizes; i++) {
    var currentImageSize = e1_6col_imageSizes[i];
    var currentPrefix = currentImageSize[0];
    var currentSizeName = currentImageSize[1];
    var currentImageWidth = currentImageSize[2];
    var currentImageHeight = currentImageSize[3];

    doc.resizeImage(UnitValue(currentImageWidth,"px"),null,null,ResampleMethod.BICUBIC);

    var docname = doc.name.replace(/\.[^\.]+$/, '');
    var newName = currentPrefix+'-'+docname+'-'+currentSizeName+'.jpg';
    doc.exportDocument(new File(doc.path+'/'+newName),ExportType.SAVEFORWEB,options);
}

