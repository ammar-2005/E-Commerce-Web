var swiper = new Swiper(".slide-product", {
    slidesPerView: 5,
    spaceBetween: 20,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next", 
        prevEl: ".swiper-button-prev"
    },
    loop: true,
    breakpoints: {
        1200: { slidesPerView: 5 },
        1000: { slidesPerView: 4 },
        700: { slidesPerView: 3 },
        0: { slidesPerView: 2 }
    }
});