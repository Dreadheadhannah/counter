const button = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0
function increment(){
    count = count + 1
    button.innerText = count
    console.log("Yes")
}

increment()

function decrement(){
   count = count - 1
   button.innerText = count 
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    button.textContent = 0
    count = 0 
}