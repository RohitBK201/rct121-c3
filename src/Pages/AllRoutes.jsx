
import { Routes,Route } from "react-router-dom"
import { Privaterout } from "../Components/PostItem"
import { Home } from "./Home"
import { Posts } from "./Posts"

export const AllRoutes = () =>{

    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/posts" element={<Posts/>}/>
            </Routes>
        </div>
    )

} 