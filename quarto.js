var senhaCadastrada = "guarda";


var maximoTentativas = 3;
var tentativaAtual = 1;
alert('ATENÇÃO: 3 TENTATIVAS, OU VOLTARÁ A FASE ANTERIOR')
while(tentativaAtual <= maximoTentativas) {

    
    var senhaInformada = prompt("DIGITE A SENHA DA FASE 4");

    if( senhaCadastrada == senhaInformada ) {

        alert("VOCE ACERTOU!!!!");

        tentativaAtual = maximoTentativas; 

    } else {

        if (tentativaAtual == 3) {
            alert('Voce ERROUUU, volte e tente denovo'),
            window.location.replace("/pastelzinho01.html")
        }
    }

   
    tentativaAtual = tentativaAtual +1  
}