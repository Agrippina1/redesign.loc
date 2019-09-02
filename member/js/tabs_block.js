$(document).ready(function() {
    $('.bookmark').click(function (event) {
        var id = $(this).attr('id');
        $('.tabs_block_js').css('display', 'none');

        // $('.bookmarks-online-item').attr('tabindex', '-1');
        // $('.bookmarks-online-item > this').attr('ggg', '999');

        $('.bookmark').removeClass('active');
        $('.bookmark').attr('aria-selected', 'false');
        $('.bookmark').attr('aria-expanded', 'false');
        $('#'+id).addClass('active');
        $('#'+id).attr('aria-selected', 'true');
        $('#'+id).attr('aria-expanded', 'true');


        $('#tab_info_'+id).slideToggle();
    })
});