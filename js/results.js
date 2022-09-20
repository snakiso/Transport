let prevSlide = document.querySelector('.prev-slide')
let nextSlide = document.querySelector('.next-slide')
let slider = document.querySelector('.results__slider-img')
let left = 0

function checkPosition(){
    if(slider.style.left == '-960px'){
        nextSlide.style.pointerEvents = 'none'
        prevSlide.style.pointerEvents = 'auto'
    }else if (slider.style.left == '0px'){
        prevSlide.style.pointerEvents = 'none'
        nextSlide.style.pointerEvents = 'auto'
    }
}

function toNextSlide(){
    left = left - 960
    slider.style.left = `${left}px`
}
function toPrevSlide(){
    left = left + 960
    slider.style.left = `${left}px`
}

nextSlide.addEventListener('click', () => {
    toNextSlide()
    checkPosition()
})
prevSlide.addEventListener('click', () => {
    toPrevSlide()
    checkPosition()
})