import axios from "axios";
let baseUrl = "https://hadithtezal.herokuapp.com/api/category/";

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

async function getByLang(id){
  try {
    let url = baseUrl + "findByLangId/" + id;
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
    return response.data;
  } catch(error){
    console.log(error);
    return null
  }
}

async function add(book) {
  try {
    let url = baseUrl + "save";
    let response = await axios.post(url, book);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function update(id, book) {
  try {
    let url = baseUrl + "update/" + id;
    let response = await axios.put(url, book);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
async function deleteById(id){
  try {
    let url = baseUrl + "delete/" + id;
    let response = await axios.delete(url);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export { getById, getAll, add, update, deleteById, getByLang };
