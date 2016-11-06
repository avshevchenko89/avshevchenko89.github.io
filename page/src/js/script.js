$(function () {
    $(window).scroll(function () {
        $('.menu').addClass('scroll-menu');
        if ($(window).scrollTop() == 0) {
            $('.menu').removeClass('scroll-menu');
        }
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
