import axios from "axios";
let baseUrl = "https://hadithtezal.herokuapp.com/api/book/";

async function getById(id) {
  try {
    let url = baseUrl + "findById/" + id;
    let response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error)
    return null;
  }
}

async function getAll(){
  try {
    let url = baseUrl + "findAll";
    let response = await axios.get(url);
    console.log(response.data)
    return response.data;
  } catch(error){
    console.log(error);
    return null
  }
}

async function add(book) {
  try {
    console.log(book)
    let url = baseUrl + "save";
    let response = await axios.post(url, book);
    return response.data;
  } catch (error) {
    alert(error);
    return null;
  }
}

async function update(id, book) {
  try {
    let url = baseUrl + "update/" + id;
    let response = await axios.put(url, book);
    return response.data;
  } catch (error) {
    alert(error);
    console.log(error)
    return null;
  }
}

async function deleteById(id){
  try {
    let url = baseUrl + "delete/" + id;
    let response = await axios.delete(url);
    console.log(response);
    return response.data;
  } catch (error) {
    alert(error);
    console.log(error)
    return null;
  }
}

export { getById, getAll, add, update, deleteById };
