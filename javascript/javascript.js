function seleciona(clicado, tipo){
    let selecionado = (document.querySelector(tipo+" .selecionado"));
    if(selecionado !== null){
        selecionado.classList.remove("selecionado");
    }
    
    clicado.classList.add("selecionado");
//esse if checa para ver se as tres opções foram selecionadas
    if((document.querySelector(".prato .selecionado")!==null)&&(document.querySelector(".bebida .selecionado")!==null)&&(document.querySelector(".sobremesa .selecionado")!==null)){
        const botao = document.querySelector(".baixo-fixo button");
        botao.innerText=("Realizar pedido")
        botao.classList.add("fechado")
        
    }
}