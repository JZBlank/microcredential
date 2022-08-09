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

// ARRIVAL CHOICES SECTION
const sections = document.querySelectorAll('.shopCollections .row')
const menCategory = document.querySelector('#mBicycles')
const womenCategory = document.querySelector('#fBicycles')
const kidsCategory =  document.querySelector('#kBicycles')

// CLICK CATEGORY ICON IN CONTAINER01
const cCategoryW = document.querySelector('#chooseW')
const cCategoryM = document.querySelector('#chooseM')
const cCategoryK = document.querySelector('#chooseK')

cCategoryW.addEventListener('click', function(){
  kidsCategory.style.textDecoration = 'none'
  womenCategory.style.textDecoration = 'underline'
  menCategory.style.textDecoration = 'none'
  itemContent(2)
})

cCategoryM.addEventListener('click', function(){
  kidsCategory.style.textDecoration = 'none'
  womenCategory.style.textDecoration = 'none'
  menCategory.style.textDecoration = 'underline'
  itemContent(1)
})

cCategoryK.addEventListener('click', function(){
  kidsCategory.style.textDecoration = 'underline'
  womenCategory.style.textDecoration = 'none'
  menCategory.style.textDecoration = 'none'
  itemContent(3)
})




// SHOP CATEGORIES - ARRIVAL SECTION CODE
let currentSection = 1
let numberSections = sections.length
itemContent(currentSection)


menCategory.addEventListener('click', function(){
  currentSection = 1
  kidsCategory.style.textDecoration = 'none'
  womenCategory.style.textDecoration = 'none'
  menCategory.style.textDecoration = 'underline'
  itemContent(currentSection)
})

womenCategory.addEventListener('click', function(){
  currentSection = 2
  kidsCategory.style.textDecoration = 'none'
  womenCategory.style.textDecoration = 'underline'
  menCategory.style.textDecoration = 'none'
  itemContent(currentSection)
})

kidsCategory.addEventListener('click', function(){
  currentSection = 3
  kidsCategory.style.textDecoration = 'underline'
  womenCategory.style.textDecoration = 'none'
  menCategory.style.textDecoration = 'none'
  itemContent(currentSection)
})

function itemContent(n){
  for(let eachSlides = 0; eachSlides < numberSections; eachSlides++){
    sections[eachSlides].style.visibility = 'hidden'
  }
  sections[n-1].style.visibility = 'visible'
}

// MANUAL + AUTOMATIC CIRCLE SLIDESHOW
const circle1 = document.querySelector('#c1')
const circle2 =  document.querySelector('#c2')
const circle3 =  document.querySelector('#c3')

const clientQuote = document.querySelector('.container05_clientQuote')

let currentCSlide = 0
circle1.style.backgroundColor = '#F2CEAF'

// ORIGINAL
clientQuote.innerHTML = "<b>Exceeded my expectations</b><br> I bought a bike not expecting much but I was pleasantly surprised by its amazing performance. <br><span style='float:right;'>-Jenna</span>"

circle1.addEventListener('click', function(){
  currentCSlide = 0
  circle1.style.backgroundColor = '#F2CEAF'
  circle2.style.backgroundColor = 'black'
  circle3.style.backgroundColor = 'black'

  document.getElementById("imgPFP").src = "img/customer_01.jpg";
  clientQuote.innerHTML = "<b>Exceeded my expectations</b><br> I bought a bike not expecting much but I was pleasantly surprised by its amazing performance. <br><span style='float:right;'>-Jenna</span>"

})

circle2.addEventListener('click', function(){
  currentCSlide = 1
  circle2.style.backgroundColor = '#F2CEAF'
  circle3.style.backgroundColor = 'black'
  circle1.style.backgroundColor = 'black'

  document.getElementById("imgPFP").src = "img/customer_02.jpg";
  clientQuote.innerHTML = "<b>High quality</b><br>Just bought a bike yesterday. Bike quality is IMPRESSIVE. Bikery is the real deal. <br><br><span style='float: right; margin-right: 100px;'> -Kevin</span>"

})

