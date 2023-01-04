import axios from 'axios';

const API_KEY = 'AIzaSyAqip2KDGtuDz4YRUL5e40PRuIQuX3dc3A';

async function authenticate(mode, email, password) {
  const response = await axios.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:' +
      mode +
      '?key=' +
      API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    },
  );

  console.log(response.data);
}

export async function createUser(email, password) {
  await authenticate('signUp', email, password);
}

export async function login(email, password) {
  await authenticate('signInWithPassword', email, password);
}
