/* planega antes de começar a fazer o código */

const botao = document.querySelector(".btn-plataforma");

const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {

    elementoPlataformas.classList.remove("ativo");
    
     const botaoEstaAberto = elementoPlataformas.classList.contains("ativo");
     

     if(botaoEstaAberto){
        elementoPlataformas.classList.remove("ativo");
     }else{
        elementoPlataformas.classList.add("ativo");
     }
    
});

