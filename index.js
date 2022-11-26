let btn = document.getElementById("lnr-eye");
btn.addEventListener('click', function() {
    let input = document.getElementById("password");
    if(input.getAttribute('type') == 'password') {

        input.setAttribute('type', 'text');
        btn.setAttribute('class', 'fas fa-eye isVisibility');

    } else {

        input.setAttribute('type', 'password');
        btn.setAttribute('class', 'fas fa-eye-slash isVisibility');
        
    }
});