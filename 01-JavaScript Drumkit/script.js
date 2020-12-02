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

   let newBtn = document.createElement("button");
   newBtn.className += "buttons";
   newBtn.textContent = "20pad";
   console.log(newBtn);

   let referenceNode = document.querySelector("#btn-section");
   referenceNode.append(newBtn);
};

document.getElementById("12pad").onclick = function () {
   let kbdLetter = document.createElement("kbd");
   kbdLetter.textContent = "Q";

   let newPadRow1 = document.createElement("div");
   newPadRow1.setAttribute("data-key", "81");
   newPadRow1.classList.add("key");
   newPadRow1.append(kbdLetter);
   let addfirstPad = document.querySelector("#key-section-1");
   addfirstPad.append(newPadRow1);

   let newPadRow2 = document.createElement("div");
   newPadRow2.setAttribute("data-key", "87");
   newPadRow2.classList.add("key");

   let addSecondPad = document.querySelector("#key-section-2");
   addSecondPad.append(newPadRow2);

   let newPadRow3 = document.createElement("div");
   newPadRow3.setAttribute("data-key", "69");
   newPadRow3.classList.add("key");

   let addThirdPad = document.querySelector("#key-section-3");
   addThirdPad.append(newPadRow3);
};

document.getElementById("16pad").onclick = function () {
   console.log("edward you pumping 16");
};
