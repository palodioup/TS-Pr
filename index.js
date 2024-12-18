var usernameInputJ = document.getElementById('username');
var resultJ = document.getElementById('result');
var btnJ = document.getElementById("submitBtn");
var usernameJ;
btnJ.addEventListener('click', function () {
    usernameJ = usernameInputJ.value;
    if (usernameJ) {
        resultJ.textContent = 'Entered Username: ' + usernameJ;
    }
    else {
        resultJ.textContent = 'Input field can not be empty';
    }
});
