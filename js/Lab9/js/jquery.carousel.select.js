$(function() {
    $('.jcarousel').jcarousel({
        wrap: 'circular',
        animation: 'slow'
    }).jcarouselAutoscroll({
        interval: 2000
    });

    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });

    $("select").uniform();
});
