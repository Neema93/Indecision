import { Component } from "react";
import Option from "./Option";
class Options extends Component{
    render(){
        return(
        <div>
            { this.props.options.map((option) => <Option key={option} optionText={option}/>)}
          
        </div>
    );
    }
}
export default Options;