/*
*  DOM elements
*/

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


/*
* Stuff as function
*/

// Show input error message
function showError(input, message) {
    // Declare the variable to assign the input and on event
    const formControl = input.parentElement;
    // Grab the DOM classes
    formControl.className = 'form-control error';
    // Declare the small of variable assign to get the DOM
    const small = formControl.querySelector('small');
    // finally message insert the small of DOM
    small.innerText = message;
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    // formControl set the className
    formControl.className = 'form-control success';
}


// Check email is valid
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // To pass the email that lowercase
    // return re.test(String(email).toLowerCase());
    if(re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid')
    }
}

// Check the required fields
// inputArray through the checkRequired's array
function checkRequired(inputArray) {
    // high order array's method and input indicate the each items
    // loop through the array then the conole
    inputArray.forEach(function(input) {
        if(input.value.trim() === '') {
            // showError function is inner text
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}


/* ------- Check input length ----------- */ 
// check th argument
function checkLength(input, min, max) {
    if(input.value.length < min) {
        // Checking the length
        showError(input, `${getFieldName(input)} must be at least ${min} characters`)
    } else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`)
    } else {
        showSuccess(input);
    }
}

/* ------- Check passwords match ----------- */ 
function checkPasswordsMatch(input, input2) {
    // If input1 and input 2 is different to be error
    if(input.value !== input2.value) {
        showError(input2, 'Passwords do not match')
    }
}



// Get filedname
function getFieldName(input) {
    // Choose each first letter + rest of the letters
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

/*
* Eventlisenter
*/

//  Event Listener
form.addEventListener('submit', function(e) {
    // No count the default value.
    e.preventDefault();

    // When the submit, run through the array as input
    // Go to the funciton
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2);

    /*
    * If statement is so long but one of the option.
    */
    // Check the form if full of it or not
    // if (username.value === '') {
    //     showError(username, 'Username is required');
    // } else {
    //     showSuccess(username);
    // } 

    // if (email.value === '') {
    //     showError(email, 'Email is required');
    // } else if(!isValidEmail(email.value)) {
    //     showError(email, 'Email is not valid');
    // } else {
    //     showSuccess(email);
    // }

    // if (password.value === '') {
    //     showError(password, 'Password is required');
    // } else {
    //     showSuccess(password);
    // } 

    // if (password2.value === '') {
    //     showError(password2, 'Password2 is required');
    // } else {
    //     showSuccess(password2);
    // } 

});

