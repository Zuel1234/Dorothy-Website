let data = [];

// Cart Page Display Code

const cart_btn = document.querySelector(".cart_log_box");

const cart_page = document.querySelector(".cart");

cart_btn.addEventListener("click", (event) => {
  cart_page.classList.add("active");
});

const close_btn = document.querySelector(".close_btn");

close_btn.addEventListener("click", (event) => {
  cart_page.classList.remove("active");
});

const parentProductsEl = document.querySelector(".products_container");

const cartParentEl = document.querySelector(".cart");
const cartContainer = document.querySelector(".cart_container");

const addToCartBtn = document.querySelectorAll(".buy_btn");

addToCartBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    window.location.reload()

    const bntParentEl = e.target.closest(".products_box");
   
    const pro_image = bntParentEl.querySelector(".img_container img").src;
    const pro_price = bntParentEl.querySelector(".price").textContent;
    const pro_name = bntParentEl.querySelector(".title").textContent;
  

    const product = {
       image : pro_image,
       price : pro_price,
       name : pro_name
       
    }  
    
    toLocalStorage(product);
  
  });
});


function toLocalStorage(product){

  cartData = JSON.parse(localStorage.getItem('myCartData'));
  if(cartData === null) {
      data.push(product);
      
      localStorage.setItem('myCartData',JSON.
        stringify(data))
  
  }
  
  else {
    const cartData = JSON.parse(localStorage.getItem('myCartData'))
    cartData.forEach((item) => {

      if (product.name === item.name) {
        alert('items is already in the cart')
        return
      }
      else {
        data.push(item)
      }
    })

    data.push(product)
    localStorage.setItem("myCartData",JSON.stringify(data))
    window.location.reload();
  }
  
}

function addToCart() {

  const cartData = JSON.parse(localStorage.getItem('myCartData'));
  
  cartData.forEach((item) => {

    const newEl = document.createElement("div");
    newEl.classList.add("cart_box");

    newEl.innerHTML = ` 

          <div class="cart_image">
            <img src= ${item.image} alt="product one" />
          </div>
          <div class="details">
            <h2 class="cart_product-title">${item.name}</h2>
            <div class="cart_product_price">$${item.price}</div>
            <div class="increase_decrease_container">
              <button id="decrease">-</button>
              <span class="quantity">0</span>
              <button id="increase">+</button>
            </div>
          </div>
          <div class="del_box">
            <i class="ri-delete-bin-line"></i>
          </div>
        `;
    cartContainer.appendChild(newEl);
    
  })
}

addToCart()



function removeCart() {
  
const removeBtn = cartContainer.querySelectorAll('.del_box i')  

  removeBtn.forEach((removeBtn) => {
    removeBtn.addEventListener('click', (e) => {

      
  let cartData = JSON.parse(localStorage.getItem("myCartData"))

     const parentName = e.target.closest(".cart_box")
     const removed = parentName.querySelector(".cart_product-title").textContent

     if(removed !== item.name) {
      data.push(item)
     }

    })

    localStorage.setItem("myCartData",JSON.stringify(data))
    window.location.reload()
  })
   
}

removeCart()




