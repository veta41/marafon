const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList =document.querySelector('#time-list')
const timeEl =document.querySelector('#time')
const board = document.querySelector('#board')
const colors = ['#00FA9A', '#20B2AA', '#1E90FF', '#4169E1', '#0000FF', '#800080', '#00FF00', '#FFFF00', '#A52A2A', '#EE82EE', '#4B0082', '#FF0000']

let time = 0
let score = 0

startBtn.addEventListener('click', (e)=>{
  e.preventDefault()
  screens[0].classList.add('up')
})

timeList.addEventListener('click', e =>{
  if(e.target.classList.contains('time-btn')){
    time =parseInt(e.target.getAttribute('data-time'))
    screens[1].classList.add('up')
    startGame()
  }
})

board.addEventListener('click', e => {
  if(e.target.classList.contains('circle')){
score++
e.target.remove()
createRandomCircle()
  }
})

function startGame() {
  setInterval(decreaseTime, 1000);
  createRandomCircle()
  setTime(time)
  
}

function decreaseTime() {
  if (time===0) {
    finishGame()
  } else {
  let current = --time
  if (current < 10) {
    current = `0${current}`
  }
  setTime(current)
  }
}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`
}

function finishGame() {
  timeEl.parentNode.classList.add('hide')
  board.innerHTML = `<h2> Счет: <span class ="primary">${score}</span></h2>`

}

function createRandomCircle() {
const circle = document.createElement('div')
const size = getRandomNumber(10, 60)
const color = getColor(circle)
const {width, height} = board.getBoundingClientRect()
const x = getRandomNumber(0, width - size)
const y = getRandomNumber(0, height - size)

circle.classList.add('circle')
circle.style.width =`${size}px`
circle.style.height =`${size}px`
circle.style.top =`${y}px`
circle.style.left =`${x}px`
circle.style.backgroundColor =color
circle.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`

board.append(circle)
  
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}



function getColor(){
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}