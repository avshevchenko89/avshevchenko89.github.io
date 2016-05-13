$(function() {
    $('.carousel').carousel();

    //шаблон
    var data = {
        name: 'Васька',
        photo: {
            src: 'img/photo.jpg',
            alt: 'котейка'
        },
        job: 'Котейка',
        why: 'Почему хорошо быть котом:',
        reasons: ['тебя все любят',
            'можно ничего не делать',
            'ты мягкий и пушистый'],
        tel: 'Мой контактный телефон:',
        number: '+123 456 78 90',
        fb: 'Мой профиль в соцсети:',
        fb_link: 'https://www.facebook.com/cat_Vasilii',
        feedback: 'Мой фидбек:',
        feedback_text: 'Котофанов любят все'
    }

    // JavaScript Micro-Templating
    var profile = $('#profile').html();
    var content = tmpl(profile, data);
    $('.shablon').append('<h2>JavaScript Micro-Templating</h2>');
    $('.shablon').append(content);

    // Шаблонизатор LoDash
    var profile = $('#profile').html();
    var content = _.template(profile)(data);
    $('.shablon').append('<h2>LoDash</h2>');
    $('.shablon').append(content);
});
