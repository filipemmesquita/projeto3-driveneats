function seleciona(clicado, tipo){
    let selecaoAnterior = (document.querySelector(tipo+" .selecionado"));
    let tiqueAnterior = (document.querySelector(tipo+" .selecionado .tique"));
    if(selecaoAnterior !== null){
        selecaoAnterior.classList.remove("selecionado");
        selecaoAnterior.style.cssText ="Border-color:#ffffff";
        tiqueAnterior.style.cssText ="visibility:hidden;"
    }
    
    clicado.classList.add("selecionado");
    clicado.style.cssText ="Border-color:#32B72F";
    tiqueClicado = (clicado.querySelector(".tique"));
    tiqueClicado.style.cssText ="visibility:visible;"

//esse if checa para ver se as tres opções foram selecionadas
    if((document.querySelector(".prato .selecionado")!==null)&&(document.querySelector(".bebida .selecionado")!==null)&&(document.querySelector(".sobremesa .selecionado")!==null)){
        const botao = document.querySelector(".baixo-fixo button");
        botao.innerText=("Realizar pedido")
        botao.classList.add("fechado")
        
    }
}