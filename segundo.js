var senhaCadastrada = "bruxa";


var maximoTentativas = 3;
var tentativaAtual = 1;

while(tentativaAtual <= maximoTentativas) {

    
    var senhaInformada = prompt("DIGITE A SENHA DA FASE 2");

    if( senhaCadastrada == senhaInformada ) {

        alert("VOCE ACERTOU!!!!");

        tentativaAtual = maximoTentativas; 

    } else {

        if (tentativaAtual == 3) {
            alert('Voce ERROUUU, volte e tente denovo'),
            window.location.replace("/vasco2.html")
        }
    }

   
    tentativaAtual = tentativaAtual +1  
}
