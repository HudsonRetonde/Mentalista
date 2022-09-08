var numeroSecreto = parseInt(Math.random() *11);


var tentativas = 1;
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
    } else if ( tentativas >= totalTentativas) {
        elementoResultado.innerHTML = "Game Over! Seu número de tentativas acabou, o número secreto era " + numeroSecreto + "."; 
    } else {
        
        if(numeroSecreto > chute) {
            elementoResultado.innerHTML = "Você errou! O Número secreto é maior que o número digitado. Tente novamente!"
            tentativas++;
            console.log(tentativas)
        } else if (numeroSecreto < chute) {
            elementoResultado.innerHTML = "Você errou! O Número secreto é menor que o número digitado. Tente novamente!"
            tentativas++
            console.log(tentativas)
        } 
    }
   
}