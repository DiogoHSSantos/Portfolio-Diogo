const menuBurger = document.querySelector('.menuBurger');
const menu = document.querySelector('.nav');
const itemMenu = document.querySelectorAll('.itemMenu')

menuBurger.addEventListener('click', () => {
    menu.classList.toggle('active')
    menuBurger.classList.toggle('active')
})

for(let i = 0 ; i < itemMenu.length ; i++){
    itemMenu[i].addEventListener('click', () => {
        menu.classList.remove('active')
        menuBurger.classList.remove('active')
    })
}
