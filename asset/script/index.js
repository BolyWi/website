setInterval(function () { getLocalTime(); }, 1000);

function getLocalTime() {
    let nowTime = new Date().toLocaleString()
    document.getElementById('datetime').innerText = nowTime;
}