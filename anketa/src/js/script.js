var countries = {
    "1": "Ukraine",
    "2": "Germany",
    "3": "France",
    "4": "Spain",
    "5": "Sweden",
    "6": "USA",
    "7": "Canada",
    "8": "Moldova",
    "9": "Belarus",
    "10": "Poland"
};

var cities = {
    "1": {"country": 1, "name": "Ukraine"},
    "2": {"country": 3, "name": "Paris"},
    "3": {"country": 4, "name": "Madrid"},
    "4": {"country": 6, "name": "Houston"},
    "5": {"country": 7, "name": "Montreal"},
    "6": {"country": 8, "name": "Кишинев"},
    "7": {"country": 9, "name": "Minsk"},
    "8": {"country": 10, "name": "Warsaw"},
    "100": {"country": 1, "name": "Львов"},
    "101": {"country": 1, "name": "Николаев"},
    "103": {"country": 1, "name": "Переяслав-Хмельницкий"},
    "104": {"country": 1, "name": "Каменец-Подольский"},
    "105": {"country": 1, "name": "Donetsk"},
    "106": {"country": 1, "name": "Kharkov"},
    "107": {"country": 1, "name": "Луцк"},
    "108": {"country": 1, "name": "Poltava"},
    "109": {"country": 1, "name": "Черновцы"},
    "299": {"country": 1, "name": "Чернигов"},
    "333": {"country": 1, "name": "Чернигов"}
};

