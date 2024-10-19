function adicionarCaracter(caracter){
    const valorImput = document.querySelector('.display').value
   
    document.querySelector('.display').value = valorImput + caracter

}

function limparTela() {

    document.querySelector('.display').value = ''


}

function calcular() {

    const valorImput = document.querySelector('.display').value
    document.querySelector('.display').value = eval(valorImput)


}

function inverte(){

    const valorImput = document.querySelector('.display').value

    document.querySelector('.display').value = valorImput * -1

}
