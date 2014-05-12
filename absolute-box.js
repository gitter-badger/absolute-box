//ABSOLUTE-BOX 3.0 by DCDEIV: www.github.com/dcdeiv
(function ( $ ) {
    var SRCminimizer = 'minimize.png';
    
    $(document).ready(function(){
        var b = $('body');
        b.append('<div id="absolute-box-widget">');
        var box = $('#absolute-box-widget');
        box.append('<div>');
        var box1c = box.children(':first-child');
        box1c.append('<div id="quit-absolute-box-widget">', '<figure id="relative-picfigbox-absolute-widget"></figure>');
        var quitBox = $('#quit-absolute-box-widget');
        quitBox.append('<img src="' + SRCminimizer + '" alt="minimize" />');
        var figBox = $('#relative-picfigbox-absolute-widget');
        figBox.append('<img id="fullscreen-absolute-box-widget" src=""/>');
        var picFigBox = $('#fullscreen-absolute-box-widget');        
        
        var w = $(window).width();
        var h = $(window).height();
        var h2 = h*0.5;
        var wAr = w/h;
                
        $.fn.absoluteBoxWidgetStyles = function( options ){
            
            var defaults = {
                 boxStyle: {
                     zIndex: 2000000,
                     position: 'fixed',
                     top: 0,
                     right: 0,
                     bottom: 0,
                     left: 0,
                     backgroundColor: '#000',
                 },
                 box1cStyle: {
                     position: 'relative',
                 },
                 quitBoxStyle: {
                     position: 'absolute',
                     top: '0.5em',
                     right: '0.5em',
                     bottom: '',
                     left: '',
                     zIndex: 300000000,
                     width: '50px',
                     height: '50px',
                     backgroundColor: 'rgba(0,0,0,0.5)',
                     color: '#fff',
                     webkitBorderRadius: '0.5em',
                     mozBorderRadius: '0.5em',
                     borderRadius: '0.5em',
                 },
                 figBoxStyle: {
                    position: "relative",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    width: "100%",
                    height: "100%",
                    textAlign: "center",
                 },
                 picFigBoxStyle: {
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                 },
            };
            
            var settings = $.extend( true, {}, defaults, options );
            
            return this.each(function(){
                
                $(document).ready(function(){
                    box.hide();
                    
                    box.css(settings.boxStyle);
                    box1c.css(settings.box1cStyle);
                    quitBox.css(settings.quitBoxStyle);
                    figBox.css(settings.figBoxStyle);
                    picFigBox.css(settings.picFigBoxStyle);
                });
                
            });
        };
        
        $.fn.absoluteBoxWidget = function() {
            this.each(function() {
                var pic = $( this );
                pic.click(function(){
                    var wP = pic.width();
                    var hP = pic.height();
                    var pAr = wP/hP;
                    var nWp = h/pAr;
                    var nWp2 = nWp*0.5;
                    var nHp = w/pAr;
                    var nHp2 = nHp*0.5;
                    var srcP = pic.attr('src');
                    
                    picFigBox.attr('src', srcP);
                    
                    if (pAr < wAr) {
                        picFigBox.css({
                            "height": h,
                            "width": "auto",
                            "position": "relative",
                            "top": "",
                            "margin-top": "",
                        });
                    } else {
                        picFigBox.css({
                            "height": "auto",
                            "width": "100%",
                            "position": "absolute",
                            "top": h2,
                            "margin-top": -nHp2,
                        });                            
                    }
                    
                    b.css({
                        "overflow-y": "hidden",
                    });
                    
                    box.show();
                    
                    $(window).resize(function(){
                        var w = $(window).width();
                        var h = $(window).height();
                        var h2 = h*0.5;
                        var wAr = w/h;
                        var nWp = h/pAr;
                        var nWp2 = nWp*0.5;
                        var nHp = w/pAr;
                        var nHp2 = nHp*0.5;
                        
                        if (pAr < wAr) {
                            picFigBox.css({
                                "height": h,
                                "width": "auto",
                                "position": "relative",
                                "top": "",
                                "margin-top": "",
                            });
                        } else {
                            picFigBox.css({
                                "height": "auto",
                                "width": "100%",
                                "position": "absolute",
                                "top": h2,
                                "margin-top": -nHp2,
                            });                            
                        }                        
                    });
                                             
                    quitBox.click(function(){
                        box.hide();
                        b.show();
                        b.css({
                            "overflow-y": "",
                        });
                    });
                });
 
                $(window).resize(function(){
                    var w = $(window).width();
                    var h = $(window).height();
                    var h2 = h*0.5;
                    var wAr = w/h;
                            
                    pic.click(function(){
                        var wP = pic.width();
                        var hP = pic.height();
                        var pAr = wP/hP;
                        var nWp = h/pAr;
                        var nWp2 = nWp*0.5;
                        var nHp = w/pAr;
                        var nHp2 = nHp*0.5;
                        var srcP = pic.attr('src');
                        
                        picFigBox.attr('src', srcP);
                        
                        if (pAr < wAr) {
                            picFigBox.css({
                                "height": h,
                                "width": "auto",
                                "position": "relative",
                                "top": "",
                                "margin-top": "",
                            });
                        } else {
                            picFigBox.css({
                                "height": "auto",
                                "width": "100%",
                                "position": "absolute",
                                "top": h2,
                                "margin-top": -nHp2,
                            });                            
                        }
                        
                        b.css({
                            "overflow-y": "hidden",
                        });
                        
                        box.show();
                        
                        $(window).resize(function(){
                            var w = $(window).width();
                            var h = $(window).height();
                            var h2 = h*0.5;
                            var wAr = w/h;
                            var nWp = h/pAr;
                            var nWp2 = nWp*0.5;
                            var nHp = w/pAr;
                            var nHp2 = nHp*0.5;
                            
                            if (pAr < wAr) {
                                picFigBox.css({
                                    "height": h,
                                    "width": "auto",
                                    "position": "relative",
                                    "top": "",
                                    "margin-top": "",
                                });
                            } else {
                                picFigBox.css({
                                    "height": "auto",
                                    "width": "100%",
                                    "position": "absolute",
                                    "top": h2,
                                    "margin-top": -nHp2,
                                });                            
                            }                        
                        });
                                                 
                        quitBox.click(function(){
                            box.hide();
                            b.show();
                            b.css({
                                "overflow-y": "",
                            });
                        });
                    });
                });
            });
            return this;
        };
    });
}(jQuery));