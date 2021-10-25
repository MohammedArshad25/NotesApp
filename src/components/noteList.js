import React from "react";
import {connect } from "react-redux";
import {DeleteNote, EditNote} from "../actions/index";
import Modal from "./Modal";
import Search from "./Search";
import NoteItem from "./noteItem";

//redux store is used to handle add, update, delete actions on the notes list
const ListStyles = {
  container : {
    display : "flex",
    flexDirection : "row",
    flexWrap : "wrap",
    justifyContent : "centre",
    marginLeft : "60px"
  }
}

class NoteList extends React.Component{
    constructor(props){
        super(props)

        this.state = {
                showModal : false,
                title : "",
                content: "",
                index : 0,
                search : ""
        }
        this.handleChange = this.handleChange.bind(this);
    }
    //updateedit is used to update the changed inputs in the local state of this component
    updateEdit = (note, index) => {
        this.setState({
            showModal : !this.state.showModal,
            title : note.title,
            content : note.content,
            index : index
        })
    }
    //all handle events are used to uopdate the redux state of the application
    handleEdit = () => {
        let {title , content} = this.state
        let id = this.state.index
        this.props.EditNote(id, title, content);
        this.setModal()
    }
    handleDelete = (index) => {
        this.props.DeleteNote(index)
    }
    setModal = () => {
      this.setState({
        showModal : !this.state.showModal
    })
    }
    handleChange(e){
        this.setState({
          [e.target.name] : e.target.value
        }
        )
    }
    handleSearch(e){
      this.setState({
        search : e.target.value
      })
    }
    render(){
     
        const notesItems =this.props.state.notes.map((note, index) => {
            if(this.state.search)
            {
              if(note.content.includes(this.state.search) || note.title.includes(this.state.search)){
                return (
                  <NoteItem title={note.title} 
                  content={note.content}
                  index={index} 
                  handleDel={()=>this.handleDelete(index)} 
                  updateEdt={()=>this.updateEdit(note, index)} />
              )
              }
            } else {
                return (
                    <NoteItem title={note.title} 
                    content={note.content}
                    index={index} 
                    handleDel={()=>this.handleDelete(index)} 
                    updateEdt={()=>this.updateEdit(note, index)} />
                )
            }


          
                 
        });
  
      return (
        <React.Fragment>
           <Search handleSrch={(e)=>this.handleSearch(e)}/>
          <div style={ListStyles.container}>
              {notesItems}
          </div>
       

          {this.state.showModal&& (
            <Modal show={this.state.showModal} id="10">
              <div className="center">
                <button className="close" onClick={()=>this.setModal()}>X</button>
              </div>
              <br />
              <form>
              <div className="title">
                  <label htmlFor="title">Title : </label>
                  <input type="text" onChange={this.handleChange} placeholder={this.state.title} name="title" />
                </div>
                <div className="content">
                  <label htmlFor="content">content :</label>
                  <textarea type="text" onChange={this.handleChange} placeholder={this.state.content} name="content" ></textarea>
                </div>
                <br />
                <div className="submit">
                  <button type="button" className="btn" onClick={()=>this.setModal()} >cancel</button>
                  <button type="button" className="btn" onClick={()=>this.handleEdit  ()} >ok</button>
                </div>
              </form>
            </Modal>)}
        </React.Fragment>
      );

};
}

const mapStateToProps= (state) => {
    return {
        state : state.noteList
    }
}

export default connect(mapStateToProps, {DeleteNote, EditNote})(NoteList); 