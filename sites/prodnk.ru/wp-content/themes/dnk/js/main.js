$(document).ready(function() {

    $(document).scroll(function(event) {
        if ($(document).scrollTop() > 130) {
            $('.header').addClass('stickyHeader');
            $('.main').addClass('stickyBody');
        } else {
            $('.main').removeClass('stickyBody');
            $('.header').removeClass('stickyHeader')
        }
    })
    console.log('Это то');
    $(".btn-down-price").click(function () {
        destination = $('#price').offset().top;
        $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1500);
        return false;
    });

    $('.menu-elm-link a').click(function(){
        if($('.menu').hasClass('menu--active-m')){
            $('.menu').removeClass('menu--active-m');
        }else{
            $('.menu').addClass('menu--active-m');
        }
    });

    // $('input[name=promo]').keyup(function() {
    //     var id = $(this).attr('datd-id'), d = $(this).val(), p = $(this).parent();
    //     $.post("http://prodnk.ru/post.php", {id:id, d:d},function(data){
    //         if($.trim(data) == 'Yes'){
    //             console.log(data);
    //             p.find('.order_form_d').hide();
    //             p.find('.order_form_p').show();
    //         }else{
    //             console.log(data);
    //             p.find('.order_form_p').hide();
    //             p.find('.order_form_d').show();
    //         }
    //     });
    // });    

    $('.promo_btn').click(function(event) {
        event.preventDefault();
        var id = $(this).attr('datd-id'), d, p = $(this).parent().parent();
        d = p.find('input[name=promo]').val();
        $.post("http://prodnk.ru/post.php", {id:id, d:d},function(data){
            if($.trim(data) == 'Yes'){
                console.log(data);
                p.find('.order_form_d').hide();
                p.find('.order_form_p').show();
            }else{
                console.log(data);
                p.find('.order_form_p').hide();
                p.find('.order_form_d').show();
            }
        });
    });

     $('.reviews__sliders').slick({
         infinite: true,
         slidesToShow: 1,
         slidesToScroll: 1,
         autoplay:true,
         nextArrow: '<a href="javascript:void(0);" class="arrow__next"></a>',
         prevArrow: '<a href="javascript:void(0);" class="arrow__prev"></a>'
     });     

     $('#slider5').slick({
         infinite: true,
         slidesToShow: 1,
         slidesToScroll: 1,
         autoplay:false,
         nextArrow: '<a href="javascript:void(0);" class="arrow__next1"></a>',
         prevArrow: '<a href="javascript:void(0);" class="arrow__prev1"></a>'
     });     

     $('#slider4').slick({
         infinite: true,
         slidesToShow: 1,
         slidesToScroll: 1,
         autoplay:false,
         nextArrow: '<a href="javascript:void(0);" class="arrow__next2"></a>',
         prevArrow: '<a href="javascript:void(0);" class="arrow__prev2"></a>'
     });     

     $('#slider3').slick({
         infinite: true,
         slidesToShow: 1,
         slidesToScroll: 1,
         autoplay:false,
         nextArrow: '<a href="javascript:void(0);" class="arrow__next3"></a>',
         prevArrow: '<a href="javascript:void(0);" class="arrow__prev3"></a>'
     });     

     $('#slider2').slick({
         infinite: true,
         slidesToShow: 1,
         slidesToScroll: 1,
         autoplay:false,
         nextArrow: '<a href="javascript:void(0);" class="arrow__next4"></a>',
         prevArrow: '<a href="javascript:void(0);" class="arrow__prev4"></a>'
     });
    
    $(".menu a").click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $('.menu').removeClass('menu--active-m');
        $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1500);
        return false;
    });

    $('.q_bl').click(function() {
        var id = $(this).attr('data-id');

        if($(this).hasClass('q_bl-active')){
        	$(this).removeClass('q_bl-active');
        	$('#'+id).removeClass('active-faq');
        }else{
        	$('.a_bl').removeClass('active-faq');
        	$('.q_bl').removeClass('q_bl-active');
        	$('#'+id).addClass('active-faq');
        	$(this).addClass('q_bl-active');
        }

    });

    $('.btn--demo1').click(function(){
        $('.bg-call1').fadeIn();
    });    
	
	$('.btn--demo2').click(function(){
        $('.bg-call2').fadeIn();
    });
	
	$('.phone .btn').click(function(){
        $('.bg-call').fadeIn();
    });    

    $('.btn--how').click(function(){
        $('.bg-consultation').fadeIn();
    });    

    $('.btn--package').click(function(){
        var id = $(this).attr('data-id');
        $('#'+id).fadeIn();
    });


    $('.close-bg').click(function(){
        $('.bg').fadeOut();
    });    

    $('.show_slider').click(function(){
        var id = $(this).attr('data-id');
        $('div.testslider').hide();
        $('#slider'+id).show();
    });

    $("form:not(.consultation-form-orders)").submit(function(){
        
		var dat, fm, valid_name, valid_phone;
        fm = $(this);
        dat = fm.serialize();
        valid_phone = fm.find('.validphone');
        if(valid_phone.val().length>3){
            $.post("http://prodnk.ru/mail.php", {dat:dat},function(data) {
                alert("Спасибо за заявку! Сотрудник компании свяжется с Вами в ближайшее время."); 
            });
        return false;
        }else{           
            if(valid_phone.val().length<3){
                //valid_phone.css("border","1px solid #EB1616");
                console.log('2');
            }
            return false; 
        }
    });    

    // $("form.consultation-form-orders").submit(function(){
    //     var dat, fm, valid_name, valid_phone;
    //     fm = $(this);
    //     dat = fm.serialize();
    //     valid_phone = fm.find('.validphone');
    //     if(valid_phone.val().length>3){
    //         $.post("http://prodnk.ru/mail.php", {dat:dat},function(data) {
    //             $('.order_form_title').text(''); 
    //             $('.order_form_title').text('Вы можете оплатить с помощью формы ниже!'); 
    //             $('.order_form').show();
    //             $('.order_form_h').hide();
    //         });
    //     return false;
    //     }else{           
    //         if(valid_phone.val().length<3){
    //             //valid_phone.css("border","1px solid #EB1616");
    //             console.log('2');
    //         }
    //         return false; 
    //     }
    // });

    $('.fancybox').fancybox();
});
$(document).mouseup(function (e) {
    var container = $(".bg");
    if (container.has(e.target).length === 0){
        container.fadeOut(600);
    }
});