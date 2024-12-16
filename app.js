
document.querySelector('#esquerda');
document.querySelector('#cima');
document.querySelector('#perso');
document.querySelector('#direita');
const escrita = document.querySelector('#escrita');
const borracha = document.querySelector('#apagar');
let horizonte = document.querySelector('.horizontal');
let vertice = document.querySelector('.vertical');
let uso1 = document.querySelector('#uso1');
let acoes= document.querySelector('.acoes');
const passos = document.querySelector('#passos');
const pressionado = document.querySelector('#teclas');
const acertou= document.querySelector('#acertou');
const errou = document.querySelector('#errou');
const informa = document.querySelector('#informa');
const pegando = document.querySelector('#pegando');
const finalizado = document.querySelector('#finalizado');





const area1 = document.querySelector('area1');
const area2 = document.querySelector('area2');
const circulo = document.querySelector('#circulo');


let valor1 = document.querySelector('#valor1');
let valor2 = document.querySelector('#valor2');
let valor3 = document.querySelector('#valor3');
let valor4 = document.querySelector('#valor4');


let valoresBotao=0;

let pontos=0;
let teclas="";
let respostaUser; 
let numeros=false;
let subtracao=0;

let valor1Res=0;
let valor2Res=0;
let valor3Res=0;
let valor4Res=0;

let salaA;
let salaB;
let inicio=0;

var num=0;
var numero=1;
let esquerdavar = 0;
let direitavar =0;
let cimavar = 0;
let baixovar = 0;
let telaCarregar=0;
let telaCarregou=0;
var tempo=0;
var tempo2=0;
var tempo3=0;
var tempo4=0;
var ataquePermitido=false;


var x=48;//direita
var y=50;//cima
var z=0;
var w=0;//esquerda
var atack=false;
var vida=50;
var vidaJogador = 50;

let joker=false;
var baixoDirecao = true;
var cimaDirecao = true;
var esquerdaDirecao = true;
var direitaDirecao = true;
var inidireita=false;
var iniesquerda = false;
var inicima=false;
var inibaixo = false;
let comando=true;
let letrasEscrita;
let itemAtivado=1;
let botoes = document.querySelectorAll('.clique');
let armazen=[];
let validado1=false;
let validado2=false;
let validado3=false;
let validado4=false;
let continuacao="";
let confirma;
let dados=false;

subtracao = Math.floor(Math.random()*(0,10));



document.getElementById('carregando').style.transition= 2+"s";
const comecoTudo = setTimeout(nascendo,3000)

