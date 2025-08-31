// selecting the sidenav and menuicon


var sidenav = document.getElementById("sidenav")
var menuicon =document.getElementById("menuicon")
var closenavv = document.getElementById("closenavv")

menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})
closenavv.addEventListener("click",function(){
    sidenav.style.right="-50%"
})