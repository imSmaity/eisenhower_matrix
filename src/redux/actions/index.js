

export const addToList=(data)=>{
    return {
        type:'add'+data.option,
        data:data,
        payload:true
    }
}
