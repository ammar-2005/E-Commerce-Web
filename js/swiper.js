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
    });