import { combineReducers } from "redux"
import {noteReducer} from "./noteReducer";

export default combineReducers({
    noteList : noteReducer
});
