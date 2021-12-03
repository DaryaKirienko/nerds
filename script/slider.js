const firstSliderBtn = document.querySelectorAll('.first-button')
const secondSliderBtn = document.querySelectorAll('.second-button')
const thirdSliderBtn = document.querySelectorAll('.third-button')
const firstSlide = document.querySelector('.slider-wrapper-1')
const secondSlide = document.querySelector('.slider-wrapper-2')
const thirdSlide = document.querySelector('.slider-wrapper-3')

firstSliderBtn.forEach(b => b.addEventListener('click', () => {
    console.log('1click')
    firstSlide.classList.add('slider-active')
    secondSlide.classList.remove('slider-active')
    thirdSlide.classList.remove('slider-active')
}))

secondSliderBtn.forEach(b => b.addEventListener('click', () => {
    console.log('2click')
    firstSlide.classList.remove('slider-active')
    secondSlide.classList.add('slider-active')
    thirdSlide.classList.remove('slider-active')
}))

thirdSliderBtn.forEach(b => b.addEventListener('click', () => {
    console.log('3click')
    firstSlide.classList.remove('slider-active')
    secondSlide.classList.remove('slider-active')
    thirdSlide.classList.add('slider-active')
}))
