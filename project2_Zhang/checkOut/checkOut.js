
// DISPLAY ITEMS
const display = document.querySelectorAll('.itemContainer .item')
let itemCount = document.querySelector('#itemTracker')
let cartItemNum = 0


// CLEAR ITEMS
const clearCart = document.querySelector('.clearCart')
const allInfo = document.querySelectorAll('.section > p')


// TOTAL MONEY
subTotal = document.querySelector('.subtotal')
shippingTotal = document.querySelector('.shippingTotal')
priceTotal = document.querySelector('.totalPrice')

let subTotal_ = 0
let shippingTotal_ = 41.45
let priceTotal_ =  0
storageArray = Object.values(sessionStorage)
storageSize = storageArray.length


for(let info = 0; info < storageSize; info++){
  console.log("OK", storageArray[info])
  if(!isNaN(storageArray[info])){
    subTotal_ += parseFloat(storageArray[info])
  }
}

console.log(subTotal_)

priceTotal_ = subTotal_ + shippingTotal_

subTotal.innerHTML = `Subtotal : $${subTotal_}`
shippingTotal.innerHTML = `Shipping : $${shippingTotal_}`
priceTotal.innerHTML = `Total Price : $${priceTotal_}`




for(let index = 0; index < display.length; index++){
  if(sessionStorage.getItem(`itemName${index}`) != null){

     cartItemNum += 1

     itemName = document.querySelector(`#storedItem${index}`)
     itemPrice = document.querySelector(`#storedPrice${index}`)

     display[index].style.display = 'inline-block'

     itemName.innerHTML = sessionStorage.getItem(`itemName${index}`)
     itemPrice.innerHTML = "$"
     itemPrice.innerHTML += sessionStorage.getItem(`itemPrice${index}`)
  }
}


itemCount.innerHTML = cartItemNum


function clearCartItems(){
  clearCartText()
  clearCartImages()
}

function clearCartText(){
  for(let index = 0; index < allInfo.length ; index++){
    allInfo[index].innerHTML = ''
  }
}

function clearCartImages(){
  for(let index = 0; index < display.length ; index++){
    display[index].style.display = 'none'
  }
}


//PRICE

function clearPrice(){
  subTotal.innerHTML = 'Subtotal : $0.00'
  shippingTotal.innerHTML = 'Shipping : $0.00'
  priceTotal.innerHTML = 'Total Price : $0.00'
}

// CLEAR ALL ITEMS + PRICES
clearCart.addEventListener('click', function(){
  sessionStorage.clear()
  clearCartItems()
  clearPrice()
  itemCount.innerHTML = 0
})

// REMOVE ITEM FROM CART
removeItem = document.querySelectorAll('.deleteItem')
