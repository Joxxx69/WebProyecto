const user = JSON.parse(localStorage.getItem('user'));
console.log(user);
const userItem = document.querySelector('#user__item');
userItem.textContent = user.name;
console.log(userItem)


