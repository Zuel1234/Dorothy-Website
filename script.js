let data = []
let counting = 0

const cartLog = document.querySelector(".cart_container")
const cartpage = document.querySelector(".cart_page")

const contactPage = document.querySelector(".contact_container")
 

cartLog.addEventListener("click", (e) => {
  cartpage.classList.add("active")
  
})

const closeBtn = document.querySelector(".close_cart")

closeBtn.addEventListener("click", (e) => {
  cartpage.classList.remove("active")
})

const closeMenu = document.querySelector(".close_menu")
const menuOpen = document.querySelector(" header .open")

const mobileMenu = document.querySelector(".mobile_menu")

menuOpen.addEventListener("click", (e) => {
  mobileMenu.style.top = "0"
  
})

closeMenu.addEventListener("click", (e) => {
  mobileMenu.style.top = "-100%"
  
})

const cartBuy = document.querySelectorAll(".cart_btn")

cartBuy.forEach((btn => {
  btn.addEventListener("click" , (e) => {
    const parent = e.target.closest(".product_box")

    const cartImage = parent.querySelector(".product_image img").src

    let product = {
      image : cartImage
    }

    tolocale(product);
    
  })
  
}))

const cartParentContainer = document.querySelector(".product_container")


function tolocale(product){
  const  cartData = JSON.parse(localStorage.getItem("data"))
  
  if(cartData  === null) {
     data.push(product)
    
     localStorage.setItem("data",JSON.stringify(data))
     
  }
  else {
    const cartData = JSON.parse(localStorage.getItem("data"))
    cartData.forEach(item => {
      if (item.image === product.image) {
        window.alert("Item is already in the cart")
        return
      }
      else {
        data.push(item)
           
      }
      
    })

    data.push(product)
    localStorage.setItem("data",JSON.stringify(data))
    window.location.reload();
  }
  
}



const counter =  (count) => {
  const counterEl = document.querySelector(".counter")

  counting += count

  counterEl.textContent = counting
  
} 

const addToCart = () => {
      const cartData = JSON.parse(localStorage.getItem("data"))
      
      cartData.forEach(item => {
        const newEl = document.createElement("div")
        newEl.classList.add("cart_box")

        newEl.innerHTML = ` 
      <div class="cart_image">
        <img src= ${item.image} alt="">
      </div>
      <div class="cart_details">
         <h2 class="product_name">Dorling's Couture</h2>
      </div>
         <div class="delete">
           <i class="ri-delete-bin-line"></i>
         </div>`


      cartParentContainer.appendChild(newEl)
      })

}

addToCart()


const removeItem = () => {
  const cartData = JSON.parse(localStorage.getItem("data"))
  const deleteBtn = document.querySelectorAll(".delete i")

  deleteBtn.forEach(btn => {
 
    btn.addEventListener("click", (e) => {
      const cartBox = e.target.closest(".cart_box")
      const delImage = cartBox.querySelector(".cart_image img").src
      
      cartData.forEach((item) => {
         if(item.image != delImage) {
          data.push(item)
         }
       
         
      })

        localStorage.setItem("data",JSON.stringify(data))
        window.location.reload()

    })
    counter(1)
    
  })
  


  
}
removeItem()


const cartData = JSON.parse(localStorage.getItem("data"))

const info = document.querySelector(".info")

if(cartData.length === 0) {
 info.textContent = "Your Cart is Empty "
  
}

const closeContainer = document.querySelectorAll(".mobile_menu .collections ul")

closeContainer.forEach((container) => {
  const lastChild = container.lastElementChild 

  lastChild.addEventListener("click",(e) => {
    window.open('product.html')
  })
  
})

// buying item link to whatsapp

const buy = document.querySelector(".buy_now button");


buy.addEventListener("click", (e) => {
  
  const cartData = JSON.parse(localStorage.getItem("data"))

 if(cartData.length === 0){
  window.alert("Cart is empty please add one or more item to proceed to checkout")
  return
  
 }
  
 else {
  const itemCount = cartData.length === 1 ? "item" : "items"
  window.open(`https://wa.me/5548879613?text= DOROTHY COUTURE %0A Please kindly send us screenshot 
    of the ${cartData.length} ${itemCount} in your cart page to process delivery`,"_blank")
 }
  
})

const seeMore = document.querySelectorAll(".see_more_btn button")
seeMore.forEach((item) => {
  item.addEventListener("click",() => {
    window.open('product.html')
  })
})

const whatsapp = document.querySelector(".whatsapp")


whatsapp.addEventListener("click", () => {

   window.open(`https://wa.me/5548879613?text= DOROTHY COUTURE %0A Please I want more info on your services`,"_blank")
})


const call = document.querySelector(".call")
console.log(call);

call.href = "tel:+2335548879613"









