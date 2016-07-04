(function ($) {

    $.fn.carousel = function () {

        $('.carousel-button-right').on('click', function () {
            var carusel = $(this).parents('.carousel');
            caruselRight(carusel);
            return false;
        });

        $('.carousel-button-left').on('click', function () {
            var carusel = $(this).parents('.carousel');
            caruselLeft(carusel);
            return false;
        });

        function caruselLeft (carusel) {
            var block_width = $(carusel).find('.carousel-block').outerWidth();
            $(carusel).find('.carousel-items .carousel-block').eq(-1).clone().prependTo($(carusel).find('.carousel-items'));
            $(carusel).find('.carousel-items').css({'left': '-' + block_width + 'px'});
            $(carusel).find('.carousel-items .carousel-block').eq(-1).remove();
            $(carusel).find('.carousel-items').animate({left: '0px'}, 200);
        }

        function caruselRight (carusel) {
            var block_width = $(carusel).find('.carousel-block').outerWidth();
            $(carusel).find('.carousel-items').animate({left: '-' + block_width + 'px'}, 200, function () {
                $(carusel).find('.carousel-items .carousel-block').eq(0).clone().appendTo($(carusel).find('.carousel-items'));
                $(carusel).find('.carousel-items .carousel-block').eq(0).remove();
                $(carusel).find('.carousel-items').css({'left': '0px'});
            });
        }
    }

})(jQuery);
