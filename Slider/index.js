const downBtn= document.querySelector('.down-button')
const upBtn= document.querySelector('.up-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const container =document.querySelector('.container')
const sladesCount = mainSlide.querySelectorAll('div').length

let activSlaidIndex = 0
sidebar.style.top = 
`-${(sladesCount-1)* 100}vh`

upBtn.addEventListener('click', ()=> {
  changeSlide('up')
})

downBtn.addEventListener('click',() => {
  changeSlide('down')
})

 function changeSlide(direction){
if(direction === 'up'){
  activSlaidIndex ++
  if(activSlaidIndex ===sladesCount)
  {
    activSlaidIndex = 0
  }
} else if (direction === 'down'){
  activSlaidIndex --
  if(activSlaidIndex < 0)
  {
    activSlaidIndex = sladesCount - 1
  }
}
const height = container.clientHeight

mainSlide.style.transform = `translateY
(-${activSlaidIndex * height}px)`

sidebar.style.transform = `translateY
(${activSlaidIndex * height}px)`

 }