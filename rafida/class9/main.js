// const parent_div = document.querySelector('#parent');
// const p_tag = document.querySelector('p');
// p_tag.innerText = 'Hello World';
//console.log(parent_div.innerText);
// parent_div.innerHTML = '<h1>Hello World</h1>';
//console.log(parent_div.innerHTML);

// var child_ul = document.createElement('ul');
// child_ul.innerHTML = `<li>Item 1</li>
// <li>Item 2</li>
// <li>Item 3</li>`;
// parent_div.appendChild(child_ul);

// console.log(parent_div)

var add_btn = document.querySelector('.add_btn');
var our_ul = document.querySelector('#parent ol');
var clicked = 0;

add_btn.addEventListener("click", function() {

    var input = document.querySelector(".list_name");
    var new_li = document.createElement('li');
    new_li.innerHTML = `${input.value}  <span class="remove"> x</span>`;
    our_ul.appendChild(new_li);
    //clicked++;
});

our_ul.addEventListener("click", function(e) {
    if(e.target.classList.contains("remove")) {
        e.target.parentElement.remove();
        console.log("successfully removed");
    }
});