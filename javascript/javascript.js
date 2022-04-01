function seleciona(clicado, tipo){
    let selecionado = (document.querySelector(tipo+" .selecionado"));
    if(selecionado !== null){
        selecionado.classList.remove("selecionado");
    }
    
    clicado.classList.add("selecionado");
}