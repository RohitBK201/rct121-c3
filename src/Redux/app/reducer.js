import { appActions } from "./action"

const initState = { 
    
    loading : false ,

    error : false,

    data : [] 

}

export const Areducer = (store = initState ,action) =>{

    switch(action.type)
    {
        case appActions.APPREQ : {

            return({
                ...store,
                loading : true,
            })

        }

        case appActions.APPSUC : {

            

            return({
                ...store,
                loading : false,
                data : action.payload
            })
        }

        case appActions.APPFAL : {

            return({

                ...store,
                loading : false,
                error : true
            })

        }

        default : return store;
    }

}



