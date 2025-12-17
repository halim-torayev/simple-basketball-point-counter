let homeScore = document.getElementById("home")
let guestScore = document.getElementById("guest")
let homeCount = 0
let guestCount = 0


//functions for homeScore 
function plus1() {
    homeCount += 1
    homeScore.textContent = homeCount
}

function plus2() {
    homeCount += 2
    homeScore.textContent = homeCount
}

function plus3() {
    homeCount += 3
    homeScore.textContent = homeCount
}

//functions for guestScore
function plusOne() {
    guestCount += 1
    guestScore.textContent = guestCount
}

function plusTwo() {
    guestCount += 2
    guestScore.textContent = guestCount
}

function plusThree() {
    guestCount += 3
    guestScore.textContent = guestCount
}