function nascendo(){
    document.getElementById('carregando').style.opacity=0+"%";
    document.getElementById('comando').style.opacity=100+"%";
}
document.addEventListener('DOMContentLoaded',()=>{
   
    window.onload = function(){
        let carregarSave = localStorage.getItem('pontuacao');
        pontos = carregarSave;
    }

     

    botoes.forEach(botoes=> {
        teclas="";
        botoes.addEventListener
        ('touchstart',()=>{
        pressionado.play();
         armazen.push(botoes.value)
         console.log(armazen)
         teclas=armazen.join('');
         if(validado1 == false){
         escrita.value = teclas;
         continuacao="";
         }
         
         if(escrita.value == "/DATA_SERVICE"){
            informa.play()
            armazen.length=0;
            teclas=armazen.join('');            
            dados=true;
            continuacao="/DATA_SERVICE_STORAGE_IS_TRUE";
            escrita.value = continuacao +teclas;
        }

        if(dados==true){
            localStorage.setItem('pontuacao',pontos);
        }

        
         

         if(escrita.value == "/LESS_"+valor1.value+"-"+valor1Res){
        acertou.play()
         validado1=true;
         armazen.length=0;
         teclas=armazen.join('');
         escrita.value = teclas;
         pontos=pontos+10;
         valor1.innerHTML=subtracao;
         continuacao=continuacao+"PROGRAM STARTED\n[1]PICKED"+"\n[2]";
         }

       
         if(validado1 == true){
            escrita.value = continuacao+teclas;
           }
           
           
           if(escrita.value == continuacao+"/LESS_"+valor2.value+"-"+valor2Res){
            acertou.play()
            validado2=true;
            armazen.length=0;
            teclas=armazen.join('');
            escrita.value = teclas;
            pontos=pontos+10;
            valor2.innerHTML=subtracao;
            continuacao="PROGRAM STARTED\n[1]PICKED\n[2]PICKED"+"\n[3]"          
           }
         
           if(validado2 == true){
            escrita.value = continuacao+teclas;
           }

           if(escrita.value == continuacao+"/LESS_"+valor3.value+"-"+valor3Res){
            acertou.play()
            validado3=true;
            armazen.length=0;
            teclas=armazen.join('');
            escrita.value = teclas;
            pontos=pontos+10;
            valor3.innerHTML=subtracao;
            continuacao="PROGRAM STARTED\n[1]PICKED\n[2]PICKED\n[3]PICKED"+"\n[4]"        
           }
           
           
           if(validado3 == true){
            escrita.value = continuacao+teclas;
           }

           if(escrita.value == continuacao+"/LESS_"+valor4.value+"-"+valor4Res){
            acertou.play()
            validado4=true;
            armazen.length=0;
            pontos=pontos+10;
            valor4.innerHTML=subtracao;
            continuacao="PROGRAM FINISH\n[1]PICKED\n[2]PICKED\n[3]PICKED"+"\n[4]PICKED"        
           }

           if(validado4 == true){
            finalizado.play(),
            escrita.value = continuacao+"\n\nCOMPLETED PROCESS";
            document.getElementById('circulo').style.left=subtracao+"%";            
                tempo3 = setTimeout(retornar,3000);
           }

          
           

           
           
            botoes.addEventListener
            ('touchend',()=>{
            pressionado.currentTime=0;
       
            })
        

            })

        
        });

       
        
            
             
             

})



function retornar(){
    validado1=false;
    validado2=false;
    validado3=false;
    validado4=false;
    finalizado.pause()
    finalizado.currentTime=0;
    teclas=armazen.join('');
    escrita.value = teclas;    
    continuacao=continuacao+"PROGRAM STARTED\n[1]PICKED"+"\n[2]";       
   } 

function verificar(){
    pressionado.play();
    console.log(valor1)
  
    respostaUser = escrita.value; 
    console.log(respostaUser)

if(respostaUser == "/HELP"){
    informa.play()
    armazen.length=0;
    teclas=armazen.join('');
    escrita.value = teclas;
    document.getElementsByName('respostaUsuario')[0].placeholder=
"/LESS (subtrai valores)\n/MEMORY (apresenta dados)"+
"\n/INDEX (apresenta o índice)\n/DATA_SERVICE (salva dados)\n/HELP (apresenta comandos)";
}

if(respostaUser == "/INDEX"){
    informa.play()
    armazen.length=0;
    teclas=armazen.join('');
   
    escrita.value="INDEX TYPE:\n"+subtracao;
}

if(respostaUser == "/MEMORY"){
    informa.play()
    armazen.length=0;
    teclas=armazen.join('');
    escrita.value = "ARMAZENAMENTO:\n"+pontos+"KB/10GB\nMEMÓRIA:\n"+500+"MB/1GB\n\n\n-CLIQUE QUALQUER BOTÃO PARA SAIR-"
}
    




if(respostaUser != "/LESS_"+valor1.value+"-"+valor1Res){
    if(respostaUser != "/HELP"){
        if(respostaUser != "/MEMORY"){
            if(respostaUser != "/INDEX"){
                if(respostaUser != "/DATA_SERVICE"){
                    errou.play()
    escrita.value=teclas+"\nEntrada inválida!";
                }
                
            }
        }
    }
}

}

borracha.addEventListener('click',()=>{
    pressionado.play();
    armazen.pop();
    teclas=armazen.join('');
    
    if(validado1 == false){
    escrita.value = teclas;
    }
    if(validado1 == true){
        escrita.value = continuacao+teclas;
     }
     console.log(armazen.length) 
  });





/*function perseguir(){
 inidireita=true;
iniesquerda = true;
 inicima=true;
 inibaixo = true;
}*/


