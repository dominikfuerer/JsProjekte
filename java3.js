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
        if (PaCounter > 1){
            Pa = value;
            
        } else {
            Pa = Pa + ", " + value;
        }
        document.getElementById("output2").innerText = Pa;
        PaCounter = PaCounter + 1

        
    } else {
        body.style.backgroundColor = "red";
        alert(value + " is sadly not a Palindrome")
        nonPa=nonPa + ", " + value;
        document.getElementById("output1").innerText = nonPa;
    }
    input.value = ""
}


