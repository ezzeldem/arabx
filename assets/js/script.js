$(document).ready(function(){





// strat min-slider-intro
    $('.min-slider-intro').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        rtl:true,
        autoplaySpeed: 2000,
        dots:true,
        adaptiveHeight: true,
       
    });

// end min-slider-intro




// strat prodact-slider
$('.new-prodact-slider').slick({
    dots: false,
    infinite: false,
    autoplay: false,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    rtl:true,
    autoplaySpeed: 2000,
    dots:false,
    prevArrow: "<div class='circle-arrow devo-right'><img src='assets/img/right-arrow.svg' class='img-fluid'></div>",
    nextArrow:"<div class='circle-arrow devo-left'><img src='assets/img/right-arrow.svg' class='img-fluid'></div>",
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            nextArrow:false,
            prevArrow :false,
          }
        },
        {
          breakpoint: 772,
          settings: {
            infinite: true,
            autoplay: true,
            slidesToShow: 1,
            nextArrow:false,
            prevArrow :false,
          }
        }
      ]
    
});

// end prodact-slider


// start slider-comment

$('.slider-comment').slick({
    dots: false,
    autoplay: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    rtl:true,
    adaptiveHeight: true,
    autoplaySpeed: 2000,
    dots:false,
    prevArrow: "<div class='circle-arrow right-slider-comment'><img src='assets/img/right-slider-comment.svg' class='img-fluid'></div>",
    nextArrow:"<div class='circle-arrow  left-slider-comment'><img src='assets/img/left-slider-comment.svg' class='img-fluid'></div>",
    responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: true,
            slidesToShow: 1
          }
        },
        {
            breakpoint: 772,
            settings: {
              arrows: false,
              autoplay: true,
              slidesToShow: 1
            }
          }
      ]
    
});


// end slider-comment




$('.new-artical-sllider').slick({
    dots: false,
    autoplay: true,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    rtl:true,
    autoplaySpeed: 1500,
    dots:false,
    prevArrow: "<div class='circle-arrow devo-right'><img src='assets/img/right-arrow.svg' class='img-fluid'></div>",
    nextArrow:"<div class='circle-arrow devo-left' ><img src='assets/img/right-arrow.svg' class='img-fluid'></div>",
    responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: true,
            slidesToShow: 1
          }
        },
        {
            breakpoint: 772,
            settings: {
              arrows: false,
              autoplay: true,
              slidesToShow: 1
            }
          }
      ]
});



$('.slider-services').slick({
  autoplay: true,
  speed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  rtl:true,
  autoplaySpeed: 1500,
  responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          autoplay: true,
          autoplaySpeed: 800,

        }
      },
      {
        breakpoint: 772,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 800,
        }
      }
    ]
});







$(".banner-section").hover(function(){
    $(this).addClass("after-b");
});


$(".min-footer").hover(function(){
    $(this).addClass("before-b");
});








if($(window).width() <= 772){
    $('.has-li-chiled').click(function(){
    $('.sub-menu').toggleClass('po');

  })
};

// strat  side menu


$(".menu-icon2").click(function(){
    $('.nav-bar, .over-lay').addClass('open-m');
    $('body').addClass('over-o');

});


$('.exit-menu, .over-lay').click(function(){
    $('.nav-bar, .over-lay').removeClass('open-m');
    $('body').removeClass('over-o');
});

// end  side menu



AOS.init({disable: 'mobile'});
});