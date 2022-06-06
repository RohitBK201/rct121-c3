import { authActions } from "./action"

const initState = {

    isauth : false,

    token : null

}

export const Authreducer = (store=initState,action)=>{

    switch(action.type)
    {
        case authActions.logreq : {

            return({
                ...store,
                isauth : false,
            })

        }
        case authActions.logsuc : {

            console.log(action.payload)

            return({
                ...store,
                isauth : true,
                token : action.payload
            })
        }
        case authActions.logfal : {

            return({
                ...store,
                isauth : false,
            })
        }
        default : return store;
    }

}