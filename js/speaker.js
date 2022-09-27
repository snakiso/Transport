let names = document.querySelectorAll('.swiper-slide');
let speakerPhoto = document.querySelector('.speakers__photo');
let swiperSpeaker = document.querySelector('.speakers-swiper');
let text = document.querySelector('.speakers__position');
let nextBtn = document.querySelector('.swiper-button-next');
let prevBtn = document.querySelector('.swiper-button-prev');
let photoArr = [];
let firstNameArr = [];
let lastNameArr = [];
let positionArr = [];
let total = 0 //общее количество спикеров
let translateY = 0 // общая высота слайдера
let randomX = 0;
let randomY = 0;
let zIndex = 1;
let step = 0;
let index = 0;



///функция создания элементов
create = () => {

  for (let i = 0; i < photoArr.length; i++) {
    let figure = document.createElement("figure");
    figure.className = 'speaker';
    let img = document.createElement("img");
    img.src = `https://2022.transweek.digital${photoArr[i]}`;
    figure.appendChild(img);
    speakerPhoto.appendChild(figure);

    let div = document.createElement("div");
    div.className = 'swiper-slide';
    let p = document.createElement("p");
    p.textContent = `${firstNameArr[i]} ${lastNameArr[i]}`;
    div.appendChild(p);
    swiperSpeaker.appendChild(div);
  }
}
///
window.addEventListener('load', async function () {
  let url = 'get.json'
  let response = await fetch(url)
  let json = await response.json();
  json.forEach(elem => {
    firstNameArr.push(elem.FIRST_NAME);
    photoArr.push(elem.PREVIEW_PICTURE);
    positionArr.push(elem.POST);
    lastNameArr.push(elem.LAST_NAME)
  })
  total = json.length - 1
  translateY = total * 85
  create()
  random()
  text.textContent = positionArr[0]
  document.querySelectorAll('.speaker')[0].style.opacity = '1'
  document.querySelectorAll('.speaker')[0].style.transform = `translate(${randomX}%,${randomY}%)`
  document.querySelectorAll('.speaker')[0].style.zIndex = zIndex
  document.querySelectorAll('.swiper-slide')[0].classList.add('active')
  checkedActive()
  clickOnName()
})



function random() {
  randomX = Math.floor(Math.random() * 10)
  randomY = Math.floor(Math.random() * 10)
} // рандомное значение transform

function removeClass() {
  for (let i = 0; i < photoArr.length; i++) {
    document.querySelectorAll('.swiper-slide')[i].classList.remove('active')
  }
} // удаление класс active

async function checkedActive() {
  for (let i = 0; i < document.querySelectorAll('.swiper-slide').length; i++) {
    if (document.querySelectorAll('.swiper-slide')[i].classList.contains('active')) {
      document.querySelectorAll('.speaker')[i].style.opacity = '1'
      document.querySelectorAll('.speaker')[i].style.transform = `translate(${randomX}%,${randomY}%)`
      document.querySelectorAll('.speaker')[i].style.zIndex = zIndex++
      text.textContent = positionArr[i]
    }
  }
} // сравнение класса актив с фото 



function swiperMoveDown() {
  if (step == -translateY) {
    step = 85
  }
  step = step - 85
  swiperSpeaker.style.transform = `translateY(${step}px)`
}


function swiperMoveUp() {
  if (step === 0) {
    step = -translateY - 85
  }
  step = step + 85
  swiperSpeaker.style.transform = `translateY(${step}px)`
}


function addActiveDown() {
  if (index == total) {
    index = -1
  }
  index++
  document.querySelectorAll('.swiper-slide')[index].classList.add('active')
}


function addActiveUp() {
  if (index == 0) {
    index = total + 1
  }
  index--
  document.querySelectorAll('.swiper-slide')[index].classList.add('active')
}

///Клик на стрелку вниз 
nextBtn.addEventListener('click', () => {
  random()
  removeClass()
  addActiveDown()
  checkedActive()
  swiperMoveDown()
})

///Клик на стрелку вверх 
prevBtn.addEventListener('click', () => {
  random()
  removeClass()
  addActiveUp()
  checkedActive()
  swiperMoveUp()
})

///Функция нажатия на имя 
function clickOnName() {
  for (let i = 0; i < total + 1; i++) {
    document.querySelectorAll('.swiper-slide')[i].addEventListener('click', () => {
      random()
      removeClass()
      document.querySelectorAll('.swiper-slide')[i].classList.add('active')
      step = -i * 85
      index = i
      swiperSpeaker.style.transform = `translateY(${-i * 85}px)`
      checkedActive()
    })
  }
  
}