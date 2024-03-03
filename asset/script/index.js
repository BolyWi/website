setInterval(function () { getLocalTime(); }, 1000);

function getLocalTime() {
    let nowTime = new Date();
    let year = nowTime.getFullYear();
    let month = nowTime.getMonth();
    let date = nowTime.getDate();
    let description = "现在是北京时间：";
    let dateStr = year + "年" + month + "月" + date + "日";
    let timeStr = nowTime.toLocaleTimeString();
    let dateTime = document.getElementById('datetime');
    dateTime.innerText = description + dateStr + " " + timeStr;
}