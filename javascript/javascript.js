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
        let nome = prompt("Por favor insira seu nome!");
        let endereco = prompt("Por favor insira seu endereço!");
        let prato= document.querySelector(".prato .selecionado h2").innerText;
        let preçoprato = parseFloat(document.querySelector(".prato .selecionado span").innerText);
        let bebida= document.querySelector(".bebida .selecionado h2").innerText;
        let preçobebida = parseFloat(document.querySelector(".bebida .selecionado span").innerText);
        let sobremesa= document.querySelector(".sobremesa .selecionado h2").innerText;
        let preçosobremesa = parseFloat(document.querySelector(".sobremesa .selecionado span").innerText);
        let preçototal= preçobebida+preçoprato+preçosobremesa;
        let mensagem = encodeURIComponent(`Olá, gostaria de fazer o pedido:
        - Prato: ${prato}
        - Bebida: ${bebida}
        - Sobremesa: ${sobremesa}
        Total: R$ ${preçototal.toFixed(2)}

        Nome: ${nome}
        Endereço: ${endereco}`)
        document.querySelector(".baixo-fixo a").href ="https://wa.me/5521981907552?text="+mensagem;
        //href="https://wa.me/5521981907552?text=testes"
        
    }
}
function envia(){
    
}