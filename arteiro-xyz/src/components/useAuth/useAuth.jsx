import axios from 'axios'
import { useState, useEffect} from 'react'

export default function useAuth(code) {
    const [acessToken, setAcessToken]= useState("");
    const [refreshToken, setRefreshToken]= useState("");
    const [expiresIn, setExpiresIn]= useState("");

    useEffect(()=>{
        axios.post('http://localhost:3001/login',{
            code,
        }).then(res => {
            setAcessToken(res.data.acessToken);
            setRefreshToken(res.data.refreshToken);
            setExpiresIn(res.data.expiresIn);
            window.history.pushState({},null,'/authed/');
        }).catch( (res =>
        {   
            console.log(res);
            console.log("err");
            //window.location = '/'; 
        }))
    },[code])

    useEffect(()=>{
        if (!refreshToken||!expiresIn)  return
        const interval =setInterval(()=>{
                axios.post('http://localhost:3001/refresh',{
                refreshToken,
            }).then(res => {
                setAcessToken(res.body.refreshToken);
                setExpiresIn(res.body.expiresIn);
            }).catch((res => 
            {
                console.log(res.data);
                console.log("err");
                //window.location = '/'; 
            }))
        }, (expiresIn-60)*1000)  
        return () => clearInterval(interval)
    },[refreshToken, expiresIn])
    
    
    return acessToken
}