
display = document.querySelectorAll('.itemContainer .allItems > div')

for(let index = 0; index < display.length; index++){
  if(sessionStorage.getItem(`itemName${index}`) != null){

     itemName = document.querySelector(`#storedItem${index}`)
     itemPrice = document.querySelector(`#storedPrice${index}`)

     display[index].style.display = 'block'

     itemName.innerHTML = sessionStorage.getItem(`itemName${index}`)
     itemPrice.innerHTML = "$"
     itemPrice.innerHTML += sessionStorage.getItem(`itemPrice${index}`)
  }
}

const clearCart = document.querySelector('.clearCart')
const allInfo = document.querySelectorAll('.section > p')

function clearCartItems(){
  for(let index = 0; index < allInfo.length ; index++){
    allInfo[index].innerHTML = ''
  }
}

clearCart.addEventListener('click', function(){
  sessionStorage.clear()
  clearCartItems()

})
