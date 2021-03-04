import axios from "axios";

export const LOGIN_URL = "https://www.aprajitaretails.in/api/login";
export const REGISTER_URL = "https://www.aprajitaretails.in/register";
export const REQUEST_PASSWORD_URL = "https://www.aprajitaretails/forgot-password";

export const ME_URL = "api/me";
export const LOGIN_ADMIN="https://www.aprajitaretails.in/api/Login?uname=Admin&password=Admin%401234";
export function login(userName, password) {
  return axios.post(LOGIN_URL ,JSON.stringify( {uname:'Amin',password:'Admin@1234'} )
  ,{headers: {
    'content-type': 'application/json;charset=utf-8'
  }}
  );
}

export function register(email, fullname, username, password) {
  return axios.post(REGISTER_URL, { email, fullname, username, password });
}

export function requestPassword(email) {
  return axios.post(REQUEST_PASSWORD_URL, { email });
}

export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  return axios.get(ME_URL);
}