$(function () {
    //variables
    var $prevButton = $('.prev');
    var $nextButton = $('.next');
    $('.first').addClass('current-step');
    var anketa = new Anketa('.content');
    anketa.start();
    var $flag,
        img;

    //controlButtons
    $prevButton.on('click', function () {
        if ($('.current-step').hasClass('first')) {
            return;
        } else {
            $flag = false;
            $('.current-step').removeClass('current-step').prev().addClass('current-step');
            $('.current-page').removeClass('current-page').prev().removeClass('passed-page').addClass('current-page');
            anketa.start();
        }
    });

    $nextButton.on('click', function (e) {
        e.preventDefault();

        if ($flag) {
            if ($('.current-step').hasClass('fourth')) {
                anketa.showResult();
            } else {
                $('.current-step').removeClass('current-step').next().addClass('current-step');
                $('.current-page').removeClass('current-page').addClass('passed-page').next().addClass('current-page');
                if ($('.current-step').hasClass('three')) {
                    $nextButton.html('Завершить');
                    $nextButton.addClass('finish');
                }
                anketa.start();
            }
        }
    });

    $('.page').on('click', function (e) {
        var $target = e.target;

        switch ($($target).html()) {
            case '2':
                if ($($target).prev().hasClass('passed-page')) {
                    $('.step').hide();
                    $('.second').show();
                    anketa.start();
                } else return;
                break;
            case '3':
                if ($($target).prev().hasClass('passed-page')) {
                    $('.step').hide();
                    $('.third').show();
                    $('.next').removeClass('finish').html('Следующий >');
                    anketa.start();
                } else return;
                break;
            case '4':
                if ($($target).prev().hasClass('passed-page')) {
                    $('.step').hide();
                    $('.fourth').show();
                    anketa.start();
                } else return;
                break;
            default:
                $('.step').hide();
                $('.first').show();
                anketa.start();
        }
    });

    //constructor
    function Anketa(elem) {

        localStorage.clear();
        $('.alert').hide();

        function nameCheck(name) {
            $flag = false;
            if (name == '') {
                $('.name').css({'border': '1px solid #ff0000'});
                $('.alert-name').show();
                $flag = false;
            } else {
                $('.name').css({'border': '0'});
                $('.alert-name').hide();
            }
            /*          return $flag;*/
        }

        function emailCheck(mail) {
            $flag = false;
            var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;

            if (mail == '') {
                $('.email').css({'border': '1px solid #ff0000'});
                $('.alert-email').show();
                $flag = false;
            } else {
                $('.email').css({'border': '0'});
                $('.alert-email').hide();

                if (mail.search(pattern) == 0) {
                    $flag = true;

                } else {
                    $('.email').css({'border': '1px solid #ff0000'});
                    $('.alert-email-wr').show();
                    $($('.email')).val('');
                    $flag = false;
                }
            }
            /*            return $flag;*/
        }

        function selectLocation() {
            for (var key in countries) {
                if (countries.hasOwnProperty(key)) {
                    var $option = $('<option></option>');
                    $($option).val(key);
                    $($option).html(countries[key]);
                    $('#country').append($option);
                }
            }

            $('#country').change(function () {
                var $selected = this.options[this.selectedIndex];
                var $country = $($selected).html();

                localStorage.setItem('country', $country);

                var $selectedCountry = $($selected).val();
                var $item = $('#city');

                while ($item.children().length > 1) {
                    $item.children().last().remove();
                }

                for (var key in cities) {
                    if (cities.hasOwnProperty(key)) {
                        if (cities[key].country == $selectedCountry) {
                            var $option = $('<option></option>');
                            $($option).val(key);
                            $($option).html(cities[key].name);
                            $('#city').append($option);
                        }
                    }
                }
            });

            $("#city").change(function () {
                var $selected = this.options[this.selectedIndex];
                var $city = $($selected).html();

                localStorage.setItem('city', $city);
            });
        }

        function locationCheck() {
            $flag = false;
            if ($('#country').val() == null) {
                $('#country').css({'border': '1px solid #ff0000'});
                $('.alert-country').show();
                $flag = false;
            } else {
                $('#country').css({'border': '0'});
                $('.alert-country').hide();
                if ($('#city').val() == null) {
                    localStorage.setItem('city', 'Город');
                }
                $flag = true;
            }
        }

        function socialInput(target) {
            $('input[type="text"]').hide();
            $(target).find('input[type="checkbox"]').on('click', function () {
                if ($(this).is(':checked')) {
                    var $id = $(this).attr('id');
                    var $input = $(this).parent().find('input[type="text"]');
                    $input.addClass($id);
                    $($input).show();
                } else {
                    $(this).parent().find('input[type="text"]').hide();
                }
            });

        }

        function socialInputCheck(target) {
            $flag = false;
            if ($(target).find('input:checked').length == 0) {
                var $alertEmpty = $('<span class="alert">Пожалуйста выберите соц.сеть</span>');
                $(target).find('form').append($alertEmpty);
                $flag = false;
            } else {
                $(target).find('.alert').remove();
                $(target).find('input:checked').parent().find('input[type="text"]').each(function () {
                    var $inputText = $(this).val();
                    var $id = $(this).parent().find('input[type="checkbox"]').attr('id');
                    if ($inputText == '') {
                        $(this).parent().find('.alert-social').remove();
                        $(this).css({'border': '1px solid #ff0000'});
                        var $alert = $('<span class="alert alert-social">Поле должно быть заполнено.</span>');
                        $(this).parent().append($alert);
                        $flag = false;
                    } else {
                        $(this).css({'border': '0'});
                        $(this).parent().find('.alert-social').remove();
                        localStorage.setItem($id, $inputText);
                        $flag = true;
                    }
                });
            }
            return $flag;
        }

        function imgChoose() {
            $('img').on('click', function () {
                $(this).css({'border': '2px solid #ff9800'});
                img = this;
            });
        }

        function imgCheck() {
            if ($(img).hasClass('dog')) {
                $('.alert').show();
                $flag = false;
                $('img').css({'border': '0'});
            } else {
                $('.alert').hide();
                var picId = $(img).attr('id');
                console.log(picId);
                localStorage.setItem('picId', picId);
            }
        }

        this.start = function () {
            //check the current__step
            var $current = $('.current-step');

            //check what to do according to actual step
            if ($($current).hasClass('first')) {
                console.log($current);
                console.log('first');
                $nextButton.on('click', function () {
                    var $name = $('.name').val();
                    nameCheck($name);
                    var $email = $('.email').val();
                    emailCheck($email);
                    localStorage.setItem('name', $name);
                    localStorage.setItem('email', $email);
                })
            }

            if ($($current).hasClass('second')) {
                console.log($current);
                console.log('second');
                selectLocation();
                $nextButton.on('click', function () {
                    $flag = false;
                    locationCheck();
                })
            };

            if ($($current).hasClass('third')) {
                console.log('three');
                socialInput($('.third'));
                $nextButton.on('click', function () {
                    socialInputCheck($('.third'));
                });
            };

            if ($($current).hasClass('fourth')) {
                console.log('four');
                imgChoose();
                $nextButton.on('click', function () {
                    imgCheck();
                });
            };
        };

        this.reset = function () {
            console.log('reset');
            $flag = false;
            localStorage.clear();
            $('.step').hide().removeClass('current-step');
            $('.first').addClass('current-step').show();
        };

        this.showResult = function () {
            var $result = {};
                $result.name = localStorage.getItem('name');
                $result.email = localStorage.getItem('email');
                $result.country = localStorage.getItem('country');
                $result.city = localStorage.getItem('city');
                $result.social = [];
            var checked = $('.third').find('input:checked');
            for (var i = 0; i < checked.length; i++) {
                var id = $(checked[i]).attr('id');
                $result.social[i] = localStorage.getItem(id);
            }
            $result.pic = localStorage.getItem('picId');
            console.log($result);
            $('.wrapper').hide();
            $('.results').css({'display': 'block'});
            var $profile = $('<div class="profile"></div>');
            $('.results').append($profile);

            $profile.append($('<h1 class="name">' + $result.name + '</h1>'));
            $profile.append($('<p class="email">' + $result.email + '</p>'));
            $profile.append($('<p class="location">' + $result.city + ', ' + $result.country + '</p>'));

            for (var i = 0; i<$result.social.length; i++) {
                $profile.append($('<p>'+ '<span>' + $(checked[i]).attr('id') + ': </span>' + $result.social[i] + '<p>'));
            }

            $profile.append($('<img src="img/' + localStorage.getItem('picId') +'.png" class="pic">'));
            var $reset = $('<button>Пройти заново</button>');
            $reset.addClass('finish');
            $reset.on('click', this.reset());

            $('.results').append($reset);
        };
    }

});
