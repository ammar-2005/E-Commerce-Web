let categorynavlist  = document.querySelector('.category-nav-list');
function Opencategory(){
 categorynavlist.classList.toggle('active')
}

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