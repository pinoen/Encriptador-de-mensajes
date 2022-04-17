let botonEncriptar = document.querySelector('#encriptar');

botonEncriptar.addEventListener('click', function(e){
  e.preventDefault();
  let frase = document.querySelector('#a-encriptar').value;
  let nuevaFrase = '';
  for(let i=0; i<frase.length; i++){
    if(frase[i] === 'e') nuevaFrase += 'enter';
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
  let frase = document.querySelector('#a-desencriptar').value;
  frase = frase.replaceAll('enter', 'e');
  frase = frase.replaceAll('imes', 'i');
  frase = frase.replaceAll('ai', 'a');
  frase = frase.replaceAll('ober', 'o');
  frase = frase.replaceAll('ufat', 'u');

  let mostrarMensaje = document.querySelector('#mensaje-desencriptado');
  mostrarMensaje.textContent = frase;
});



