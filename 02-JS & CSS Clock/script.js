const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-Hand");

function setDate() {
  console.log("Edward");
  const now = new Date();
  const sec = now.getSeconds();
  console.log(sec);
  const secDegree = (sec / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secDegree}deg)`;
  const min = now.getMinutes();
  const minDeg = (min / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minDeg}deg)`;
  const hour = now.getHours();
  const hourDeg = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}
setInterval(setDate, 1000);
setDate();
