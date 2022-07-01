// var parent_div = document.querySelector("#parent_div");
//var p_teg = document.querySelector("p");
//parent_div.innerHTML = "<h1>Hello world</h1>";
//console.log(p_teg.innerHtml);
//p_teg.innerText = "Hello world";
//console.log(p_teg.innerText);

//var parent_div = document.createElement('ul');
// childDiv.innerHTML = `<li>Hello</li>`;
// parent_div.appendChild(childDiv);
//console.log(firstDiv);

/* var add_btn = document.querySelector('.add_btn');
var ul = document.querySelector('#parent_div ul')
add_btn.addEventListener("click", function() {
    var new_li = document.createElement("li");
    new_li.innerText = "i am new li";
    ul.appendChild(new_li);
}); */

/*  var add_btn = document.querySelector('.add_btn');
var ul = document.querySelector('#parent_div ul')
var clicked = 1;
add_btn.addEventListener("click", function() {
    var new_li = document.createElement("li");
    new_li.innerText = `new li add ${clicked}`;
    ul.appendChild(new_li);
    clicked++;
});  */

/* var add_btn = document.querySelector('.add_btn');
var ul = document.querySelector('#parent_div ul');

add_btn.addEventListener("click", function() {
    var input = document.querySelector('.list_input');
    var new_li = document.createElement("li");
    new_li.innerText = `${input.value}`;
    ul.appendChild(new_li);
});  */

var add_btn = document.querySelector('.add_btn');
var ul = document.querySelector('#parent_div ul');

add_btn.addEventListener("click", function() {
    var input = document.querySelector('.list_input');
    var new_li = document.createElement("li");
    new_li.innerHTML = `${input.value} <span class="remove">x</span>`;
    ul.appendChild(new_li);
}); 

ul.addEventListener("click", function(e) {
    if (e.target.classList.contains("remove")){
        e.target.parentElement.remove();
    }
})