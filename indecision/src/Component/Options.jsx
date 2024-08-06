import { Component } from "react";
import Option from "./Option";
import './Css/Base.css'
class Options extends Component{
 
   
    render(){
       
        return(
        <div>
             <h3 className="widget-header__title">Your Options</h3>
            <button className="button button--link" onClick={this.props.handleDeleteOptions}>RemoveAll</button>
            {this.props.options.length === 0 && <p className="widget__message">Please add an option to get started!</p>}
            { this.props.options.map((option, index) => 
            <Option key={option} count={index + 1} optionText={option} handleDeleteOption={this.props.handleDeleteOption}/>
            )}
          
        </div>
    );
    }
}


export default Options;