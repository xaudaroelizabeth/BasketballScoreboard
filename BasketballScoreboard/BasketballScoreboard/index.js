// javascript
let homeEl= document.getElementById("homescore")
let guestEl = document.getElementById("guestscore")
let count = 0


function hadd1(){
    count += 1
   homeEl.textContent = count
}

function add2(){
     count += 2
   homeEl.textContent = count
}

function add3(){
     count += 3
   homeEl.textContent = count
}


function gadd1(){
        count += 1
   guestEl.textContent = count
}

function gadd2(){
        count += 2
   guestEl.textContent = count
}

function gadd3(){
        count += 3
   guestEl.textContent = count
}