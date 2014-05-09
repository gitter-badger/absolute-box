Absolute-Box
============

A simple lightbox plugin.

#####!! IT WORKS ONLY WITH PICTURES !!#####

###[DEMO](http://dcdev.altervista.org/absolute-box/)

============

MOBILE FULLY WORKING.

Landscape pictures are now supported!

============

##SET-UP:

Grab the code in the code.XML file (of course not the XML declaration) and put it wherever you want in your *.HTML page! No matter where it will be positioned in the HTML file because the CSS will put it above everything in the page.

    <!--ABSOLUTE-BOX-WIDGET-STARTS-->
    <div id="absolute-box-widget">
        <div>
            <div id="quit-absolute-box-widget">
                <img src="minimize.png" alt="Minimize. Reload Quit Picture!"/>
            </div>
            <figure>
                <img src="" alt="Fullsize">
            </figure>
        </div>
    </div>
    <!--ABSOLUTE-BOX-WIDGET-ENDS-->
    
Once you've done this I suggest you to upload the picture or whatever you want to use in the #quit-absolute-box-widget div, otherwise you will see the message to upload the picture. You will be provided with the *.PSD file easily editable with photoshop.

As you have noticed there is no *.CSS file to be edited, that's why I used jQuery to manipulate all styles to just have one file to be included in your website! The minified file only weight 3KB (instead of 9KB)!

######eventually you just have to put the class="absolute-box-widget" in every IMG tag you want to be displayed!
i.e.,

    <img src="http://your-beloved-picture.png" class="absolute-box-widget" alt"picture" />
    
That's all you have to know!
Simple and clean!

enjoy!
