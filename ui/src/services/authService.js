import http from "./httpService";
import _ from "lodash";

export async function register(user) {
  try {
    // const response = await http.post(
    //   `${apiEndpoint}/register`,
    //   _.pick(user, ["name", "email", "password"])
    // );
    graphQLFetch("", _.pick(user, ["name", "email", "password"]));
  } catch (error) {}

  localStorage.setItem("token", response.headers["x-auth-token"]);
  return;
}

export async function login(user) {
  try {
    // const response = await http.post(
    //   `${apiEndpoint}/login`,
    //   _.pick(user, ["email", "password"])
    // );
    createUser(_.pick(user, ["email", "password"]));
  } catch (error) {}
  localStorage.setItem("token", response.data);
  return;
}

export async function logout() {
  localStorage.removeItem("token");

  return;
}
export function getToken() {
  return localStorage.getItem("token");
}
export default {
  login,
  register,
  logout,
  getToken,
};
