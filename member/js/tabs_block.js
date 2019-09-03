$(document).ready(function() {
    $('#my_tabs>li>.bookmark').attr({
        "aria-selected": false,
        "aria-expanded": false
    });

    $('.bookmark').click(function (event) {
        var id = $(this).attr('id');
        $('.tabs_block_js').css('display', 'none');

        $('.bookmark').removeClass('active').attr({
            "aria-selected": false,
            "aria-expanded": false
        });
        $('#'+id).addClass('active').attr({
            "aria-selected": true,
            "aria-expanded": true,
        });

        $('#tab_info_'+id).slideToggle();
    })
});