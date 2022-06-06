import axios from "axios"
import { useDispatch } from "react-redux"

export const appActions = {

    APPREQ : "APPREQ ",
    APPSUC : "APPSUC ",
    APPFAL : "APPFAL ",

}

export const handlAppReq = () => {

    return ( {
        type : appActions.APPREQ
    })

}

export const handleAppSuc = (data) =>{

    return({

        type : appActions.APPSUC,
        payload : data

    })

}

export const handleAppFal = () =>{

    return({
        type : appActions.APPFAL
    })

}

export const getuserdata = (dispatch,pg) => () =>{

   

    const apireq = handlAppReq()

    dispatch(apireq)

    return axios({
        method: "GET",
        url : "https://jsonplaceholder.typicode.com/posts",

        params : {

            _page : pg,

            _limit : 5

        }
    })
    .then((res)=>{ 

        const apisuc = handleAppSuc(res.data)

        dispatch( apisuc )
    })
    .catch((err)=>{

        const apifal = handleAppFal()

        dispatch(apifal)

    })

}