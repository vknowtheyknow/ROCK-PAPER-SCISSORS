let time;
function countDown() {
    if(time===0){
        document.getElementById("countdown").innerHTML = "START";
    }
    else{
        document.getElementById("countdown").innerHTML = time;
        time--;    
    }
}

function Repeat(){
    time = 3;
    let timeID = setInterval(countDown, 1000);
    setTimeout(()=> {clearInterval(timeID)},5000);
}

function Ready(){
    setInterval(Repeat,8000);
}

Ready();