function computador(){
pegando.play()
 itemAtivado++; 
    if(itemAtivado %2 == 0){
    document.getElementById('item').style.display="flex";
    uso1.style.display="none";
    acoes.style.right=-5.5+"%";
horizonte.style.display="none";
vertice.style.display="none";
    }
    else{
        document.getElementById('item').style.display="none";
        uso1.style.display="flex";
        acoes.style.right=0+"%";
horizonte.style.display="flex";
vertice.style.display="flex";
    }
if(itemAtivado == 50){
 itemAtivado=0;
}

}



/*function vertical(){
    document.getElementById('circulo').style.top=y+"%";
    ataquePermitido=false;
}

function horizontal(){
    document.getElementById('circulo').style.left=x+"%";
    ataquePermitido=false;
}


function pegou(){
 
if(ataquePermitido == true){
    vidaJogador=vidaJogador-5;
}

}

function seguirH(){

    tenso = setInterval(horizontal,1000);
    }
    
    function seguirV(){
 
        tenso = setInterval(vertical,1000);
        }


function ataque(){
    if(atack == true){
     
        console.log(vida)
        vida--;
        
        if(vida == 0){
            alert("AAAAAAA");
            document.getElementById('circulo').style.display="none";
        }
       
        
        }
}*/



window.addEventListener("keydown",function(event){
var tecla = event.keyCode



if(tecla == 90){
    computador();
}

if(tecla == 38){
    cimaB();
    clearInterval(tempo4);
    passos.play()
}

if(tecla == 40){
    baixoB();
    clearInterval(tempo4);
    passos.play()
}

if(tecla == 37){
    esquerdaB();
    clearInterval(tempo4);
    passos.play()
}

if(tecla == 39){
    direitaB();
    clearInterval(tempo4);
    passos.play()
}


})




window.addEventListener("keyup",function(event){
    var tecla = event.keyCode

    if(tecla == 38){
    passos.pause()
    passos.currentTime=0;
    document.getElementById('perso').style.backgroundImage='url("perso/atrasParado.png")';
ataquePermitido=true;
atack = true;
    }
    
    if(tecla == 40){
        passos.pause()
    passos.currentTime=0;
    document.getElementById('perso').style.backgroundImage='url("perso/frenteParado.png")';
    ataquePermitido=true;
    atack = true;
    }
    
    if(tecla == 37){
        passos.pause()
    passos.currentTime=0;
        document.getElementById('perso').style.backgroundImage='url("perso/esquerdaParado.png")';  
        ataquePermitido=true;
        atack = true;

    }
    
    if(tecla == 39){
        passos.pause()
    passos.currentTime=0;
        document.getElementById('perso').style.backgroundImage='url("perso/direitaParado.png")'; 
        ataquePermitido=true; 
        atack = true;
    }


})


let intervalId=0;

    direita.addEventListener('touchstart', () => {
        passos.play()
        direitaB();
        intervalId = setInterval(direitaB, 70); 
    });

    direita.addEventListener('touchend', () => {
        passos.pause()
    passos.currentTime=0;
        clearInterval(intervalId);
        document.getElementById('perso').style.backgroundImage='url("perso/direitaParado.png")';  

    });

    esquerda.addEventListener('touchstart', () => {
        passos.play()
        esquerdaB();
        intervalId = setInterval(esquerdaB, 70); 
    });

    esquerda.addEventListener('touchend', () => {
        passos.pause()
    passos.currentTime=0;
        clearInterval(intervalId);
        document.getElementById('perso').style.backgroundImage='url("perso/esquerdaParado.png")';   

    });

    cima.addEventListener('touchstart', () => {
        passos.play()
        cimaB();
        intervalId = setInterval(cimaB, 70); 

    });

    cima.addEventListener('touchend', () => {
        passos.pause()
    passos.currentTime=0;
        clearInterval(intervalId);
        document.getElementById('perso').style.backgroundImage='url("perso/atrasParado.png")';
    });

    baixo.addEventListener('touchstart', () => {
        passos.play()
        baixoB();
        intervalId = setInterval(baixoB, 70); 
    });

    baixo.addEventListener('touchend', () => {
        passos.pause()
    passos.currentTime=0;
        clearInterval(intervalId);
        document.getElementById('perso').style.backgroundImage='url("perso/frenteParado.png")';
      
    });



