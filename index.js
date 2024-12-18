var usernameInputJ = document.getElementById('username');
var useremailInputJ = document.getElementById('useremail');
var userpasswordInputJ = document.getElementById('userpassword');
var resultJ = document.getElementById('result');
var result1J = document.getElementById('result1');
var result2J = document.getElementById('result2');
var btnJ = document.getElementById("submitBtn");
var usernameJ;
var useremailJ;
var userpasswordJ;
btnJ.addEventListener('click', function () {
    usernameJ = usernameInputJ.value;
    useremailJ = useremailInputJ.value;
    userpasswordJ = userpasswordInputJ.value;
    if (usernameJ === "" || useremailJ === "" || userpasswordJ === "") {
        resultJ.innerHTML = "Name email and password are required";
    }
    else {
        resultJ.innerHTML = "Name: " + usernameJ;
        result1J.innerHTML = "Email: " + useremailJ;
        result2J.innerHTML = "Password: " + userpasswordJ;
    }
});
