import { Component } from "react";
import './Css/Base.css'
class Action extends Component{
  
    render() {
        return(
            <div>
                <button className='big-button' onClick={this.props.handlePick} 
                disabled={!this.props.hasOptions}>
                    What should I do?
                    
                </button>
            </div>
        )
    }
}
export default Action;