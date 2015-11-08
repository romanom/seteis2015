$(document).ready(function(){
      $('.parallax').parallax();

      $('.scrollspy').scrollSpy();

      $('.modal-trigger').leanModal();

      $(".button-collapse").sideNav();

});

/* Cuenta regresiva */
var futuro = new Date (2015,10,16,0,0); 
var actualiza = 1000; 
function faltan(){ 
var ahora = new Date(); 
var faltan = futuro - ahora; 
if (faltan > 0){ 
var segundos = Math.round(faltan/1000); 
var minutos = Math.floor(segundos/60); 
var segundos_s = segundos%60; 
var horas = Math.floor(minutos/60); 
var minutos_s = minutos%60; 
var dias = Math.floor(horas/24); 
var horas_s = horas%24; 
document.getElementById('dias').innerHTML= dias;
document.getElementById('horas').innerHTML= horas_s;
document.getElementById('minutos').innerHTML= minutos_s;
document.getElementById('segundos').innerHTML= segundos_s;
setTimeout("faltan()",actualiza); 
} 
else { 
document.getElementById('dias').innerHTML= 0;
document.getElementById('horas').innerHTML= 0;
document.getElementById('minutos').innerHTML= 0;
document.getElementById('segundos').innerHTML= 0;
return true; 
} 
} 