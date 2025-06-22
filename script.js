let isstatus = document.querySelector("h5")
let btn = document.querySelector("#Add")
let nexbtn = document.querySelector("#Remove")

btn.addEventListener("click",function(){
  isstatus.innerHTML = "Friend"
 isstatus.style.color = "Green"
 
})
nexbtn.addEventListener("click",function(){
  isstatus.innerHTML = "Removed"
  isstatus.style.color = "blue"

  
})