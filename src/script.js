setInterval(() => {
  let date = new Date(),
    hour = date.getHours();
  min = date.getMinutes();

  let d;
  d = hour < 12 ? "AM" : "PM";
  hour = hour > 12 ? hour - 12 : hour;
  hour = hour == 0 ? (hour = 12) : hour;

  document.querySelector(".hour_num").innerText = hour;
  document.querySelector(".min_num").innerText = min;
  document.querySelector(".am_pm").innerText = d;
}, 1000);

const btn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
