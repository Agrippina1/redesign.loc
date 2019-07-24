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

    function scrollChatText() {
        $("html,body").animate({scrollTop: $("#text_end").offset().top}, "slow");
    }
    $('.nick-chatter, .chat-line>font>b').click(function (e) {
        e.preventDefault();
        document.forms['form_say'].text.value = $(this).text() + ', ' + document.forms['form_say'].text.value;
        document.forms['form_say'].text.focus();
        $('.modal_is_open').removeClass('modal_is_open');
        $(modal).css('display', 'none');
        overlay.fadeOut(300);
    })

    setInterval(function() {
        $("#text_in_chat").append("<p class='chat-line'>" + Date() + "</p>");
        scrollChatText();
    }, 5000);

    $("#form_say").submit(function (e) {
        e.preventDefault();

        $("#text_in_chat").append("<p class='chat-line'><b>Наш текст:</b> " + $("#field-text").val() + "</p>");
        document.forms['form_say'].text.value = '';
        document.forms['form_say'].text.focus();
        scrollChatText()

        // var form_data = $(this).serialize(); // Собираем все данные из формы
        // $.ajax({
        //     type: "POST", // Метод отправки
        //     url: "", // Путь до php
        //     data: form_data,
        //     success: function () {
        //         // Код в этом блоке выполняется при успешной отправке сообщения
        //     }
        // });
    });
});
