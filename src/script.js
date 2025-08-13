let ano = document.getElementById("ano")
let btn = document.getElementById("calcular")
let resposta = document.querySelector("p#resposta")
const anoatual = new Date().getFullYear();
let idade = 0;

function calcularidade(ano){
    ano = Number(ano.value);
    if(ano < 1900 || isNaN(ano) || ano > anoatual){
        resposta.innerText = "infome um ano válido"
    }else{
        idade = anoatual - ano;
        resposta.innerText = `Você tem ${idade} anos.`
    }
}

btn.addEventListener("click", function(event){
    event.preventDefault()
    calcularidade(ano);
})
