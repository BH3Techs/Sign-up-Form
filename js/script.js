const textCells = document.querySelectorAll('input');


// regex patterns
const patterns = {
    firstName: /\w/,
    lastName: /\w/,
    password: /^[\d\w@-]{8,20}$/i,
    confirmPassword: /^[\d\w@-]{8,20}$/i,
    phoneNumber: /^07[0-9]{8}/gm,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
    //             yourname @ domain   .  com          ( .uk )
};

// validation function
function validate(field, regex){

    if(!regex.test(field.value)){
        field.className = 'error';
    }else{
        field.className = regex;
    }

}
textCells.forEach((cell) => {
    cell.addEventListener('keyup',(e) => {
        validate(e.target, patterns[e.target.attributes.name.value]);
    });
});