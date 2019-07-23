// Модальные окна и меню
$(document).ready(function() {
    var overlay = $('#overlay');            // подложка
    var open_modal = $('.modal_open');      // все ссылки oткрывaющие oкнa
    var close = $('.modal_close, #overlay');// чтo зaкрывaет мoдaльнoе oкнo
    var modal = $('.modal_div');            // скрытые мoдaльные oкнa

    close.click( function() {
        $('.modal_is_open').removeClass('modal_is_open');
        $(modal).css('display', 'none');
        overlay.fadeOut(300);
    });
    open_modal.click( function(event) {
        event.preventDefault();
        var div_id = $(this).attr('href');
        $(modal).css('display', 'none');

        if (!$(div_id).hasClass('modal_is_open')) {
            overlay.fadeIn(300);
            $('.modal_is_open').removeClass('modal_is_open');
            $(modal).css('display', 'none');
            $(div_id).css('display', 'block').animate({opacity: 1}, 300);
        } else overlay.fadeOut(300);

        $(div_id).toggleClass('modal_is_open');
        // $("html,body").animate({scrollTop: $("#say_footer").offset().top}, "slow");
    });

    setInterval(function() {
        $("#text_in_chat").append("<p class='chat-line'>" + Date() + "</p>");
        $("html,body").animate({scrollTop: $("#text_end").offset().top}, "slow");
    }, 5000);

});

function sayToAll() {
    $("#text_in_chat").append("<p class='chat-line'><b>Наш текст:</b> " + $("#field-text").val() + "</p>");
    document.forms['chat_say'].text.value = '';
    document.forms['chat_say'].text.focus();
    $("html,body").animate({scrollTop: $("#text_end").offset().top}, "slow");
}