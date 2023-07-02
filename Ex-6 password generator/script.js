let d=document.getElementById("ip")
let o=document.getElementById("img1")
function myFunction() {
    // Get the text field
    var copyText = document.getElementById("ip");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }
  o.onclick=()=>{
    myFunction();
}
class password{
    funnyPassword(){
        let funny=["Admin","Password","123456789","true","false","pagal","security","virus","Corona","Programmer","reject","hahaha","error404","nointernet","idontknow","yourname","nottellingyou","youwontguess","youcanguess","guesskaro","googlekarlo","thatsmypassword"]
        let ron=funny[Math.floor(Math.random()*funny.length)]
        // console.log(ron)
        d.value=ron
    }
    weakPassword(){
        let weak='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
       let result='';
        let length=prompt("Enter the length of ur weak password--> ")
        for(let i=0;i<length;i++){
            result+=weak.charAt(Math.floor(Math.random()*weak.length))
        }
        console.log(result)
        d.value=result
    }
    strongPassword(){
        let strong='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        let result='';
        let length=prompt("Enter the length of ur strong password--> ")
        for(let i=0;i<length;i++){
            result+=strong.charAt(Math.floor(Math.random()*strong.length))
        }
        console.log(result)
        d.value=result
    }
    superStrongPassword(){
        let supStrngPassword='~`!@#$%^&*()-_+={}[]|\;:"<>,./?ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        let result=''
        let length=prompt("Enter the length of ur super strong password--> ")
        for (let index = 0; index < length; index++) {
            result+=supStrngPassword.charAt(Math.floor(Math.random()*supStrngPassword.length))
        }
        console.log(result)
        d.value=result
    }
}
let a=new password()
// a.funnyPassword()
// a.weakPassword()
// a.strongPassword()
// a.superStrongPassword()
let b=document.getElementById("btn")
let c=document.getElementById("chk1")
let e=document.getElementById("chk2")
let f=document.getElementById("chk3")
let g=document.getElementById("chk4")

b.onclick=()=>{
    a.funnyPassword()
}
c.onclick=()=>{
    b.onclick=()=>{
        a.funnyPassword()
    }
}
e.onclick=()=>{
    b.onclick=()=>{
        a.weakPassword()
    }
}
f.onclick=()=>{
    b.onclick=()=>{
        a.strongPassword()
    }
}
g.onclick=()=>{
    b.onclick=()=>{
        a.superStrongPassword()
    }
}