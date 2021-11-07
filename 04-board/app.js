const board = document.querySelector('#board')
const SQUARES_NUMBER = 1110
const colors = ['#F0FFFF', '#FAEBD7', '#F5F5DC', '#FFE4C4', '#FFEBCD', '#FFF8DC', '#8FBC8F', '#FFF0F5', '#FFFFF0','#E0FFFF' ]
const squareClassname = 'square';

for (let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add(squareClassname)

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

// board.addEventListener('mouseover', ({target}) => {
//     if (isSquareTarget(target)) {
//         setColor(target);
//     }
// })

// board.addEventListener('mouseout', ({target}) => {
//     if (isSquareTarget(target)) {
//         removeColor(target);
//     }
// })

function isSquareTarget(target) {
    const targetClassname = target?.className;

    return targetClassname === squareClassname;
}

function setColor(element){
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor(){
   const index =  Math.floor(Math.random() * colors.length)
   return colors[index]
}