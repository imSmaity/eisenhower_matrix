import { combineReducers } from "redux";
import editToDo from "./editToDo";
import updateToDo from './updateToDo'


const rootReducer=combineReducers(
    {
        updateToDo,
        editToDo
    }
)

export default rootReducer 