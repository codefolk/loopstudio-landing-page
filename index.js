const button = document.querySelector("#button");
const nav = document.querySelector(".navigation");
const ham = nav.display;
const list = nav.classList;
const open = document.querySelector("#open");
const attr = open.getAttribute("src");
const attr2 = button.getAttribute("aria-expanded");



button.addEventListener("click", ()=>{
    list.toggle("show-nav");
    if(nav.classList.contains('show-nav')){
        open.setAttribute('src', './images/icon-close.svg');
    }
    else{
        open.setAttribute('src', './images/icon-hamburger.svg');
    }

});