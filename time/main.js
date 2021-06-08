const hour = document.getElementById("hour")
const min = document.getElementById("min")
const sec = document.getElementById("sec")

setInterval(() => {
    let a = new Date()
    hour.innerText = a.getHours() + ":"
    min.innerText = a.getMinutes() + ":";
    sec.innerText = a.getSeconds();

}, 1000)


