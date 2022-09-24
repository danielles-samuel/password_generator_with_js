   let password=document.getElementById("password");

 function genPassword() {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = 12;
    let password = "";
 for (let i = 0; i <= passwordLength; i++) {
     let charsArray = chars.split('');
let randPass = Math.floor(Math.random() * charsArray.length);
    password += charsArray[randPass]
  }
        document.getElementById("password").value = password;
 }

function copyPassword() {
  let copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");  
}
 