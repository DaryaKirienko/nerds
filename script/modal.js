const modalWindow = document.querySelector('.modal-window')
const openBtn = document.querySelector('.connect-button')
const closeBtn = document.querySelector('.close-button')

openBtn.addEventListener('click', () => {
    modalWindow.classList.add('modal-show')
})

closeBtn.addEventListener('click', () => {
    modalWindow.classList.remove('modal-show')
})