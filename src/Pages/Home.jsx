import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { handlelogfal, handlelogreq, handlelogsuc } from "../Redux/auth/action"

export const Home =() =>{

    const [eml,setEml] = useState("")
    const [pss,setPss] = useState("")

    const nav = useNavigate()

    const dispatch = useDispatch();

    const login = (eml,pass,dispatch) =>{
        
        const apireq = handlelogreq()

        dispatch(apireq)

       return axios({
            method : "POST",
            url : "https://reqres.in/api/login",
            data : {
               
                "email": eml,
                "password": pass
            }
        })
        .then((res)=>{

            const apisuc = handlelogsuc(res.data)

            console.log(res.data)

            nav("/posts")
            
            dispatch(apisuc)

        })
        .catch((e)=>{
            const apifal =handlelogfal()
            dispatch(apifal)
        })
    }
    

    return(
    <div>

        <div>
            dummy login :

           "email": "eve.holt@reqres.in",
             
            "password": "cityslicka"

        </div>

        <div style={{display : "flex", flexDirection: "column", width : "300px", padding : "10px" }}>
            
            <input type="text" placeholder="email" onChange={(e)=>{setEml(e.target.value)}} />
            <br/>
            
            <input type="text" placeholder="password" onChange={(e)=>{setPss(e.target.value)}}/>
            <br/>
            

            <button onClick={()=>{login(eml,pss,dispatch)}}>submit</button>
            
            </div>

    </div>)

}