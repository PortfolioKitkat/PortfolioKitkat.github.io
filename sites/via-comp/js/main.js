$(function () {
    $('input[name="number"]').inputmask("+7(999)999-99-99");
    $('input[name="email"]').inputmask("email");
    $('.menu-upper').scrollToFixed( {
        top: 100,
        limit: $('.menu-upper').offset().bottom
    });
    /*$('.menu-mobile').scrollToFixed( {
        top: 100,
        limit: $('.menu-mobile').offset().bottom
    });*/
    //$(".menu-mobile").next().remove();

    var w = $(".outer").width();
    if (w <= 640) {
        var top = parseInt($(window).scrollTop());

        if (top > 217) {
            if (!$(".menu-mobile").hasClass("scroll-to-fixed-fixed")) {
                $(".menu-mobile").addClass("scroll-to-fixed-fixed");
                console.log(top);
            }
        } else {
            $(".menu-mobile").removeClass("scroll-to-fixed-fixed");
        }
    }
    $(window).scroll(function () {
        var w = $(".outer").width();
        if (w <= 640) {
            var top = parseInt($(this).scrollTop());
           
            if (top > 217) {
                if (!$(".menu-mobile").hasClass("scroll-to-fixed-fixed")) {
                    $(".menu-mobile").addClass("scroll-to-fixed-fixed");
                    console.log(top);
                }
            } else {
                $(".menu-mobile").removeClass("scroll-to-fixed-fixed");
            }
        }
    });
    $(".fancybox").fancybox({
        openEffect: 'fade',
        closeEffect: 'fade',
        nextEffect: 'fade',
        prevEffect: 'fade',
        'padding':'0',
        helpers: {
            overlay: {
                locked: false
            }
        },
        beforeShow: function () {
            $("body").css({"overflow-y": "hidden"}), $("html").addClass("fancybox-margin")
        },
        afterClose: function () {
            $("body").css({"overflow-y": "visible"}), $("html").removeClass("fancybox-margin")
        }
    });
    $('.choose-input').on("mouseover", function() {
        $(this).parents('.choose-zone').find('.choose-zone-arrow').css({'background-color' : '#fff', 'border' : '1px solid #0097a9', 'width' : '36px', 'height' : '32px'});
        $(this).parents('.choose-zone').find('.choose-zone-arrow span').css({'border-left' : '6px solid transparent', 'border-right' : '6px solid transparent', 'border-top' : '11px solid #0097a9'});
    }).on("mouseout", function(){
        $(this).parents('.choose-zone').find('.choose-zone-arrow').css({'background-color' : '#0097a9', 'border' : 'none', 'width' : '38px', 'height' : '34px'});
        $(this).parents('.choose-zone').find('.choose-zone-arrow span').css({'border-left' : '6px solid transparent', 'border-right' : '6px solid transparent', 'border-top' : '11px solid #fff'});
    });
    $('.low-res-nav').click(function(){
        $('#razdel-nav').slideToggle();
    });
    $('.low-res-nav-2').click(function(){
        $('#razdel-nav-2').slideToggle();
    });
    $('.scrollingto').click( function(){
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            
            var corrrection = 0;
            if ($(".menu-mobile:visible").length > 0) {
                $("#razdel-nav-2, #razdel-nav").hide();
                var h = $("header:visible").height();
                if (h > 42) {
                    corrrection = h + 42 + 20;
                }
                else {
                    corrrection = 42;
                }          
            } else {
                corrrection = $("header:visible").height();
                var m = $("header:visible .menu").height();
                corrrection = corrrection - m;
            }
           
            var top = $(scroll_el).offset().top - corrrection;
            $('html,body').animate({ scrollTop: top }, 500);
        }
        return false;
    });

    $(window).load(function(){
        if($(this).width() > 640) {
            $(".choose-zone").click(function () {
                if ($(this).hasClass("opened")) {
                    $(this).removeClass("opened");
                    $(this).find(".choose-zone-list").slideToggle()
                }else {
                    var e = $(".choose-zone.opened");
                    e.find(".choose-zone-list").slideToggle();
                    e.removeClass("opened");
                    $(this).addClass("opened");
                    $(this).find(".choose-zone-list").slideToggle()
                }
            });
            $('.trig').trigger('click');
        } else{
            $(".choose-zone").click(function () {
                if ($(this).hasClass("opened")) {
                    $(this).removeClass("opened");
                    $(this).find(".choose-zone-list").slideToggle()
                }else {
                    var e = $(".choose-zone.opened");
                    e.find(".choose-zone-list").slideToggle();
                    e.removeClass("opened");
                    $(this).addClass("opened");
                    $(this).find(".choose-zone-list").slideToggle()
                }
            });
            $('.trig').trigger('click');
        }
    });

    $(".stomach-zone-2").click(function () {
        $(".zone-img").removeClass("opened");
        $(".stomach-zone").addClass("opened");
     });
    $(".back-zone-2").click(function () {
        $(".zone-img").removeClass("opened");
        $(".back-zone").addClass("opened");
     });
    $(".hips-zone-2").click(function () {
        $(".zone-img").removeClass("opened");
        $(".hips-zone").addClass("opened");
     });
    $(".withers-zone-2").click(function () {
        $(".zone-img").removeClass("opened");
        $(".withers-zone").addClass("opened");
     });
    $(".lower-leg-zone-2").click(function () {
        $(".zone-img").removeClass("opened");
        $(".lower-leg-zone").addClass("opened");
     });
    $(".breeches-zone-2").click(function () {
        $(".zone-img").removeClass("opened");
        $(".breeches-zone").addClass("opened");
     });
    $(".inside-hip-zone-2").click(function () {
        $(".zone-img").removeClass("opened");
        $(".inside-hip-zone").addClass("opened");
     });
    $(".knee-zone-2").click(function () {
        $(".zone-img").removeClass("opened");
        $(".knee-zone").addClass("opened");
     });
    $(".chin-zone-2").click(function () {
        $(".zone-img").removeClass("opened");
        $(".chin-zone").addClass("opened");
     });

    $('.write-to-doctor-a').click(function() {
        $('#doctor').val($('#doctor-name').attr('data-doctor'));
    });
    $('.write-to-doctor-a-2').click(function() {
        $('#doctor').val($('#doctor-name-2').attr('data-doctor'));
    });

    $(".jqzoom").jqueryzoom({
        xzoom: 200, //ширина окна просмотра зума (200 по умолчанию)
        yzoom: 200, //высота окна просмотра зума (200 по умолчанию)
        offset: -127 //отступ от картинки (10 по умолчанию)
    });
    $('.fifth-watch-rest').click(function(){
        $(this).css({'display' : 'none'});
        $(this).parents('.fifth-item').find('.fifth-item-undername.hidden').slideDown();
        $(this).parents('.fifth-item').find('.fifth-close-rest').show();
    });
    $('.fifth-close-rest').click(function(){
        $(this).css({ 'display': 'none' });
        $(this).parents('.fifth-item').find('.fifth-item-undername.hidden').slideUp();
        $(this).parents('.fifth-item').find('.fifth-watch-rest').show();
    });
    $.validator.addMethod('regexp', function(value, element, regexp) {
        var re = new RegExp(regexp);
        return this.optional(element) || re.test(value);
    }, "Некорректно");

    $('.sixth-slider').slick({
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>',
        adaptiveHeight: true,
        slidesToScroll: 1
    });

    $('.ninth-slider').slick({
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>',
        adaptiveHeight: true,
        slidesToScroll: 1
    });

    $('.watch-other-reviews').click(function(){
        $(this).css({'display' : 'none'});
        $('.close-other-reviews').css({'display' : 'block'});
        $(this).parents('.sixth-reviews').find('.sixth-review.hidden').slideToggle();
    });
    $('.close-other-reviews').click(function(){
        $(this).css({'display' : 'none'});
        $('.watch-other-reviews').css({'display' : 'block'});
        $(this).parents('.sixth-reviews').find('.sixth-review.hidden').slideToggle();
    });
    var clock;
    clock = $('.your-clock').FlipClock({
        clockFace: 'DailyCounter', //вид счетчика (с количеством дней)
        autoStart: false, //Отключаем автозапуск
        countdown: true	, //Отсчет назад
        language:'ru-ru', //Локаль языка
        callbacks: { //Действие после окончания отсчета
            stop: function() {
                clock.setTime(6*24*60*60);
                clock.start();
            }
        }
    });


    if (diff >= 0 ) {
        clock.setTime(diff); //Устанавливаем нужное время в секундах
        clock.setCountdown(true); //Устанавливаем отсчет назад
        clock.start(); //Запускаем отсчет
    } else {
        clock.stop();
    }
    $('.form').each(function () {
        $(this).validate({
            debug: false,
            onfocusout: true,
            onKeyUp: true,
            rules: {
                name: {
                    required: true,
                    minlength: 2,
                    regexp: /^[А-ЯЁа-яё\s]*$/
                },
                message: {
                    required: true
                },
                number: {
                    required: true,
                    regexp: /^\+\d{1}\(\d{3}\)\d{3}-\d{2}-\d{2}$/
                }
            },
            messages: {
                name: {
                    required: "Введите имя",
                    minlength: $.validator.format( "Не меньше {0} символов" ),
                    regexp: "Только кириллица"
                },
                message: {
                    required: "Введите сообщение"
                },
                number: {
                    required: "Введите телефон",
                    regexp: "Некорректно"
                }
            },
            wrapper: "div",
            errorPlacement: function(error, element) {
                if(element.siblings('.errors_block').length>0){
                    element.siblings('.errors_block').html(error[0].textContent);
                }else{
                    element.after('<span class="errors_block">'+error[0].textContent+'</span>');
                }
            },
            success: function(element) {
                if(element.siblings('.errors_block').length>0){
                    element.siblings('.errors_block').remove();
                }
            }
        });
    });
    $('#fourth-form').validate({
        debug: false,
        onfocusout: true,
        onKeyUp: true,
        rules: {
            name: {
                required: true,
                minlength: 2,
                regexp: /^[А-ЯЁа-яё\s]*$/
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Введите имя",
                minlength: $.validator.format( "Не меньше {0} символов" ),
                regexp: "Только кириллица"
            },
            email: {
                required: "Введите email"
            }
        },
        wrapper: "div",
        errorPlacement: function(error, element) {
            if(element.siblings('.errors_block').length>0){
                element.siblings('.errors_block').html(error[0].textContent);
            }else{
                element.after('<span class="errors_block">'+error[0].textContent+'</span>');
            }
        },
        success: function(element) {
            if(element.siblings('.errors_block').length>0){
                element.siblings('.errors_block').remove();
            }
        }
    });

});
var center = [55.78007314930288,37.61298195239255];
if(window.innerWidth <= 640){
    center = [55.77957733752823,37.61152283068846];
} else {
    center = [55.78007314930288,37.61298195239255];
}
var myMap;
ymaps.ready(init);
function init () {
    myMap = new ymaps.Map('map', {
        center:center,
        zoom:17
    });
    var zoomControl = new ymaps.control.ZoomControl({
        options: {
            size: "small"
        }
    });
    myMap.controls.add(zoomControl);
    myMap.behaviors.disable('scrollZoom');
    var trafficControl = new ymaps.control.TrafficControl();
    myMap.controls
        .add(trafficControl);

    myMap.geoObjects.add(new ymaps.Placemark([55.77957733752823,37.611501373016324], {

    }, {
        iconLayout: ymaps.templateLayoutFactory.createClass('<div class="ya_map_mark"></div>')
    }));
}
