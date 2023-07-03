
//basado en React

let validName = false;
let validEmail = false;
let validPass = '';
let validPasss = {
    password: {
        value: '',
        valid:false
    },
    confirmPass:false
};
document.querySelector('#form__signUp').addEventListener('submit', e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    localStorage.setItem('user', JSON.stringify(data));
    window.location.href = './principal.html'
})

const validationInputs = (value, name) => {
    const inputs = {
        'name':()=> value.length>3,
        'email':()=>/^[\w-]+(\.[\w-]+)+@[epn]+(\.[edu]+)*(\.[ec]{2,})$/.test(value),
        'password': () => {
            if (value.length > 5) {
                validPasss.password.value = value;
                return true;
            } else {
                validPasss.password.value = ""
                return false;
            }
        },
        'confirm__password':()=>(validPasss.password.value === value)
    }

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let confirnpasswordError = document.getElementById("confirmpasswordError");

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirnpasswordError.textContent = "";

    const alerts = {
        name: ()=>nameError.textContent="The name must have at least 3 characters",
        email: ()=>emailError.textContent ="The email must be institutional EPN",
        password:()=>passwordError.textContent = "Password must be longer than 5 characters",
        confirm__password: ()=>confirnpasswordError.textContent ="Password must be the same"
    }

    if (!inputs[name]()) {
        alerts[name]();
    }
}