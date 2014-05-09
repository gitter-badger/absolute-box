(function ( $ ) {
    $(document).ready(function(){
        var w = $(window).width();
        var h = $(window).height();
        var h2 = h*0.5;
        var wAr = w/h;
        
        $('#absolute-box-widget').hide();
        $('#absolute-box-widget').css({
            "z-index": 100000,
            "position": "fixed",
            "top": 0,
            "left": 0,
            "right": 0,
            "bottom": 0,
            "background-color": "#000",
        });
        $('#absolute-box-widget div:first-child').css({
            "position": "relative",
        });
        $('#quit-absolute-box-widget').css({
            "position": "absolute",
            "top": "0.5em",
            "left": "0.5em",
            "-webkit-border-radius": "0.5em",
            "-moz-border-radius": "0.5em",
            "border-radius": "0.5em",
            "background-color": "rgba(0,0,0,0.5)",
            "height": "50px",
            "width": "50px",
            "z-index": 200000000,
            "color": "#fff",
        });
        $('#absolute-box-widget figure').css({
            "position": "relative",
            "max-width": "100%",
            "max-height": "100%",
            "width": "100%",
            "height": "100%",
            "text-align": "center",
        });
        $('#absolute-box-widget figure img').css({
            "position": "absolute",
            "top": 0,
            "right": 0,
            "bottom": 0,
            "left": 0,
        });
        
        $.fn.picS = function() {
            this.filter( "img.absolute-box-widget" ).each(function() {
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
                    
                    $('#absolute-box-widget figure img').attr('src', srcP);
                    
                    if (pAr < wAr) {
                        $('#absolute-box-widget figure img').css({
                            "height": h,
                            "width": "auto",
                            "position": "relative",
                            "top": "",
                            "margin-top": "",
                        });
                    } else {
                        $('#absolute-box-widget figure img').css({
                            "height": "auto",
                            "width": "100%",
                            "position": "absolute",
                            "top": h2,
                            "margin-top": -nHp2,
                        });                            
                    }
                    
                    $('body').css({
                        "overflow-y": "hidden",
                    });
                    
                    $('#absolute-box-widget').show();
                    
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
                            $('#absolute-box-widget figure img').css({
                                "height": h,
                                "width": "auto",
                                "position": "relative",
                                "top": "",
                                "margin-top": "",
                            });
                        } else {
                            $('#absolute-box-widget figure img').css({
                                "height": "auto",
                                "width": "100%",
                                "position": "absolute",
                                "top": h2,
                                "margin-top": -nHp2,
                            });                            
                        }                        
                    });
                                             
                    $('#quit-absolute-box-widget').click(function(){
                        $('#absolute-box-widget').hide();
                        $('body').show();
                        $('body').css({
                            "overflow-y": "",
                        });
                    });
                });
            });
            return this;
        };
    
        $('.absolute-box-widget').picS();
        
    });
    $(window).resize(function(){
        var w = $(window).width();
        var h = $(window).height();
        var h2 = h*0.5;
        var wAr = w/h;
                
        $.fn.picS = function() {
            this.filter( "img.absolute-box-widget" ).each(function() {
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
                    
                    $('#absolute-box-widget figure img').attr('src', srcP);
                    
                    if (pAr < wAr) {
                        $('#absolute-box-widget figure img').css({
                            "height": h,
                            "width": "auto",
                            "position": "relative",
                            "top": "",
                            "margin-top": "",
                        });
                    } else {
                        $('#absolute-box-widget figure img').css({
                            "height": "auto",
                            "width": "100%",
                            "position": "absolute",
                            "top": h2,
                            "margin-top": -nHp2,
                        });                            
                    }
                    
                    $('body').css({
                        "overflow-y": "hidden",
                    });
                    
                    $('#absolute-box-widget').show();
                    
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
                            $('#absolute-box-widget figure img').css({
                                "height": h,
                                "width": "auto",
                                "position": "relative",
                                "top": "",
                                "margin-top": "",
                            });
                        } else {
                            $('#absolute-box-widget figure img').css({
                                "height": "auto",

                                "width": "100%",
                                "position": "absolute",
                                "top": h2,
                                "margin-top": -nHp2,
                            });                            
                        }                        
                    });
                                             
                    $('#quit-absolute-box-widget').click(function(){
                        $('#absolute-box-widget').hide();
                        $('body').show();
                        $('body').css({
                            "overflow-y": "",
                        });
                    });
                });
            });
            return this;
        };
    
        $('.absolute-box-widget').picS();
        
    });
}(jQuery));