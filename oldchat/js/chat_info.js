function drop(name) {
    $('#'+name).slideToggle();
}
$(document).ready(function() {
    $('.chat_online_toggle').click(function () {
        $('.icon-disclose').toggle();
        $('.online-items').slideToggle();
    })
    $('.btn-admin-line').click(function () {
        $('.btn-admin-line').css('display', 'none');
        $('.main-chat-text').css('max-height', '99em');
        $('.main-chat-text').css('-webkit-line-clamp','99');

    })
});