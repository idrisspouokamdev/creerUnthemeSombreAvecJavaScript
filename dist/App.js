let mode = document.querySelector('#mode');
let span = document.querySelector('#span');

if(localStorage.getItem('theme')){
    if(localStorage.getItem('theme') === 'sombre'){
       modeSombre(); 
    }
}
function modeSombre(){
    document.body.className = 'dark';
    span.textContent = 'thème sombre';
    localStorage.setItem('theme','sombre');
}
mode.addEventListener('click',()=>{ 
   if(document.body.classList.contains('dark')){
        document.body.className = '';
        span.textContent = 'thème clair';
        localStorage.setItem('theme','clair');
   }
   else{
        modeSombre();
   }
});