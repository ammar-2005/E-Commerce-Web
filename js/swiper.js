// swiper js
  var swiper = new Swiper(".siled-swp", {
      pagination: {
        el: ".swiper-pagination",
        dynamiceBullets: true,
        clickable: true
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      loop:true,
    });
    // swiper slide products
      var swiper = new Swiper(".slide-product", {
        slidesPerView: 5,
        spaceBetween:20,
  
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation:{
        nexEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
      },
      loop:true,
      breakpoints: {
      1200: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    1000: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      700:{
        slidesPerView: 3,
        spaceBetween: 15,
      },
      0:{
        slidesPerView: 1,
        spaceBetween: 10,
      }
    
    }
    });
