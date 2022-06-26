
var button = document.querySelector(".ourbtn");
button.addEventListener("click", function(){
    console.log("Button clicked");
});
button.addEventListener("mouseover", function(){
    button.style.cursor = "pointer";
    console.log("Mourse is over");
});
button.addEventListener("mouseout", function(){
    console.log("Mourse is out");
});

var inp = document.querySelector("input");
inp.addEventListener("keyup", function() {
    console.log("Input changed");
})
// onload


var ourbody = document.querySelector("body");
window.onscroll = function() {
    console.log("Scrolling");
}

var ourdiv = document.querySelector(".ourdiv");
ourdiv.addEventListener("dragenter", () => {
    ourdiv.style.backgroundColor = "red";
});
