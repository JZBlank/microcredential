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


let addItem = document.querySelector('.addItem')
let bikeName0, bikeName1, bikeName2, bikeName3, bikeName4, bikeName5, bikeName6, bikeName7, bikeName8;
let price0, price1, price2, price3, price4, price5, price6, price7, price8;


/* MODAL WINDOW MODIFICATIONS */
const modalWindow = document.querySelector('.modalWindow')
openModalWindow()

function openModalWindow(){
  // MEN BIKES
  item0.addEventListener('click', function(){
    bikeName0 = document.getElementById("bikeName").innerHTML = "GIANT CONTEND SL1"
    document.getElementById("bikeImg0").src = "img/img_bikes/men/b1.png";
    price0 = document.getElementById("bikePrice").innerHTML = '$200'
    modalWindow.style.display = 'block'

    addItem.addEventListener('click', function(){

      sessionStorage.setItem("BikeName0", bikeName0);
      sessionStorage.setItem("BikePrice0", price0);
    })

  })
  item1.addEventListener('click', function(){
    bikeName1 = document.getElementById("bikeName").innerHTML = "SPECIALIZED ALLEZ"
    document.getElementById("bikeImg0").src = "img/img_bikes/men/b2.png";
    price1 = document.getElementById("bikePrice").innerHTML = '$300'
    modalWindow.style.display = 'block'

    addItem.addEventListener('click', function(){
      sessionStorage.setItem("BikeName1", bikeName1);
      sessionStorage.setItem("BikePrice1", price1);

    })

  })
  item2.addEventListener('click', function(){
    bikeName2 = document.getElementById("bikeName").innerHTML = "CANNONDALE CAAD13 DISC 105"
    document.getElementById("bikeImg0").src = "img/img_bikes/men/b3.png";
    price2 = document.getElementById("bikePrice").innerHTML = '$300'
    modalWindow.style.display = 'block'

    addItem.addEventListener('click', function(){
      sessionStorage.setItem("BikeName2", bikeName2);
      sessionStorage.setItem("BikePrice2", price2);
    })

  })

  // WOMEN BIKES
  item3.addEventListener('click', function(){
    bikeName3 = document.getElementById("bikeName").innerHTML = "VSF-Fahrrad Manufaktur-TX-400"
    document.getElementById("bikeImg0").src = "img/img_bikes/women/b1.png";
    price3 = document.getElementById("bikePrice").innerHTML = '$300'
    modalWindow.style.display = 'block'

    addItem.addEventListener('click', function(){
      sessionStorage.setItem("BikeName3", bikeName3);
      sessionStorage.setItem("BikePrice3", price3);
    })

  })
  item4.addEventListener('click', function(){
    bikeName4 = document.getElementById("bikeName").innerHTML = "Santos Cross Lite"
    document.getElementById("bikeImg0").src = "img/img_bikes/women/b2.png";
    price4 = document.getElementById("bikePrice").innerHTML = '$300'
    modalWindow.style.display = 'block'

    addItem.addEventListener('click', function(){
      sessionStorage.setItem("BikeName4", bikeName4);
      sessionStorage.setItem("BikePrice4", price4);
    })

  })
  item5.addEventListener('click', function(){
    bikeName5 = document.getElementById("bikeName").innerHTML = "Gudereit-SX-R-1.0"
    document.getElementById("bikeImg0").src = "img/img_bikes/women/b3.png";
    price5 = document.getElementById("bikePrice").innerHTML = '$300'
    modalWindow.style.display = 'block'

    addItem.addEventListener('click', function(){
      sessionStorage.setItem("BikeName5", bikeName5);
      sessionStorage.setItem("BikePrice5", price5);
    })

  })


  // KIDS
  item6.addEventListener('click', function(){
    bikeName6 = document.getElementById("bikeName").innerHTML = "Yoji 16"
    document.getElementById("bikeImg0").src = "img/img_bikes/kids/b1.png";
    price6 = document.getElementById("bikePrice").innerHTML = '$100'
    modalWindow.style.display = 'block'

    addItem.addEventListener('click', function(){
      sessionStorage.setItem("BikeName6", bikeName6);
      sessionStorage.setItem("BikePrice6", price6);
    })

  })


  item7.addEventListener('click', function(){
    bikeName7 = document.getElementById("bikeName").innerHTML = "Coop Bike"
    document.getElementById("bikeImg0").src = "img/img_bikes/kids/b2.png";
    price7 = document.getElementById("bikePrice").innerHTML = '$300'
    modalWindow.style.display = 'block'

    addItem.addEventListener('click', function(){
      sessionStorage.setItem("BikeName7", bikeName7);
      sessionStorage.setItem("BikePrice7", price7);

    })

  })


  item8.addEventListener('click', function(){
    bikeName8 = document.getElementById("bikeName").innerHTML = "Giant Bike"
    document.getElementById("bikeImg0").src = "img/img_bikes/kids/b3.png";
    price8 = document.getElementById("bikePrice").innerHTML = '$900'
    modalWindow.style.display = 'block'

    addItem.addEventListener('click', function(){
      sessionStorage.setItem("BikeName8", bikeName8);
      sessionStorage.setItem("BikePrice8", price8);
    })

  })
}

closeModal.addEventListener('click', function(){
  modalWindow.style.display = 'none'
})
