    
function playsound(e){    
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio) return // stop the function from running when there is no audio
    audio.currentTime = 0 // rewind audio to the start
    audio.play()
    key.classList.add("playing")
}

window.addEventListener("keydown", playsound)

function removeTransition(e){
    if (e.propertyName !== "transform") return // skip if is not transform
    this.classList.remove("playing")
}

const keys = document.querySelectorAll(".key")
keys.forEach( key => key.addEventListener("transitionend", removeTransition))  