document.addEventListener('DOMContentLoaded',()=>{
    const form=document.getElementById('myForm');
    const email=document.getElementById('email');
    const password=document.getElementById('password');
    const username=document.getElementById('username');
    const emailFeedback = document.getElementById('emailFeedback');
    const passwordFeedback = document.getElementById('passwordFeedback');
    const usernameFeedback = document.getElementById('usernameFeedback');

    //validation of email
    email.addEventListener('input' ,() =>{
        if(email.validity.valid) {
            emailFeedback.textContent = 'Valid email!';
            emailFeedback.className = 'Valid ';
        }else{
            emailFeedback.textContent = 'Please enter a Valid email address';
            emailFeedback.className = 'error!';
        }
    });
    //validation of password
    password.addEventListener('input',() => {
        if(password.value.length >= 8) {
            passwordFeedback.textContent = 'Password looks good!';
            passwordFeedback.className = 'Valid ';
        } else {
            passwordFeedback.textContent = 'Password must be at least 8 characters long.';
            passwordFeedback.className = 'Error ';
        }
    });
    username.addEventListener('input',() => {
        if(username.value.length >= 3) {
            usernameFeedback.textContent = 'username looks good!';
            usernameFeedback.className = 'Valid ';
        } else {
            usernameFeedback.textContent = 'username must be at least 3 characters .';
            usernameFeedback.className = 'Error ';
        }
    });

    form.addEventListener('submit' ,(event) => {
        if(!email.validity.valid|| password.value.length<8 || username.value.length <3) {
            event.preventDefault();
            alert('Please fill out the form correctly before submit');
        }
    });
});


    


