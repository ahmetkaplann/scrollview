(function($) {
    "use strict";
    $.fn.scrollview = function(prm) {
        var elem = this,
            r = false;
        var vals = $.extend({
            class: 'viewed'
        }, prm);
        if(elem.length>0){
            $(window).on("load resize scroll", function(){
                elem.each(function(){
                    var offset = $(this).offset().top,
                    lmt = offset - ($(window).height() / 2);
                    if ($(window).scrollTop() > lmt){
                        $(this).addClass(vals.class);
                    }
                    r = true;
                });
            });
        }
        return r;
    }
})(jQuery);