import axios from 'axios'


const url = 'http://localhost:8000'

export const addUser = async (data) => {
    try{
        
        await axios.post(`${url}/add`,data)

    }catch(err) {

        console.log("Error while adding user",err.message)
    }
}

export const getAllUsers = async () => {
    try {
        const res = await axios.get(`${url}/users`)
        return res;
    }catch(err) {
        console.log("Error while getting All users",err.message)
    }
}


export const setConversation = async (data) => {

    try{

        const res = await axios.post(`${url}/conversation/add`,data)
        console.log("Hit on setConversation")
    }catch(err) {
        console.log("Error while setting Conversation",err.message)
    }
}


export const getConversation = async (data) => {
    try{

        const res = await axios.post(`${url}/conversation/get`,data)

        return res.data

    }catch(err){
        console.log("Error while getting Converstaion",err.message)
    }
}

export const newMessage = async (data) => {
    try{
        const response  = await axios.post(`${url}/message/add`,data)
        return response.data
        
    }catch(err)
{
    console.log("Error while sending New Message",err.message)
}}


export const getMessages = async (id) => {
    try{
        const res = await axios.get(`${url}/messages/${id}`)
        return res.data
        
    }catch(err){
        console.log("Error while getting messages",err.message)
    }
}


export const uploadFile = async(data) => {
    try{
        const res = axios.post(`${url}/file/upload`,data)
        return res.data

    }catch(err){
        console.log("Error while uploading file",err.message)
    }
}