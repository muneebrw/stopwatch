var min = 0
var sec = 0
var ms = 0

var minH = document.getElementById('min')
var secH = document.getElementById('sec')
var msH = document.getElementById('ms')

function timer()
{

    ms++
    msH.innerHTML = ms
    if(ms >= 100)
    {
        sec++
        secH.innerHTML = sec
        ms = 0
        
    }
    else if(sec >= 6)
        {
            sec = 0
            min++
            minH.innerHTML = min

        }
    
}

function start(){
 interval = setInterval(timer,10)
}

function stop()
{
    clearInterval(interval)
    document.getElementById('startBtn').disabled = false
}

function reset()
{
    document.getElementById('startBtn').disabled = false
    clearInterval(interval)
    min = 0
    sec = 0
    ms = 0
    minH.innerHTML = min
    secH.innerHTML = sec
    msH.innerHTML = ms

}

function lap()
{
    s = document.createElement('h2')
    s = s.innerHTML = 'hhhhh'
    col = document.getElementsByTagName('h2')
    col.style.color = 'red'
}