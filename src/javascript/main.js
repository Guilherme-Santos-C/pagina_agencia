
/**
 * ao passar o mouse sobre o item da lista modifica as classes aplicando uma borda com animação 
 */
const item_lista_nav_header = document.querySelectorAll(".items-list-nav");
item_lista_nav_header.forEach((item_lista) => {
    let div_border_bottom_effect = item_lista.children[1]
    if(item_lista.children[0].id != "contact-item-navbar"){
        item_lista.addEventListener("mouseover", () => {
            div_border_bottom_effect.className = "border-bottom-link animate__animated animate__slideInLeft"
        })
        item_lista.addEventListener("mouseout", () => {
            div_border_bottom_effect.className = "";
        })
    }
})

/**
 * altera a exposição da barra de tarefas alterando as classes a apartir da rolagem da tela
 */
const navbar = document.getElementsByTagName("header")[0];
document.addEventListener("scroll", () => {
    if(window.scrollY > 100){
        navbar.classList.remove("header-onTop")
        navbar.classList.add("header-offTop")
    }else{
        navbar.classList.remove("header-offTop")
        navbar.classList.add("header-onTop")
    }
});

console.log("fim")