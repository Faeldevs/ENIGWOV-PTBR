
    var senhaCadastrada = "soubom";


    var maximoTentativas = 1;
    var tentativaAtual = 1;

    while(tentativaAtual <= maximoTentativas) {

        
        var senhaInformada = prompt("DIGITE A SENHA DA FASE 1");

        if( senhaCadastrada == senhaInformada ) {

            alert("VOCE ACERTOU!!!!");

            tentativaAtual = maximoTentativas; 

        } else {

            if (tentativaAtual == 1) {
                alert('Voce ERROUUU, tente denovo'),
                window.location.replace("/primeiro.html")
            }
        }

       
        tentativaAtual = tentativaAtual +1  
    }
