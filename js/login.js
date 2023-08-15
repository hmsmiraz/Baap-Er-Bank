document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    if(email === 'miraz@gmail.com' && password === '123'){
        console.log('Valid User');
    }
    else{
        console.log('Invalid User');
    }
})