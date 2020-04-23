$(window).load(function() {
  $(".before-after").twentytwenty({
    before_label: 'Без скинали', // set 
    after_label: 'Со скинали'
  });
  $('.before-slider').slick({
     draggable: false,
     dots: true,
     dotsClass: 'before__dots',
     prevArrow: $('.arrow-left'),
     nextArrow: $('.arrow-right'),
     touchMove: false,
     swipe: false
  });
  $('.slick-slider').slick({
     prevArrow: $('.reviews__btn--prev'),
     nextArrow: $('.reviews__btn--next'),
  });
  $('.menu-button').on('click', function(){
      $('.menu').toggleClass('menu_active');
  }); 
});