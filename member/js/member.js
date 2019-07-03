$(document).ready(function() {
    $('.bookmark').click(function (event) {
        var id = $(this).attr('id');
        $('.block-dr').css('display', 'none');

        $('.bookmark').removeClass('active');
        $('#'+id).addClass('active');

        $('#dr_'+id).slideToggle();
    })
});