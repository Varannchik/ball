let ball = document.querySelector('.ball');

ball.addEventListener('mousedown', mouseDown);
ball.addEventListener('mouseup', mouseUp);

function mouseDown(e){
    console.log('start');
    ball.style.position = 'absolute';
    move(e);  
    ball.style.zIndex = 1000;
    
    function move(e) {
        ball.style.left = e.pageX - ball.offsetWidth / 2 + 'px';
        ball.style.top = e.pageY - ball.offsetHeight / 2 + 'px';      
    }
    
    ball.addEventListener('mousemove',function(e){
        move(e); 
    });    
} 

function mouseUp(){
    console.log('end');    
}






