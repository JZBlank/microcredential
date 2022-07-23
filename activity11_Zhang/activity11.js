
// Example 14
const sBubble = document.querySelector('.sBubble')
const pBubble = document.querySelector('.pBubble')
const aBubble = document.querySelector('.aBubble')
sBubble.addEventListener('click', function(e){
  e.stopPropagation()
  alert('SECTION was clicked!')
})
pBubble.addEventListener('click', function(e){
  e.stopPropagation()
  alert('PARAGRAPH was clicked!')
})
aBubble.addEventListener('click', function(e){
  e.stopPropagation()
  alert('ANCHOR was clicked!')
})
// Example 13
const qccURL = document.querySelector('#qccURL')
qccURL.addEventListener('click', function(e){
  e.preventDefault()
  alert("QCC website is OFF!")
})
// Example 12
const toTop = document.querySelector('.toTop')
window.addEventListener('scroll', function(){
  let pxTop = window.pageYOffset;
  if(pxTop>80){
    toTop.style.display = 'block'
  }
  else{
    toTop.style.display = 'none'
  }
})
// Example 11
const display9 = document.querySelector('.display9')
window.addEventListener('scroll', function(){
  let pxTop = window.pageYOffset;
  display9.innerHTML = `Browser window is ${pxTop}px away from the top`
})
// Example 10
const inputTxt = document.querySelector('.inputTxt')
inputTxt.addEventListener('keydown', function(e){
  alert(`KEYDOWN! key "${e.key}" was pressed \nThe ASCII code for key "${e.key}" is ${e.which}`)
})
// Example 9
const divColor = document.querySelectorAll('.divColor')
for(let eachDiv of divColor){
  eachDiv.addEventListener('mouseout', function(){
    eachDiv.style.backgroundColor = changeColor();
  })
}
// EXAMPLE 7
const colorContainer = document.querySelector('.colorContainer')
const btnColor = document.querySelector('#btnColor')

btnColor.addEventListener('click', function(){
  // Change background color of the <div>
  colorContainer.style.backgroundColor = changeColor();
})
function changeColor(){
  // RGB values go from 0 to 255
  const r = Math.floor(Math.random()*256)
  const g = Math.floor(Math.random()*256)
  const b = Math.floor(Math.random()*256)
  return  `rgb(${r},${g},${b})`
}
// EXAMPLE 6
const btn6 = document.querySelector('#btn6')
btn6.addEventListener('mouseout', click1)
btn6.addEventListener('dblclick', click2)

function click1(){
  console.log('BUTTON 6 = mouseout')
}

function click2(){
  alert('BUTTON 6 was double clicked')
}
// EXAMPLE 5
const btn5 = document.querySelector('#btn5')
btn5.addEventListener('click', function(){
  alert('BUTTON 5 was clicked!')
})
// EXAMPLE 4
const title = document.querySelector('.title')
title.onmouseout = function(){
  console.log('The title was hovered on mouseout event')
}
// EXAMPLE 3
const qccLink = document.querySelector('#qccLink')
qccLink.onclick = function(){
  console.log('QCC link was clicked!')
}

qccLink.onmouseover = testing;

function testing(){
  console.log('QCC link was hovered or mouseovered!')
}
// EXAMPLE 2
const btn2 = document.querySelector('#btn2')
btn2.onclick = function(){
  alert('Hi there!')
}
/* Another way to create the event
function clickedBtn(){
  alert('Hi there!')
}
btn2.onclick = clickedBtn;
*/
