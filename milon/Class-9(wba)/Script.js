// const parent_div = document.querySelector('#parent');
// const p_tag = document.querySelector('p');
// p_tag.innerText = 'Mans life is continuos process.';
// console.log(parent_div.innerText);
// parent_div.innerHTML = '<h1>Welcome to our khandaker world.</h1>';
//console.log(parent_div.innerHTML);


// var child_ul = document.createElement('ul');
// child_ul.innerHTML = `<li>Item 1</li>
// <li>Item 2</li>
// <li>Item 3</li>
// <li>Item 4</li>`;
// parent_div.appendChild(child_ul);
// console.log(parent_div)

var add_btn = document.querySelector('.add_btn');
var our_ul = document.querySelector('#parent ul');
var clicked = 0;

add_btn.addEventListener("click", function() {
    var input = document.querySelector(".list_name");
    // console.log(input.value);
    var new_li = document.createElement('li');
    new_li.innerHTML = `${input.value} <span class= "remove"> x</span>`;
    our_ul.appendChild(new_li);
    clicked++;
});

our_ul.addEventListener("click", function(e) {
    if (e.target.classList.contains("remove")) {
        // console.log(e.target.parentElement);
        e.target.parentElement.remove();
        console.log("successfully removed");
    }
});