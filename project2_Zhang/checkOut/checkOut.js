
const display = document.querySelectorAll('.item')

for(let index = 0; index < display.length; index++){
  if(sessionStorage.getItem(`itemName${index}`) != null){
    console.log(display[index])
     itemName = document.querySelector(`#storedItem${index}`)
     itemPrice = document.querySelector(`#storedPrice${index}`)

     display[index].style.display = 'inline'

     itemName.innerHTML = sessionStorage.getItem(`itemName${index}`)
     itemPrice.innerHTML = "$"
     itemPrice.innerHTML += sessionStorage.getItem(`itemPrice${index}`)
  }
}

const clearCart = document.querySelector('.clearCart')
const allInfo = document.querySelectorAll('.section > p')


function clearCartItems(){
  clearCartItems()
  clearCartImages()
}

function clearCartItems(){
  for(let index = 0; index < allInfo.length ; index++){
    allInfo[index].innerHTML = ''
  }
}

function clearCartItems(){
  for(let index = 0; index < display.length ; index++){
    display[index].style.display = 'none'
  }
}



clearCart.addEventListener('click', function(){
  sessionStorage.clear()
  clearCartItems()

})

// REMOVE ITEM FROM CART
removeItem = document.querySelectorAll('.deleteItem')
