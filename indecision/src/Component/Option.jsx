import { Component } from "react";
import "./css/Options.css"
class Option extends Component{
    render(){
        return(
            <div className="option">
                  <p className="option__text"> {this.props.optionText}</p>
            
                <button className="button button--link" onClick={(e) => {this.props.handleDeleteOption(this.props.optionText)}}>remove</button>
            </div>
        );
    }
}
export default Option;