import React from "react";
import {connect } from "react-redux"
import {addNewNote} from "../actions/index";

//noteform is used to take the input 
//local state in this componet has been used to store the input valkues which is later dispatched to the redux store
let FormStyles = {
    container : {
        display : "block",
        width : "50%",
        textAlign : "center",
        margin : "0 auto",
        padding : "10px"
    },
    input : {
            display : "block",
            width : "200px",
            height : "30px",
            margin : "0 auto",
            border : "1px solid black",
            paddingLeft : "20px"

    },
    textarea : {
        display : "block",
        width : "200px",
        height : "100px",
        margin : "10px auto",
        border : "1px solid black",
        paddingLeft : "20px"
    },
    button: {
        display : "block",
            width : "220px",
            height : "30px",
            margin : "0 auto",
    }
}
class NoteForm extends React.Component{
    constructor(props){
            super(props)

            this.state={
                title : "",
                note : ""
            }
            this.handleChange = this.handleChange.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidUpdate(){
        console.log(this.props.state.notes)
        localStorage.setItem("notes", JSON.stringify(this.props.state.notes) )
    }
    
    handleChange(e) {
            this.setState({[e.target.name] : e.target.value})
    }
    handleSubmit(e){
        e.preventDefault();
            this.props.addNewNote(this.state.title, this.state.note)
    }
    render(){
        return(
            <div style={FormStyles.container}>
                <React.Fragment >
                <h3>Add a new note</h3>
                <form onSubmit={this.handleSubmit}>
                  <input style={FormStyles.input} required name="title" onChange={this.handleChange}type="text" placeholder="Title"/>
                  <textarea style={FormStyles.textarea} required name="note" onChange={this.handleChange} placeholder="Note description">
                  </textarea>
                  <button style={FormStyles.button} type="submit">Add Note</button>
                </form>
            </React.Fragment>

            </div>
            
        )
    }
}

const mapStateToProps = state =>{
    return {
        state : state.noteList
    }
}
export default connect(mapStateToProps, {addNewNote})(NoteForm);