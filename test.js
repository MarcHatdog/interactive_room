console.log("Script Loaded")

const secHand = document.querySelector("[data-second]")
const minHand = document.querySelector("[data-minutes]")
const hoursHand = document.querySelector("[data-hour]")

function setclock(){
    console.log("test")

    const currentDate = new Date()
    const seconds = currentDate.getSeconds()
    const minutes = currentDate.getMinutes()
    const hours = currentDate.getHours()

    console.log(seconds)

    setRotation(secHand, seconds)
    setRotation(minHand, minutes)
    setRotation(hoursHand, hours)
}

function setRotation(hand , rotation){
    hand.style.setProperty('--rotation', rotation)
}

setInterval(setclock, 1000)