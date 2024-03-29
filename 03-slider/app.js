const downBtn = document.querySelector('.down-button')
const upBtn = document.querySelector('.up-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const container = document.querySelector('.container')

const slidesCount =  mainSlide.querySelectorAll('div').length

let activeSlideIndex = 0;


sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
    changeSlide('up')
})

downBtn.addEventListener('click', () => {
    changeSlide('down')
})

function changeSlide(direction){
    if(direction === 'up'){
        activeSlideIndex++
        if(activeSlideIndex === slidesCount){
            activeSlideIndex = 0
        }
    } else if (direction === 'down'){
        activeSlideIndex--
        if(activeSlideIndex < 0){
            activeSlideIndex = slidesCount -1
        }
    }


    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`

    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}

var globalVar = 'global'
var outerVar = 'outer'

function outerFunc(outerParam) {
    function innerFunc(innerParam) {
        console.log(globalVar, outerParam, innerParam)
    }
    return innerFunc
}

const x = outerFunc(outerVar)
outerVar = 'outer-2'
globalVar = 'guess'
x('inner')