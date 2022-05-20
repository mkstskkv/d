
$(function () {
    //Свипер reviews
    var reviews_swiper = new Swiper('.reviews-swiper', {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true
    });
    //Свипер choise
    var choise_swiper = new Swiper('.choise-swiper', {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true
    });
    //Свипер choise-mob
    var choise_mob_swiper = new Swiper('.choise-mob-swiper', {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true
    });
    /*Читать далее*/
    // $('.read-next').click(function () {
    //     if($(this).hasClass('.read-next-noactive') == true){
    //         $(this).html('Читать далее<img src="./app/img/arrow-bottom.png" alt="">');
    //         $('.hide-content').toggle('.hide');
    //         $(this).removeClass('.read-next-noactive');
    //     }
    //     else {
    //         $(this).html('Свернуть<img src="./app/img/arrow-top.png" alt="">');
    //         $('.hide-content').toggle('.hide');
    //         $(this).addClass('.read-next-noactive');
    //     }
    //
    // });
    //
    //
    /*Читать далее*/
    $('.open-content').click(function () {

        $(this).hide();

        $('.hide-content').slideDown(300);

    });
    $('.close-content').click(function () {

        $('.hide-content').slideUp(300);
        $('.open-content').show();
    });


    /*Читать далее*/
    // $('.read-next').click(function () {
    //     if($('.read-next img').attr('src') == "./app/img/arrow-bottom.png"){
    //         $(this).html('Свернуть<img src="./app/img/arrow-top.png" alt="">');
    //         $('.hide-content').toggle('.hide');
    //     }
    //     else {
    //         $(this).html('Читать далее<img src="./app/img/arrow-bottom.png" alt="">');
    //         $('.hide-content').toggle('.hide');
    //     }
    //
    // });
    /*Переключатель услуг*/
    $('.services-left a').click(function () {
        $('.services-left a').removeClass('active');
        $(this).addClass('active');

        $('.services-right').addClass('hide');// добавляем класс всем правым частям
        if ($(this).data('id') == 'city') {
            $('.services-right').fadeOut(0);
            var id = $(this).data('id');
            $('#' + id).fadeIn(0);
        }
        if ($(this).data('id') == 'always') {
            $('.services-right').fadeOut(0);
            var id = $(this).data('id');
            $('#' + id).fadeIn(0);
        }
        if ($(this).data('id') == 'airport') {
            $('.services-right').fadeOut(0);
            var id = $(this).data('id');
            $('#' + id).fadeIn(0);
        }
        if ($(this).data('id') == 'othercity') {
            $('.services-right').fadeOut(0);
            var id = $(this).data('id');
            $('#' + id).fadeIn(0);
        }
    });
    /*Переключатель услуг мобильный*/
    $('.services-left a').click(function () {
        $('.services-left a').removeClass('active');
        $(this).addClass('active');

        $('.services-right').addClass('hide');// добавляем класс всем правым частям
        if ($(this).data('id') == 'city-mob') {
            $('.services-right').fadeOut(0);
            var id = $(this).data('id');
            $('#' + id).fadeIn(0);
        }
        if ($(this).data('id') == 'always-mob') {
            $('.services-right').fadeOut(0);
            var id = $(this).data('id');
            $('#' + id).fadeIn(0);
        }
        if ($(this).data('id') == 'airport-mob') {
            $('.services-right').fadeOut(0);
            var id = $(this).data('id');
            $('#' + id).fadeIn(0);
        }
        if ($(this).data('id') == 'othercity-mob') {
            $('.services-right').fadeOut(0);
            var id = $(this).data('id');
            $('#' + id).fadeIn(0);
        }
    });
    /*Стрелка наверх*/
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#toTop').fadeIn();

        } else {

            $('#toTop').fadeOut();
        }
    });

    $('#toTop').click(function () {
        $('body,html').animate({scrollTop: 0}, 800);
    });
    /*Переключатель машин*/
    $('.choise-tabs li').click(function () {
        $('.choise-tabs li').removeClass('tab-active');
        $(this).addClass('tab-active');

        $('.choise-options').addClass('hide');// добавляем класс всем правым частям
        if ($(this).data('mark') == 'bmw') {
            $('.choise-options').fadeOut(0);
            var id = $(this).data('mark');
            $('#' + id).fadeIn(0);
            choise_swiper.slideTo(1);
        }
        if ($(this).data('mark') == 'mercedes') {
            $('.choise-options').fadeOut(0);
            var id = $(this).data('mark');
            $('#' + id).fadeIn(0);
            choise_swiper.slideTo(2);
        }
        if ($(this).data('mark') == 'maybach') {
            $('.choise-options').fadeOut(0);
            var id = $(this).data('mark');
            $('#' + id).fadeIn(0);
            choise_swiper.slideTo(3);
        }
    });
    /*Переключатель машин мобильный*/
    $('.choise-mob-tabs li').click(function () {
        $('.choise-mob-tabs li').removeClass('tab-active');
        $(this).addClass('tab-active');

        $('.choise-options').addClass('hide');// добавляем класс всем правым частям
        if ($(this).data('mark') == 'bmw-mob') {
            $('.choise-options').fadeOut(0);
            var id = $(this).data('mark');
            $('#' + id).fadeIn(0);
            choise_mob_swiper.slideTo(1);
        }
        if ($(this).data('mark') == 'mercedes-mob') {
            $('.choise-options').fadeOut(0);
            var id = $(this).data('mark');
            $('#' + id).fadeIn(0);
            choise_mob_swiper.slideTo(2);
        }
        if ($(this).data('mark') == 'maybach-mob') {
            $('.choise-options').fadeOut(0);
            var id = $(this).data('mark');
            $('#' + id).fadeIn(0);
            choise_mob_swiper.slideTo(3);
        }
    });
    /*Burger*/
    $('.burger').click(function () {
        $('body').toggleClass('hide-scroll-body');
        $(this).toggleClass('burger-active');
        $('.dd-menu').slideToggle();
    });
    //Magnific Popup
    $('.open-link-popup').magnificPopup({
        type: 'inline'
    });
    //Инициализация календаря
    $(".datepicker").datepicker({
        showOtherMonths: true,
        selectOtherMonths: true
    });
    /*OTHER PAGES*/
    //Свипер card
    var card_swiper = new Swiper('.card-swiper', {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true
    });
});