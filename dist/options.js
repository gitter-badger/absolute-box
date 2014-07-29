/* ABSOLUTE-BOX 5.0.0 by DcDeiv https://github.com/dcdeiv/
** GPLv2 http://www.gnu.org/licenses/gpl-2.0-standalone.html
** 
** This document contains all default values. Use this feature to customize the Absolute-Box.
**
**/
//Select "figure"s and/or "img"s with a class. Ex: ".box-me".
$(".YOUR-CLASS").absoluteBoxPlugin({
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
		},
		//The ANIMATION rule is used by the plug-in to animate the figcaption.
		animation: {
			duration: 500,
			easing 'swing'
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