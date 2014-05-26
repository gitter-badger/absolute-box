Absolute-Box
============

A simple lightbox plugin.

#####!! IT WORKS ONLY WITH PICTURES !!#####

###[DEMO](http://dcdev.altervista.org/plugins/absolute-box/)

============

MOBILE FULLY WORKING.

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
update the minifier SRC picture and width!
you can change it inside the absolute-box.min.js file, don't worry if it's minified, you will find it in the very first line:

    !function(a){var b="../../widgets/absolute-box/minimize@2x.png",c="50px",d="auto";
    
    "var b" is the SRC;
    "var c" is the WIDTH;
    "var d" is the HEIGHT;
    
the picture must be 100px; You don't need to set the height if the picture is squared.
