const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const email = $('#form__body__email');
const password = $('#form__body__password');



email.onchange = function() {
    var key = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
    if(key.test(email.value)) {
        email.style.border = '1px solid green';
    } else {
        email.style.border = '1px solid red';
    }

}

password.onchange = function() {
    var key = /^.*(?=.{6,})(?=.*d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
    if(key.test(password.value)) {
        password.style.border = '1px solid green';
    } else {
        password.style.border = '1px solid red';
    }
}

