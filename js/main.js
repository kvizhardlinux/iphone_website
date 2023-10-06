const menu = document.querySelector('.menu')
const menuBtn = document.querySelectorAll('.menu__btn')

const toggleMenu = () => menu.classList.toggle('hidden')

menuBtn.forEach(btn => {
  btn.addEventListener('click', toggleMenu)
})