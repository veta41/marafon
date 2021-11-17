const board = document.querySelector('#board')
const SQUARES_NUMBER = 600
const colors = ['#00FA9A', '#20B2AA', '#1E90FF', '#4169E1', '#0000FF', '#800080', '#00FF00', '#FFFF00', '#A52A2A', '#EE82EE', '#4B0082', '#FF0000']

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () =>
  setColor(square))

  square.addEventListener('mouseleave', () =>
  removeColor(square))

  board.append(square)
  
}

function  setColor(el){
  const color = getColor()
  el.style.backgroundColor =color
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function  removeColor(el){
  el.style.backgroundColor ='#202020'
  el.style.boxShadow = `0 0 2px #554f4fe5`
}

function getColor(){
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}