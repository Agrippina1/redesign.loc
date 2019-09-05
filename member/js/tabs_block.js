$(document).ready(function() {
    // $('#my_tabs').attr('role', 'tablist');
    // $('#my_tabs>li').attr({
    //     "role": "presentation",
    //     "aria-controls": "tab_info_" + $('#my_tabs>li').children('.bookmark').index()
    // });

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