// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];
let listaAmigos = document.getElementById('amigo');
let resultado = document.getElementById('resultado');
let input = document.getElementById('amigo')

function agregarAmigo(){
    let nombre=input.value();
    //guardar el array
    if (nombre!=''){
        nombres.push(nombre);
        generarLista();
        input.value='';
    }
}
function generarLista(){
    
}