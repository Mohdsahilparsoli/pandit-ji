var swiper = new Swiper(".homeslider", {
    pagination: {
      el: ".swiper-pagination",
    },
  });

  var swiper = new Swiper(".gallerySlider", {
    slidesPerView: 1,
    spaceBetween: 35,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1499: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
      },
  });



  /* sahil jquery */
  $(document).ready(function(){
    $(".alertme").click(function(){       
      $(".alert").toggle("slow");
    })
})


$(document).ready(function(){
  $(".showdata").click(function(){       
    $(".showme").toggle("slow");
  })
})









  var swiper = new Swiper(".gallerySlider2", {
    slidesPerView: 1,
    spaceBetween: 35,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1499: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
      },
  });

  
  var swiper = new Swiper(".testimonial", {
    slidesPerView: 1,
    spaceBetween: 35,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        100: {
          slidesPerView:1,
         
        },
        768: {
          slidesPerView: 3,
          
        },
        1024: {
          slidesPerView: 3,
          
        },
        1499: {
            slidesPerView: 3,
            
          },
      },
  });



  $('.login-user').on('click',function(){
    $(".custom-header-dropdown").toggleClass('active');
  });