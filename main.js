let strings = document.getElementById('strings');
let splitText = strings.innerText.split('');

strings.innerHTML = 'hello';
i = 0
setInterval(function(){
  AjoutDeLettre()}
  , 1000 )

function AjoutDeLettre(){
if(i < splitText.length){
  strings.innerHTML += splitText[i];
  i++;
}
}

// ["design", "frontend", "backend", "design"]