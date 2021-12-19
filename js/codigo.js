'use strict'

window.onload=iniciar
function iniciar() {
    let formulario=document.forms[0]
formulario.onsubmit=postal
}
function postal(evento) {
    evento.preventDefault()
    console.log("Creando Postal...");
    let postal =document.getElementById('felicitar')
    postal.style.backgroundColor="#38A8FF"
    let p1 = document.getElementById('p1')
    p1.textContent=""
    let p2 = document.getElementById('p2')
    p2.textContent=""
    let p3 = document.getElementById('p3')
    p3.textContent="" 
    let lista =document.getElementById('iAutor')
    let nombre =document.getElementById('iNombre')
    console.log(lista.value.innerText);
  if(lista.value=="" || nombre.value=="")
  {
    p1.textContent = 'JAJA NO, KA PASAO? INTRODUZCA UN NOMBRE Y SELECCIONE UN AUTOR'
  } else
  {
    postal.style.backgroundColor="#DFF1FF"
    p1.textContent = "Querido/a "+nombre.value+":" 
    p2.textContent= "Espero que tu rutina se convierta en sorpresa, los enfados en sonrisas y las tristezas en esperanzas. Que tu bandera sea el amor, y tu lenguaje los besos. Espero que tus problemas duren tanto como tu propósito de ir al gimnasio en el año nuevo. Se me olvidaba lo mas importante, recuerda que progamar es divertido."     
    p3.textContent= "¡Feliz Navidad de parte de "+lista.options[lista.selectedIndex].text+"!"
  }
}