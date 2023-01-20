const hero = document.querySelector(".hero")
const text = hero.querySelector('h1')
const walk = 100

hero.addEventListener("mousemove", shadow)

function shadow(e){
    const width = hero.offsetWidth
    const height = hero.offsetHeigth
    // let {offsetX: x, offsetY: y} = e;
    let x = e.offsetX
    let y = e.offsetY
    
    if(this !== e.target){
        x = x + e.target.offsetLeft
        y = y + e.target.offsetTop
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    console.log(xWalk, yWalk)
}