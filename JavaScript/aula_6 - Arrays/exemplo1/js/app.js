/*
Arrays em JavaScript

Variavel armazena apenas 1 valor
enquanto o array armazena múltiplos valores
ex01:


let frutas = ["Maça", "Banana","Uva"]

console.log(frutas)
console.log(frutas[0])


let frutas = ["Maça", "Banana","Uva"]
for(let i = 0; i < frutas.length; i++ ){
    console.log(frutas[i]+ "\n")
}



//metodos dos Arrays

push() - Adiciona um intem
pop() -  Remove o item final
shift() - remove o inicio
unshift() - Adiciona no inicio
length - Conta o tamanho do array

ex02
*/
let frutas = ["Maça", "Banana","Uva"]

frutas.push("morango")
frutas.unshift("Goiaba")
frutas.pop();

for(let i = 0; i < frutas.length; i++ ){
    console.log(frutas[i]+ "\n")
}