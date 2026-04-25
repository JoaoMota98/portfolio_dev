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

//API Github para pegar os repositórios do usuário
async function getRepos(){ 
    const reposJv = await fetch("https://api.github.com/users/JoaoMota98/repos");
    const repos = await reposJv.json();

    const meusFavoritos = repos.filter(projetos => projetos.topics.includes('portfolio'))
    console.log("Todos os projetos:",repos);
    console.log("Meus favoritos:",meusFavoritos);

    const listaProjetos = document.getElementById("lista-projetos");

    const htmlProjetos = meusFavoritos.map(projeto => {
        const imagemUrl = `https://raw.githubusercontent.com/JoaoMota98/${projeto.name}/main/src/images/preview.png`;
        return `
        <div class="flex-none w-full sm:w-[350px] backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-[#7988f9] hover:border-2 transition-all flex flex-col items-center hover:scale-105 hover:shadow-[0_0_20px_#7988f9] gap-3">

            <h3 class="w-full sm:w-[350px]text-[18px] font-bold text-white mb-2 text-center">${projeto.name}</h3>

            <p class="text-gray-400 text-sm mb-4 text-center">${projeto.description || "Sem descrição"}</p>

            <img src="${imagemUrl}" alt="Preview" class="w-full h-48 object-cover rounded-lg" onerror="this.src='https://placehold.co/600x400/1e1e1e/7988f9?text=Em+Breve'">

            <a href="${projeto.homepage}" target="_blank" class="text-[#7988f9] font-medium border border-white/10 px-4 py-2 rounded-lg transition-colors no-underline">
                Ver Deploy
            </a>

            <a href="${projeto.html_url}" target="_blank" class="text-[#7988f9] font-medium border border-white/10 px-4 py-2 rounded-lg transition-colors no-underline">
                Ver Repositório
            </a>
        </div>
    `;
}).join(''); 

listaProjetos.innerHTML = htmlProjetos;

}

getRepos();