import React from "react";


class SearchedList extends React.Component{

firstParagraph=()=>{
if(!this.props.user[1]){
  return null;
}else if(this.props.user[1]){
    return this.props.user[1].para;
}
};
SecondParagraph=()=>{
    if(!this.props.user["0"]){
        return null;
      }else if(this.props.user["0"]){
          return this.props.user["0"].para;
      } 
}
thirdParagraph=()=>{
    if(!this.props.user[2]){
        return null;
      }else if(this.props.user[2]){
          return this.props.user[2].para;
      } 
}
fourthParagraph=()=>{
    if(!this.props.user[3]){
        return null;
      }else if(this.props.user[3]){
          return this.props.user[3].para;
      } 
}
fifthParagraph=()=>{
    if(!this.props.user[4]){
        return null;
      }else if(this.props.user[4]){
          return this.props.user[4].para;
      } 
}
sixthParagraph=()=>{
    if(!this.props.user[5]){
        return null;
      }else if(this.props.user[5]){
          return this.props.user[5].para;
      } 
}
seventhParagraph=()=>{
    if(!this.props.user[6]){
        return null;
      }else if(this.props.user[6]){
          return this.props.user[6].para;
      } 
}
eigthParagraph=()=>{
    if(!this.props.user[7]){
        return null;
      }else if(this.props.user[7]){
          return this.props.user[7].para;
      } 
}
ninthParagraph=()=>{
    if(!this.props.user[8]){
        return null;
      }else if(this.props.user[8]){
          return this.props.user[8].para;
      } 
}
tenthParagraph=()=>{
    if(!this.props.user[9]){
        return null;
      }else if(this.props.user[9]){
          return this.props.user[9].para;
      } 
}
render(){
    return(
        <div>
            <h3 style={{color:"green"}}>All available paragraphs(Now search a keyword to see which of the below paragraphs consist of that keyword AND THEN HIT ENTER TO SUBMIT)</h3>
<div>{this.firstParagraph()}</div>
<br></br>
<br></br>
    <div>{this.SecondParagraph()}</div>
    <br></br>
    <br></br>
<div> {this.thirdParagraph()}</div>
<br></br>
<br></br>
    <div>{this.fourthParagraph()}</div>
    <br></br>
    <br></br>
<div>{this.fifthParagraph()}</div>
<br></br>
<br></br>
    <div>{this.sixthParagraph()}</div>
    <br></br>
    <br></br>
<div>{this.seventhParagraph()}</div>
<br></br>
<br></br>
    <div>{this.eigthParagraph()}</div>
    <br></br>
    <br></br>
<div>{this.ninthParagraph()}</div>
<br></br>
<br></br>
    <div>{this.tenthParagraph()}</div>
</div>
  );
}

}




export default SearchedList;
