let accordionItem = document.querySelectorAll('.accordion__item')
let accordion = document.querySelector('.accordion')
function addHidden(){
 for (let i = 0; i < accordionItem.length; i++){
  accordionItem[i].classList.add('hidden')
 }
}

for(let i = 0; i<accordionItem.length; i++){
 accordionItem[i].addEventListener('click', (e) => {
  addHidden()
  e.target.classList.toggle('active')
  e.target.classList.toggle('hidden')
  ChangeActiveSlide() 
 })
}
function ChangeActiveSlide(){
if (accordionItem[0].classList.contains('active') && accordionItem[0].classList.contains('hidden') == 0){
 accordion.style.backgroundImage = "url(../img/russian.png)"
}
 if (accordionItem[1].classList.contains('active') && accordionItem[1].classList.contains('hidden') == 0){
  accordion.style.backgroundImage = "url('../img/international.png')"
 }
 if (accordionItem[2].classList.contains('active') && accordionItem[2].classList.contains('hidden') == 0) {
  accordion.style.backgroundImage = "url('../img/infrastructura.png')"
 }
 if (accordionItem[3].classList.contains('active') && accordionItem[3].classList.contains('hidden') == 0) {
  accordion.style.backgroundImage = "url('../img/strategy.png')"
 }
}

let video = document.querySelector('.back-video')
let header = document.querySelector('.header')
let title = document.querySelector('.preview__title')
let motto = document.querySelector('.preview__motto')


window.addEventListener('click', () => {
 html.style.overflowY = "scroll"
 video.classList.add('faded')
 video.style.opacity = '0.2'
 header.classList.remove('faded')
 title.classList.remove('faded')
 motto.classList.remove('faded')
 console.log(html)
})
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
})
