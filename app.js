const passwordBox = document.getElementById("password");
let eyeIcon = document.getElementById("eyeicon");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+{}[]<>?/|\=";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();            //copy input text 
    document.execCommand("copy");
}

eyeIcon.onclick = function(){        // for hide and show 
    if(password.type == "text"){
        password.type = "password";
        eyeIcon.src = "images/eye-close.png"
    }else{
        password.type = "text"
        eyeIcon.src = "images/eye-open.png"
    }
}