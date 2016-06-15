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

    $('.page:first-child').addClass('current-page');
    var anketa = new Anketa('.content');
    var img;

    //controlButtons
    $prevButton.on('click', function () {
        if ($('.current-step').hasClass('first')) {
            return;
        } else {
            debugger;
            if ($('.current-step').hasClass('fourth')) {
                $nextButton.removeClass('finish').html('Следующий >');
            }
            $('.current-step').removeClass('current-step').prev().addClass('current-step');
            $('.current-page').removeClass('current-page').prev().removeClass('passed-page').addClass('current-page');
            anketa.start();
        }
    });

    $nextButton.on('click', function (e) {
        e.preventDefault();
        if ($('.current-step').hasClass('first')) {
            if (anketa.firstCheck()) {
                $('.current-step').removeClass('current-step').next().addClass('current-step');
                $('.current-page').removeClass('current-page').addClass('passed-page').next().addClass('current-page');
                anketa.second();
            }
        } else if ($('.current-step').hasClass('second')) {
            if (anketa.secondCheck()) {
                $('.current-step').removeClass('current-step').next().addClass('current-step');
                $('.current-page').removeClass('current-page').addClass('passed-page').next().addClass('current-page');
                anketa.third();
            }
        } else if ($('.current-step').hasClass('third')) {
            if (anketa.thirdCheck()) {
                $('.current-step').removeClass('current-step').next().addClass('current-step');
                $('.current-page').removeClass('current-page').addClass('passed-page').next().addClass('current-page');
                $nextButton.html('Завершить').addClass('finish');
                anketa.fourth();
            }
        } else if ($('.current-step').hasClass('fourth')) {
            if (anketa.fourthCheck()) {
                $('img').css({'border': 0});
                anketa.showResult();
            }
        }
    });

    //paginator*****************************************************************
    $('.page').on('click', function (e) {
        var $target = e.target;
        debugger;
        switch ($($target).html()) {
            case '2':
                if ($($target).prev().hasClass('passed-page')) {
                    if ($('.current-step').hasClass('fourth')) {
                    }
                    $('.next').removeClass('finish').html('Следующий >');
                    $('.current-step').removeClass('current-step');
                    $('.second').addClass('current-step');
                    $('.page').removeClass('current-page');
                    $('.page:not(:first-child)').removeClass('passed-page');
                    $($target).addClass('current-page');
                    anketa.start();
                } else return;
                break;
            case '3':
                if ($($target).prev().hasClass('passed-page')) {
                    if ($('.current-step').hasClass('fourth')) {
                        $('.next').removeClass('finish').html('Следующий >');
                    }
                    $('.current-step').removeClass('current-step');
                    $('.third').addClass('current-step');
                    $('.page').removeClass('current-page');
                    $('.page:nth-child(3) .page:nth-child(4)').removeClass('passed-page');
                    $($target).addClass('current-page');
                    anketa.start();
                } else return;
                break;
            case '4':
                if ($($target).prev().hasClass('passed-page')) {
                    $('.current-step').removeClass('current-step');
                    $('.fourth').addClass('current-step');
                    $('.page').removeClass('current-page');
                    $($target).addClass('current-page');
                } else return;
                break;
            default:
                if ($('.current-step').hasClass('fourth')) {
                    $('.next').removeClass('finish').html('Следующий >');
                }
                $('.current-step').removeClass('current-step');
                $('.first').addClass('current-step');
                $('.page').removeClass('passed-page').removeClass('current-page');
                $($target).addClass('current-page');
        }
    });

    //constructor
    function Anketa(elem) {

        localStorage.clear();
        $('.alert').hide();

        function nameCheck(name) {
            if (name == '') {
                $('.name').css({'border': '1px solid #ff0000'});
                $('.alert-name').show();
                return false;
            } else {
                $('.name').css({'border': '0'});
                $('.alert-name').hide();
                return true;
            }
        }

        function emailCheck(mail) {
            var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;

            if (mail == '') {
                $('.email').css({'border': '1px solid #ff0000'});
                $('.alert-email').show();
                return false;
            } else {
                $('.email').css({'border': '0'});
                $('.alert-email').hide();

                if (mail.search(pattern) == 0) {
                    $('.alert-email-wr').hide();
                    return true;

                } else {
                    $('.email').css({'border': '1px solid #ff0000'});
                    $('.alert-email-wr').show();
                    $($('.email')).val('');
                    return false;
                }
            }
        }

        function selectLocation() {
            $('.new').remove();
            for (var key in countries) {
                if (countries.hasOwnProperty(key)) {
                    var $option = $('<option class="new"></option>');
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
                            var $option = $('<option class="new"></option>');
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
            if ($('#country').val() == null) {
                $('#country').css({'border': '1px solid #ff0000'});
                $('.alert-country').show();
                return false;
            } else {
                $('#country').css({'border': '0'});
                $('.alert-country').hide();
                if ($('#city').val() == null) {
                    localStorage.setItem('city', 'Город');
                }
                return true;
            }
        }

        function socialInput() {
            $('.third').find('input[type="text"]').hide();
            $('input[type="checkbox"]').on('click', function () {
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

        function socialInputCheck() {
            var $flag = false;
            if ($('input:checked').length == 0) {
                $('.input-alert').show();
            } else {
                $('.alert').hide();
                $('input:checked').parent().find('input[type="text"]').each(function () {
                    var $inputText = $(this).val();
                    var $id = $(this).parent().find('input[type="checkbox"]').attr('id');
                    if ($inputText == '') {
                        $(this).parent().find('.alert-social').remove();
                        $(this).css({'border': '1px solid #ff0000'});
                        var $alert = $('<span class="alert alert-social">Поле должно быть заполнено.</span>');
                        $(this).parent().append($alert);
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
            $('img').removeClass('chosen');
            $('img').on('click', function () {
                $(this).addClass('chosen');
                img = this;
            });
        }

        function imgCheck() {
            var $flag = false;
            if ($('.chosen').length == 0) return false;
            if ($(img).hasClass('dog')) {
                $('.pic-alert').show();
                $('img').removeClass('chosen');
                return false;
            } else {
                $('.pic-alert').hide();
                var picId = $(img).attr('id');
                localStorage.setItem('picId', picId);
                return true;
            }
        }

        this.firstCheck = function () {
            var $name = $('.name').val();
            var $email = $('.email').val();
            if (nameCheck($name) && emailCheck($email)) {
                localStorage.setItem('name', $name);
                localStorage.setItem('email', $email);
                return true
            } else {
                return false
            }
        };

        this.second = function () {
            selectLocation();
        };

        this.secondCheck = function () {
            if (locationCheck()) {
                return true
            } else {
                return false
            }
        };

        this.third = function () {
            socialInput();
        };

        this.thirdCheck = function () {
           if (socialInputCheck()) {
               return true
           } else {
               return false
           }
        };

        this.fourth = function () {
            imgChoose();
        };

        this.fourthCheck = function () {
           if (imgCheck()) {
               return true
           } else {
               return false
           }
        };

        this.start = function () {

            var $current = $('.current-step');

            if ($($current).hasClass('second')) {
                selectLocation();
            }

            if ($($current).hasClass('third')) {
                socialInput($('.third'));
            }

            if ($($current).hasClass('fourth')) {
                imgChoose();
            }
        };

        this.showResult = function () {
            var $result = {};
                $result.name = localStorage.getItem('name');
                $result.email = localStorage.getItem('email');
                $result.country = localStorage.getItem('country');
                $result.city = localStorage.getItem('city');
                $result.social = [];
                $result.pic = localStorage.getItem('picId');
            var checked = $('.third').find('input:checked');

            for (var i = 0; i < checked.length; i++) {
                var id = $(checked[i]).attr('id');
                $result.social[i] = localStorage.getItem(id);
            }
            $('.wrapper').hide();
            $('.results').css({'display': 'block'});
            var $profile = $('<div class="profile"></div>');
            $('.results').append($profile);
            var $profileWrapper = $('<div class="profile-wrapper"></div>');

            $profile.append($profileWrapper);
            $profileWrapper.append($('<h1>' + $result.name + '</h1>'));
            $profileWrapper.append($('<p class="email">' + $result.email + '</p>'));
            $profileWrapper.append($('<p class="location">' + $result.city + ', ' + $result.country + '</p>'));

            for (var i = 0; i < $result.social.length; i++) {
                $profileWrapper.append($('<p class="social">' + '<span class="social-name">' + $(checked[i]).attr('id') + ': </span>' + $result.social[i] + '<p>'));
            }

            $profile.append($('<img src="img/' + $result.pic + '.jpg" class="pic">'));
            var $reset = $('<button class="reset">Пройти заново</button>');
            $('.results').append($reset);
            $reset.one('click', function () {
                console.log('reset');
                localStorage.clear();
                $profile.remove();
                $reset.remove();
                $('.results').hide();
                $('.wrapper').show();
                $('.next').html('Следующий >').removeClass('finish');
                $('input[type="text"]').val('');
                $('input[type="email"]').val('');
                $('input[type="checkbox"]').prop('checked', false);
                $('.fourth').removeClass('current-step');
                $('.first').addClass('current-step').show();
                $('.page').removeClass('passed-page').removeClass('current-page');
                $('.page:first-child').addClass('current-page');
            })
        };
    }

});
