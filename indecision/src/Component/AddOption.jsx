import { Component } from "react";

class AddOption extends Component{
    handleAddOption(e){
        e.preventDefult();
        const option = e.target.elements.option.value.trim();
        if(option){
            alert('Hello',option);
            console.log(option);
        }
    }
    render(){
        return(
        <div> 
          
          <form  >
            <input type="text" name="option" />
            <button onSubmit={this.handleAddOption}>Add option</button>
          </form>
        </div>
        );
    }
}
export default AddOption;