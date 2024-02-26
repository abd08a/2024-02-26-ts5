console.log('veikia');
var usersList = document.getElementById('users-list');
var mainButton = document.getElementById('main-btn');
var users = [];
mainButton.addEventListener('click', function () {
    var userName = document.getElementById('user-name');
    var userEmail = document.getElementById('user-email');
    var userPassword = document.getElementById('user-password');
    var userLoginData = {
        userName: userName.value,
        email: userEmail.value,
        password: userPassword.value
    };
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userLoginData.email)) {
        console.log('User email has bad structure');
        return;
    }
    if (userLoginData.password.length <= 8) {
        console.log('Password should contain at least 9 characters');
        return;
    }
    console.log('Everything is fine');
    users.push(userLoginData);
    // usersList.append(`${userName.value}, ${userEmail.value}`) 
    // Append user data to the users list
    var userElement = document.createElement('div');
    userElement.textContent = "Name: ".concat(userLoginData.userName, ", Email: ").concat(userLoginData.email);
    usersList.appendChild(userElement);
    console.log(users);
    userName.value = '';
    userEmail.value = '';
    userPassword.value = '';
});
// console.log('veikia');
// type UserType = {
//   userName: string;
//   email: string;
//   password: string;
// }
// const usersList: HTMLDivElement = document.getElementById('users-list') as HTMLDivElement
// const mainButton: HTMLButtonElement = document.getElementById('main-btn') as HTMLButtonElement
// const userNameInput: HTMLInputElement = document.getElementById('user-name') as HTMLInputElement 
// const userEmailInput: HTMLInputElement = document.getElementById('user-email') as HTMLInputElement 
// const userPasswordInput: HTMLInputElement = document.getElementById('user-password') as HTMLInputElement 
// const users: UserType[] = [] 
// mainButton.addEventListener('click', () => {
//   const userName = userNameInput.value.trim();
//   const userEmail = userEmailInput.value.trim();
//   const userPassword = userPasswordInput.value.trim();
//   if (userName && userEmail && userPassword) {
//     const user1: UserType = {
//       userName,
//       email: userEmail,
//       password: userPassword
//     }
//     users.push(user1) 
//     // Append user data to the users list
//     const userElement = document.createElement('div');
//     userElement.textContent = `Name: ${user1.userName}, Email: ${user1.email}, Password: ${user1.password}`;
//     usersList.appendChild(userElement);
//     console.log(users);
//   } else {
//     alert('Please fill in all fields.');
//   }
//   // Clear input fields
//   userNameInput.value = '';
//   userEmailInput.value = '';
//   userPasswordInput.value = '';
// });
