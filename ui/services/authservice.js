export function setTokenSignin(data) {
  const { token } = data.UserSignIn;
  localStorage.setItem('token', token);
}

export function setTokenSignUp(data) {
  const { token } = data.UserAdd;
  localStorage.setItem('token', token);
}


export function getToken() {
  return localStorage.getItem('token');
}

export function clearToken() {
  localStorage.removeItem('token');
}


export default {
  setTokenSignin, setTokenSignUp, getToken, clearToken,
};
