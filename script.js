
let hr = document.querySelector("#hr");
let mn = document.querySelector("#mn");
let sc = document.querySelector("#sc");

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    // Rotate the clock hands
    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    // Digital clock display
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");
    let ampm = document.getElementById("ampm");

    let h = day.getHours();
    let m = day.getMinutes();
    let s = day.getSeconds();

    // Set AM or PM
    let am = h >= 12 ? "PM" : "AM";

    // Convert 24-hour time to 12-hour format
    h = h % 12;
    h = h ? h : 12;

    // Add leading zeros
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    // Display time
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;
}, 1000);
