const passwordInput = document.getElementById("auth-form__password");
const togglePassword = document.getElementById("auth-form__togglePassword");

togglePassword.addEventListener("click", function () {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");
    }
});


const modal = document.getElementById("model");
const modalOverlay = document.getElementById("modal__overlay");
const registerForm = document.getElementById("auth-form-register");
const loginForm = document.getElementById("auth-form-login");
const openRegisterButton = document.getElementById("hd-nav__r-register");
const openLoginButton = document.getElementById("hd-nav__r-login");

function openRegisterFunc() {

    modal.classList.add("show-popup-regisster-login");
    modal.classList.remove("hidden-popup-regisster-login");

    registerForm.classList.add("show-popup-regisster-login");
    registerForm.classList.remove("hidden-popup-regisster-login");

    loginForm.classList.add("hidden-popup-regisster-login");
    loginForm.classList.remove("show-popup-regisster-login");
}

function openLoginFunc() {

    modal.classList.add("show-popup-regisster-login");
    modal.classList.remove("hidden-popup-regisster-login");

    registerForm.classList.add("hidden-popup-regisster-login");
    registerForm.classList.remove("show-popup-regisster-login");

    loginForm.classList.add("show-popup-regisster-login");
    loginForm.classList.remove("hidden-popup-regisster-login");
}

function modalOverlayFunc() {
    modal.classList.add("hidden-popup-regisster-login");
    modal.classList.remove("show-popup-regisster-login");
}

modalOverlay.addEventListener("click", modalOverlayFunc);
openRegisterButton.addEventListener("click", openRegisterFunc);
openLoginButton.addEventListener("click", openLoginFunc);



const switchToLogin = document.getElementById("auth-form__switch-btn-toLogin");
const switchToRegister = document.getElementById("auth-form__switch-btn-toRegister");
const noneRegister = document.getElementById("auth-form__btn-register-back");
const noneLogin = document.getElementById("auth-form__btn-login-back");

switchToLogin.addEventListener("click", openLoginFunc);
switchToRegister.addEventListener("click", openRegisterFunc);
noneRegister.addEventListener("click", modalOverlayFunc);
noneLogin.addEventListener("click", modalOverlayFunc);