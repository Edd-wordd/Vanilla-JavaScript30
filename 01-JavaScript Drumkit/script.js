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
