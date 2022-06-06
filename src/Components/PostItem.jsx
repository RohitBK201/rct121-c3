import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { Children } from "react"

export const Privaterout = ({Children}) =>{

    const auth = useSelector(store=>store.ath.isauth)


    if(!auth)
    {
        return<Navigate to={"/"}/>
    }

    return Children

}