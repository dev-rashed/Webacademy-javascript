// var parent_div = document.querySelector("#parent_div");
// var new_p = document.createElement("p");
// new_p.innerHTML = `<h3>I am new heading</h3>`;
// parent_div.appendChild(new_p);


// var new_ul = document.createElement("ul");
// new_ul.innerHTML = `<li>list1</li> <li>list2</li> <li>list3</li>`;
// parent_div.appendChild(new_ul);

var add_btn = document.querySelector(".add_btn");
var our_ul = document.querySelector("#parent_div ul");
var clicked = 1;
add_btn.addEventListener('click', function (){
    var list_input = document.querySelector(".list_input");
    // alert("I am alert");
    var new_li = document.createElement("li");
    new_li.innerHTML =` ${list_input.value} <span class="remove_list">X</span>`;
    our_ul.appendChild(new_li);
    clicked++;


});
our_ul.addEventListener('click', function (e){
    // console.log(e.target);
    // if(e.target.classList.contains('remove_list'));
    e.target.parentElement.remove();
    console.log("Remove a class")
});