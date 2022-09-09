/*---------------------------------HEAD----------------------------------------------*/
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
/*---------------------------------CARDS SECTION TWO----------------------------------------------*/
let populares = [
    {
        product: "Floors SPC",
        price: "21 K",
        measureOne: "130em",
        measureTwo: "230em",
        score: 4.8,
        poster: "https://i.im.ge/2022/09/09/OHCv34.Home2.jpg",
        cart: "https://i.im.ge/2022/09/09/OHfvqa.Frame-5.png"
    },
    {
        product: "Blinds PVC",
        price: "12 K",
        measureOne: "100cm",
        measureTwo: "150cm",
        score: 4.5,
        poster: "https://i.im.ge/2022/09/09/OHEAaC.Home3.jpg",
        cart: "https://i.im.ge/2022/09/09/OHfvqa.Frame-5.png"
    },
    {
        product: "Carpet Tile",
        price: "23 K",
        measureOne: "120cm",
        measureTwo: "240cm",
        score: 4.2,
        poster: "https://i.im.ge/2022/09/09/OHEYw1.Home4.jpg",
        cart: "https://i.im.ge/2022/09/09/OHfvqa.Frame-5.png"
    },
]

const contenedor = document.querySelector('#container-cards');

function crearCard(popular)
{
    let card = `<div class="card">
                    <button id="btn-score">${popular.score}<i class="fa-solid fa-star"></i></button>
                    <img class="img-card" src="${popular.poster}" alt="${popular.product}">
                    <h4>${popular.product} <span>${popular.price}</span></h4>
                    <div class="meht">
                        <button id="btn-left">${popular.measureOne}<button id="btn-right">${popular.measureTwo}</button><img class="img-cart" src="${popular.cart}"></button>    
                    </div>              
                </div>`;
    contenedor.innerHTML += card;
};

function renderizarPopulares(){
    contenedor.innerHTML = '';
    populares.forEach(popular => {
        crearCard(popular)
    })};
    
renderizarPopulares();