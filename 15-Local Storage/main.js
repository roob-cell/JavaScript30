  const addItems = document.querySelector('.add-items');
  const itemsList = document.querySelector('.plates');
  const items = JSON.parse(localStorage.getItem("items")) || [];


  addItems.addEventListener("submit", addItem)
  

  function addItem(e){
    e.preventDefault()
    const text = (this.querySelector("[name=item]")).value
    const item = {
        text: text,
        done: false
    }
    items.push(item)
    populateList(items, itemsList)
    localStorage.setItem("items", JSON.stringify(items))
    this.reset()
  }

  //Create the Html
  function populateList(plates = [], platesList){
    platesList.innerHTML=plates.map((plate, i) =>{
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? "checked": ""}/>
                <label for = "item${i}">${plate.text}</label>
            <li>    
        `
    }).join("")

  }

  populateList(items, itemList)