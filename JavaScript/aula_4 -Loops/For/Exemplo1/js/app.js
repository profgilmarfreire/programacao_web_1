console.log("bem vindo a nossa tabuada")
/*
//Estrutura do loop for

Se divide em 3 partes
1° parte - variavel contadora
2° parte - Condição
3° parte - Incremento


for(let i = 1; i<=5; i++){
    console.log(`${i}° volta do loop for`);
}

console.log(`Calculadora`);

alert("bem vindo a nossa tabuada")
let escolha = Number(prompt("Escolha o numero da sua tabuada"))
for(let i = 0; i <=10; i++){
    console.log(`${escolha} x ${i} = ${escolha*i}\n`)
}



//Controles do loops

//Break para o loop quando atender uma condição
alert("bem vindo a nossa tabuada")
let escolha = Number(prompt("Escolha o numero da sua tabuada"))
for(let i = 0; i <=10; i++){
    if(i == 5){
        break
    }
    console.log(`${escolha} x ${i} = ${escolha*i}\n`)
}

*/

//Continue - Serve para pular a proxima instrução mas mantem o loop

alert("bem vindo a nossa tabuada")
let escolha = Number(prompt("Escolha o numero da sua tabuada"))
for(let i = 0; i <=10; i++){
    if(i == 5){
        continue
    }
    console.log(`${escolha} x ${i} = ${escolha*i}\n`)
}