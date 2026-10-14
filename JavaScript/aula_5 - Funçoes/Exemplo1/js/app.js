/*
//Funçoe em JS

//Funçoes são blocos de códigos reutilizáveis

//função simples
 console.log("Função simples")
 function saudacao(){
    console.log("Seja bem vindo")    
 }
 saudacao()

 //função com parametros
 let nomeUser = prompt("Qual é o seu nome?")
 function saudacao2(nome){
    console.log(`Seja bem vindo ${nome}`)
 }

 saudacao2(nomeUser)

 
//Ex2 - Função com parametro e retorno
function soma(num1, num2){
    return num1 + num2
}

console.log(`A soma dos numeros é: ${soma(5,3)}`) 

*/
// ex 3 - Arrow Function

let soma = (num1, num2) => {
    return num1 + num2
}

console.log(`A soma com arrow function é: ${soma(10,10)}`)