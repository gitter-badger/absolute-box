// Absolute-Box v3.2 by DcDeiv https://github.com/dcdeiv
// GPLv2 http://www.gnu.org/licenses/gpl-2.0-standalone.html
(function ( $ ) {
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
        
        quitBox
            .append( '<div><div></div><div></div></div>' ); 
        
        var quitBox1Rel     = quitBox.children( ':first-child' );
        var quitBoxBefore   = quitBox1Rel.children( ':first-child' );
        var quitBoxAfter    = quitBox1Rel.children( ':nth-child( 2 )' );
        var picFigBox       = figBox.children();
        
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
            width: '40px',
            height: '40px',
            border: '2px solid black',
            '-webkit-border-radius': '10em',
            '-moz-border-radius': '10em',
            borderRadius: '10em',
            backgroundColor: 'white',
            float: 'right',
            cursor: 'pointer'
        });
        
        quitBox1Rel.css({
            position: 'relative'
        });
        
        quitBoxBefore.css({
            display: 'block',
            position: 'absolute',
            top: '17px',
            left: '2px',
            height: '6px',
            width: '36px',
            '-webkit-border-radius': '2em',
            '-moz-border-radius': '2em',
            borderRadius: '2em',
            backgroundColor: 'black',
            '-webkit-transform': 'rotate(45deg)',
            '-moz-transform': 'rotate(45deg)',
            '-ms-transform': 'rotate(45deg)',
            '-o-transform': 'rotate(45deg)',
            transform: 'rotate(45deg)'
        });
        
        quitBoxAfter.css({
            display: 'block',
            position: 'absolute',
            top: '17px',
            left: '2px',
            height: '6px',
            width: '36px',
            '-webkit-border-radius': '2em',
            '-moz-border-radius': '2em',
            borderRadius: '2em',
            backgroundColor: 'black',
            '-webkit-transform': 'rotate(-45deg)',
            '-moz-transform': 'rotate(-45deg)',
            '-ms-transform': 'rotate(-45deg)',
            '-o-transform': 'rotate(-45deg)',
            transform: 'rotate(-45deg)'
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