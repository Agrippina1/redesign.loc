// main-menu

var navMain = document.querySelector('.main-nav-wrap');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

// Меню user

var navUser = document.querySelector('.nav-user-wrap');
var navUserToggle = document.querySelector('.nav-user__toggle');

navUser.classList.remove('nav-user--nojs');

navUserToggle.addEventListener('click', function() {
  if (navUser.classList.contains('nav-user--closed')) {
    navUser.classList.remove('nav-user--closed');
    navUser.classList.add('nav-user--opened');
  } else {
    navUser.classList.add('nav-user--closed');
    navUser.classList.remove('nav-user--opened');
  }
});


// Форма регистрации

var link = document.querySelector(".input-user__toggle");
var popup = document.querySelector(".registration-block");
var overlay = document.querySelector(".modal-overlay");
var close = popup.querySelector(".modal-content-close");
var storage = localStorage.getItem("login");
  link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    overlay.classList.add("modal-overlay-show");
  });
  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    overlay.classList.remove("modal-overlay-show");
  });
 window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
      overlay.classList.remove("modal-overlay-show");
    }
  }
});

// Фиксированный header

var StickyElement = function(node){
  var doc = $(document),
      fixed = false,
      anchor = node.find('.sticky-anchor'),
      content = node.find('.sticky-content');

  var onScroll = function(e){
    var docTop = doc.scrollTop(),
        anchorTop = anchor.offset().top;

    console.log('scroll', docTop, anchorTop);
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
