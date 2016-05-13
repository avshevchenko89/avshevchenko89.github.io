(function($) {

    $.fn.carousel = function() {
        var left = $('.carousel-arrow-left');
        var right = $('.carousel-arrow-right');
        var list = $('.carousel-list');

        var pixelOffset = 225;
        var currentLeft = 0;
        var maximumOffset = 0;
        var minimumOffset = -((list.find('li').length - 4) * pixelOffset);

        left.click(function () {
            if (currentLeft != maximumOffset) {
                currentLeft += pixelOffset;
                list.animate({ left: currentLeft + "px"}, 300);
            }
        });

        right.click(function () {
            if (currentLeft != minimumOffset) {
                currentLeft -= pixelOffset;
                list.animate({ left: currentLeft + "px"}, 300);
            }
        });
    }

})(jQuery);
