Absolute-Box
============

A simple lightbox plugin.

#####!! IT WORKS ONLY WITH PICTURES !!#####

###[DEMO](http://dcdev.altervista.org/absolute-box/)

============

MOBILE FULLY WORKING.

Landscape pictures are now supported!

============

When I was programming this plugin I thought about how difficult is to set-up other plugins so I decided to program a simple-to-set-up plug-in!!

##SET-UP:

###1 INCLUDE:
Grab the absolute-box.min.js file and include it in the page where you whant this feature.

!!!The absolute-box-widget.js file must be placed before the function (see step 3), unless it won't be even existing!!!

    <script src="jquery.min.js"></script>
    <script src="absolute-box.min.js"></script>
    <script src="main.js"></script>
    
###2 CHOOSE YOUR SELECTOR
It works only with pictures, so select the picture(s) you want to be displayed in the plugin.

    <IMG src="your-beloved-picture.ext" alt="my picture" CLASS/ID="YOUR-SELECTOR" />
    
so you can pick all pictures in the page, or just some pictures according to the id or class you choose.

###3 RUN THE PLUGIN
Add

    $(document).ready(function(){
        $('YOUR-SELECTOR').absoluteBoxWidget();
    });
            
to the SCRIPT tag of your page or into another *.JS file (that file must be after the absolute-box.min.js you included in step 1 AND of course if you are running already a document ready function, just copy the function and paste in it.)

###4 UPDATE THE MINIFIER PICTURE SRC
update the minifier SRC picture (50px x 50px maximum)
you can change it inside the absolute-box.min.js file, don't worry if it's minified, you will find it in the very first line:

    !function(a){var b="minimize.png";

###5 ENJOY

=======================

####CONFLICTS ISSUE:

This plugin is creating new DOM elements, most of them have a UNIQUE ID, the ID used to create the necessary elements dom are:

    #absolute-box-widget;
    #quit-absolute-box-widget;
    #relative-picfigbox-absolute-widget;
    #fullscreen-absolute-box-widget;
    
No classes are used.    
    
If you are getting conflicts problem, please, contact me!
