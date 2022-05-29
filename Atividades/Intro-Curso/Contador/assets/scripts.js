let contador = 0;

const current_number = document.getElementById('currentNumber');

function incrementar() {
    contador ++;
    current_number.innerHTML = contador;
}

function decrementar() {
    current_number.innerHTML = contador;
    contador --;
}