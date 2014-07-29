Absolute-Box
============

A plugin to display picture full(window) size.

###[DEMO](http://dcdev.altervista.org/plugins/absolute-box/)

This version:
* Added bower.json

Previous versions:
* Scroll bug fixes;
* FadeIn/FadeOut animations;
* This plugin now supports `FIGURE`, `IMG` tags;
* ABSOLUTE-BOX now uses DATA-* attributes;
* ABSOLUTE-BOX now will be appended to the parent wrapper of the selected only element when the element is clicked;
* ABSOLUTE-BOX will be removed from the DOM when the quit icon will be clicked;
* Chance to toggle the figcaption and/or the picture's permalink;
* Full customization;
* ICONS must be loaded separately.

============

MOBILE FULLY WORKING.

============

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

    $( document ).ready(function() {
    	$( '.YOUR-CLASS' ).absoluteBoxPlugin({
    		settings: {
    			dataName: 'absolutebox', //data's name attribute
    			figcaption: true, //true || false - if true the figcaption will show
    			permalink: true, // true || false - if true the permalink icon will show
    		},
    		absoluteBox: {
    			//Use this feature to override the default CSS for this tag.
    			style: {
    				position: 'fixed',
    				top: 0,
    				right: 0,
    				bottom: 0,
    				left: 0,
    				margin: 0,
    				padding: 0,
    				zIndex: 200000,
    				backgroundColor: '#000',
    				color: '#fff',
    				overflow: 'hidden'
    			}
    		},
    		figure: {
    			//Use this feature to override the default CSS for this tag.
    			style: {
    				position: 'relative',
    				width: '100%',
    				maxWidth: '100%',
    				height: '100%',
    				maxHeight: '100%',
    				margin: 0,
    				padding: 0,
    				textAlign: 'center'
    			}
    		},
    		figcaption: {
    			//Use this feature to override the default CSS for this tag.
    			style: {
    				position: 'absolute',
    				right: 0,
    				bottom: 0,
    				left: 0,
    				margin: 0,
    				padding: '1em',
    				height: 50,
    				backgroundColor: 'rgba(46, 46, 46, 0.8)',
    				color: '#FFF',
    				textAlign: 'left',
    				overflow: 'hidden',
    			},
    			animation: {
    				duration: 500,
    				easing: 'swing'
    			}
    		},
    		//navigation is a DIV wrapper that hold all icons
    		navigation: {
    			//Use this feature to override the default CSS for this tag.
    			style: {
    				position: 'absolute',
    				top: 0,
    				right: 0,
    				bottom: 0,
    				padding: 0
    			},
    			//navigation icons
    			icons: {
    				//icon that close the Absolute-Box
    				quit: {
    					style: {
    						position: 'relative',
    						margin: '1em',
    						width: 50,
    						height: 50,
    						backgroundColor: '#fff',
    						'-webkit-border-radius': 24,
    						'-moz-border-radius': 24,
    						borderRadius: 24
    					},
    					// Quit Icon comes in a DIV. Use this feature to override the default values and put in the icon of your choice.
    					html: '<div style="position: absolute; top: 22px; left: 7px; height: 6px; width: 36px; -webkit-border-radius: 2em; -moz-border-radius: 2em; border-radius: 2em; background-color: black; -webkit-transform: rotate(45deg); -moz-transform: rotate(45deg); -ms-transform: rotate(45deg); -o-transform: rotate(45deg); transform: rotate(45deg)"></div><div style="position: absolute; top: 22px; left: 7px; height: 6px; width: 36px; -webkit-border-radius: 2em; -moz-border-radius: 2em; border-radius: 2em; background-color: black; -webkit-transform: rotate(-45deg); -moz-transform: rotate(-45deg); -ms-transform: rotate(-45deg); -o-transform: rotate(-45deg); transform: rotate(-45deg)"></div>'
    				},
    				//the permalink of the picture
    				permalink: {
    					style: {
    						position: 'relative',
    						margin: '1em',
    						width: 50,
    						height: 50,
    						backgroundColor: '#fff',
    						'-webkit-border-radius': 24,
    						'-moz-border-radius': 24,
    						borderRadius: 24
    					},
    					//permalink icon comes in a DIV. Use this feature to override the default values and put in the icon of your choice.
    					html: '<div style="position: absolute; top: 12px; left:24px; width: 8px; height: 15px; border-top: 4px solid black; border-right: 3px solid black; border-left: 3px solid black; border-radius: .3em; -webkit-transform: rotate(30deg); -moz-transform: rotate(30deg); -ms-transform: rotate(30deg); -o-transform: rotate(30deg); transform: rotate(30deg)"></div><div style="position: absolute; top:20px; left: 12px; width: 8px; height: 15px; border-right: 3px solid black; border-bottom: 4px solid black; border-left: 3px solid black; border-radius: .3em; -webkit-transform: rotate(30deg); -moz-transform: rotate(30deg); -ms-transform: rotate(30deg); -o-transform: rotate(30deg); transform: rotate(30deg)"></div>'
    				}
    			}
    		}
    	});
    });

####EXAMPLE OF USAGE:

    $( document ).ready(function() {
    	$( '.YOUR-CLASS' ).absoluteBoxPlugin({
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
