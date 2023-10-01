
import axios from 'axios';


const url = 'http://localhost:8000';

export const addUser = async(data) =>{
    try{

        //url is the backend url 
        // data is the body of the post api 
        //api calls are asynchrous which returns promises so we use await 
        await axios.post(`${url}/add`, data);
    } catch (error) {
        console.log('Error Message : ',error.message);
    }
};



export const getUsers = async () =>{
    try {
        let response = await axios.get(`${url}/users`);
        //console.log(response);
        return response.data;
    } catch (error) {
        console.log('error while calling getUsers api ',error.message);
    }
}


//category
export const setConversion = async (data) => {
   try {
    await axios.post(`${url}/conversation/add`,data);
   } catch (error) {
    console.log('error while calling set Conversation api ',error.message);
   }
} ;



export const getConversation = async (data) =>{
    try {
        let response = await axios.post(`${url}/conversation/get`,data);
        return response.data;
    } catch (error) {
        console.log('error while calling get Conversation api ',error.message);
    }
};



export const newMessage = async (data) =>{
    try {
        await axios.post(`${url}/message/add`,data);
    } catch (error) {
        console.log('error while calling new mewmessage api',error.message);
    }
};


export const getMessages = async (id)=>{
    try {
        let response = await axios.get(`${url}/message/get/${id}`);
        return response.data;
    } catch (error) {
        console.log('error while calling get /message api',error.message);
    }
};


export const uploadFile = async(data)=>{
    try {
        return await axios.post(`${url}/file/upload`,data);
    } catch (error) {
        console.log('error in calling upload file api',error.message);
    }
};