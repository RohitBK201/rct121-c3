import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getuserdata } from "../Redux/app/action";


export const Posts = () =>{

    const dispatch = useDispatch();

    const users = useSelector(store=>store.app.data)

    const loading = useSelector(store=>store.app.loading)

    const error = useSelector(store=>store.app.error)

    console.log(users)

    const [pg,setPg] = useState(1)


    
    useEffect(()=>{ dispatch( getuserdata(dispatch,pg) ) },[pg])


        const twk = useSelector(store=>store.ath.token)

        console.log(twk)

    return(
        <div>
            <h1>posts</h1>

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