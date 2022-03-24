let nSecret = parseInt(Math.random() * 11); 
let qtd = 0;
let botao = document.getElementById("btJN");

resultado.innerHTML = `Você têm<br>3 tentativas`;
btJN.style.display = 'none';

// console.log(nSecret)

document.getElementById("valor").disabled = false;

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
    
    if(qtd >= 3 && chute != nSecret) {
        btJN.style.display = 'inline-block';
        btC.style.display = 'none';
        resultado.innerHTML = `=== GAME OVER ===<br>O número secreto é ${nSecret}`;
        document.getElementById("valor").disabled = true;
        valor.style.color = "white"
        // valor.style.border = "none"
    } else  if(chute == nSecret) {
        resultado.innerHTML = `PARABÉNS!<br>Você acertou na ${qtd}ª tentativa.<br>O número secreto é ${nSecret}`;
        btJN.style.display = 'inline-block';
        btC.style.display = 'none';
        valor.style.color = "white"
        document.getElementById("valor").disabled = true;
    } else if (chute >10 || chute <0) {
        alert(`Digite um número entre 0 e 10. Restam ${3-qtd} tentativa(s)`);
        valor.value = "";
        valor.focus();
    } else if (chute > nSecret){
        resultado.innerHTML = `Número muito alto...<br>Escolha outro!<br>Restam ${3-qtd} tentativa(s)`;
        valor.value = "";
        valor.focus();
        chute.value = '' // APAGA O VALOR DIGITADO
    } else if(chute < nSecret){
        resultado.innerHTML = `Número muito baixo...<br>Escolha outro!<br>Restam ${3-qtd} tentativa(s)`;
        valor.value = "";
        valor.focus();    
    } 
    
    // valor.value = "";
    // valor.focus();

} while(chute != nSecret && qtd <3);
} 