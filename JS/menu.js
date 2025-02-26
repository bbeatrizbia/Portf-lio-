
let btnMenu = document.getElementById('abrir')
let menu = document.getElementById('mobile-menu')
let fechar = document.getElementById('base')

btnMenu.addEventListener('click', ()=>{  //quando o item "abrir" for clicado
    menu.classList.add('abrir-menu') // vai abrir o item abrir menu dentro mobile menu
})

menu.addEventListener('click', ()=>{  //quando o item "mobile-menu" for clicado
    menu.classList.remove('abrir-menu') // vai fecher o item mobile menu
})

fechar.addEventListener('click', ()=>{  //quando o item "base" for clicado
    menu.classList.remove('abrir-menu') // vai fechar o item mobile menu
})

