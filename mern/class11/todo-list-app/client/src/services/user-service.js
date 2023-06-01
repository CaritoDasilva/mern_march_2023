import axios from 'axios'

export const registerUser = (user) => axios.post('http://localhost:8080/api/user/register', user)

export const loginUser = (user) => axios.post('http://localhost:8080/api/user/login', user)
