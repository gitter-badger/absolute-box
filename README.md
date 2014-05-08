Absolute-Box
============

A simple lightbox plugin.

#####!! IT WORKS ONLY WITH PICTURES !!#####

###[DEMO](http://dcdev.altervista.org/absolute-box/)

============

MOBILE FULLY WORKING.

============

##SET-UP:

Grab the code in the code.XML file (of course not the XML declaration) and put it wherever you want in your *.HTML page! No matter where it will be positioned in the HTML file because the CSS will put it above everything in the page.

    <!--ABSOLUTE-BOX-WIDGET-STARTS-->
    <div id="absolute-box-widget">
        <div>
            <div id="quit-absolute-box-widget">
                <img src="quit.png" alt="X"/>
            </div>
            <figure>
                <img src="" alt="Fullsize">
            </figure>
        </div>
    </div>
    <!--ABSOLUTE-BOX-WIDGET-ENDS-->
    
Once you've done this I suggest you to upload the picture or whatever you want to use in the #quit-absolute-box-widget div, otherwise you will se the ugly X. You will be provided with the *.PSD file easily editable with photoshop.

The picture I used is 50px x 50px with a 48px rounded X button inside, the #quit-absolute-box-widget has border-radius 3em and background-color transparent white. Let's see how to edit those things.

As you have noticed there is no *.CSS file to be edited, that's why I used jQuery to manipulate all styles to just have one file to be put in your website! The minified file only weight 3KB!

######eventually you just have to put the class="absolute-box-widget" in every IMG tag you want to be displayed!
i.e.,

    <img src="http://your-beloved-picture.png" class="absolute-box-widget" alt"picture" />
    
##THE CODE:
The code is doubled in two functions, the first is the $(document).ready(function(){}); and the last one in the $(window).resize(function(){});. I doubled the code to be fully responsive so if you have to edit it, take care to copied it in the last function too!

The cose of the widget will take the SRC attribute in every picture with class="absolute-box-widget" that you will click, and simply transfer the URL in the IMG tag in the #absolute-box-widget HTML code you have copied before from the code.xml file.

    //MAIN FUNCTION
    $(".absolute-box-widget").click(function() {
        var src = $(this).attr('src')
        $('#absolute-box-widget figure img').attr('src', src);
        $('#absolute-box-widget').show();
        
        $('#quit-absolute-box-widget').click(function(){
            $('#absolute-box-widget').hide();
        });
    });

I'm working with a new graphic, but by now I think that for this version it is pretty enough. Anyway, If you want to change the quit icon in the #quit-absolute-box-widget you have to open the extended *.JS file and search for this code:

    $('#quit-absolute-box-widget').css({
        "position": "absolute",
        "top": "2em",
        "left": "2em",
        "-webkit-border-radius": "3em",
        "-moz-border-radius": "3em",
        "border-radius": "3em",
        "background-color": "rgba(255,255,255,0.5)",
        "height": "50px",
        "width": "50px",
        "z-index": 200000000,
    });
    
I suggest not to change the z-index and the position otherwise it won't be clickable.

##the Z-INDEX ISSUE:
You have to pay attantion to your CSS declarations if there are Z-INDEX tags. They have to be lower then '100000'.
I chose a really big number to avoid bad things to happen. Anyway, if you need to change it, there are four Z-INDEX declarations in the JS file, the first two are in the $('#absolute-box-widget').css
######line 20 & line 83######
the last two in the $('#quit-absolute-box-widget').css
######line 41 & line 104#####

enjoy!
