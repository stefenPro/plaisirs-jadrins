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