   let password=document.getElementById("password");
  //=================FUNCTION THAT GENERATES PASSWORD========// 
 function genPassword() {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = 10;
    let password = "";
 for (let i = 0; i <= passwordLength; i++) {
     let charsArray = chars.split('');
let randPass = Math.floor(Math.random() * charsArray.length);
    password += charsArray[randPass].slice();
  }
        document.getElementById("password").value = password;
 }


 // =============== COPY PASSWORD FUNCTION============//
function copyPassword() {
  let copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");  
}

//===============CLEAR FUNCTION FOR THE INPUT VALUE

const btn = document.querySelector(".btn3");

btn.addEventListener('click', function clearPassword(){
  password = "";
  document.getElementById("password").value = password;

})
 