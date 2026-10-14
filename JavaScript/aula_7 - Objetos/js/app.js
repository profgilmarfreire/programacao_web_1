/*
Obejetos armazenam dados organizados ex: propriedade e valor
ex01:
*/

let aluno = {
    nome: "Carlos",
    idade: 20,
    curso: "Desenvolvimento de Sistemas"
}

for (let chave in aluno) {
    console.log(`${chave}: ${aluno[chave]}`);
}


