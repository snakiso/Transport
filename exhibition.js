let accordionItem = document.querySelectorAll('.accordion__item')
let accordionBtn = document.querySelectorAll('.accordion__button') 
let accordion = document.querySelector('.accordion')
function addHidden(){
 for (let i = 0; i < accordionItem.length; i++){
  accordionItem[i].classList.add('hidden')
 }
}

for(let i = 0; i<accordionItem.length; i++){
 accordionItem[i].addEventListener('click', () => {
  addHidden()
  accordionItem[i].classList.add('active')
  accordionItem[i].classList.remove('hidden')
  ChangeActiveSlide() 
 })
}
function ChangeActiveSlide(){
if (accordionItem[0].classList.contains('active') && accordionItem[0].classList.contains('hidden') == 0){
 accordion.style.backgroundImage = "url(./img/russian.png)"
}
 if (accordionItem[1].classList.contains('active') && accordionItem[1].classList.contains('hidden') == 0){
  accordion.style.backgroundImage = "url('./img/international.png')"
 }
 if (accordionItem[2].classList.contains('active') && accordionItem[2].classList.contains('hidden') == 0) {
  accordion.style.backgroundImage = "url('./img/infrastructura.png')"
 }
 if (accordionItem[3].classList.contains('active') && accordionItem[3].classList.contains('hidden') == 0) {
  accordion.style.backgroundImage = "url('./img/strategy.png')"
 }
}
// Код для видео 
let video = document.querySelector('.back-video')
let header = document.querySelector('.header')
let title = document.querySelector('.preview__title')
let motto = document.querySelector('.preview__motto')
let dateShow = document.querySelector('.show-date')



window.addEventListener('click', () => {
 video.classList.add('faded')
 video.style.opacity = '0.2'
 header.classList.remove('faded')
 title.classList.remove('faded')
 motto.classList.remove('faded')
})
window.addEventListener('scroll', () => {
 video.classList.add('faded')
 video.style.opacity = '0.2'
 header.classList.remove('faded')
 title.classList.remove('faded')
 motto.classList.remove('faded')
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