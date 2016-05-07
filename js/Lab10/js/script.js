$(function (){
        $('.sub').mouseenter(function() {
                $(this).children('.sub-menu').slideDown(500);
                // $(this).children('.sub-menu').children('li').css('background-color', '#e478d0');
                // $(this).parent().children('li').css('background-color', '#fb2b6f');
                $(this).children('.sub-menu').children('li').animate({backgroundColor: '#e478d0'}, 300);
                $(this).parent().children('li').animate({backgroundColor: '#fb2b6f'}, 300)
            });
        $('.sub').mouseleave(function() {
                $(this).children('.sub-menu').slideUp(500)
            });
});
