import axios from 'axios'
import { useState, React, useEffect} from 'react'

export default function useProfile(phoneNumber) {
    const [Profile, setProfile] = useState([]);

//    useEffect(()=>{
//        axios.post('http://localhost:3001/login',{
//            code,
//        }).then(res => {
//            setAcessToken(res.data.acessToken);
//            setRefreshToken(res.data.refreshToken);
//            setExpiresIn(res.data.expiresIn);
//            window.history.pushState({},null,'/authed/');
//        }).catch( (res =>
//        {   
//            console.log(res.data);
//            console.log("err");
//            //window.location = '/'; 
//        }))
//    },[code])
    return Profile
}