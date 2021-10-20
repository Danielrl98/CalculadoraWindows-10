
function Porcento() {
    var numero = document.querySelector("a#resultado").innerHTML;
    document.querySelector(" a#resultado").innerHTML;
   
   if(numero){
       document.querySelector("a#resultado").innerHTML = eval(numero+'**2/100')
    }
   
    }
function LimpaTudo(total){
document.querySelector("input#holder").classList.remove("holder")
var numero = document.querySelector("a#resultado").innerHTML;
document.querySelector("a#resultado").innerHTML = ''

}
function Limpa() {
var resultado = document.querySelector("a#resultado").innerHTML;
document.querySelector("a#resultado").innerHTML = resultado.substring(0, resultado.length -1)
}
function insert(total) {
    document.querySelector("input#holder").classList.add("holder")

var numero = document.querySelector(" a#resultado").innerHTML;
document.querySelector(" a#resultado").innerHTML = numero + total

}

function Dividir(total) {
    var numero = document.querySelector(" a#resultado").innerHTML;
    document.querySelector(" a#resultado").innerHTML = numero + total
    if(numero){
        document.querySelector("a#resultado").innerHTML = eval(numero)+'/'
     }
}

function Vezes(total) {
var numero = document.querySelector(" a#resultado").innerHTML;
document.querySelector(" a#resultado").innerHTML = numero + total
if(numero){
    document.querySelector("a#resultado").innerHTML = eval(numero)+'*'
}
}

function Menos(total) {
var numero = document.querySelector("a#resultado").innerHTML;
document.querySelector("a#resultado").innerHTML = numero + total
if(numero){
    document.querySelector("a#resultado").innerHTML = eval(numero)+'-'
 }
}

function Mais(total) {
var numero = document.querySelector("a#resultado").innerHTML;
document.querySelector("a#resultado").innerHTML = numero + total
if(numero){
   document.querySelector("a#resultado").innerHTML = eval(numero)+'+'
}

}
function MaisMenos(total) {
var numero = document.querySelector("a#resultado").innerHTML;
document.querySelector("a#resultado").innerHTML = numero + total
if(numero){
   document.querySelector("a#resultado").innerHTML = eval(numero)*-1
 }
}
function Ponto(total) {
var numero = document.querySelector("a#resultado").innerHTML;
document.querySelector("a#resultado").innerHTML = numero + total
}
function Calcular() {
    
var numero = document.querySelector("a#resultado").innerHTML;




if(numero){
    document.querySelector("a#resultado").innerHTML = eval(numero)
}



}

