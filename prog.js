let resposta = document.getElementyById( ' resposta ')

function calcular(){
    let num1 = Number(document.getElementyById( ' num 1 ').value)
    let num2 = Number(document.getElementyById( ' num 2 ').value)
    
    let soma = num1 + num2

    resposta.innerHTML = 'Resultado da soma = ' + soma
}