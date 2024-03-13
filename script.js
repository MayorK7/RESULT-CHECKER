// var food = "semo"

// if(food == "Amala"){
//     show.innerHTML = "Buy 6 wraps"
// }else if(food == "poundedyam"){
//     show.innerHTML = "Buy 12 wraps"
// }else{
//     show.innerHTML = "Buy me bread and beans"
var score = document.getElementById("num")
var song1 = new Audio("audio/song1.mp3.wav")
var song3 = new Audio("audio/song3.mp3.mp3")
var song6 = new Audio("audio/song6.mp3.mp3")
var song4 = new Audio("audio/song4.mp3.mp3")
var song2 = new Audio('audio/song2.mp3.mp3')

function checkValue() {
    if (num.value != "") {
        if (num.value >=0 && num.value <39) {
            console.log("F9");
            answer.style.color = "red"
            song6.play()
            answer.innerHTML = "F9 YOU FAILED" 
        } else if (num.value >= 40 && num.value <44) {
            console.log("E8");
            answer.innerHTML = "E8 PASS"
            song4.play()
        } else if (num.value >= 45 && num.value < 50) {
            console.log("D7");
            answer.innerHTML = "D7 GOD SAVE YOU"
            song2.play()
        } else if (num.value >=50 && num.value < 55) {
            console.log("C6");
            answer.innerHTML = "C6 YOU TRIED"
            song3.play()
        } else if (num.value >=55 && num.value < 60) {
            console.log("C5");
            answer.innerHTML = "C5 YOU TRIED"
            song3.play()
        } else if (num.value >=60 && num.value < 65) {
            console.log("C4");
            amswer.innerHTML = "C4 AVERAGE"
            song3.play()
        } else if (num.value >= 65 && num.value < 70) {
            console.log("B3");
            answer.innerHTML = "B3 GOOD"
            song1.play()
        } else if (num.value >=70 && num.value < 80) {
            console.log("B2");
            answer.innerHTML = "B2 VERY GOOD KPK"
            song1.play()
        } else if (num.value >=80 && num.value < 101) {
            console.log("A1");
            answer.innerHTML = "A1 YOU PASSED AGBAWO"
            song1.play()
        } else {
            console.log("Enter your correct score");
            answer.innerHTML = " invalid! Enter your correct score"
        }
    }
}