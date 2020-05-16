$(document).ready(function() {
            
    // Check for click events on the navbar burger icon
        $(".navbar-burger").click(function() {
        
            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            $(".navbar-burger").toggleClass("is-active");
            $(".navbar-menu").toggleClass("is-active");
        
        });
  
        $('.sub-menu').click(function(){
        $('.sub').toggleClass('open');
         });
    });
  
    $('.review-slider').slick({
        dots: true,
        autoplay: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });


      $('.single-item').slick({
        autoplay: true,
        autoplaySpeed: 5000,
      });


      // $('.text-slide').slick({
      //   autoplay: true,
      //   autoplaySpeed: 4000
      // });

    //   $('.single-item').on('afterChange', function(event, slick, currentSlide){
    //     $('.slick-active h1').removeClass('hidden');
    //     $('.slick-active h1').addClass('animate__animated animate__slideInLeft');
    // });
    
    // $('.single-item').on('beforeChange', function(event, slick, currentSlide){
    //     $('.slick-active h1').removeClass('animate__animated animate__slideOutLeft');
    //     $('.slick-active h1').addClass('hidden');
    // });