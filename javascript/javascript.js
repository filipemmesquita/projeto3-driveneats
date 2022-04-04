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

let mensagem ="";
let prato=""
let preçoprato = 0;
let bebida = "";
let preçobebida = 0;
let sobremesa = "";
let preçosobremesa = 0;
let preçototal = 0;
let nome = "";
let endereco ="";
function confirma(){
    //checa se os tres estão selecionados e então preenche as informações
    if((document.querySelector(".prato .selecionado")!==null)&&(document.querySelector(".bebida .selecionado")!==null)&&(document.querySelector(".sobremesa .selecionado")!==null)){
    
    nome = prompt("Por favor insira seu nome!");
    endereco = prompt("Por favor insira seu endereço!");
    prato= document.querySelector(".prato .selecionado h2").innerText;
    preçoprato = parseFloat(document.querySelector(".prato .selecionado span").innerText);
    bebida= document.querySelector(".bebida .selecionado h2").innerText;
    preçobebida = parseFloat(document.querySelector(".bebida .selecionado span").innerText);
    sobremesa= document.querySelector(".sobremesa .selecionado h2").innerText;
    preçosobremesa = parseFloat(document.querySelector(".sobremesa .selecionado span").innerText);
    preçototal= preçobebida+preçoprato+preçosobremesa;

//este bloco preenche a tela de confirmação e a faz aparecer
    document.querySelector(".cinza").style.cssText="display:flex;";
    document.querySelector(".confirmacao h2.prato").innerText=prato;
    document.querySelector(".confirmacao .prato.preco").innerText="R$"+preçoprato;
    document.querySelector(".confirmacao h2.bebida").innerText=bebida;
    document.querySelector(".confirmacao .bebida.preco").innerText="R$"+preçobebida;
    document.querySelector(".confirmacao h2.sobremesa").innerText=sobremesa;
    document.querySelector(".confirmacao .sobremesa.preco").innerText="R$"+preçosobremesa;
    document.querySelector(".confirmacao .total.preco").innerText="R$"+preçototal.toFixed(2);
    }

    
}
function envio(){
    mensagem = encodeURIComponent(`Olá, gostaria de fazer o pedido:
    - Prato: ${prato}
    - Bebida: ${bebida}
    - Sobremesa: ${sobremesa}
    Total: R$ ${preçototal.toFixed(2)}

    Nome: ${nome}
    Endereço: ${endereco}`)
     
    document.querySelector(".confirmacao a").target ="_blank";
    document.querySelector(".confirmacao a").href ="https://wa.me/5521981907552?text="+mensagem;
    

}
function cancelar(){
    
    document.querySelectorAll(".selecionado").classList.remove("selecionado");
    document.querySelector(".cinza").style.cssText="display:none;";
}