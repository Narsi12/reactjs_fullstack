import axios from 'axios';
const url = "http://127.0.0.1:8000/users/";

export async function getData() {
    return await axios.get(`${url}`);
}


export async function postData(data) {
    return await axios.post("http://127.0.0.1:8000/users/create/", data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export async function putData(id, data) {
    return await axios.put(`${url}${id}/update/`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export async function deleteData(id) {
    return await axios.delete(`${url}${id}/delete`);
}