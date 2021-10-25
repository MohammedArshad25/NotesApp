import {ADD_NOTE, DELETE_NOTE, EDIT_NOTE} from "../actions/actionTypes.js";
import {useEffect} from "react";

const arrayOfNotes = JSON.parse(localStorage.getItem("notes") || "[]")
const intial_state = {
    notes : arrayOfNotes
}

export const noteReducer = (state=intial_state, action ) => {

    switch(action.type)
    {
        case ADD_NOTE:
           return {
            notes: [...state.notes,{
                title : action.title ,
                content : action.content
            } ]
           } 
           case DELETE_NOTE:
           return {
            notes: state.notes.filter((note, index)=> index != action.id)
           } 
           case EDIT_NOTE: 
            let {id, title , content} = action.payload
            return {
                notes : [...state.notes.map((note, index)=> {
                        if(index === id )
                        {
                            note.title = title 
                            note.content = content
                            return note 
                        }
                        return note

                })]
            }

        default :
        return state
    }
}   