Absolute-Box
============

[![Join the chat at https://gitter.im/absolute-box/Lobby](https://badges.gitter.im/absolute-box/Lobby.svg)](https://gitter.im/absolute-box/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

A plugin to display picture full(window) size.

###[DEMO](http://dcdeiv.github.io/absolute-box)

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
        $('YOUR-SELECTOR').absoluteBoxPlugin();
    });
            
to the SCRIPT tag of your page or into another *.JS file (that file must be after the absolute-box.min.js you included in step 1 AND of course if you are running already a document ready function, just copy the function and paste in it.)

###CUSTOMIZATION:
In the package a [options.js](dist/options.js) file is included. In this file you will find the defaults values with which the plugin is set up. You are free to override them. It is not mandatory to re-write all the code in that file, you can just add the line you are interested in (like in this [example](#example-of-usage)).

* CSS values can be written in camel-case like `borderBottom` instead of `border-bottom` or you can just wrap all your CSS code into brackets like `'border-bottom'` vendor prefixes are one exception: `'-webkit-border-radius': '1em'`. Vendor prefix in camel cases won't work; 
* Numbers can be not wrapped into brackets, pixels are default too so `borderBottom: 3,` is OK;
* When numbers comes with units you have to wrap them into brackets: `borderBottom: '3em'`, `border: '3em 0 0 1em'`, more then one number have to be wrapped: `margin: '0 0 0 0'`;
* Phrases, sentences, periods, strings, words, they have to be wrapped: `position: 'fixed'`.

####DEFAULTS OPTIONS
as in [options.js](dist/options.js) file:

    //Select "figure"s and/or "img"s with a class. Ex: ".box-me".
    $(".YOUR-CLASS").absoluteBox({
      //Global settings of the plug-in.
      settings: {
        //The plug-in creates new dom elements that are selected through a data-attribute. If you encounter a conflict with this name, you can change it here.
        dataName: "absolutebox",
        //TRUE or FALSE when true means that you agree to show the picture caption (it works only with figure tags) and false (of course) that you don't want this feature.
        figcaption: true,
        //TRUE or FALSE when true means that you agree to show the permalink of picture. (It works for all pictures selected) and false (of course) not.
        permalink: true,
      },
      //From here on there is only the style. Be careful to override this feature. These are the defaults value. You can play with them and customize them as you like.
      //
      //absoluteBox holds the style of the plug-in wrapper.
      absoluteBox: {
        style: {
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          margin: 0,
          padding: 0,
          //I suggest to change this rule. It must be above all document's element.
          zIndex: 200000,
          //This plug-in use an animate function to disable scrolling. I suggest to use a backgroung-color/backgroundColor that covers everything.
          backgroundColor: "#000",
          color: "#fff",
        }
      },
      //FIGURE tag style.
      figure: {
        style: {
          position: "relative",
          width: "100%",
          maxWidth: "100%",
          height: "100%",
          maxHeight: "100%",
          margin: 0,
          padding: 0,
          textAlign: "center"
        }
      },
      //figcaption tag style
      figcaption: {
        style: {
          position: "absolute",
          right: 0,
          bottom: 0,
          left: 0,
          margin: 0,
          padding: "0 1em",
          height: 75,
          backgroundColor: "rgba(46, 46, 46, 0.8)",
          color: "#FFF",
          textAlign: "left",
          overflow: "auto",
          zIndex: 200002,
          //vendor prefix must be wrapped in brackets.
          "-webkit-transition": "height 1s ease",
          transition: "height 500ms ease"
        },
        //The height rule is used by the plug-in to animate the figcaption. Figcaptions. Be careful to change that.
        animation: {
          height: "50%"
        }
      },
      //This is the navigation bar, by default it is positioned on the right, but you can change it as you like. It holds all the icons.
      navigation: {
        style: {
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          padding: 0,
          zIndex: 200001,
        },
        //ICONS holds all rules for icons
        icons: {
          //the QUIT icons is the icon that kill the absolute-box.
          quit: {
            style: {
              position: "relative",
              margin: "1em",
              width: 50,
              height: 50,
              backgroundColor: "#fff",
              //vendor prefix must be wrapped in brackets.
              "-webkit-border-radius": 24,
              "-moz-border-radius": 24,
              borderRadius: 24
            },
            //HTML means that the icon itself is a wrapper. Put in what you like: in image or a div, like I did here below.
            html: '<div style="position: absolute; top: 22px; left: 7px; height: 6px; width: 36px; -webkit-border-radius: 2em; -moz-border-radius: 2em; border-radius: 2em; background-color: black; -webkit-transform: rotate(45deg); -moz-transform: rotate(45deg); -ms-transform: rotate(45deg); -o-transform: rotate(45deg); transform: rotate(45deg)"></div><div style="position: absolute; top: 22px; left: 7px; height: 6px; width: 36px; -webkit-border-radius: 2em; -moz-border-radius: 2em; border-radius: 2em; background-color: black; -webkit-transform: rotate(-45deg); -moz-transform: rotate(-45deg); -ms-transform: rotate(-45deg); -o-transform: rotate(-45deg); transform: rotate(-45deg)"></div>'
          },
          //the PERMALINK icon is the icon that open (in a new window) the picture by using its URL
          permalink: {
            style: {
              position: "relative",
              margin: "1em",
              width: 50,
              height: 50,
              backgroundColor: "#fff",
              "-webkit-border-radius": 24,
              "-moz-border-radius": 24,
              borderRadius: 24
            },
            //HTML means that the icon itself is a wrapper. Put in what you like: in image or a div, like I did here below.
            html: '<div style="position: absolute; top: 12px; left:24px; width: 8px; height: 15px; border-top: 4px solid black; border-right: 3px solid black; border-left: 3px solid black; border-radius: .3em; -webkit-transform: rotate(30deg); -moz-transform: rotate(30deg); -ms-transform: rotate(30deg); -o-transform: rotate(30deg); transform: rotate(30deg)"></div><div style="position: absolute; top:20px; left: 12px; width: 8px; height: 15px; border-right: 3px solid black; border-bottom: 4px solid black; border-left: 3px solid black; border-radius: .3em; -webkit-transform: rotate(30deg); -moz-transform: rotate(30deg); -ms-transform: rotate(30deg); -o-transform: rotate(30deg); transform: rotate(30deg)"></div>'
          }
        }
      }
    });

####EXAMPLE OF USAGE:

    $( document ).ready(function() {
    	$( '.YOUR-CLASS' ).absoluteBox({
    		settings: {
    			permalink: false, // the permalink won't be shown
    		}
    		navigation: {
    			icons: {
    				quit: {
    				    style: {
    				        width: 48,
    				        height: 48
    				    },
    					html: '<img src="my-custom-quit-icon.png width="48px" height="48px" />'
    				},
    				//the permalink of the picture
    				permalink: {
    					style: {
    						width: 48,
    						height: 48,
    						backgroundColor: 'grey'
    					},
    					html: '<img src="my-custom-permalink-icon.png" width="48px" height="48px">'
    				}
    			}
    		}
    	});
    });
