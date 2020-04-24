$(window).load(function() {
  $(".before-after1").twentytwenty({
    before_label: 'Winter', // set 
    after_label: 'Summer',
  });
   $('.slick-elon').slick({
     draggable: false,
     /* dots: true,
     dotsClass: 'before__dots', */
  }); 
  $('.slick-slider').slick({
     prevArrow: $('.reviews__btn--prev'),
     nextArrow: $('.reviews__btn--next'),
  });
});