addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn-menu')
    if(btn_menu){
        btn_menu.addEventListener('click', () => {
            const items_menu = document.querySelector('.nav-items')
            items_menu.classList.toggle('show')
            const items_search = document.querySelector('.search-header')
            items_search.classList.toggle('show')
            const items_cartlog = document.querySelector('.cart-login')
            items_cartlog.classList.toggle('show')
        })
    }
})