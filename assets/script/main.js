/*Scroll Anim*/
const ratio = .1
const option = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            observer.unobserve(entry.target)
            entry.target.classList.add('reveal-visible')
        } 
    })
}
const observer = new IntersectionObserver(handleIntersect, option);
document.querySelectorAll('.reveal').forEach(function (r) {
    observer.observe(r)
})
/*--------*/



/*Scroll Navbar | footer*/
const navbar = document.querySelector('navbar')
const tools = document.querySelector('.pageBottom')
const navbarPos = navbar.offsetTop
const toolsPos = tools.offsetTop
window.addEventListener('scroll', function () {
    if (window.scrollY > navbarPos) {
        navbar.classList.add('navFixed')
        navbar.classList.add('navbarScroll')
    } else if (window.scrollY < navbarPos) {
        navbar.classList.remove('navFixed')
        navbar.classList.remove('navbarScroll')
    }
    if ((window.innerHeight + window.scrollY) <= toolsPos) {
        tools.classList.add('pageBottomFixed')
    } else {
        tools.classList.remove('pageBottomFixed')
    }



})
/*-------*/
var images = document.querySelectorAll('.imgGlob')
var blocOverlay = document.querySelector('.blocOverlay')
var blocContent = document.querySelector('.blocContent')
var imgHover = document.querySelectorAll('imgHover')

/*media queries*/
if (!window.matchMedia("(min-width: 600px)").matches) {
    images.forEach(function (image){
        var imageSolo = image.children[0]
        imageSolo.addEventListener('click',function(){
            blocOverlay.classList.toggle('overlay-off')
            blocContent.innerHTML = '<div class="top-overlay"><i class="bx bx-x"></i></div><img src="' + imageSolo.src + '" class="imgOverlay">'
            $('.blocOverlay').animate({ opacity: '1' }, 200)
            document.querySelector('.bx-x').addEventListener('click', function () {
                blocOverlay.classList.add('overlay-off')
                $('.blocOverlay').removeAttr("style")
            })
        })
    })
} else {
    images.forEach(function (image) {
        var imageSolo = image.children[0]
        var zoom = image.children[1].children[0]
        zoom.addEventListener('click', function () {
            blocOverlay.classList.toggle('overlay-off')
            blocContent.innerHTML = '<div class="top-overlay"><i class="bx bx-x"></i></div><img src="' + imageSolo.src + '" class="imgOverlay">'
            $('.blocOverlay').animate({ opacity: '1' }, 200)
            document.querySelector('.bx-x').addEventListener('click', function () {
                blocOverlay.classList.add('overlay-off')
                $('.blocOverlay').removeAttr("style")
            })
        })
        image.children[0].addEventListener('mouseover', function () {
            image.children[1].classList.toggle('onFocusFalse')
            $(zoom).animate({ top: '35%' }, 200)
        })
        image.addEventListener('mouseleave', function () {
            image.children[1].classList.toggle('onFocusFalse')
            $(zoom).removeAttr("style")
        })
    })
}