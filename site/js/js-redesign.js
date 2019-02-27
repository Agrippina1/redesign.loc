// Фиксированный header
var StickyElement = function(node){
  var doc = $(document),
      fixed = false,
      anchor = node.find('.sticky-anchor'),
      content = node.find('.sticky-content');

  var onScroll = function(){
    var docTop = doc.scrollTop(),
        anchorTop = anchor.offset().top;

    // console.log('scroll', docTop, anchorTop);
    if(docTop > anchorTop){
      if(!fixed){
        anchor.height(content.outerHeight());
        content.addClass('fixed');
        fixed = true;
      }
    }  else   {
      if(fixed){
        anchor.height(0);
        content.removeClass('fixed');
        fixed = false;
      }
    }
  };

  $(window).on('scroll', onScroll);
};
var demo = new StickyElement($('#sticky'));

// Модальные окна и меню
$(document).ready(function() {
    var overlay = $('#overlay');            // подложка
    var open_modal = $('.modal_open');      // все ссылки oткрывaющие oкнa
    var close = $('.modal_close, #overlay');// чтo зaкрывaет мoдaльнoе oкнo
    var modal = $('.modal_div');            // скрытые мoдaльные oкнa

    close.click( function() {
        $('.modal_is_open').removeClass('modal_is_open');
        $(modal).css('display', 'none');
        overlay.fadeOut(0);
    });
    open_modal.click( function(event) {
        event.preventDefault();
        var div = $(this).attr('href');
        $(modal).css('display', 'none');
console.log(div);
        if (!$(div).hasClass('modal_is_open')) {
            overlay.fadeIn(0);
            $('.modal_is_open').removeClass('modal_is_open');
            $(modal).css('display', 'none');
            $(div).css('display', 'block').animate({opacity: 1}, 200);
        } else overlay.fadeOut(0);

        $(div).toggleClass('modal_is_open');
        $("html,body").animate({scrollTop: $("header").offset().top}, "slow");
    });
});