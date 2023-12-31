import axios from "axios";

const BASE_URL = "http://localhost:8000/library/authorapi/";

export const getAuthorById = async(id) => {
    const response = await axios.get(BASE_URL + "author/" + id);
    return response.data;
}

export const getAuthors = async() => {
    const response = await axios.get(BASE_URL + "authors");
    return response.data;
}

export const updateAuthorById = async(id, data) => {
    const response = await axios.put(BASE_URL + "author/" + id, data);
    return response.data;
}

export const addNewAuthor = async(data) => {
    const response = await axios.post(BASE_URL + "author", data);
    return response.data;
}