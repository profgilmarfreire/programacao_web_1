/*
Operadores Logicos

&& -> (and/E) lógico
|| -> (or/OU) lógico
!  -> (NOT/NÃO) lógico
*/

// Exemplos simples

let num1 = 10
let num2 = 15
let num3 = 2

console.log("Condiçoes Simples")
if(num1 >= num2){
    console.log("Entrou no IF")
}else{
    console.log("(FALSIANE!)NAO ENTROU NO IF")
}

//Exemplo composto

console.log("Condiçoes Compostas")

if((num1 >= num2) && (num1 != num3)){
    console.log("Entrou no IF")
}else{
    console.log("(FALSIANE!)NAO ENTROU NO IF")
}

//Exemplo com 3 condições

console.log("Condiçoes com 3 situações")

if(((num1 >= num2) && (num1 != num3)) || (num1 != num3) ){
    console.log("Entrou no IF")
}else{
    console.log("(FALSIANE!)NAO ENTROU NO IF")
}

//Condição Simples negada
console.log("Condição Simples negada")
if(!(num1 >= num2)){
    console.log("Entrou no IF")
}else{
    console.log("(FALSIANE!)NAO ENTROU NO IF")
}