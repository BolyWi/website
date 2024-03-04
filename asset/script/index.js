let dateTime = document.getElementById('datetime');
let description = dateTime.innerText;

var nowTime = function getLocalTime() {
    let nowTime = new Date();
    let year = nowTime.getFullYear();
    let month = nowTime.getMonth();
    let date = nowTime.getDate();
    let dateStr = year + "年" + month + "月" + date + "日";
    let timeStr = nowTime.toLocaleTimeString();
    dateTime.innerText = description + dateStr + " " + timeStr;
}

setInterval(nowTime, 1000);

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("top-button").style.display = "block";
    } else {
        document.getElementById("top-button").style.display = "none";
    }
}

// 点击按钮，返回顶部
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}