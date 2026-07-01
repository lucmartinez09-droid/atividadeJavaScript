const prompt = require("prompt-sync")();

let idade = Number(prompt("Digite sua idade: "));

if(idade >= 18){
    console.log("Entrou na festa");
}else{
    console.log ("Não entrou na festa");
}