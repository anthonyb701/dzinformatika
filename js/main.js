$(window).load(function() {
  $(".before-after1").twentytwenty({
    /* before_label: 'Winter', // set 
    after_label: 'Summer' */
  });
  /* $('.before-slider').slick({
     draggable: false,
     dots: true,
     dotsClass: 'before__dots',
     prevArrow: $('.arrow-left'),
     nextArrow: $('.arrow-right'),
     touchMove: false,
     swipe: false
  }); */
  $('.slick-slider').slick({
     prevArrow: $('.reviews__btn--prev'),
     nextArrow: $('.reviews__btn--next'),
  });
});