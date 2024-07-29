import { Component } from "react";

class Action extends Component{
    handlePick(){
        alert('handlepike');
    }
    render() {
        return(
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        )
    }
}
export default Action;