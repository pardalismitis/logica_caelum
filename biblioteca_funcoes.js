function valorInseridoPeloUsuario(){
        return parseFloat(prompt(mensagemPopUp).replace(",",".").replace("o","0"));
}

function pontoParaVirgula(){
    return valor.toFixed(2).replace(".",",");
}
