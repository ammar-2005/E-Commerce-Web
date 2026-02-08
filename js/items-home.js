fetch('products.json')
.then(response => response.json())
.then(data => {
    const swiperWrapper = document.getElementById('swiper-item-sale');
    const swiperElctronics = document.getElementById('swiper-elctronics');
    const swiperAppliances = document.getElementById('swiper-appliances');
    const swiperMobiles = document.getElementById('swiper-mobiles');
    swiperWrapper.innerHTML = ''; 

    // for all products

    data.forEach(product => {

        if (product.old_price) { 
            const percent = Math.floor((product.old_price - product.price) / product.old_price * 100);
            
            swiperWrapper.innerHTML += `
                <div class="swiper-slide product">
                    <span class="sale-present">${percent}%</span>
                    <div class="img-product">
                        <a href="#"><img src="${product.img}" alt="${product.name}"></a>
                    </div>
                    <div class="stars">
                        <i class="ri-star-line"></i><i class="ri-star-line"></i>
                        <i class="ri-star-line"></i><i class="ri-star-line"></i>
                        <i class="ri-star-line"></i>
                    </div>
                    <p class="name-product">
                        <a href="#"> ${product.name} </a>
                    </p>
                    <div class="price">
                        <p><span>$${product.price}</span></p>
                        <p class="old-price">$${product.old_price}</p>
                    </div>
                    <div class="icons">
                        <span class="btn-add-cart" data-id="${product.id}">
                            <i class="ri-shopping-cart-line"></i> add to cart
                        </span>
                        <span class="icon-product">
                            <i class="ri-heart-line"></i>
                        </span>
                    </div>
                </div>`;
        }
    });
    // elctronics
    data.forEach(product =>{
        if(product.catetory == "electronics"){
            const oldPricepargrahp =  product.old_price ? `  <p class="old-price">$${product.old_price}</p> ` : "";
        
            const percentDisdiv =  product.old_price ? `  <span class="sale-present">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span> ` : "";

           
        

           swiperElctronics.innerHTML += `
                <div class="swiper-slide product">
                    ${percentDisdiv}
                    <div class="img-product">
                        <a href="#"><img src="${product.img}" alt="${product.name}"></a>
                    </div>
                    <div class="stars">
                        <i class="ri-star-line"></i><i class="ri-star-line"></i>
                        <i class="ri-star-line"></i><i class="ri-star-line"></i>
                        <i class="ri-star-line"></i>
                    </div>
                    <p class="name-product">
                        <a href="#"> ${product.name} </a>
                    </p>
                    <div class="price">
                        <p><span>$${product.price}</span></p>
                       ${oldPricepargrahp}
                    </div>
                    <div class="icons">
                       <span class="btn-add-cart" data-id="${product.id}">
                            <i class="ri-shopping-cart-line"></i> add to cart
                        </span>
                        <span class="icon-product">
                            <i class="ri-heart-line"></i>
                        </span>
                    </div>
                </div>`;


        }
    }) 
    // appliances
    data.forEach(product =>{
        if(product.catetory == "appliances"){
            const oldPricepargrahp =  product.old_price ? `  <p class="old-price">$${product.old_price}</p> ` : "";
        
            const percentDisdiv =  product.old_price ? `  <span class="sale-present">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span> ` : "";

           
        

           swiperAppliances.innerHTML += `
                <div class="swiper-slide product">
                    ${percentDisdiv}
                    <div class="img-product">
                        <a href="#"><img src="${product.img}" alt="${product.name}"></a>
                    </div>
                    <div class="stars">
                        <i class="ri-star-line"></i><i class="ri-star-line"></i>
                        <i class="ri-star-line"></i><i class="ri-star-line"></i>
                        <i class="ri-star-line"></i>
                    </div>
                    <p class="name-product">
                        <a href="#"> ${product.name} </a>
                    </p>
                    <div class="price">
                        <p><span>$${product.price}</span></p>
                       ${oldPricepargrahp}
                    </div>
                    <div class="icons">
                        <span class="btn-add-cart" data-id="${product.id}">
                            <i class="ri-shopping-cart-line"></i> add to cart
                        </span>
                        <span class="icon-product">
                            <i class="ri-heart-line"></i>
                        </span>
                    </div>
                </div>`;


        }
    }) 
    // mobiles
    data.forEach(product =>{
        if(product.catetory == "mobiles"){
            const oldPricepargrahp =  product.old_price ? `  <p class="old-price">$${product.old_price}</p> ` : "";
        
            const percentDisdiv =  product.old_price ? `  <span class="sale-present">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span> ` : "";

           
        

          swiperMobiles.innerHTML += `
                <div class="swiper-slide product">
                    ${percentDisdiv}
                    <div class="img-product">
                        <a href="#"><img src="${product.img}" alt="${product.name}"></a>
                    </div>
                    <div class="stars">
                        <i class="ri-star-line"></i><i class="ri-star-line"></i>
                        <i class="ri-star-line"></i><i class="ri-star-line"></i>
                        <i class="ri-star-line"></i>
                    </div>
                    <p class="name-product">
                        <a href="#"> ${product.name} </a>
                    </p>
                    <div class="price">
                        <p><span>$${product.price}</span></p>
                       ${oldPricepargrahp}
                    </div>
                    <div class="icons">
                        <span class="btn-add-cart" data-id="${product.id}">
                            <i class="ri-shopping-cart-line"></i> add to cart
                        </span>
                        <span class="icon-product">
                            <i class="ri-heart-line"></i>
                        </span>
                    </div>
                </div>`;


        }
    }) 



    
    initializeSwiper();
})
.catch(error => console.error("Error loading products:", error));

function initializeSwiper() {
    new Swiper(".slide-product", {
        slidesPerView: 5,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1200: { slidesPerView: 5 },
            900: { slidesPerView: 4 },
            700: { slidesPerView: 3 },
            500: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
        },
    });
}