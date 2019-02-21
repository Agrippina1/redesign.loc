// Фиксированный header
var StickyElement = function(node){
  var doc = $(document),
      fixed = false,
      anchor = node.find('.sticky-anchor'),
      content = node.find('.sticky-content');

  var onScroll = function(e){
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


// Форма регистрации

var link = document.querySelector(".input-user");
if (link != null) {
    var popup = document.querySelector(".registration-block");
    var overlay = document.querySelector(".modal-overlay");
    var close = popup.querySelector(".modal-content-close");
    link.addEventListener("click", function (event) {
        event.preventDefault();
        popup.classList.add("modal-content-show");
        overlay.classList.add("modal-overlay-show");
    });
    close.addEventListener("click", function (event) {
        event.preventDefault();
        popup.classList.remove("modal-content-show");
        overlay.classList.remove("modal-overlay-show");
    });
    window.addEventListener("keydown", function (event) {
        if (event.keyCode === 27) {
            if (popup.classList.contains("modal-content-show")) {
                popup.classList.remove("modal-content-show");
                overlay.classList.remove("modal-overlay-show");
            }
        }
    });
}


// Модальные окна и меню
$(document).ready(function() {
    var overlay = $('#overlay');            // подложка
    var open_modal = $('.open_modal');      // все ссылки oткрывaющие oкнa
    var close = $('.modal_close, #overlay');// чтo зaкрывaет мoдaльнoе oкнo
    var modal = $('.modal_div');            // скрытые мoдaльные oкнa

    close.click( function() {
        $(modal).css('display', 'none');
        overlay.fadeOut(0);
    });
    open_modal.click( function(event) {
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(0,
            function() {
                $(div).css('display', 'block').animate({opacity: 1, top: '50%'}, 200);
                $("html,body").animate({scrollTop: $("header").offset().top}, "slow");
            });
    });


});