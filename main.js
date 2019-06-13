let ball = document.querySelector('.ball');
let sq = document.querySelector('.sq');
let cont= document.querySelector('.container');
let container = cont.getBoundingClientRect();
let sqCord = sq.getBoundingClientRect();  
let sqSizeX=0;
let sqSizeY=0;
let widthSq=0;
let higSQ=0;

ball.addEventListener('mousedown', mouseDown);
ball.addEventListener('mouseup', mouseUp);

function mouseDown(e){ 
    console.log('start');   
    ball.style.position = 'absolute';
    sqSizeY = sqCord.top ;
    sqSizeX = sqCord.left;
    widthSq = sqCord.bottom; 
    higSQ = sqCord.right; 
    ball.addEventListener('mousemove',move);       
    console.log('move');
    
}
function move(e) {
    let a=e.clientX - ball.offsetWidth / 2 ;
    let b=e.clientY - ball.offsetHeight / 2;
    if(a<=sqSizeX || a>=higSQ-ball.offsetHeight){
        ball.style.left==sqSizeX + 'px';
    } else{
        a=e.clientX - ball.offsetWidth / 2 ;        
        ball.style.left = a + 'px';
    }    
    if(b<=sqSizeY || b>=widthSq-ball.offsetWidth){
        ball.style.top==sqSizeY + 'px';
    } else{
        b= e.clientY - ball.offsetHeight / 2;       
        ball.style.top = b + 'px';        
    }     
}
function mouseUp(){
    console.log('end');   
    ball.removeEventListener('mousemove', move, false);
}






