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

###2 RUN THE PLUGIN
Add

    $(document).ready(function(){
        $('.absolute-box-widget').absoluteBoxWidget();
    });
            
to the SCRIPT tag of your page or of another *.JS file.
(of course if you are running already a document ready function, just copy the function.)

###3 CHOOSE YOUR SELECTOR
Choose your selector. It works only with pictures, so select the picture(s) you want to be displayed in the plugin.

    <IMG src="your-beloved-picture.ext" alt="my picture" CLASS/ID="absolute-box-widget" />
    
so you can pick all pictures in the page, or just some pictures according to the id or class you choose.
            
###4 UPDATE THE MINIFIER PICTURE SRC
update the minifier SRC picture (50px x 50px maximum)
you can change it inside the absolute-box.min.js file, don't worry if it's minified, you will find it in the very first line:

    !function(a){var b="minimize.png";

###5 ENJOY
