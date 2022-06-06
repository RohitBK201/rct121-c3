export const authActions = {

    logreq : "logreq",
    logsuc : "logsuc",
    logfal : "logfal"
}

export const handlelogreq = () =>{

    return({
        type: authActions.logreq
    })
}

export const handlelogsuc = (data) =>{

    console.log(data)

    return({
        type: authActions.logsuc,
        payload : data
    })
}

export const handlelogfal = () =>{

    return({
        type: authActions.logfal
    })
}