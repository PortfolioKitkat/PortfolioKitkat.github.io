// Plug swipebox
// $(document).ready(function() {
// 	$( '.swipebox' ).swipebox();
// });

// Open video
(function(){
bf90Popup=function(){
    var bf90win=window.open(arguments[0], arguments[1], "width=" + arguments[2] + ",height=" + arguments[3] + ",top=" + ((window.screen.height-arguments[3])/2) + ",left=" + ((window.screen.width-arguments[2])/2) + ",scrollbars=yes,location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no");
    bf90win.focus();
    return false;
}
})();

// Scroll
$(document).ready(function(){
    $('a[href^="#"].scroll, a[href^="."].scroll').click( function(){ // если в href начинается с # или ., то ловим клик
	    var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
});



function open_all() {
    var $control = $('.open_all');

    $control.on('click', function () {
        var $all_block = $(this).closest('.lesson_wrap').find('.block_hide');
        $(this).toggleClass('open');

        if ($(this).hasClass('open')) {
            $(this).text('Свернуть все');
            $all_block.removeClass('open').addClass('open').slideDown(500);

        }
        else {
            $(this).text('Открыть все');

            $all_block.removeClass('open').slideUp(500);


        }

    })
}




// 

