let time;
var startBtn = document.getElementById("start-btn")
var countArr = document.getElementsByClassName("count")
var againBtn = false
// console.log(startBtn)

function setTime(t, show = true) {
    // if (show) {
    //     document.getElementById("countdown").innerHTML = t;
    // }
    // time = t;
}

startBtn.addEventListener('click', async () => {
    let time = 4
    countArr[0].classList.add("invisible")
    countArr[1].classList.add("invisible")
    countArr[2].classList.add("invisible")
    if (againBtn == true) {
        return
    }else {
        againBtn = true
    }
    const timer = setInterval(() => {
        time--
        switch(time){
            case 3:
                countArr[0].classList.remove("invisible")
                countArr[1].classList.add("invisible")
                countArr[2].classList.add("invisible")
                break
            case 2:
                countArr[0].classList.add("invisible")
                countArr[1].classList.remove("invisible")
                countArr[2].classList.add("invisible")
                break
            case 1:
                countArr[0].classList.add("invisible")
                countArr[1].classList.add("invisible")
                countArr[2].classList.remove("invisible")
                break
            default:
                countArr[0].classList.remove("invisible")
                countArr[1].classList.remove("invisible")
                countArr[2].classList.remove("invisible")
                break
        }
    }, 1000)
    setTimeout(()=>{
        clearInterval(timer)
        againBtn = false
    },4000)
})
