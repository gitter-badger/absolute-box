//ABSOLUTE-BOX 4 by DcDeiv https://github.com/dcdeiv/
// GPLv2 http://www.gnu.org/licenses/gpl-2.0-standalone.html
(function( $ ) {
	$( document ).ready(function() {
		var touch = function( event ) {
			event.preventDefault();
			event.stopPropagation();
		};
		
		$.fn.absoluteBoxPlugin = function( options ) {
			var defaults = {
				settings: {
					dataName: 'absolutebox',
					figcaption: true,
					permalink: true,
				},
				absoluteBox: {
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
						overflow: 'hidden',
					}
				},
				figure: {
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
						'-webkit-transition': 'height 1s ease',
						transition: 'height 500ms ease'
					},
					animation: {
						height: '50%'
					}
				},
				navigation: {
					style: {
						position: 'absolute',
						top: 0,
						right: 0,
						bottom: 0,
						padding: 0
					},
					icons: {
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
							html: '<div style="position: absolute; top: 22px; left: 7px; height: 6px; width: 36px; -webkit-border-radius: 2em; -moz-border-radius: 2em; border-radius: 2em; background-color: black; -webkit-transform: rotate(45deg); -moz-transform: rotate(45deg); -ms-transform: rotate(45deg); -o-transform: rotate(45deg); transform: rotate(45deg)"></div><div style="position: absolute; top: 22px; left: 7px; height: 6px; width: 36px; -webkit-border-radius: 2em; -moz-border-radius: 2em; border-radius: 2em; background-color: black; -webkit-transform: rotate(-45deg); -moz-transform: rotate(-45deg); -ms-transform: rotate(-45deg); -o-transform: rotate(-45deg); transform: rotate(-45deg)"></div>'
						},
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
							html: '<div style="position: absolute; top: 12px; left:24px; width: 8px; height: 15px; border-top: 4px solid black; border-right: 3px solid black; border-left: 3px solid black; border-radius: .3em; -webkit-transform: rotate(30deg); -moz-transform: rotate(30deg); -ms-transform: rotate(30deg); -o-transform: rotate(30deg); transform: rotate(30deg)"></div><div style="position: absolute; top:20px; left: 12px; width: 8px; height: 15px; border-right: 3px solid black; border-bottom: 4px solid black; border-left: 3px solid black; border-radius: .3em; -webkit-transform: rotate(30deg); -moz-transform: rotate(30deg); -ms-transform: rotate(30deg); -o-transform: rotate(30deg); transform: rotate(30deg)"></div>'
						}
					}
				}
			},
			config = $.extend( true, defaults, options );
			
			this.each(function() {
				$( this ).click(function() {
					var $img, $parent, $figcaption, linkBox, captionBox,
						captionCfg   = config.settings.figcaption,
						dataName     = config.settings.dataName,
						$this        = $( this ),
						thisTagName  = $this.prop( 'tagName' ).toLowerCase(),
						clicks       = 0;
						
					//defining $figcaption, $parent, and $img var
					if ( thisTagName === 'figure' ) {
						$figcaption  = $this.children().filter( 'figcaption' );
						$parent      = $this.parent();
						$img         = $this.children().filter( 'img' );
					} else if ( thisTagName === 'img' ) {
						$img         = $this;
						var parent   = $this.parent();
						$parent      = parent.parent();
						captionCfg   = false;
					}
					
					var imgSrc = $img.attr( 'src' );
					
					//creating new elements and stylizing it
					$parent.append( '<div data-' + dataName +'="active" />' );
					
					var box = $parent.children().filter(function() {
							return $( this ).data( dataName ) === 'active' ;
						});
					
					box
						.prepend( '<figure />' )
						.append( '<div data-' + dataName + '="nav" />' )
						.css( config.absoluteBox.style );
					
					var figureBox = box.children().filter( 'figure' ),
						navBox    = box.children().filter(function() {
							return $( this ).data( dataName ) === 'nav' ;
						});
					
					figureBox.css( config.figure.style );
					
					$img
						.clone()
						.prependTo( figureBox );
					
					navBox
						.css( config.navigation.style )
						.prepend( '<div data-' + dataName + '="quit" />' );
						
					var imgBox  = figureBox.children().filter( 'img' ),
						quitBox = navBox.children( ':first-child' );
					
					quitBox
						.html( config.navigation.icons.quit.html )
						.css( config.navigation.icons.quit.style )
						.click(function() {
							box.fadeOut( 500 , function() {
								box.remove();
							});
							
							$( 'html' ).css({
								'overflow-y': 'auto'
							});
							
							$( document ).unbind( 'touchmove', touch );
						});
					
					//defining linkBox
					if ( true === config.settings.permalink ) {
						navBox.append( '<div data-' + dataName + '="permalink" />');
						
						linkBox = navBox.children().filter(function() {
							return $( this ).data( dataName ) === 'permalink' ;
						});
						
						linkBox
							.html( config.navigation.icons.permalink.html )
							.css( config.navigation.icons.permalink.style )
							.click(function() {
								window.open( imgSrc , '_blank' );
							});
					}
					
					//defining captionBox
					if ( true === captionCfg ) {
						$figcaption.clone().appendTo( figureBox );
						
						var capTaps = 0;
						captionBox  = figureBox.children().filter( 'figcaption' );
						
						captionBox
							.css( config.figcaption.style )
							.click(function() {
								capTaps++;
								var countCapClicks = function( e ) {
									return ( e % 2 === 0 ) ? true : false;
								};
								
								if ( false === countCapClicks ( capTaps ) ) {
									captionBox.css( config.figcaption.animation );
								} else if ( true === countCapClicks ( capTaps ) ) {
									captionBox.css( config.figcaption.style );
								}
							});
					}
					
					//defining imgBox size and functions
					imgBox
						.click(function() {
							clicks++;
							var countClicks = function( e ) {
								return ( e % 2 === 0 ) ? true : false;
							};
							
							if ( false === countClicks ( clicks ) ) {
								navBox
									.add( captionBox )
									.fadeOut( 400 );
							} else if ( true === countClicks ( clicks ) ) {
								navBox
									.add( captionBox )
									.fadeIn( 400 );
							}
						});
					
					$( window ).resize(function() {
						var imgw   = $img.width(),
							imgh   = $img.height(),
							imgAR  = imgw / imgh,
							boxw   = box.width(),
							boxh   = box.height(),
							boxAR  = boxw / boxh,
							nHimg  = boxw / imgAR;
						
						imgBox.css({
							maxHeight: boxh,
							maxWidth: boxw
						});
							
						if ( imgAR > boxAR ) {
							imgBox.css({
								marginTop: ( boxh * 0.5 ) - ( nHimg * 0.5 )
							});
						} else {
							imgBox.css({
								marginTop: 0
							});
						}
					});
					
					$( window ).resize();
					
					//blocking overflow
					$( 'html' ).css({
						'overflow-y' : 'hidden'
					});
					
					$( document ).bind( 'touchmove', touch);
				});
			});
			return this;
		};
	});
})( jQuery );