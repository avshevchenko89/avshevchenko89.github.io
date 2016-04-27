$(function() {
    $('.content').find('.tab').hide();
    $('.tabs li:first-child').addClass('current');
    $('.content .tab1').delay(300).fadeIn();

    $('.tabs a').click(function(event) {
        event.preventDefault();
        if ($(this).closest('li').hasClass('current')) {
            return
        } else {
            $('.content').find('.tab').animate({ opacity: "hide"}, 300);
            $('.tabs li').removeClass('current');
            $(this).parent().addClass('current');
            $('.'+ $(this).attr('name')).delay(300).fadeIn();
        }
    });
});
