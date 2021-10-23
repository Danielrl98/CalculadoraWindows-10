
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
document.querySelector("a#resultado").innerHTML = resultado.slice(0, resultado.length-1)
}
function Umpranumero(total) {
    var resultado = document.querySelector("a#resultado").innerHTML;
    document.querySelector("a#resultado").innerHTML =  resultado + total
    if(resultado){
        document.querySelector("a#resultado").innerHTML = eval('1/'+resultado)
     } if (resultado.length == 0){
       window.alert("Não é possível dividir por zero")
       document.querySelector("a#resultado").innerHTML =  resultado *1
     }
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
function Exponencial(total) {
    var numero = document.querySelector("a#resultado").innerHTML;
    document.querySelector("a#resultado").innerHTML = numero + total
    if(numero){
        document.querySelector("a#resultado").innerHTML = eval(numero)**2
     }
     if(numero.length == 0){
        document.querySelector("a#resultado").innerHTML = '0'
     }
}
function Radical(total) {
    var numero = document.querySelector("a#resultado").innerHTML;
    document.querySelector("a#resultado").innerHTML = numero + total
    
    if(numero){
       
        document.querySelector("a#resultado").innerHTML = Math.sqrt(numero)
      
                

    } if(numero.length == 0){
        document.querySelector("a#resultado").innerHTML = '0'
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
 if(numero.length == 0){
    document.querySelector("a#resultado").innerHTML = '-'
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

    
 window.addEventListener('click',function Logar() {
    let numero = document.querySelector("a#resultado").innerHTML;
    


    if(numero.length < 11){
        console.log('ok')
        document.querySelector("a#resultado").style.font = " normal 35pt arial"
        document.querySelector("a#resultado").style.maxWidth = '11ch'
     }


   if(numero.length >= 11){
      console.log('ok')
      document.querySelector("a#resultado").style.font = " normal 30pt arial"
      document.querySelector("a#resultado").style.maxWidth = '15ch'
   }
   if(numero.length >= 14){
    console.log('ok')
      document.querySelector("a#resultado").style.font = " normal 25pt arial"
      document.querySelector("a#resultado").style.maxWidth = '17ch'
 }
 if(numero.length >= 17){
    console.log('ok')
      document.querySelector("a#resultado").style.font = " normal 20pt arial"
      document.querySelector("a#resultado").style.maxWidth = '21ch'
 }
 if(numero.length >= 21){
    console.log('ok')
      document.querySelector("a#resultado").style.font = " normal 15pt arial"
      document.querySelector("a#resultado").style.maxWidth = '28ch'
 }
 if(numero.length >= 28){
    console.log('ok')
      document.querySelector("a#resultado").style.font = " normal 10pt arial"
      document.querySelector("a#resultado").style.maxWidth = '48ch'
 }
 if(numero.length >= 48){
    
    window.alert('Valor maior que o esperado')
     
 }

 })
 function MenuH() {
    

    document.querySelector('img').classList.toggle('menuimg')
    document.querySelector('span').classList.toggle('menuh')
    document.querySelector('span').classList.toggle('menuitens')
    document.querySelector('strong').style.position = 'relative'
    var titulo = document.createElement('h1');
    
}




 
