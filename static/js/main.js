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

      //  $(window).ready(function(){
      //   setTimeout(function(){ 
      //       $(".modal").addClass("is-active");
      //   }, 3000);
      
      // });
      
      $(".delete").click(function() {
        $("html").removeClass("is-clipped");
        $('.modal').removeClass("is-active");
      });


  });

