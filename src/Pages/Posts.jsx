import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { getuserdata } from "../Redux/app/action";


export const Posts = () =>{

    const twk = useSelector(store=>store.ath.token)
    const auth = useSelector(store=>store.ath.isauth)

    const navigate =useNavigate()

    console.log(twk,auth)

    const email = localStorage.getItem("email")

    console.log(email)



    const dispatch = useDispatch();

    const users = useSelector(store=>store.app.data)

    const loading = useSelector(store=>store.app.loading)

    const error = useSelector(store=>store.app.error)

    console.log(users)

    const [pg,setPg] = useState(1)


    
    useEffect(()=>{ dispatch( getuserdata(dispatch,pg) ) },[pg])


        

    return(
        <div>
            <h1>posts</h1>

            {twk!==null ? <h4>{twk.token} --- {email}`</h4>:""}

            {loading && <div>Loading ...</div>}
            {error && <div>error ...</div>}

            {users.map((item)=>(
                <div key={item.id} style={{border:"1px solid black", padding:"1rem",margin: "0.5rem"}} > 
                {item.title}
                <br/>
                <br/>
                <br/>
                <div>
                    {item.body}
                </div>
                </div>
            ))}

            <div style={{display:"flex"}}>

                <button onClick={()=>{setPg(pg-1)}}>prev</button>
                <button onClick={()=>{setPg(pg+1)}}>next</button>

            </div>

        </div>
    );
}