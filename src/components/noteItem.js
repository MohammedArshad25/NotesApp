
//note Item is the chikd components of the noteList 
const ItemStyles = {
    Item : {
        display: "block",
        margin : "10px",
        height : "180px",
        width : "280px",
        padding : "5px 10px",
        border : "1px solid black",
        textAlign : "center",
        borderRadius : "2px"
    },
    cross : {
        display : "block",
       float : "right",
        top : "-15px",
        backgroundColor : "#568A88",
        color : "white",
        border : "1px solid black",
        cursor : "pointer"
    },
    content : {
        display : "block",
        height : "100px",
        width : "280px",
        textAlign : "left"
    },
    edit : {
        display : "block",
        backgroundColor : "#568A88",
        color : "white",
        border : "1px solid black",
        cursor : "pointer"
    }
}

const NoteItem = (props) => {
    return (
        <div style={ItemStyles.Item}>
            <button style={ItemStyles.cross} onClick = {props.handleDel} >x</button>
            <b>{props.title}</b>
                <hr/>
                <br />
                <span style={ItemStyles.content}>{props.content}</span>
                <button style={ItemStyles.edit} onClick = {props.updateEdt} >Edit</button>
        </div>
    )
}

export default NoteItem;