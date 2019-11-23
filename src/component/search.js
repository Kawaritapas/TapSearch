
import React from "react";
import SearchedList from "./searchedList";
import documented from "../document/docData";
 
class Search extends React.Component{
state={user:"",current:""};    // i have two states here 1] the user input handler 2] the submitted user input

inputListner=(event)=>{
   this.setState({user:event.target.value});
}
onSubmit=(event)=>{
 event.preventDefault();
 this.setState({current:this.state.user});
}
renderList=()=>{
let userInput= this.state.current.trim().toLowerCase();
let filtered=documented.filter((val)=>{
if(val.para.toLowerCase().includes(userInput)){
    return val.para;
}
});
return filtered;
}; 
render(){
return(
    <div className="ui segment" style={{marginTop:'10px',color:"black"}}>
    <form onSubmit={this.onSubmit}  className="ui form" >
    <div className="field">
     <label style={{color:"blue"}}>SEARCH BELOW, EXAMPLES   (lorem,maecenas,sed,commercial,theorizing,convenient,fact,structure,represent,sentences,
         paragraphs,controlling,abecedarian) </label>
     <div className="ui inverted segment">
     <input style={{color:"blue"}} type='text' placeholder='Search for paragraphs...' value={this.state.user}  onChange={this.inputListner} />
      </div>   
    </div>
    </form>
    <div>
<SearchedList  user={this.renderList()}/>
</div>
</div>

);
}
};

export default Search;