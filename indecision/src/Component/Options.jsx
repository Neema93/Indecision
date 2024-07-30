import { Component } from "react";
import Option from "./Option";
class Options extends Component{
 
   
    render(){
       
        return(
        <div>
            <button onClick={this.props.handleDeleteOptions}>RemoveAll</button>
            { this.props.options.map((option) => <Option key={option} optionText={option}/>)}
          
        </div>
    );
    }
}
export default Options;