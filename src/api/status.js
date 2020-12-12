import axios from "axios";
let baseUrl = "https://hadithtezal.herokuapp.com/api/status/";

async function getAll(){
  try {
    let url = baseUrl + "findAll";
    let response = await axios.get(url);
    return response.data;
  } catch(error){
    console.log(error);
    return null
  }
}


export { getAll };
