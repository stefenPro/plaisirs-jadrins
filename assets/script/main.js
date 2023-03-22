/*Scroll Anim*/
const ratio = .1
const option = {
    root: null,
    rootMargin: '0px',
    threshold : ratio
}

const handleIntersect = function(entries, observer){
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio){
            console.log('visible')
            observer.unobserve(entry.target)
            entry.target.classList.add('reveal-visible')
        }
        console.log(entry.intersectionRatio)
    })
}
const observer = new IntersectionObserver(handleIntersect, option);
document.querySelectorAll('.reveal').forEach(function (r){
    observer.observe(r)
})
/*--------*/

var images = document.querySelectorAll('.imgGlob')
var blocOverlay = document.querySelector('.blocOverlay')
var blocContent = document.querySelector('.blocContent')
var imgHover = document.querySelectorAll('imgHover')
images.forEach(function (image){
    var imageSolo = image.children[0]
    console.log(imageSolo)
    var zoom = image.children[1].children[0]
    zoom.addEventListener('click',function(){
        blocOverlay.classList.toggle('overlay-off')
        blocContent.innerHTML = '<div class="top-overlay"><i class="bx bx-x"></i></div><img src="' + imageSolo.src + '" class="imgOverlay">'
        $('.blocOverlay').animate({opacity: '1'},200)
        document.querySelector('.bx-x').addEventListener('click',function(){
            blocOverlay.classList.add('overlay-off')
            console.log('cross cliked')
            $('.blocOverlay').removeAttr("style")
        })
    })

    image.children[0].addEventListener('mouseover',function(){
        
        image.children[1].classList.toggle('onFocusFalse')
        $(zoom).animate({top : '35%'},200)
    })
    image.addEventListener('mouseleave',function(){
        console.log(image.children[1])
        image.children[1].classList.toggle('onFocusFalse')
        $(zoom).removeAttr("style")
    })

    
})

/*Scroll Navbar*/
const navbar = document.querySelector('navbar')
const navbarPos = navbar.offsetTop
window.addEventListener('scroll', function(){
    if (window.scrollY > navbarPos){
        navbar.classList.add('navFixed')
        navbar.classList.add('navbarScroll')
    }else if (window.scrollY < navbarPos){
        navbar.classList.remove('navFixed')
        navbar.classList.remove('navbarScroll')
    }
    
})
/*-------*/

/*DIAPO*/
const items = document.querySelectorAll('.slide')
const nbSlides = items.length
const after = document.querySelector('.right')
const before = document.querySelector('.left')
let countDiap = 0

function afterSlide(){
  
    items[countDiap].classList.remove('active')

    if (countDiap < nbSlides-1){
        countDiap++
    }else {
        countDiap = 0
    }
    items[countDiap].classList.add('active')
    
}
function beforeSlide(){
    items[countDiap].classList.remove('active')
    if (countDiap > 0){
        countDiap--
    }else {
        countDiap = nbSlides-1
    }
    items[countDiap].classList.add('active')
     
}

after.addEventListener('click', afterSlide)
before.addEventListener('click', beforeSlide)
/*----*/