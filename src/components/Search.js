import {BiSearch} from "react-icons/bi";
//search bar comoponent of is  styled here
const SearchStyles = {
    container : {
        display : "block",
        width : "220px",
        height : "30px",
        margin : "0 auto",
        border : "1px solid black"
    },
    
    input :{
        border : "none",
        paddingTop : "10px",
        outline : "none",
        width : "190px"
    },
    searchbutton:{
        height : "20px",
        width : "20px"
       
    }

}
const Search = (props) => {
    return (
        <div style ={SearchStyles.container}>
        <input style={SearchStyles.input} onChange={(e)=>props.handleSrch(e)} type = "text " />
           <BiSearch style={SearchStyles.searchbutton}/>
        </div>
    );
}


export default Search;