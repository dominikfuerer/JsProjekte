const input = document.getElementById("input")
const body = document.getElementsByTagName("body")[0]
var nonPa = ""
var Pa = ""
var PaCounter = 0
var nonPaCounter = 0

function reverseString(str) {
    return str.split("").reverse().join("")
}

function check() {
    var value = input.value;
    var reverse = reverseString(value)

    if (value === reverse){
        body.style.backgroundColor = "green";
        alert(value + " is a Palindrome")
        if (PaCounter < 1){
            Pa = value;
            
        } else {
            Pa = Pa + ", " + value;
        }
        document.getElementById("output2").innerText = Pa;
        PaCounter = PaCounter + 1
        document.getElementById("AppCounter2").innerText ="(" + PaCounter + ")";

        
    } else {
        body.style.backgroundColor = "red";
        alert(value + " is sadly not a Palindrome")
        if (nonPaCounter < 1){
            nonPa = value;
            
        } else {
            nonPa = nonPa + ", " + value;
        }
        document.getElementById("output1").innerText = nonPa;
        nonPaCounter = nonPaCounter + 1
        document.getElementById("AppCounter1").innerText ="(" + nonPaCounter + ")";
    }
    input.value = ""
}

function reset() {
    nonPa =""
    Pa = ""
    PaCounter = 0
    nonPaCounter = 0
    document.getElementById("output2").innerText = Pa;
    document.getElementById("output1").innerText = nonPa;
    document.getElementById("AppCounter2").innerText = "(0)";
    document.getElementById("AppCounter1").innerText = "(0)";
    body.style.backgroundColor = "aqua";
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      check();
    }
});
