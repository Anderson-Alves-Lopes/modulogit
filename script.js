alert("Olá Git");

function handleClick(){
   let h1 = document.querySelector('h1')
   if(h1.style.color == '#0000ff'){
    h1.style.color = '#ff0000';
   }else {
      h1.style.color = '#0000ff';
   }
}