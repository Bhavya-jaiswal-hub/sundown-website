const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function Page4Animation(){
    var elemC = document.querySelector(".elem-container")
var fixed = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter",function(){
    fixed.style.display = "block"
})
elemC.addEventListener("mouseleave",function(){
    fixed.style.display = "none"
})

var elem1 = document.querySelector("#elem1")
var elem2 = document.querySelector("#elem2")
var elem3 = document.querySelector("#elem3")
var elem4 = document.querySelector("#elem4")
var elem5 = document.querySelector("#elem5")
var elem6 = document.querySelector("#elem6")
var elem7 = document.querySelector("#elem7")
elem1.addEventListener("mouseenter",function(){
     var image = elem1.getAttribute("data-image")
     fixed.style.backgroundImage = `url(${image})`
})

elem2.addEventListener("mouseenter",function(){
    var image = elem2.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image})`
})

elem3.addEventListener("mouseenter",function(){
    var image = elem3.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image})`
})

elem4.addEventListener("mouseenter",function(){
    var image = elem4.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image})`
})

elem5.addEventListener("mouseenter",function(){
    var image = elem5.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image})`
})

elem6.addEventListener("mouseenter",function(){
    var image = elem6.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image})`
})

elem7.addEventListener("mouseenter",function(){
    var image = elem7.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image})`
}) 
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
       
      });
}

var menuopen = document.querySelector("#Menu #open")
var menuclose = document.querySelector("#Menu #close")
var screen = document.querySelector("#full-scr") 
menuopen.addEventListener("click", function(){
     screen.style.display = "block"
     menuopen.style.display = "none"
     menuclose.style.display = "block"

     
})

menuclose.addEventListener("click",function(){
     screen.style.display = "none"
     menuopen.style.display = "block"
     menuclose.style.display = "none"
})


swiperAnimation()
Page4Animation()


