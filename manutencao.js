const suspenseMus = document.querySelector('#suspense');
const preto = document.querySelector('#carregando');
const jogar = document.querySelector('#jogar');


const credito = document.querySelector("#credito");


let nomes;
let funcaoNome;



jogar.addEventListener('click',()=>{
    jogar.style.display="none"
    credito.style.display="flex"
    nomes = setTimeout(apresentando,3000);
    })


function apresentando(){
    credito.style.color="white"
    nomes=setTimeout(suspense,3000)
    suspenseMus.play()
    funcaoNome=nomeJogo;
    }
    
    function nomeJogo(){
    credito.style.color="white"
    credito.innerHTML="ALPHA7"
    nomes=setTimeout(suspense,5000)
    funcaoNome=criacao;
    }
    
    function criacao(){
        credito.style.color="white"
        credito.innerHTML="HTML,CSS,JAVASCRIPT"
        funcaoNome=oJogo;
        nomes=setTimeout(suspense,5000)
    }
    
    function suspense(){
        credito.style.color="black"
        nomes=setTimeout(funcaoNome,6000)
        }
    
    function oJogo(){
    window.location.replace('index2.html') 
    }