

document.querySelector('#form__signIn').addEventListener('submit', e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    localStorage.setItem('user', JSON.stringify(data));
    window.location.href = './principal.html'
})
