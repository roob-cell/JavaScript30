const panels = document.querySelectorAll(".panel")

panels.forEach( panel => panel.addEventListener("click", toogleOpen))
panels.forEach( panel => panel.addEventListener("transitionend", toogleActive))

function toogleOpen(){ 
    this.classList.toggle("open")
}

function toogleActive(e){
    if(e.propertName.includes("flex")){
    this.classList.toggle("open-active")
    }
}