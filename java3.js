const input = document.getElementById("input")
const body = document.getElementsByTagName("body")[0]
var nonPa = ""
var Pa = ""
var PaCounter = 0
var nonPaCounter = 0
var infCounter = 0
var checkmark = document.getElementById('checkmark');
var wrongsign = document.getElementById('wrongsign');
var informationBox = document.querySelector('.informationBox');

/* window.onload = function() {
    // Your function call here
    reset();
};
 */
function reverseString(str) {
    return str.split("").reverse().join("")
}



function isLetterOrSpecial(char) {
// Get the character code of the input character
    var charCode = char.charCodeAt(0);
    
// Check if the character code falls within the range of uppercase letters (65-90) or lowercase letters (97-122)
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
        return 'Letter';
    } else {
        return 'Special Character';
    }
}

function check() {
    var value = input.value;
    var sieb = ""
    for (var i=0; i < value.length; i++){
        if (isLetterOrSpecial(value[i]) === 'Letter'){
            if ( value[i] == value[i].toUpperCase()){
                sieb = sieb + value[i]
            } else {
                sieb = sieb +value[i].toUpperCase()
            }
        }
    }

    var reverse = reverseString(sieb)

    if (sieb === reverse){
        alert(value + " is a Palindrome")
        if (PaCounter < 1){
            Pa = value;
            
        } else {
            Pa = Pa + ", " + value;
        }
        checkmark.style.display = 'block'
        wrongsign.style.display = 'none'
        document.getElementById("output2").innerText = Pa;
        PaCounter = PaCounter + 1
        document.getElementById("AppCounter2").innerText ="(" + PaCounter + ")";

        
    } else {
        alert(value + " is sadly not a Palindrome")
        if (nonPaCounter < 1){
            nonPa = value;
            
        } else {
            nonPa = nonPa + ", " + value;
        }
        checkmark.style.display = 'none'
        wrongsign.style.display = 'block'
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
    infCounter = 0
    informationBox.style.display = 'none'
    checkmark.style.display = 'none'
    wrongsign.style.display = 'none'

    document.getElementById("output2").innerText = Pa;
    document.getElementById("output1").innerText = nonPa;
    document.getElementById("AppCounter2").innerText = "(0)";
    document.getElementById("AppCounter1").innerText = "(0)";

}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      check();
    }
});

function information() {
    
    if (infCounter==1) {
        informationBox.style.display = 'none'
        infCounter = infCounter - 1
    } else{
        informationBox.style.display = 'block'
        infCounter = infCounter + 1
    } 
    
}
