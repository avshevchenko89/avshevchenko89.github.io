define (
    'slider',
    ['jquery', '../dist/js/bxslider'],
    function slider() {
        $('.bxslider').bxSlider({
            auto: false,
            autoControls: true
        });
        return slider;
    }
);
