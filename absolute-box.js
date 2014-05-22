//ABSOLUTE-BOX 3.0.3 by DcDev: http://dcdev.altervista.org
(function ( $ ) {
    var SRCminimizer = 'minimize@2x.png';
    var minimizerWidth = '50px';
    var minimizerHeight = 'auto';
  
    $( document ).ready(function() {
        var w           = $( window ).width();
        var h           = $( window ).height();
        var h2          = h*0.5;
        var wAr         = w/h;
        
        $(  'body' ).append( '<div id="absolute-box-widget">' );
        
        var box         = $( '#absolute-box-widget' );
        box.append( '<div>' );
        
        var box1c       = box.children( ':first-child' );
        box1c.append(
        '<div id="quit-absolute-box-widget">',
        '<figure id="relative-picfigbox-absolute-widget"></figure>'
        );
        
        var quitBox     = $( '#quit-absolute-box-widget' );
        quitBox.append(
        '<img src="' + SRCminimizer + '" width="' + minimizerWidth +
        ' height="' + minimizerHeight + ' alt="minimize" />'
        );
        
        var figBox      = $( '#relative-picfigbox-absolute-widget' );
        figBox.append( '<img id="fullscreen-absolute-box-widget" src=""/>' );
        
        var picFigBox   = $( '#fullscreen-absolute-box-widget' );
                
        $.fn.absoluteBoxWidgetStyles = function( options ) {
            var defaults = {
                 boxStyle: {
                     position: 'fixed',
                     top: 0,
                     right: 0,
                     bottom: 0,
                     left: 0,
                     zIndex: 2000000,
                     backgroundColor: '#000'
                 },
                 box1cStyle: {
                     position: 'relative'
                 },
                 quitBoxStyle: {
                     position: 'absolute',
                     top: '0.5em',
                     right: '0.5em',
                     bottom: '',
                     left: '',
                     zIndex: 300000000,
                     width: minimizerWidth,
                     height: minimizerHeight,
                     '-webkit-border-radius': '0.5em',
                     '-moz-border-radius': '0.5em',
                     borderRadius: '0.5em',
                     backgroundColor: 'rgba(0,0,0,0.5)',
                     color: '#fff'
                 },
                 figBoxStyle: {
                     position: 'relative',
                     width: '100%',
                     maxWidth: '100%',
                     height: '100%',
                     maxHeight: '100%',
                     textAlign: 'center'
                 },
                 picFigBoxStyle: {
                     position: "absolute",
                     top: 0,
                     right: 0,
                     bottom: 0,
                     left: 0
                 },
            };
            
            var settings = $.extend( true, {}, defaults, options );
            
            return this.each(function() {
                
                $( document ).ready(function() {
                    box.hide();
                    box.css( settings.boxStyle );
                    box1c.css( settings.box1cStyle );
                    quitBox.css( settings.quitBoxStyle );
                    figBox.css( settings.figBoxStyle );
                    picFigBox.css( settings.picFigBoxStyle );
                });
            });
        };
        
        $(  'body' ).absoluteBoxWidgetStyles();
        
        $.fn.absoluteBoxWidget = function() {
            this.each(function() {
                var pic = $( this );
                
                pic.click(function(){
                    var wP      = pic.width();
                    var hP      = pic.height();
                    var pAr     = wP/hP;
                    var nHp     = w/pAr;
                    var nHp2    = nHp*0.5;
                    var srcP    = pic.attr( 'src' );
                    
                    picFigBox.attr( 'src', srcP );
                    
                    if ( pAr < wAr ) {
                        picFigBox.css({
                            position: 'relative',
                            top: '',
                            marginTop: '',
                            width: 'auto',
                            height: h
                        });
                    } else {
                        picFigBox.css({
                            position: 'absolute',
                            top: h2,
                            marginTop: -nHp2,
                            width: '100%',
                            height: 'auto'
                        });                            
                    }
                    
                    $(  'body' ).css({
                        'overflow-y': 'hidden'
                    });
                    
                    box.show();
                    
                    $( window ).resize(function(){
                        var w       = $( window ).width();
                        var h       = $( window ).height();
                        var h2      = h*0.5;
                        var wAr     = w/h;
                        var nHp     = w/pAr;
                        var nHp2    = nHp*0.5;
                        
                        if ( pAr < wAr ) {
                            picFigBox.css({
                                position: 'relative',
                                top: '',
                                marginTop: '',
                                width: 'auto',
                                height: h
                            });
                        } else {
                            picFigBox.css({
                                position: 'absolute',
                                top: h2,
                                marginTop: -nHp2,
                                width: '100%',
                                height: 'auto'
                            });                            
                        }                        
                    });
                                             
                    quitBox.click(function() {
                        box.hide();
                        $(  'body' ).show();
                        $(  'body' ).css({
                            'overflow-y': ''
                        });
                    });
                });
 
                $( window ).resize(function(){
                    var w   = $( window ).width();
                    var h   = $( window ).height();
                    var h2  = h*0.5;
                    var wAr = w/h;
                            
                    pic.click(function(){
                        var wP      = pic.width();
                        var hP      = pic.height();
                        var pAr     = wP/hP;
                        var nHp     = w/pAr;
                        var nHp2    = nHp*0.5;
                        var srcP    = pic.attr( 'src' );
                        
                        picFigBox.attr( 'src', srcP );
                        
                        if ( pAr < wAr ) {
                            picFigBox.css({
                                position: 'relative',
                                top: '',
                                marginTop: '',
                                width: 'auto',
                                height: h
                            });
                        } else {
                            picFigBox.css({
                                position: 'absolute',
                                top: h2,
                                marginTop: -nHp2,
                                width: '100%',
                                height: 'auto'
                            });                            
                        }
                        
                        $(  'body' ).css({
                            'overflow-y': 'hidden'
                        });
                        
                        box.show();
                        
                        $( window ).resize(function() {
                            var w       = $( window ).width();
                            var h       = $( window ).height();
                            var h2      = h*0.5;
                            var wAr     = w/h;
                            var nHp     = w/pAr;
                            var nHp2    = nHp*0.5;
                            
                            if ( pAr < wAr ) {
                                picFigBox.css({
                                    position: 'relative',
                                    top: '',
                                    marginTop: '',
                                    width: 'auto',
                                    height: h
                                });
                            } else {
                                picFigBox.css({
                                    position: 'absolute',
                                    top: h2,
                                    marginTop: -nHp2,
                                    width: '100%',
                                    height: 'auto'
                                });                            
                            }                        
                        });
                                                 
                        quitBox.click(function(){
                            box.hide();
                            $(  'body' ).show();
                            $(  'body' ).css({
                                'overflow-y': ''
                            });
                        });
                    });
                });
            });
            return this;
        };
    });
}(jQuery));