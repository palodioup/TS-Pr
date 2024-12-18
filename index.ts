let usernameInput: HTMLInputElement = document.getElementById('username') as HTMLInputElement;
let result: HTMLParagraphElement = document.getElementById('result') as HTMLParagraphElement;
let btn: HTMLButtonElement = document.getElementById("submitBtn") as HTMLButtonElement
let username: string;

btn.addEventListener('click', function () {
  username = usernameInput.value;
  if (username) {
    result.textContent ='Entered Username: ' + username;
  } else {
    result.textContent ='Input field can not be empty';
  }
});