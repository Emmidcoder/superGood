'use strict'

const overlay = document.querySelector('.overlay')
const navBtn = document.querySelector('.navbar__nav-button')
const checkbox = document.querySelector('.navbar__nav-checkbox')

navBtn.addEventListener('click', () => {
    checkbox.checked === false ? overlay.style.display = "block" : overlay.style.display = "none";
})


