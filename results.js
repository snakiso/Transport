let prevSlide = document.querySelector('.prev-slide')
let nextSlide = document.querySelector('.next-slide')
let slider = document.querySelector('.results__slider')
let left = 0

function toNextSlide(){
    if(slider.style.left == '-960px'){
        left = 320
    }
    left = left - 320
    slider.style.left = `${left}px`
}
function toPrevSlide(){
    if(slider.style.left == '0px'){
        left = -1280
    }
    left = left + 320
    slider.style.left = `${left}px`
}

nextSlide.addEventListener('click', () => {
    toNextSlide()
})
prevSlide.addEventListener('click', () => {
    toPrevSlide()
})