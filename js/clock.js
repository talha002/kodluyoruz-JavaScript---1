/* İsim girdisi alma */
let input=prompt("İsminizi giriniz:");

if (input){
    input = `${input[0].toUpperCase()}${input.slice(1).toLowerCase()}`
}
else{
    alert("yanlış isim girdiniz")
    location.reload()
};

let userName=document.querySelector("#myName");

userName.innerHTML = input;

/* Saat ve Tarih */
setInterval(showTime, 1000);
function showTime() {
    let days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];

    let time = new Date();
    let day = days[time.getDay()];
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";

    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":" + min + ":" + sec + "-" + day;

    document.querySelector("#myClock").innerHTML = currentTime;
}
showTime();