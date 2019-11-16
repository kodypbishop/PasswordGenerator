var upperLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var unicode = ['\u0020', '\u0021', '\u0022', '\u0023', '\u0024', '\u0025', '\u0026', '\u0027', '\u0028', '\u0029', '\u002A', '\u002B', '\u002C', '\u002D', '\u002E', '\u002F', '\u003A', '\u003B', '\u003C', '\u003D', '\u003E', '\u003F', '\u0040', '\u005B', '\u005C', '\u005D', '\u005E', '\u005F', '\u0060', '\u007B', '\u007C', '\u007D', '\u007E']
var intergers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var slider = document.getElementById("passwordLength");
var output = document.getElementById("demo");
var bool = false
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}
// a function to randomly select an element of an array
function random(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
// a function to make sure that the generated password contains at least one of each selected charcter type 
function validate(arr, pass) {

    for (let i = 0; i < arr.length; i++) {
        var checkArray = 0
        for (let j = 0; j < pass.length; j++) {
            if (arr[i].indexOf(pass.charAt(j)) > -1) {
                checkArray++;
            }
        }
        if (checkArray == 0) {
            bool = false;
            console.log("password fail");
            console.log(pass);
        }else{
        }
    }
}
// the password generating function connected to html through onclick in the html button tag
function generatePassword() {
    var upper = document.getElementById("upperLetters").checked;
    var lower = document.getElementById("lowerLetters").checked;
    var numbers = document.getElementById("numbers").checked;
    var symbols = document.getElementById("symbols").checked;
    bool = false;
// a while loop that will stop when the password passes the validation test
    while (!bool) {
        bool = true
        var password = "";
        var includedInPassord = [];
        if (upper) { includedInPassord.push(upperLetter); }
        if (lower) { includedInPassord.push(lowerLetter); }
        if (symbols) { includedInPassord.push(unicode); }
        if (numbers) { includedInPassord.push(intergers); }
        if (!upper && !lower && !symbols && !numbers) { alert("password must have something in it") }

        for (let i = 0; i < slider.value; i++) {
            password += random(random(includedInPassord))
        }
        validate(includedInPassord, password);
    }
    return document.getElementById("result").innerText = password;
}
// the password copy function connected to html through onclick in the html button tag
function copy_password() {
    var copyText = document.getElementById("result");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}