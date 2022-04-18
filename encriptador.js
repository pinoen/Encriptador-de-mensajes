let botonEncriptar = document.querySelector('#encriptar');

botonEncriptar.addEventListener('click', function(e){
  e.preventDefault();
  let frase = document.querySelector('#a-encriptar').value.toLowerCase();
  let nuevaFrase = '';
  for(let i=0; i<frase.length; i++){
    if(/\W/.test(frase[i])) alert('No ingresar caracteres especiales! Intente nuevamente.');
    else if(frase[i] === 'e') nuevaFrase += 'enter';
    else if(frase[i] === 'i') nuevaFrase += 'imes';
    else if(frase[i] === 'a') nuevaFrase += 'ai';
    else if(frase[i] === 'o') nuevaFrase += 'ober';
    else if(frase[i] === 'u') nuevaFrase += 'ufat';
    else nuevaFrase += frase[i];
  }
  let mostrarMensaje = document.querySelector('#mensaje-encriptado');
  mostrarMensaje.textContent = nuevaFrase;
});


let botonDesencriptar = document.querySelector('#desencriptar');

botonDesencriptar.addEventListener('click', function(e){
  e.preventDefault();
  let frase = document.querySelector('#a-desencriptar').value.toLowerCase();
  frase = frase.replaceAll('enter', 'e');
  frase = frase.replaceAll('imes', 'i');
  frase = frase.replaceAll('ai', 'a');
  frase = frase.replaceAll('ober', 'o');
  frase = frase.replaceAll('ufat', 'u');

  let mostrarMensaje = document.querySelector('#mensaje-desencriptado');
  mostrarMensaje.textContent = frase;
});

let copiar1 = document.querySelector('#copy1');
copiar1.addEventListener('click', function(){
  let copiarSpan = document.querySelector('#mensaje-encriptado');
  navigator.clipboard.writeText(copiarSpan.textContent);
});

let copiar2 = document.querySelector('#copy2');
copiar2.addEventListener('click', function(){
  let copiarSpan = document.querySelector('#mensaje-desencriptado');
  navigator.clipboard.writeText(copiarSpan.textContent);
});




