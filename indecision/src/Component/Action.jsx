import { Component } from "react";
import "./css/Action.css"
class Action extends Component{
  
    render() {
        return(
            <div className="item">
                <button className='big-button' onClick={this.props.handlePick} 
                disabled={!this.props.hasOptions}>
                    What should I do?
                    
                </button>
            </div>
        )
    }
}
export default Action;