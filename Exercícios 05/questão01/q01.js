
    function compara(a,b){
        return a - b;
    }

        var a = 0;
    function ex_q1(){
        var vetor = [];
        for(i = 0; i < 10;  i++){
             a = prompt("Digite um valor");
             vetor[i] = a;
        }

        r = "<br>os nº inseridos: <br>" + vetor + "<br><br>Ordenados: <br>" + vetor.sort(compara); 
        document.getElementById("teste").innerHTML = r;
    }
