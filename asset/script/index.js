const weekArray=["日","一","二","三","四","五","六"];
let dateTime = document.getElementById('datetime');
let description = dateTime.innerText;

let nowTime = function getLocalTime() {
    let nowTime = new Date();
    let year = nowTime.getFullYear();
    let month = nowTime.getMonth() + 1;
    let date = nowTime.getDate();
    let dateStr = year + "年" + month + "月" + date + "日";
    let weekStr = "星期"+ weekArray[nowTime.getDay()];
    let timeStr = nowTime.toLocaleTimeString();
    dateTime.innerText = description + dateStr + " " + weekStr + " " + timeStr;
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