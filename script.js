//FUNCIONAMENTO DA BARRA DE SEPARAÇÃO DO MENU E OPACIDADE DO MENU AO DAR SCROLL
const header = document.getElementById("inicio");
window.addEventListener('scroll',()=>{
    if(window.scrollY > 50){
        header.classList.add("bg-[#09090b]/80","bolder-white/10","backdrop-blur-md");
        header.classList.remove("bg-transparent","border-transparent")
    }else{
        header.classList.remove("bg-[#09090b]/80","bolder-white/10","backdrop-blur-md");
        header.classList.add("bg-transparent","border-transparent")
    }
})

// Efeito fade-in para os elementos do main
const main = document.querySelector("main");
document.addEventListener("DOMContentLoaded",()=>{
    setTimeout(()=>{
        main.classList.remove("opacity-0", "translate-y-10");
    },500);
})