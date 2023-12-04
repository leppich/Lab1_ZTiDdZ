const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    // walidacja
    if (username === "" || password === "") {
        displayError("Wymagana jest zarówno nazwa użytkownika, jak i hasło");
    } else if (password.length < 8) {
        displayError("Hasło wymaga więcej niż 8 znaków");
    } else {
        alert("Zalogowano");
        location.reload();
    }
});

// funkcja do wyswietlania komunikatu o błędzie
function displayError(errorMessage) {
    loginErrorMsg.innerText = errorMessage;
    loginErrorMsg.style.opacity = 1;
}
