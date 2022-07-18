import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000/api'
axios.defaults.headers = {
    'Content-Type' : 'application/json'
}

export const AuthService = {
    async register (email, phone, name, address, password) {
        return axios.post('auth/register', {
            email,
            phone,
            name,
            address,
            password
        })
    },

    async loggin (email, password) {
    return axios.post('auth/loggin', {
        email,
        password
    })}
}