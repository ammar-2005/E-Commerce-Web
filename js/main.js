// --- 1. التحكم في القوائم (فتح وإغلاق) ---
let categorynavlist = document.querySelector('.category-nav-list');
function Opencategory() {
    categorynavlist.classList.toggle('active');
}

var cart = document.querySelector('.cart');
function openCart() {
    cart.classList.toggle('active');
}

let navList = document.querySelector('.nav-list');
function openNavList() {
    navList.classList.toggle('active');
}

// --- 2. إضافة المنتجات للسلة (باستخدام Event Delegation) ---
// نستخدم هذه الطريقة لأن الأزرار تُنشأ برمجياً من ملف items-home.js
document.addEventListener('click', (event) => {
    // التأكد أن العنصر الذي تم الضغط عليه هو زر الإضافة
    const btn = event.target.closest('.btn-add-cart');
    
    if (btn) {
        const productId = btn.getAttribute('data-id');
        
        // جلب البيانات من ملف JSON للعثور على تفاصيل المنتج
        fetch('products.json')
            .then(response => response.json())
            .then(data => {
                const selectedProduct = data.find(product => product.id == productId);
                if (selectedProduct) {
                    addToCart(selectedProduct);
                    
                    // تحديث شكل الزر ليوضح أنه تم الإضافة
                    btn.classList.add('active');
                    btn.innerHTML = `<i class="ri-shopping-cart-line"></i> Item in cart`;
                }
            })
            .catch(err => console.error("Error fetching products:", err));
    }
});

// --- 3. دالة إضافة المنتج لـ LocalStorage ---
function addToCart(product) {
    let Cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // التحقق إذا كان المنتج موجود مسبقاً لزيادة الكمية فقط
    const existingProduct = Cart.find(item => item.id === product.id);
    
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        Cart.push({
            ...product,
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(Cart));
    updateCart(); // تحديث واجهة السلة فوراً
}

// --- 4. دالة تحديث واجهة السلة وعرض العناصر ---
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const countItemCart = document.querySelector('.count-item-cart');
    const countItemHeader = document.querySelector('.count-item-header');
    const totalPriceElement = document.querySelector('.price_cart-total');
    

    const Cart = JSON.parse(localStorage.getItem('cart')) || [];
    const checkout = document.getElementById('checkout-items'); 
      let itmesInput = document.getElementById('item');
            let totalInput = document.getElementById('total-price');
            let countInput = document.getElementById('count-item');
    // if the info here 
    if(checkout){
            checkout.innerHTML ="";
               itmesInput.value = JSON.stringify(Cart);
            totalInput.value = Cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
            countInput.value = Cart.reduce((sum, item) => sum + item.quantity, 0);
         
          
    }
    
    let total = 0;
    let totalCount = 0;

    Cart.forEach((item, index) => {
        total += item.price * item.quantity;
        totalCount += item.quantity;



        // check out inputs

        // بناء الـ HTML الخاص بكل منتج داخل السلة
        cartItemsContainer.innerHTML += `
            <div class="item-cart">
                <img src="${item.img}" alt="${item.name}">
                <div class="content">
                    <h4>${item.name}</h4>
                    <p class="price_cart">$${item.quantity}</p>
                    <div class="quantity_control">
                        <button onclick="changeQuantity(${index}, -1)">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button onclick="changeQuantity(${index}, 1)">+</button>
                    </div>
                </div>
                <button class="delete-itme" onclick="removeFromCart(${index})">
                    <i class="ri-close-line"></i>
                </button>
            </div>
        `
        if(checkout){
            checkout.innerHTML += `
             <!-- item-1 -->
                        <div class="item-cart">
                            <div class="image-name">
                                <img src="${item.img}" alt="${item.name}"> <div class="content">
                                <h4>${item.name}.</h4>
                                <p class="price-cart">$${item.quantity}</p>
                                <div class="quntity-control">
                                    <button class="decrease-quantity" onclick="changeQuantity(${index}, -1)"> -</button>
                                     <span class="quantity">${item.quantity}</span>
                                    <button class="increase-quantity" onclick="changeQuantity(${index}, 1)"> +</button>
                                </div>

                            </div>
                            </div>

                            <button class="delete-item" onclick="removeFromCart(${index})" > <i class="ri-close-line"></i></button>
                           
                        </div>


            `
            
        }




        ;
    });
if(checkout){
    const subtotal = document.querySelector(".subtotal-checkout");
    const total = document.querySelector(".total-checkout");
    subtotal.innerHTML= ` $${total.toFixed(2)}`
}


    // تحديث الأرقام الإجمالية في الهيدر والسلة
    if(countItemCart) countItemCart.innerHTML = totalCount;
    if(countItemHeader) countItemHeader.innerHTML = totalCount;
    if(totalPriceElement) totalPriceElement.innerHTML = `$${total.toFixed(2)}`; 
}




// --- 5. دالة حذف منتج من السلة ---
function removeFromCart(index) {
    let Cart = JSON.parse(localStorage.getItem('cart')) || [];
    Cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(Cart));
    updateCart();
}

// --- 6. دالة تغيير الكمية (+ أو -) ---
function changeQuantity(index, amount) {
    let Cart = JSON.parse(localStorage.getItem('cart')) || [];
    Cart[index].quantity += amount;
    
    if (Cart[index].quantity <= 0) {
        Cart.splice(index, 1);
    }
    
    localStorage.setItem('cart', JSON.stringify(Cart));
    updateCart();
}

// استدعاء التحديث عند تحميل الصفحة لضمان ظهور المنتجات المخزنة مسبقاً
document.addEventListener('DOMContentLoaded', updateCart);