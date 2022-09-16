let speaker = document.querySelectorAll('.speaker')
let names = document.querySelectorAll('.swiper-slide')
let swiperSpeakers = document.querySelector('.swiper-wrapper')
let text = document.querySelector('.speakers__position')
let randomX = 0
let randomY = 0
let zIndex = 1
let step = 0
let index = 0
let nextBtn = document.querySelector('.swiper-button-next')
let prevBtn = document.querySelector('.swiper-button-prev')

window.addEventListener('load', () => {
 random()
 speaker[0].style.opacity = '1'
 speaker[0].style.transform = `translate(${randomX}%,${randomY}%)`
 speaker[0].style.zIndex = zIndex
})

async function takeInfo() {
 let url = 'speakers.json'
 let response = await fetch(url)
 let json = await response.json();
 console.log(json[0].name)
}


function random() {
 randomX = Math.floor(Math.random() * 10)
 randomY = Math.floor(Math.random() * 10)
} // рандомное значение transform

function removeClass(){
 for (let i = 0; i < names.length; i++){
  names[i].classList.remove('active')
 }
} // удаление класс active


async function checkedActive(){
  let url = 'speakers.json'
  let response = await fetch(url)
  let json = await response.json();
 for (let i = 0; i < names.length; i++) {
  if (names[i].classList.contains('active')){
   speaker[i].style.opacity = '1'
   speaker[i].style.transform = `translate(${randomX}%,${randomY}%)`
   speaker[i].style.zIndex = zIndex++
   text.textContent = json[i].description
  }
 }
} // сравнение класса актив с фото 


function swiperMoveDown(){
  if (step == -1870) {
    step = 85
  }
 step = step - 85
 swiperSpeakers.style.transform = `translateY(${step}px)`
} 


function swiperMoveUp() {
 if (step === 0) {
  step = -1955
 }
 step = step + 85
 swiperSpeakers.style.transform = `translateY(${step}px)`
} 


function addActiveDown(){
 if (index == 22) {
  index = -1
 }
 index++
 names[index].classList.add('active')
} 


function addActiveUp() {
 if (index == 0) {
  index = 23
 }
 index--
 names[index].classList.add('active')
} 


 nextBtn.addEventListener('click', () => {
  random()
  removeClass()
  addActiveDown()
  checkedActive()
  swiperMoveDown()
 })

 prevBtn.addEventListener('click', () => {
  random()
  removeClass()
  addActiveUp()
  checkedActive()
  swiperMoveUp()
 })

for(let i = 0; i < names.length; i++){
  names[i].addEventListener('click', () => {
    random()
    removeClass()
    names[i].classList.add('active')
    step = -i*85
    index = i
    swiperSpeakers.style.transform = `translateY(${-i*85}px)`
    checkedActive()
  })
}