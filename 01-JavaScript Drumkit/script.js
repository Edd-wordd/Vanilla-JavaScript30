function removeTransition(e) {
   if (e.propertyName !== "transform") return;
   e.target.classList.remove("playing");
}

function playSound(e) {
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
   if (!audio) return; //if no key has a keycode return nothing

   key.classList.add("playing");
   audio.currentTime = 0; //rewinds the sound
   audio.play(); // plays the wav sound
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
//when you press down on a key it triggers the playsound fuunction
window.addEventListener("keydown", playSound);

document.getElementById("9pad").onclick = function () {
   console.log("edward you bastard thats only 9");
   let newBtn = document.createElement("input");
   newBtn.setAttribute("type", "button");
   newBtn.setAttribute("value", "20pad");
   // newBtn.setAttribute("class", "buttons");
   newBtn.className += " buttons";

   newBtn.textContent = "20pad";
   console.log(newBtn);
   let referenceNode = document.querySelector("#test");
   referenceNode.append(newBtn);
};
document.getElementById("12pad").onclick = function () {
   console.log("edward you bastard thats 12");
};
document.getElementById("16pad").onclick = function () {
   console.log("edward you pumping 16");
};
