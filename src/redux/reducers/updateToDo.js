const getStorage=()=>{
    return sessionStorage.getItem("todo_2DO2")
}
const setStorage=(data={section1:[],section2:[],section3:[],section4:[]})=>{
    sessionStorage.setItem("todo_2DO2",JSON.stringify(data))
    return sessionStorage.getItem("todo_2DO2")
}

const initialState=()=>{
    return (
        getStorage()?
        JSON.parse(getStorage()):
        setStorage()
    )
}

const updateToDo = (state=initialState(),action) => {

    if(action.type==='addsection1'){
        state.section1.push(action.data)
        setStorage(state)      

        return {...state}
    }
    else if(action.type==='addsection2'){
        state.section2.push(action.data)
        setStorage(state)      

        return {...state}
    }
    else if(action.type==='addsection3'){
        state.section3.push(action.data)
        setStorage(state)      

        return {...state}
    }
    else if(action.type==='addsection4'){
        state.section4.push(action.data)
        setStorage(state)      

        return {...state}
    }
    return state
}

export default updateToDo