$(function(){
  $('.multiple-items').slick({
    infinite: true,
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
     
  })
  $('.header-burger').click(function(event) {
    $('.header-burger, .header-menu').toggleClass('active');
   });
   $('.language-button').click(function(event) {
    $('.language-button, .language-list').toggleClass('active');
   }); 
});
