import { Component } from "react";
import Option from "./Option";
class Options extends Component{
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll(){
        console.log(this.props.options);
        // alert('Remove ');
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