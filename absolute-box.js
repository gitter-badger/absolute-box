$(document).ready(function() {
    $('#absolute-box-widget').hide();
    
    var absoluteBoxWidgetWindowHeight = $(window).height();
    var absoluteBoxWidgetWindowWidth = $(window).width();
    
    if (absoluteBoxWidgetWindowWidth > absoluteBoxWidgetWindowHeight) {
        $('#absolute-box-widget figure img').css({
            "height": absoluteBoxWidgetWindowHeight,
        });
    } else if (absoluteBoxWidgetWindowWidth < absoluteBoxWidgetWindowHeight) {
        $('#absolute-box-widget figure img').css({
            "height": "auto",
            "max-width": absoluteBoxWidgetWindowWidth,
            "max-height": absoluteBoxWidgetWindowHeight,
        });
    }
            
    $('#absolute-box-widget').css({
        "z-index": 100000,
        "position": "fixed",
        "top": 0,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "background-color": "rgba(0,0,0,0.7)",
    });
    $('#absolute-box-widget div:first-child').css({
        "position": "relative",
    });
    $('#quit-absolute-box-widget').css({
        "position": "absolute",
        "top": "2em",
        "left": "2em",
        "-webkit-border-radius": "3em",
        "-moz-border-radius": "3em",
        "border-radius": "3em",
        "background-color": "rgba(255,255,255,0.5)",
        "height": "50px",
        "width": "50px",
        "z-index": 200000000,
    });
    $('#absolute-box-widget figure').css({
        "position": "relative",
        "max-width": "100%",
        "max-height": "100%",
        "width": "100%",
        "height": "100%",
        "text-align": "center",
    });
    
    //MAIN FUNCTION
    $(".absolute-box-widget").click(function() {
        var src = $(this).attr('src')
        $('#absolute-box-widget figure img').attr('src', src);
        $('#absolute-box-widget').show();
        
        $('#quit-absolute-box-widget').click(function(){
            $('#absolute-box-widget').hide();
        });
    });
});

$(window).resize(function() {
    $('#absolute-box-widget').hide();
    
    var absoluteBoxWidgetWindowHeight = $(window).height();
    var absoluteBoxWidgetWindowWidth = $(window).width();
    
    if (absoluteBoxWidgetWindowWidth > absoluteBoxWidgetWindowHeight) {
        $('#absolute-box-widget figure img').css({
            "height": absoluteBoxWidgetWindowHeight,
        });
    } else if (absoluteBoxWidgetWindowWidth < absoluteBoxWidgetWindowHeight) {
        $('#absolute-box-widget figure img').css({
            "height": "auto",
            "max-width": absoluteBoxWidgetWindowWidth,
            "max-height": absoluteBoxWidgetWindowHeight,
        });
    }
            
    $('#absolute-box-widget').css({
        "z-index": 100000,
        "position": "fixed",
        "top": 0,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "background-color": "rgba(0,0,0,0.7)",
    });
    $('#absolute-box-widget div:first-child').css({
        "position": "relative",
    });
    $('#quit-absolute-box-widget').css({
        "position": "absolute",
        "top": "2em",
        "left": "2em",
        "-webkit-border-radius": "3em",
        "-moz-border-radius": "3em",
        "border-radius": "3em",
        "background-color": "rgba(255,255,255,0.5)",
        "height": "50px",
        "width": "50px",
        "z-index": 200000000,
    });
    $('#absolute-box-widget figure').css({
        "position": "relative",
        "max-width": "100%",
        "max-height": "100%",
        "width": "100%",
        "height": "100%",
        "text-align": "center",
    });
    
    //MAIN FUNCTION
    $(".absolute-box-widget").click(function() {
        var src = $(this).attr('src')
        $('#absolute-box-widget figure img').attr('src', src);
        $('#absolute-box-widget').show();
        
        $('#quit-absolute-box-widget').click(function(){
            $('#absolute-box-widget').hide();
        });
    });
});