function transporte(){
    document.getElementById('perso').style.left=inicio+"%";
}

function sumida(){
    document.getElementById(salaA).style.display="none";   
    document.getElementById(salaB).style.display="flex";  
}

function carregarTela(){
    document.getElementById('carregando').style.opacity=100+"%";
    telaCarregou = setInterval(carregouTela,500);
}

function carregouTela(){
    document.getElementById('carregando').style.opacity=0+"%"; 
}


const direitaB = ()=>{
console.log("DIREITA:"+x);

function normalDireita(){ 
    if(direitaDirecao==true){
    document.getElementById('perso').style.backgroundImage='url("perso/direitaAndandoGif.gif")';
    direitavar = x;
    x=x+1.5;
    document.getElementById('perso').style.left=x+"%";    
    }
}


     if(x!=90) {
        normalDireita();
     }

    if(salaA !="sala1"){
    if(x==90){
        normalDireita();    
    }                  
}

   


if(x==94.5 || x > 94.5){

x=4.5;
 joker = true;   
carregarTela();
salaA="sala1";
salaB="sala2";
inicio=4.5;
tempo = setTimeout(sumida,100);
tempo2 = setTimeout(transporte,200);
comando = false;

valor1.value=Math.floor(Math.random()*(50,10+1)+10);
valor2.value=Math.floor(Math.random()*(50,10+1)+10);
valor3.value=Math.floor(Math.random()*(50,10+1)+10);
valor4.value=Math.floor(Math.random()*(50,10+1)+10);



valor1.innerHTML=valor1.value;
valor2.innerHTML=valor2.value;
valor3.innerHTML=valor3.value;
valor4.innerHTML=valor4.value;

 valor1Res=valor1.value-subtracao;
 valor2Res=valor2.value-subtracao;
 valor3Res=valor3.value-subtracao;
 valor4Res=valor4.value-subtracao;

}


}



if(x<92){
    if(y >= 150 ){
        cimaDirecao=true;
        baixoDirecao=true;
      
    }
}
    


const esquerdaB = () =>{
    console.log("ESQUERDA:"+x);
   
if(joker == false){
    w=6;
    
}
if(joker == true){
    w=3;
}

    if(x != w){
    normalEsquerda();
    }
    if(x==w){
        document.getElementById('perso').style.left=w+"%";
        
        if(w==3){
            x=94.5;
            joker = false;
            carregarTela();
            salaA="sala2";
            salaB="sala1";
            inicio=94.5;
            tempo1 = setTimeout(sumida,100);
            tempo2 = setTimeout(transporte,200);
            
        }

    }

  function normalEsquerda(){
    if(esquerdaDirecao == true){
        document.getElementById('perso').style.backgroundImage='url("perso/esquerdaAndandoGif.gif")';   
        x=x-1.5;
        esquerdavar = x;
        document.getElementById('perso').style.left=x+"%"; 
    }
   }
  


}

const cimaB = () =>{
    console.log("CIMA:"+y);
    if(y > 10){
        
        normalCima();
    }
    if(y==10){
        document.getElementById('perso').style.top=10+"%"; 
    }
    
    function normalCima(){
        if(cimaDirecao == true){ 
            document.getElementById('perso').style.backgroundImage='url("perso/atrasAndandoGif.gif")';       
            y=y-1.5;
            z=y;
            cimavar = y;  
            document.getElementById('perso').style.top=y+"%";
                }
    }

    
 
    if(cimavar==20){
        cimaDirecao=false;
       if(x< 43.5){   
           cimaDirecao=true;
    }
       if(baixovar > 20){
        cimaDirecao=true;
       }
     }

}


const baixoB = () =>{ 
    console.log("BAIXO:"+y);


    if(y < 54 ){ 
            
    normalBaixo();
    

    }

function normalBaixo(){
    if(baixoDirecao == true){
        document.getElementById('perso').style.backgroundImage='url("perso/frenteAndandoGif.gif")';
    y=y+1.5;
    baixovar = y;
    document.getElementById('perso').style.top=y+"%";
    }
}


}






