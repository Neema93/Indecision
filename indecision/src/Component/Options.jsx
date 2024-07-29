import { Component } from "react";
import Option from "./Option";
class Options extends Component{
    handleRemoveAll(){
        alert('Remove All');
    }
    render(){
       
        return(
        <div>
            <button onClick={this.handleRemoveAll}>RemoveAll</button>
            { this.props.options.map((option) => <Option key={option} optionText={option}/>)}
          
        </div>
    );
    }
}
export default Options;