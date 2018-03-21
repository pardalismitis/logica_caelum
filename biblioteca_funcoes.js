//CONVERTE VALOR INSERIDO PELO USUÁRIO (STRING) EM MENSAGEM DE POP-UP PARA NÚMERO DECIMAL (FLOAT)
//LEMBRAR DE MODIFICAR raw.githubusercontent POR rawgit

function valorInseridoPeloUsuario(mensagemPopUp){
    return parseFloat(prompt(mensagemPopUp).replace(",",".").replace("o","0"));
}

//CONVERTE VALOR CALCULADO DE NÚMERO (FLOAT) PARA TEXTO (STRING) PARA EXIBIÇÃO NA TELA

function pontoParaVirgula(valor){
return valor.toFixed(2).replace(".",",");
}

//CONVERTE VALOR INSERIDO PELO USUÁRIO (STRING) EM MENSAGEM DE POP-UP PARA NÚMERO INTEIRO (INT)

function valorInseridoPeloUsuarioInt(mensagemPopUp){
    return parseFloat(prompt(mensagemPopUp).replace(",",".").replace("o","0"));
}
