// AUTOMATIC SLIDESHOW
const slideAuto = document.querySelectorAll('.slideAuto')
let indexSlide = 0
slideshowAuto()
function slideshowAuto(){
  let numSlides = slideAuto.length
  if(indexSlide >= numSlides){indexSlide = 0}
  if(indexSlide < 0){indexSlide = numSlides - 1}
  for(let eachIndex = 0; eachIndex < numSlides; eachIndex++){
    slideAuto[eachIndex].style.display = 'none'
  }
  slideAuto[indexSlide].style.display = 'block'
  setTimeout(slideshowAuto, 3000) // the second argument is the time in millisecond
  indexSlide += 1
}


// MANUAL SLIDESHOW
const slides = document.querySelectorAll('.manualTextSlide')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

let currentSlide = 1 // slide's position
let numberSlides = slides.length
slideshow(currentSlide)

prev.addEventListener('click', function(){
  currentSlide--
  slideshow(currentSlide)
})

next.addEventListener('click', function(){
  currentSlide++
  slideshow(currentSlide)
})

function slideshow(n){
  // when currentSlide reaches numberSlides, reset back to first slide
  if(currentSlide>numberSlides){currentSlide = 1;}
  // when currentSlide reaches first slide, previous button will be set to lastSlide
  if(currentSlide<1){currentSlide = numberSlides;}
  for(let eachSlides = 0; eachSlides<numberSlides; eachSlides++){
    slides[eachSlides].style.display = 'none'
  }
  slides[currentSlide-1].style.display = 'block'
}


// SHOP CATEGORIES
const sections = document.querySelectorAll('.shopCollections .row')
const menCategory = document.querySelector('#mBicycles')
const womenCategory =  document.querySelector('#fBicycles')
const kidsCategory =  document.querySelector('#kBicycles')

let currentSection = 1
let numberSections = sections.length
itemContent(currentSection)

menCategory.addEventListener('click', function(){
  currentSection = 1
  console.log("MEN CLICKED")
  itemContent(currentSection)
})

womenCategory.addEventListener('click', function(){
  currentSection = 2
  console.log("WOMEN")
  itemContent(currentSection)
})

kidsCategory.addEventListener('click', function(){
  currentSection = 3
  console.log("KIDS")
  itemContent(currentSection)
})

function itemContent(n){
  for(let eachSlides = 0; eachSlides < numberSections; eachSlides++){
    sections[eachSlides].style.display = 'none'
  }
  sections[n - 1].style.display = 'block'
}
