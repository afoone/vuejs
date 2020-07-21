import axios from './axios';

export const login = (user, password) => {
    return axios.post("/login", {
        user,
        password
    })
}