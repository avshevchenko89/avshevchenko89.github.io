$(function () {

    $(window).scroll(function () {
        $('.menu').addClass('scroll-menu');
        if ($(window).scrollTop() == 0) {
            $('.menu').removeClass('scroll-menu');
        }
    });

    $('.nav-button').on('click', function () {
            $('.menu nav').fadeIn(300);
            $('.menu nav a').on('click', function () {
                $('.menu nav').hide();
            });
    });

    $('.close').on('click', function () {
        $('.menu nav').fadeOut(300);
    });

    $('.portfolio .bxslider').bxSlider({
        infiniteLoop: true,
        controls: false,
        auto: true
    });

    $('.references .bxslider').bxSlider({
        infiniteLoop: true,
        hideControlOnEnd: true
    });

    $('.chat').hide();

    $('.connect img').on('click', function () {
        $('.chat').fadeIn(300)
    });

    $('.close').on('click', function () {
        $('.chat').fadeOut(300)
    });

    $('.dg-container').gallery();
});
