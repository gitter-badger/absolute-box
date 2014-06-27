/* ABSOLUTE-BOX 4 by DcDeiv https://github.com/dcdeiv/
** GPLv2 http://www.gnu.org/licenses/gpl-2.0-standalone.html
** 
** This document contains all default values. Use this feature to customize the Absolute-Box.
**
**/
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
				'-webkit-transition': 'height 1s ease', //transition will animate the figcaption
				transition: 'height 500ms ease' //transition will animate the figcaption
			},
			animation: {
				height: '50%' //the transition animation
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