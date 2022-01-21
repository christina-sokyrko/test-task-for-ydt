$(function(){
  $('.multiple-items').slick({
    infinite: true,
    dots: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
      settings: {
        slidesToShow: 2
      }
      }
    ]   
  })
  $('.header-burger').click(function(event) {
    $('.header-burger, .header-menu').toggleClass('active');
   });
});
