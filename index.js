// let homePlusOne = document.getElementById("home-plus1")
// let homePlusTwo = document.getElementById("home-plus2")
// let homePlusThree = document.getElementById("home-plus3")

let homeScore = document.getElementById("home")

// let guestPlusOne = document.getElementById("guest-plus1")
// let guestPlusTwo = document.getElementById("guest-plus2")
// let guestPlusThree = document.getElementById("guest-plus3")

let guestScore = document.getElementById("guest")

homeScore = 0
guestScore = 0
let homeCount = 0

function plus1() {
    homeCount += 1
    homeScore.textContent += homeCount
}