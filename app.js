let nSecret = parseInt(Math.random() * 11); 
let qtd = 0;
let botao = document.getElementById("btJN");

resultado.innerHTML = `Você têm<br>3 tentativas`;
btJN.style.display = 'none';

function Jogar() {
    location.reload(); 
}


function Chutar() {   

    do {
 
        qtd++;

    let chute = Number(document.getElementById("valor").value);
    let resultado = document.getElementById("resultado");
    //console.log(chute);
    //console.log(qtd);

    if(chute == nSecret) {
        resultado.innerHTML = `PARABÉNS!<br><br>Você acertou! em ${qtd} tentativa(s)<br>O número secreto é ${nSecret}`;
        btJN.style.display = 'inline-block';
        btC.style.display = 'none';
    } else if (chute >10 || chute <0) {
        alert(`Digite um número entre 0 e 10. Restam ${3-qtd} tentativa(s)`);
    } else if (chute > nSecret){
        resultado.innerHTML = `Número muito alto...<br>Escolha outro!<br><br>Restam ${3-qtd} tentativa(s)`;
        chute.value = '' // APAGA O VALOR DIGITADO
    } else if(chute < nSecret){
        resultado.innerHTML = `Número muito baixo...<br>Escolha outro!<br><br>Restam ${3-qtd} tentativa(s)`;    
    }
    
} while(chute =! nSecret && qtd <3);
if(qtd >= 3) {

    btJN.style.display = 'inline-block';
    btC.style.display = 'none';
    resultado.innerHTML = `=== GAME OVER ===<br>O número secreto é ${nSecret}`;
} 
}