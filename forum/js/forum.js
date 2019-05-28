function drop(name) {
    $('#'+name).slideToggle();
}
$(document).ready(function() {
    $('.forum_topic_toggle').click(function (event) {
        var id = $(this).attr('id');
        $('#'+id+' > .icon-disclose').toggle();
        $('#disclose_'+id).slideToggle();
    })
});