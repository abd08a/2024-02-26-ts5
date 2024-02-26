console.log('veikia');

type UserType = {
  userName: string;
  email: string;
  password: string;
}

const userName: HTMLInputElement = document.getElementById('user-name') as HTMLInputElement 

const userEmail: HTMLInputElement = document.getElementById('user-email') as HTMLInputElement 

const userPassword: HTMLInputElement = document.getElementById('user-password') as HTMLInputElement 

const mainButton: HTMLButtonElement = document.getElementById('main-btn') as HTMLButtonElement

