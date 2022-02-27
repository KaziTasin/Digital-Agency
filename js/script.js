$("nav ul li .search").click(function(){
    $("nav .s-canvas").addClass("kum")
})
$("nav .s-canvas .spup").click(function(){
    $("nav .s-canvas").removeClass("kum")
})
AOS.init({
    once: true,
});
$("#banner .banner-main").slick({
    arrows:false,
    autoplay:false,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
})
new VenoBox({
    selector: '.my-video-links',
    spinner: 'wave',
    spinColor: '#00A4F2',
});
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

$("#image .image-slider").slick({
    slidesToShow: 5,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 300,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
})

$("#client .client-slider").slick({
    arrows: false,
    autoplay: true
})

$(window).scroll(function(){
    if($(window).scrollTop() > 300){
        $("nav").addClass("fix");
    }else{
        $("nav").removeClass("fix");
    }
    if($(window).scrollTop() > 300){
        $(".fix").slideDown();
    }else{
        $(".fix").slideUp();
    }
    if($(window).scrollTop() > 500){
        $(".up-button i").fadeIn();
    }else{
        $(".up-button i").fadeOut();
    }
})
$(".up-button i").click(function(){
    $("html,body").animate({
        scrollTop: 0
    })
})