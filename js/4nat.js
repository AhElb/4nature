$(document).ready(function(){
var owl = $('.owl-carousel');

owl.owlCarousel({
    items:1,
    loop:true,
    margin:1,
     animateOut: 'fadeOut',

    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false
});

$("#open").click(function(){
  $(".links").toggleClass("apper");
    $("#s2").toggleClass("span1");
      $("#s3").toggleClass("span2");
            $("#s1").toggleClass("span3");






  });




		var scroll_pos = 0;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 70) {
                  
                                          $("nav").addClass('nav-clor');
                                          $("nav").removeClass('nav-dis');



                } else {
                    $("nav").addClass('nav-dis');
                    $("nav").removeClass('nav-clor');



                }
            });


 $('.slider-single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    adaptiveHeight: true,
    infinite: false,
    useTransform: true,
    speed: 400,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
 });

 $('.slider-nav')
    .on('init', function(event, slick) {
        $('.slider-nav .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        focusOnSelect: false,
        infinite: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
            }
        }, {
            breakpoint: 640,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        }, {
            breakpoint: 420,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
        }
        }]
    });

 $('.slider-single').on('afterChange', function(event, slick, currentSlide) {
    $('.slider-nav').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.slider-nav .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');
 });

 $('.slider-nav').on('click', '.slick-slide', function(event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');

    $('.slider-single').slick('slickGoTo', goToSingleSlide);
 });








});