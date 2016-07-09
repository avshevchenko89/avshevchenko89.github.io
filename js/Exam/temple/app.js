requirejs.config({
    paths: {
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery',
        'tmpl': 'tmpl',
        'imagesLoaded': 'https://npmcdn.com/imagesloaded@4.1/imagesloaded.pkgd',
        'masonry': 'https://npmcdn.com/masonry-layout@4.0/dist/masonry.pkgd'
    },
    shim: {
        'jquery': {
            exports: 'jquery'
        },
        'tmpl': {
            exports: 'tmpl'
        },
        'imagesLoaded': {
            exports: 'imagesLoaded'
        },
        'masonry': {
            exports: 'masonry'
        }
    }
});

require(
    [
        'jquery',
        '../dist/js/tmpl',
        'imagesLoaded',
        'masonry',
        'bxslider',
        'slider',
        'picture'
    ],
    function ($, tmpl, imageLoaded, masonry, bxslider, slider, picture) {
        console.log($);
        console.log(tmpl);
        console.log(imageLoaded);
        console.log(masonry);
        console.log(bxslider);
        console.log(slider);
        console.log(picture);
    }
);