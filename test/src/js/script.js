$(function () {
    /*var countries = require('../countries.json');
     var cities = require('../cities.json');
     */

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

    var $flag;

    $('.alert').hide();

    $('.next').on('click', function () {
        if ($('.current-step').hasClass('fours') == false) {
            checkResult();
            if ($flag) {
                if ($('.current-step').hasClass('third') == true) {
                    $('.next').addClass('finish').html('Завершить');
                }
                $('.current-step').hide().removeClass('current-step').next().show().addClass('current-step');
                $('.current-page').removeClass('current-page').addClass('passed-page').next().addClass('current-page');
            }
        } else {
            if ($flag) {
                showResult();
            }
        }
    });

    $('.prev').on('click', function () {
        if ($('.current-step').hasClass('first') == false) {
            if ($('.current-step').hasClass('fours')) {
                $('.next').removeClass('finish').html('Следующий >');
            }
            $('.current-step').hide().removeClass('current-step').prev().show().addClass('current-step');
            $('.current-page').removeClass('current-page').prev().removeClass('passed-page').addClass('current-page');
        }
    });

    $('.page').on('click', function (e) {
        var $target = e.target;

        switch ($($target).html()) {
            case '2':
                if ($($target).prev().hasClass('passed-page')) {
                    $('.step').hide();
                    $('.second').show();
                } else return;
                break;
            case '3':
                if ($($target).prev().hasClass('passed-page')) {
                    $('.step').hide();
                    $('.third').show();
                } else return;
                break;
            case '4':
                if ($($target).prev().hasClass('passed-page')) {
                    $('.step').hide();
                    $('.fourth').show();
                } else return;
                break;
            default:
                $('.step').hide();
                $('.first').show();

        }
    });

    function showResult() {
        alert('result');
    }

    function checkResult() {
        $flag = false;
        if ($('.current-step').hasClass('first')) {

            var $name = $('.name').val();
            nameCheck($name);

            var $email = $('.email').val();
            emailCheck($email);

            localStorage.setItem('name', $name);
            localStorage.setItem('email', $email);

            selectLocation();

        } else if ($('.current-step').hasClass('second')) {



            /*localStorage.setItem('country', country);
             localStorage.setItem('city', city);*/

            $flag = true;

        } else if ($('.current-step').hasClass('third')) {

            $flag = true;

        } else if ($('.current-step').hasClass('second')) {

            $flag = true;

        }
    }

    function nameCheck(name) {
        if (name == '') {
            $('.name').css({'border': '1px solid #ff0000'});
            $('.alert-name').show();
            $flag = false;
        } else {
            $('.name').css({'border': '0'});
            $('.alert-name').hide();
            return;
        }
    };

    function emailCheck(mail) {
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
                return;
            } else {
                $('.email').css({'border': '1px solid #ff0000'});
                $('.alert-email-wr').show();
                $($('.email')).val('');
                $flag = false;
            }
        }
    };

    //*******
/*    function selectLocation() {
        for (var key in countries) {
            if (countries.hasOwnProperty(key)) {
                var option = $('<option></option>');
                $(option).val(key);
                $(option).html(countries[key]);
                $('#country').append(option);
            }
        }
        ;

        $('#country').change(function () {
            var selected = this.options[this.selectedIndex];
            var country = $(selected).html();
            var selectedCountry = $(selected).val();

            item = $('#city');
            console.log($(item).children(), $(item).children().length);
            console.log($(item).last('option'));

            while (item.children().length > 2) {
             $(item).removeData($(item).last());
             }

            /!*while (item.childNodes.length > 2) {
             item.removeChild(item.lastChild);
             }*!/

            for (var key in cities) {
                if (cities.hasOwnProperty(key)) {
                    if (cities[key].country == selectedCountry) {
                        var option = $('<option></option>');
                        $(option).val(key);
                        $(option).html(cities[key].name);
                        $('#city').append(option);
                    }
                }
            }
        });

        document.getElementById("city").onchange = function () {
            var selected = this.options[this.selectedIndex];
            var city = $(selected).html();
            var selectedCity = $(selected).val();
        };
    };*/
function selectLocation() {
    for (var key in countries) {
        if (countries.hasOwnProperty(key)){
            var option = document.createElement('option');
            option.value = key;
            option.innerHTML = countries[key];
            document.getElementById("country").appendChild(option);
        }}

    document.getElementById("country").onchange = function() {
        var select = this;
        selectedCountry = select.options[select.selectedIndex].value;
        item = document.getElementById("city");

        while (item.childNodes.length > 2) {
            item.removeChild(item.lastChild);
        }
        for (var key  in cities) {
            if (cities.hasOwnProperty(key)) {
                if (cities[key].country == selectedCountry) {
                    var option = document.createElement('option');
                    option.value = key;
                    option.innerHTML = cities[key].name;
                    document.getElementsByName('city')[0].appendChild(option);
                }
            }
        }
    };
    document.getElementById("city").onchange = function(){
        var select = this;
        selectedCity = select.options[select.selectedIndex].value;
    };
};
    //*********

});
