const user_btn = document.querySelector('#user_btn');
const table = document.querySelector('#user_table');

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
    let row = document.createElement('tr');
    row.innerHTML=
       `<td>${count_row}</td>
        <td>${user_name}</td>
        <td>${user_email}</td>
        <td>${user_phone}</td>
        <td>
        <a href="#" class="button-primary edit_btn">Edit</a>
        <span>|</span>
        <a href="#" class="button-primary delete_btn">Delete</a>
        </td>`;
        table.appendChild(row);
};

function reset_form(){
     document.querySelector('#fullname').value = '';
     document.querySelector('#email').value = '';
     document.querySelector('#phone').value = '';
};

// delete rows
table.addEventListener('click', function(event){
    if(event.target.classList.contains('delete_btn')){
        var conf = confirm('Do you want to deleter it permanently?')
         if(conf){
            event.target.parentElement.parentElement.remove();}
            renew_id()
    } else if(event.target.classList.contains('edit_btn')){
        var click_edit_btn = event.target;
        get_the_value_of_row(click_edit_btn);

    }
    
} ) ;

// renew id 

function renew_id(){
    var allTrs = document.querySelectorAll('#user_table tr');
    var count = 1;
    allTrs.forEach(function(tr){
        var td = tr.querySelector("td:first-child")
        td.innerHTML = count;
        count++;
    })
    
    console.log(allTrs);
}

// get the value of row 

function get_the_value_of_row(click_edit_btn){
    var get_row = click_edit_btn.parentElement.parentElement;
    
    var edit_id = get_row.querySelector('td:first-child').innerHTML;
    var edit_name = get_row.querySelector('td:nth-child(2)').innerHTML;
    var edit_email = get_row.querySelector('td:nth-child(3)').innerHTML;
    var edit_phone = get_row.querySelector('td:nth-child(4)').innerHTML;
    get_rows_values(edit_id, edit_name, edit_email, edit_phone);
}

function get_rows_values (id, name, email, phone){
    document.querySelector('#id').value= id;
    document.querySelector('#fullname').value= name;
    document.querySelector('#email').value= email;
    document.querySelector('#phone').value= phone;

}

