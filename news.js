let newsName = document.querySelectorAll('.news__name')
let newsContent = document.querySelectorAll('.news__content')
let date = document.querySelectorAll('.date')
let nextNews = document.querySelector('.next-news')
let prevNews = document.querySelector('.prev-news')
let page = 0

function opacityNull(){
 for(let i = 0; i<newsName.length; i++ ){
 newsName[i].style.opacity = '0'
 newsContent[i].style.opacity = '0'
 date[i].style.opacity = '0'
 }
}
function opacityOne(){
 for (let i = 0; i < newsName.length; i++) {
  newsName[i].style.opacity = '1'
  newsContent[i].style.opacity = '1'
  date[i].style.opacity = '1'
 }
}

async function changeContent(){
 let url = `https://itsjournal.ru/test2/?PAGEN_1=${page}`
 let response = await fetch(url)
 let json = await response.json();
 for (let i = 0; i < json.length; i++) {
  newsName[i].textContent = json[i].Name
  newsContent[i].textContent = json[i].Description
  date[i].textContent = json[i].Date
 }
}

nextNews.addEventListener('click', async function(){
 opacityNull()
 ++page
 setTimeout(changeContent, 600)
 setTimeout(opacityOne, 1000)
})

prevNews.addEventListener('click', async function () {
 opacityNull()
 if(page == 0){
  page = 10
 }
 page = page-1
 setTimeout(changeContent, 600)
 setTimeout(opacityOne, 1000)
})