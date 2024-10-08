import { Component } from "react";
import "./css/AddOption.css"
class AddOption extends Component{
    constructor(props){
        
            super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() =>{
            return { error}
        })
        
    }
    render(){
        return(
        <div className="item"> 
          {this.state.error && <p className="add-option-error">{this.state.error}</p>}
          <form  className="add-option" onSubmit={this.handleAddOption} >
            <input className="add-option__input" type="text" name="option" />
            <button className="button">Add option</button>
          </form>
        </div>
        );
    }
}
export default AddOption;