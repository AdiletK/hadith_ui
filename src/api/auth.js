import axios from "axios";
let baseUrl = "https://hadithtezal.herokuapp.com/";

async function login(username, password) {
  try {
    let url = baseUrl + "api/auth/signin";
    let response = await axios.post(url,{
      'username':username,
      'password':password
    });
    let token = response.data.token;
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    window.localStorage.setItem("token", token);

    return true;
  } catch (error) {
    return false;
  }
}
 
function logout() {
    delete axios.defaults.headers.common["Authorization"];
    window.localStorage.clear();
}
 

export { login, logout };