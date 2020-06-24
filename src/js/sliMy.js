$(Document).ready(function () {
  $(".slider-top-js").slick({
    // arrows: true,  
    dots: true,
    slidesToShow: 1,
    slideToscroll: 1,
    speed: 800,
    easing: "ease",
    cssEase: 'linear',
    nextArrow: $(".arrows-slider-top__arrow_next"),
    prevArrow: $(".arrows-slider-top__arrow_prev"), 
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          dots: false,

        
        },
      },
   
    ],

  });
});