/*var numeroSecreto = parseInt(Math.random() *11);

function Chutar() {
    var elementoResultado = document.getElementById("resultado");
    var chute = parseInt(document.getElementById("valor").value);
    console.log(chute);
    if(chute == numeroSecreto) {
        elementoResultado.innerHTML = "Parabéns, você acertou!!!" 
    } else if(chute > 10 || chute < 0){
        elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10..." 
    } else {
        elementoResultado.innerHTML = "Eh... você errou!!!"
    }
}*/

var numeroSecreto = parseInt(Math.random() *11);

var tentativa = 1;
const totalTentativas = 3;
 
function Chutar() {
   // while(tentativa <= totalTentativas){
    var elementoResultado = document.getElementById("resultado");
    var chute = parseInt(document.getElementById("valor").value);
    console.log(chute);
    if(chute == numeroSecreto) {
        elementoResultado.innerHTML = "Parabéns, você acertou!!!" 
    } else if(chute > 10 || chute < 0){
        elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10..." 
    } else {
        
        if(numeroSecreto > chute) {
            elementoResultado.innerHTML = "Você errou! O Número secreto é maior que o número digitado. Tente novamente!"
        } else {
            elementoResultado.innerHTML = "Você errou! O Número secreto é menor que o número digitado. Tente novamente!"
        }
    }
   // tentativa ++
    //console.log(tentativa);
    //
}