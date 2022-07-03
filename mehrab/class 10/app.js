const user_btn = document.querySelector('#user_btn');
var count_row = 1;

user_btn.addEventListener('click', function(event){
    event.preventDefault();
    const user_name = document.querySelector('#fullname').value;
    const user_email = document.querySelector('#email').value;
    const user_phone = document.querySelector('#phone').value;

    // console.log(user_name, user_email, user_phone);

    generate_new_row(count_row,user_name, user_email,user_phone);
    count_row++;
        reset_form();

});

function generate_new_row(count_row,user_name, user_email,user_phone){
    const table = document.querySelector('#user_table');
    let row = document.createElement('tr');
    row.innerHTML=
       `<td>${count_row}</td>
        <td>${user_name}</td>
        <td>${user_email}</td>
        <td>${user_phone}</td>
        <td>
        <a href="#" class="button-primary">Edit</a>
        <span>|</span>
        <a href="#" class="button-primary">Delete</a>
        </td>`;
        table.appendChild(row);
};

function reset_form(){
     document.querySelector('#fullname').value = '';
     document.querySelector('#email').value = '';
     document.querySelector('#phone').value = '';
};

