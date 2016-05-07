$(function() {
    $('.jcarousel').jcarousel({
        animation: 'slow'
    });

    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });

    $("select").uniform();
});
