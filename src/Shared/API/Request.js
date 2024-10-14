import axios from "axios"


const baseURL = 'https://qr-code-generator-objk.onrender.com'

export const publicRequest = axios.create({
    baseURL : baseURL
 
})

export const UserRequest = () =>{
    const token = localStorage.getItem('token')
    return axios.create({
        baseURL : baseURL,
        headers : {
            "Content-Type": "application/json",
            Authorization : `Bearer ${token}`
        }
    })     
}