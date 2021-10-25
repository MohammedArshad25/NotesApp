import React from "react";
import NoteForm from "./noteForm";
import NoteList from "./noteList";


//NoteForm is the form where we take the input 
//NoteList is the list of notes 
class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                 <NoteForm />
                 <NoteList />
            </div>
        )
        
    }
}

export default App;