var upperLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var unicode = ['\u0020', '\u0021', '\u0022', '\u0023', '\u0024', '\u0025', '\u0026', '\u0027', '\u0028', '\u0029', '\u002A', '\u002B', '\u002C', '\u002D', '\u002E', '\u002F', '\u003A', '\u003B', '\u003C', '\u003D', '\u003E', '\u003F', '\u0040', '\u005B', '\u005C', '\u005D', '\u005E', '\u005F', '\u0060', '\u007B', '\u007C', '\u007D', '\u007E']
var intergers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var slider = document.getElementById("passwordLength");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}
function random(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
function generatePassword() {
    var password = "";
    var includedInPassord = [];
    var upper = document.getElementById("upperLetters").checked;
    var lower = document.getElementById("lowerLetters").checked;
    var numbers = document.getElementById("numbers").checked;
    var symbols = document.getElementById("symbols").checked;

    if (upper) { includedInPassord.push(upperLetter); }
    if (lower) { includedInPassord.push(lowerLetter); }
    if (symbols) { includedInPassord.push(unicode); }
    if (numbers) { includedInPassord.push(intergers); }
    if(!upper && !lower && !symbols && !numbers){alert("password must have something in it")}
 
    for (let i = 0; i < slider.value; i++) {
        password += random(random(includedInPassord))
    }
    return document.getElementById("result").innerText = password;
}
function copy_password() {
    var copyText = document.getElementById("result");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}