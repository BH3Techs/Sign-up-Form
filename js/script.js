const textCells = document.querySelectorAll('input');


// regex patterns
const patterns = {
    firstName: /\w/,
    lastName: /\w/,
    password: /^[\d\w@-]{8,20}$/i,
    confPassword: /^[\d\w@-]{8,20}$/i,
    phoneNumber: /^[0][7][0,9]{8}&/,
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
        console.log(cell.className);
    });
});