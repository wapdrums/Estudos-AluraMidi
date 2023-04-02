function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto bloco=laço de repetição
//while recebe verdadeiro ou falso
while(contador < 9) {
    listaDeTeclas[contador].onclick = tocaSom;

    contador = contador +1

    console.log(contador)
}
/*

Esse codigo funciona porem teria que repetir para todos os 'sons', ficaria inviavel e dificil de trabalhar, vamos trabalhar com listas para melhorar a legibilidade.

function tocaSomTim () {
    document.querySelector('#som_tecla_tim').play();

}

document.querySelector('.tecla_tim').onclick = tocaSomTim;
*/