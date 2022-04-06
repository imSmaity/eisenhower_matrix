

export const addToList=(data)=>{
    return {
        type:'add'+data.option,
        data:data,
        payload:true
    }
}

export const editTheList=(items)=>{
    return {
        type:'editsection',
        data:items,
        payload:true
    }
}
