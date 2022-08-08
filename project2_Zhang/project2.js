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

/* MODAL WINDOWS */
const getitemNum = document.querySelectorAll('.bikeImg_contain')
const openItem = document.querySelectorAll('.checkitemInfoText')
const closeModal = document.querySelector('.closeModal')

const item0 = openItem[0]
const item1 = openItem[1]
const item2 = openItem[2]
const item3 = openItem[3]
const item4 = openItem[4]
const item5 = openItem[5]
const item6 = openItem[6]
const item7 = openItem[7]
const item8 = openItem[8]


/* MODAL WINDOW MODIFICATIONS */
const modalWindow = document.querySelector('.modalWindow')
openModalWindow()

function openModalWindow(){
  // MEN BIKES
  item0.addEventListener('click', function(){
    document.getElementById("bikeName").innerHTML = "A"
    document.getElementById("bikeImg0").src = "img/img_bikes/men/b1.png";
    document.getElementById("bikePrice").innerHTML = '$200'
    modalWindow.style.display = 'block'
  })
  item1.addEventListener('click', function(){
    document.getElementById("bikeName").innerHTML = "A"
    document.getElementById("bikeImg0").src = "img/img_bikes/men/b2.png";
    document.getElementById("bikePrice").innerHTML = '$300'
    modalWindow.style.display = 'block'
  })
  item2.addEventListener('click', function(){
    document.getElementById("bikeName").innerHTML = "A"
    document.getElementById("bikeImg0").src = "img/img_bikes/men/b3.png";
    document.getElementById("bikePrice").innerHTML = '$300'
    modalWindow.style.display = 'block'
  })

  // WOMEN BIKES
  item3.addEventListener('click', function(){
    document.getElementById("bikeName").innerHTML = "A"
    document.getElementById("bikeImg0").src = "img/img_bikes/women/b1.png";
    document.getElementById("bikePrice").innerHTML = '$300'
    modalWindow.style.display = 'block'
  })
  item4.addEventListener('click', function(){
    document.getElementById("bikeName").innerHTML = "A"
    document.getElementById("bikeImg0").src = "img/img_bikes/women/b2.png";
    document.getElementById("bikePrice").innerHTML = '$300'
    modalWindow.style.display = 'block'
  })
  item5.addEventListener('click', function(){
    document.getElementById("bikeName").innerHTML = "A"
    document.getElementById("bikeImg0").src = "img/img_bikes/women/b3.png";
    document.getElementById("bikePrice").innerHTML = '$300'
    modalWindow.style.display = 'block'
  })


  // KIDS
  item6.addEventListener('click', function(){
    document.getElementById("bikeName").innerHTML = "A"
    document.getElementById("bikeImg0").src = "img/img_bikes/kids/b1.png";
    document.getElementById("bikePrice").innerHTML = '$100'
    modalWindow.style.display = 'block'
  })
  item7.addEventListener('click', function(){
    document.getElementById("bikeName").innerHTML = "A"
    document.getElementById("bikeImg0").src = "img/img_bikes/kids/b2.png";
    document.getElementById("bikePrice").innerHTML = '$100'
    modalWindow.style.display = 'block'
  })
  item8.addEventListener('click', function(){
    document.getElementById("bikeName").innerHTML = "AAERAERERAERAERAERA"
    document.getElementById("bikeImg0").src = "img/img_bikes/kids/b3.png";
    document.getElementById("bikePrice").innerHTML = '$100'
    modalWindow.style.display = 'block'
  })
}

closeModal.addEventListener('click', function(){
  modalWindow.style.display = 'none'
})

/* STORE DATA - ADD TO CART */

let addItem = document.querySelector('.addItem')
let bikeName = document.getElementById("bikeName").innerHTML
let price = document.getElementById("bikePrice").innerHTML



addItem.addEventListener('click', function(){
  sessionStorage.setItem("BikeName", bikeName);
  sessionStorage.setItem("Price", price);
})
