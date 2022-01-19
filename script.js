"use strict"

document.addEventListener("click",mouseClick)
let treasureBox = document.getElementById("treasurebox")

let treasureX = Math.random()*window.innerWidth
let treasureY = Math.random()*window.innerHeight

treasureBox.style.left = treasureX -40 +"px"
treasureBox.style.top = treasureY -50 +"px"

let banner = document.createElement("h1")
document.body.appendChild (banner)


function mouseClick(e) {
  // alert(window.innerWidth + " " + window.innerHeight)
  // treasureBox.style.left = e.clientX + "px"
  // treasureBox.style.top = e.clientY + "px"
  
  //alert the distance between where they clicked, and where the treasure is
  //alert (distanceBetween(e.clientX,e.clientY,treasureX,treasureY))
  let distance = distanceBetween (e.clientX,e.clientY,treasureX,treasureY)

  if (distance>700) {
    myAlert ("Cold...")
  }
  else if (distance<500 && distance > 250) {
    myAlert ("Warm")
  }
  else if (distance<250 && distance>50) {
    myAlert ("Hot!!!") 
  }
  else if (distance<50) {
    treasureBox.style.visibility="visible"
    myAlert ("You found the treasure")

  }
}
function myAlert (msg) {
  banner.innerText=msg  
}
//if mouseClick=treasurebox position --> you found the treasure + show the treasure
// else ---> colder, warmer, hotter depending on distance

function distanceBetween (x1,y1,x2,y2) {

  let distance = Math.sqrt(((x1-x2)*(x1-x2)) + ((y1-y2)*(y1-y2)))

  return distance
}


