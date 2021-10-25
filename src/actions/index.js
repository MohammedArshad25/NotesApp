import {ADD_NOTE, DELETE_NOTE, EDIT_NOTE} from "./actionTypes";

export const addNewNote = (title , content) => {
    return  {
        type : ADD_NOTE,
        title,
        content
    }
}

export const DeleteNote = (id) => {
    return  {
        type : DELETE_NOTE,
        id
    }
}
export const EditNote = (id, title, content) => {
    return  {
        type : EDIT_NOTE,
        payload : {
            id, title , content
        }
    }
}

