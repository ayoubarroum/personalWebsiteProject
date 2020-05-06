
const navItems = document.getElementsByClassName("onPrep");

console.log(navItems.length)
for(let i=0;i<navItems.length;i++){
    navItems[i].addEventListener("click",function(){
            alert("Still on prep, stay tuned!")})
}