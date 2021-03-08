function verifica_valores(){
    var n1 = document.getElementById("valor1").value;

    if (n1 > 0){
        alert("O número é positivo.");
    } else if(n1 == 0){
        alert("O número é zero.");

    } else if(n1 < 0){
        alert("O número é negativo.");
    }
}