var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emaltInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("sign-up");

signUpButton.addEventListener("click", function(event) {
    event.preventDefault();

    // create user objests form submission
    var user = {
        firstName: firstNameInput.value.trim(),
        lastName: lastNameInput.value.trim(),
        email: emaltInput.value.trim(),
        password: passwordInput.value.trim()
    };

    localStorage.setItem("user",JSON.stringify(user));
});

