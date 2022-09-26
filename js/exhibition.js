let accordionItem = document.querySelectorAll('.accordion__item')
let accordionBtn = document.querySelectorAll('.accordion__button')
let accordion = document.querySelector('.accordion')
let height = window.innerHeight
let heightM = window.innerHeight*0.7

window.addEventListener('load', () => {
    if(window.innerWidth <= 900 ){
        accordionItem[0].style.height = `${heightM-120}px`
    }else{
    accordionItem[0].style.height = `${height-120}px`
    }
})

function addHidden() {
    for (let i = 0; i < accordionItem.length; i++) {
        accordionItem[i].classList.add('hidden')
    }
}
for (let i = 0; i < accordionItem.length; i++) {
    accordionItem[i].addEventListener('click', () => {
        addHidden()
        accordionItem[i].classList.add('active')
        if(window.innerWidth <= 900 ){
            accordionItem[i].style.height = `${heightM-120}px`
        }else{
            accordionItem[i].style.height = `${height-120}px`
        }
        accordionItem[i].classList.remove('hidden')
        ChangeActiveSlide()
    })
}
function ChangeActiveSlide() {
    if (accordionItem[0].classList.contains('active') && accordionItem[0].classList.contains('hidden') == 0) {
        const img = new Image();
        img.src = './img/strategy.png'
        img.onload = () => {
            accordion.style.backgroundImage = `url(${img.src})`
        }
    }
    if (accordionItem[1].classList.contains('active') && accordionItem[1].classList.contains('hidden') == 0) {
        const img = new Image();
        img.src = './img/infrastructura.png'
        img.onload = () => {
            accordion.style.backgroundImage = `url(${img.src})`
        }
    }
    if (accordionItem[2].classList.contains('active') && accordionItem[2].classList.contains('hidden') == 0) {
        const img = new Image();
        img.src = './img/international.png'
        img.onload = () => {
            accordion.style.backgroundImage = `url(${img.src})`
        }
    }
    // if (accordionItem[3].classList.contains('active') && accordionItem[3].classList.contains('hidden') == 0) {
    //     const img = new Image();
    //     img.src = './img/strategy.png'
    //     img.onload = () => {
    //         accordion.style.backgroundImage = `url(${img.src})`
    //     }
    // }
}
// Код для видео 
let video = document.querySelector('.back-video')
let header = document.querySelector('.header')
let title = document.querySelector('.preview__title')
let motto = document.querySelectorAll('.motto')
let opacity = document.querySelectorAll('.opacity')
let dateShow = document.querySelector('.show-date')


window.addEventListener('click', () => {
    video.classList.add('faded')
    video.style.opacity = '0.2'
    header.classList.remove('faded')
    title.classList.remove('faded')
    for(let i = 0; i< motto.length; i++){
        motto[i].classList.remove('faded')
    }
    for(let i = 0; i <opacity.length; i++){
        opacity[i].classList.remove('faded')
    }
    dateShow.classList.remove('faded')
})
window.addEventListener('scroll', () => {
    video.classList.add('faded')
    video.style.opacity = '0.2'
    header.classList.remove('faded')
    title.classList.remove('faded')
    for (let i = 0; i < motto.length; i++) {
        motto[i].classList.remove('faded')
    }
    for(let i = 0; i <opacity.length; i++){
        opacity[i].classList.remove('faded')
    }
    dateShow.classList.remove('faded')
})


//код для бургера
let closeBtn = document.querySelector('.popNav__close-btn')
let nav = document.querySelector('.popNav')
let burger = document.querySelector('.header__burger')
burger.addEventListener('click', () => {
    burger.classList.add('active')
    nav.classList.add('active')
})
closeBtn.addEventListener('click', () => {
    burger.classList.remove('active')
    nav.classList.remove('active')
})


var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);


///1. ScrollAnimations 
var $containers = $('[data-animation]:not([data-animation-child]), [data-animation-container], [data-animation-start]');
$('[data-animation-start]').scrollAnimations({
    offset: 0.3
});
$containers.scrollAnimations();


///swiper
var swiper = new Swiper('.partners-slider', {
    // slidesPerView: 1,
    // effect: "creative",
    // speed: 1200,
    // autoplay: {
    //    delay: 5000
    // },
    // spaceBetween: 30,
    // centeredSlides: false,
    // loop: true,
    // autoWidth: false,
    // autoHeight: true,
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true
    // }
    effect: "flip",
    loop: true,
    slidesPerView: "auto",
    centeredSlides: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


let partnersBox = document.querySelectorAll('.partners__box')
 
for(let i = 0; i<partnersBox.length; i++){
    partnersBox[i].addEventListener('transitionend', () => {
        partnersBox[i].style.transitionDelay = '0s'
    })
}

