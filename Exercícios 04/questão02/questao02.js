function soma(){
    var x = Number(document.getElementById("valor1").value);
    var y = Number(document.getElementById("valor2").value);
    var res = 0;

    for(i = x; i <= y; i++){
        res = res + i;
    }
    document.getElementById('escreverid').innerHTML = res;
}