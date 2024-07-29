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
          
          <form  onSubmit={this.handleAddOption} >
            <input type="text" name="option" />
            <button>Add option</button>
          </form>
        </div>
        );
    }
}
export default AddOption;