circle3.addEventListener('click', function(){
  currentCSlide = 2
  circle3.style.backgroundColor = '#F2CEAF'
  circle2.style.backgroundColor = 'black'
  circle1.style.backgroundColor = 'black'

  document.getElementById("imgPFP").src = "img/customer_03.jpg";
  clientQuote.innerHTML = "<b>Amazing bike</b><br> I love my bike. It was worth every penny. My only regret was not finding Bikery sooner.<br><span style='float: right; margin-right: 40px;'> -Rachel</span>"

})

/* ITEMS IN BAG TRACKER */
let cartItemNum = 0;

urlM = "img/img_bikes/men/"
urlW = "img/img_bikes/women/"
urlK = "img/img_bikes/kids/"
b1 = "b1.png"
b2 = "b2.png"
b3 = "b3.png"
originalColor = ['black', '2px solid #F2CEAF']
modifiedColor = ['2px solid #F2CEAF', 'black']

const bikeNames = ["GIANT CONTEND SL1","SPECIALIZED ALLEZ","CANNONDALE CAAD13 DISC 105","Fahrrad Manufaktur-TX-400"
,"Santos Cross Lite", "Gudereit-SX-R-1.0", "Yoji 16", "Coop Bike", "Giant Bike"]
const bikeImgs = [`${urlM}${b1}`, `${urlM}${b2}`, `${urlM}${b3}`,`${urlW}${b1}`, `${urlW}${b2}`, `${urlW}${b3}`, `${urlK}${b1}`, `${urlK}${b2}`, `${urlK}${b3}`]
const bikePrices = ["1199.00", "999.99", "2300.00", "1846.45", "2448.00","2199.00","495.00", "479.19", "356.00"]
let addItemToCart = ["Add to Cart","Add to Cart","Add to Cart","Add to Cart","Add to Cart","Add to Cart","Add to Cart","Add to Cart","Add to Cart"]
let modifyAdd = [originalColor, originalColor, originalColor, originalColor, originalColor, originalColor, originalColor, originalColor, originalColor]


/* MODAL WINDOW ELEMENTS */
const modalWindow = document.querySelector('.modalWindow')
const closeModal = document.querySelector('.closeModal')
const addItem = document.querySelector('.addItem')

/* MODIFY MODAL ELEMENTS */
const bName = document.querySelector('#bName')
const bImg = document.querySelector('#bImg')
const bPrice = document.querySelector('#bPrice')
const bAdd = document.querySelector("#bAdd")

let index = -1

/* SEE DETAILS BUTTON */
const button = document.querySelectorAll('.shopCollections .item > div.checkitemInfo .checkitemInfoText')
const itemTracker =  document.querySelector('#itemTracker')

button.forEach(function(e){
  e.addEventListener('click', function(){
    tracker = 0
    index = e.id
    modalWindow.style.display = 'block'
    bName.innerHTML = bikeNames[index]
    bImg.src = bikeImgs[index]
    bPrice.innerHTML = `$${bikePrices[index]}`
    bAdd.innerHTML = addItemToCart[index]

    bAdd.style.color = modifyAdd[index][0]
    bAdd.style.border = modifyAdd[index][1]

    var itemName = `itemName${index}`
    var itemPrice = `itemPrice${index}`



    addItem.addEventListener('click', function(){
      if(sessionStorage.getItem(itemName) === null) {
        addItemToCart[index] =  "Added"
        bAdd.innerHTML =  addItemToCart[index]

        cartItemNum += 1
        itemTracker.innerHTML = cartItemNum
        sessionStorage.setItem(itemName, bikeNames[index]);
        sessionStorage.setItem(itemPrice, bikePrices[index])
      }
    })
  })
})

closeModal.addEventListener('click', function(){
  modalWindow.style.display = 'none'
})
