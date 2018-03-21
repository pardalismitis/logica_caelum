//CONVERTE VALOR INSERIDO PELO USUÁRIO (STRING) EM MENSAGEM DE POP-UP PARA NÚMERO (FLOAT)
//LEMBRAR DE MODIFICAR raw.githubusercontent POR rawgit

function valorInseridoPeloUsuario(){
        return parseFloat(prompt(mensagemPopUp).replace(",",".").replace("o","0"));
}

//CONVERTE VALOR CALCULADO DE NÚMERO (FLOAT) PARA TEXTO (STRING) PARA EXIBIÇÃO NA TELA

function pontoParaVirgula(){
    return valor.toFixed(2).replace(".",",");
}
