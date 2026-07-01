const prompt = require('prompt-sync')();
let nota1 = Number(prompt("Digite a primeira nota: "));
let nota2 = Number(prompt("Digite a segunda nota: "));
let media = (nota1 + nota2) / 2;
if (media > 75) {
    console.log("Aprovado direto");
} else if (media >= 60 && media <= 75) {
    console.log("Aluno Recuperação");
} else {
    console.log("Reprovado direto");
}