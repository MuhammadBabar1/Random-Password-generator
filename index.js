let chars=[]
let sizeEl=document.getElementById("len")
let password1=document.getElementById("pas1")
let password2=document.getElementById("pas2")
let password3=document.getElementById("pas3")
let password4=document.getElementById("pas4")
let pass1=document.getElementById("icon-el-1")
let pass2=document.getElementById("icon-el-2")
let pass3=document.getElementById("icon-el-3")
let pass4=document.getElementById("icon-el-4")
for(let i=31; i < 126; i++){
    chars.push(String.fromCharCode(i))
}
let password=[]
function rand(){
    let n=Math.floor(Math.random()*94)
    return n
}
function generatePassword(){
    password=[]
    for(let i=0;i< sizeEl.value; i++)
    {
        password.push(chars[rand()])
    }
    let text=password.join("")
    return text
}
function render(){
    
    pass1.style.display = 'none'
    pass2.style.display = 'none'
    pass3.style.display = 'none'
    pass4.style.display = 'none'
    password1.textContent=generatePassword()
    password2.textContent=generatePassword()
    password3.textContent=generatePassword()
    password4.textContent=generatePassword()

}
