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

const editToDo = (state=initialState(),action) => {

    if(action.type==='editsection'){
        const items=action.data
        setStorage(items)      
        console.log(items)
        return {...items}
    }

    return state
}

export default editToDo