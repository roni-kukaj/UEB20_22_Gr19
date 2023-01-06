
const signupForm = document.getElementById("signup-form");
const signupButton = document.getElementById("signup-form-submit");
const signupErrorMsg = document.getElementById("signup-error-msg");

signupButton.addEventListener("click", (e) => {
    e.preventDefault();
    const password = signupForm.password.value;
    const confirm_password = signupForm.confirm_password.value;

    if (password === confirm_password ) {
        alert("You have successfully signed up.");
        window.location.href = "home.html";
    } else {
        signupErrorMsg.style.color = 'red';
        signupErrorMsg.style.opacity = 1;
    }
})
