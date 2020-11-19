var caracteres= document.getElementById("mostrador").innerText;

function mostra(a){
    var idTeclas= "tecla_" + a;
    var teclas= document.getElementById(idTeclas).innerText;
    document.getElementById("mostrador").innerText= caracteres;
    caracteres += teclas;
    document.getElementById("mostrador").innerText= caracteres;
    console.log(caracteres)
}

// 10 significa soma
//20 significa subtração
//30 significa multiplicação
//40 significa divisão

function del() {
    var indexUltimo= caracteres.length-1;
    caracteres= caracteres.slice(0,indexUltimo);
    console.log(caracteres)
    document.getElementById("mostrador").innerText= caracteres;
    
} 


function final(){
    for(var i= 0; i< caracteres.length;i++){
        if(caracteres[i]== "+"){
        var resultado= caracteres.split("+");
        var resultadoFinal= Number(resultado[0])+ Number(resultado[1]);
        } else if( caracteres[i]=="-") {
            var resultado= caracteres.split("-");
            var resultadoFinal= Number(resultado[0])- Number(resultado[1]);
        } else if(caracteres[i]== "x") {
            var resultado= caracteres.split("x");
            var resultadoFinal= Number(resultado[0]) * Number(resultado[1]);
        } else if(caracteres[i]== "/"){
            var resultado= caracteres.split("/");
            var resultadoFinal= Number(resultado[0]) / Number(resultado[1]);
        }
    }console.log(resultadoFinal);
    document.getElementById("mostrador").innerText= resultadoFinal;
    caracteres="";
}