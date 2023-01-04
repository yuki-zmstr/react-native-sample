import axios from 'axios';

const API_KEY = 'AIzaSyAqip2KDGtuDz4YRUL5e40PRuIQuX3dc3A';

export async function createUser(email, password) {
  const response = await axios.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    },
  );
}
