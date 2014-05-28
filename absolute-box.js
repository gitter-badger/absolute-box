//ABSOLUTE-BOX 3.1 by DcDeiv https://github.com/dcdeiv/
(function ( $ ) {
    var SRCminimizer = 'minimize@2x.png';
    var minimizerWidth = '50px';
    var minimizerHeight = 'auto';
  
    $( document ).ready(function() {
		
		var bodyChildren = $( 'body' ).children();
        
        $( 'body' ).append( '<div>' );    
        
        var box = bodyChildren
                    .siblings()
                    .not( bodyChildren );
        
        box.append( '<div>' );
        
        var relativeBox = box.children();
        
        relativeBox.css({
            position: 'relative'
        });
        
        relativeBox
            .prepend( '<div>' )
            .append( '<figure>' );
            
        var quitBox = relativeBox.children( ':first-child' );
        var figBox = relativeBox.children( ':nth-child(2)' );
        
        figBox.append( '<img src="" alt="" />' );
        
        quitBox.append(
        '<img src="' + SRCminimizer + '" width="' + minimizerWidth +
        ' height="' + minimizerHeight + ' alt="minimize" />'
        );
        
        var picFigBox = figBox.children();
        
        box.css({
            display: 'none',
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 2000000,
            backgroundColor: '#000'
        });
        
        quitBox.css({
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
        });
        
        figBox.css({
            position: 'relative',
            width: '100%',
            maxWidth: '100%',
            height: '100%',
            maxHeight: '100%',
            textAlign: 'center'
        });
        
        picFigBox.css({
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        });

        $.fn.absoluteBoxPlugin = function() {
            this.each(function() {
                var pic = $( this );
                
                pic.click(function(){
                    var w       = $( window ).width();
                    var h       = $( window ).height();
                    var h2      = h*0.5;
                    var wAr     = w/h;
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