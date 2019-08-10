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
        var div_id = $(this).attr('data-modal-id');
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


    //=== Chat ===
    var text_buffer = '';
    var text_count = 0;

    function randColor() {
        return '#' + Math.floor(Math.random()*16777215).toString(16)
    }
    function showCountChaters() {
        $('.number-user').text($('.nick-chatter').length);
    }
    $('.smile').click(function (e) {
        e.preventDefault();
        var smile = $(this).attr('smile');
        document.forms['form_say'].text.value = document.forms['form_say'].text.value + smile;
    });
    function scrollChatText() {
        $("html,body").animate({scrollTop: $("#text_end").offset().top}, 2000);
    }

    $('.nick-chatter, .chat-line>font>b').click(function (e) {
        e.preventDefault();
        document.forms['form_say'].text.value = $(this).text() + ', ' + document.forms['form_say'].text.value;
        document.forms['form_say'].text.focus();
        $('.modal_is_open').removeClass('modal_is_open');
        $(modal).css('display', 'none');
        overlay.fadeOut(300);
    });

    $('#new_message').click( function() {
        newTextInChat();
    });

    function showCountNewText(mode = false) {
        var mode_show_cout_info = 'none';
        if (mode) {
            mode_show_cout_info = 'block';
            text_count++;
            $('#new_text_count').text(text_count);
        }
        else {
            $('#new_text_count').text('0');
            mode_show_cout_info = 'none';
            text_buffer = '';
            text_count = 0;
        }
        $('#new_message').css('display', mode_show_cout_info);
    }

    function newTextInChat() {
        $("#text_in_chat").append(text_buffer + "<p class='chat-line' style='color: " + randColor() + "'>" + Date() + "</p>");
        showCountNewText(false);
        scrollChatText() ;
    }

    setInterval( function() {
        if ($('.number-user').text() === '') scrollChatText();
        if ((($(window).scrollTop() + $(window).height() - $('#text_end').offset().top ) + 300) > 0) newTextInChat();
        else {
            text_buffer = text_buffer + "<p class='chat-line' style='color: " + randColor() + "'>..... " + Date() + "</p>";
            showCountNewText(true);
        }
        // console.log('new:', text_count);
        showCountChaters();
    }, 15000);

    $("#form_say").submit(function (e) {
        e.preventDefault();

        text_buffer = text_buffer + "<p class='chat-line'><b>Наш текст:</b> " + $("#field-text").val() + "</p>";
        document.forms['form_say'].text.value = '';
        document.forms['form_say'].text.focus();
        // scrollChatText()
        newTextInChat();
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
