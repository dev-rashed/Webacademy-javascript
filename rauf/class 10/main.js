const submit_user = document.querySelector("#submit_user");
var count_row = 1;

submit_user.addEventListener("click", function(e){
e.preventDefault();

const user_name = document.querySelector("#name").value;
const user_email = document.querySelector("#email").value;
const user_password = document.querySelector("#password").value;

gnaret_row(user_name, user_email, user_password);
count_row++;
reset_form();
});


// row gnaret
function gnaret_row(user_name, user_email, user_password){
    const user_table_body = document.querySelector("#user_table_body");
    let row = document.createElement("tr");
    row.innerHTML = `
    <td>${count_row}</td>
    <td>${user_name}</td>
    <td>${user_email}</td>
    <td>${user_password}</td>
    <td>
        <a href="#" class="btn btn-warning btn-sm edit">Edit</a> 
        <a href="#" class="btn btn-danger btn-sm delete">Delete</a> 

    </td>`;
    user_table_body.appendChild(row);
}

// form reset

function reset_form() {
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#password").value = "";
    
}

// password show
function myFunction() {
    var x = document.querySelector("#password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }


// Delete data
document.querySelector("#user_table_body").addEventListener("click", (e) =>{

    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
    }
});