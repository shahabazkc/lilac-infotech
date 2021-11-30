import axios from 'axios';

// 'instance' of it
const instance = axios.create({
    // .. where we make our configurations
    baseURL: 'http://localhost:5000/'
});

let token = localStorage.getItem('token');

// Where you would set stuff like your 'Authorization' header, etc ...

instance.defaults.headers.common['x-access-token'] = 'Bearer ' + token;

export const loginSubmit = async (data) => {
    token = localStorage.getItem('token');
    try {
        let response = await instance.post('/login', data);
        return response;
    }
    catch (e) {
        let response = { err: "something error" };
        return response;
    }

}

export const signupSubmit = async (data) => {
    try {
        let response = await instance.post('/register', data)
        return response;
    }
    catch (e) {
        let response = { err: "Something went wrong" };
        return response;
    }
}

export const userLoginCheck = async () => {
    token = localStorage.getItem('token');
    try {
        let response = await instance.get('/user-check');
        return response;
    }
    catch (e) {
        let response = { err: "Something went wrong" };
        return response;
    }
}

export const getProducts = async (data) => {
    token = localStorage.getItem('token');
    try {
        let response = await instance.post('/get-products', data);
        return response;
    }
    catch (e) {
        let response = { err: "Something went wrong" };
        return response;
    }
}

export const addToCart = async (proId) => {
    let data = { proId: proId }
    token = localStorage.getItem('token');
    try {
        let response = await instance.post('/add-to-cart', data);
        return response
    }
    catch (e) {
        let response = { err: "something went wrong" };
        return response;
    }
}

export const viewCart = async () => {
    token = localStorage.getItem('token');
    try {
        let response = await instance.get('/get-cart');
        return response
    }
    catch (e) {
        let response = { err: "something went wrong" };
        return response;
    }
}

export const quantityUpdate = async (proId,type) => {
    token = localStorage.getItem('token');
    let data = {proId,type}
    try {
        let response = await instance.post('/change-quantity', data);
        return response;
    }
    catch (e) {
        let response = { err: "something went wrong" };
        return response;
    }
}

export const removeProduct = async (proId) => {
    let data = {proId}
    token = localStorage.getItem('token');
    try {
        let response = await instance.put('/remove-product', data);
        return response;
    }
    catch (e) {
        let response = { err: "something went wrong" };
        return response;
    }
}

