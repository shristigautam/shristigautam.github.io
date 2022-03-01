// 15.	Using JavaScript and HTML and CSS, implement a webpage that displays a working, ticking counter Clock, that counts/displays the current Date and time of the browser host, in the format: 2019-11-4 12:16:01

function clock() {
    var date = new Date();
    var formatDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + " " + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    document.getElementById("clock").innerHTML = formatDate;
}

setInterval('clock()', 1000);