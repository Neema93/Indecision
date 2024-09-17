import { Component } from "react";
import "./css/Header.css"

class Header extends Component{
    render(){
    
        return(
            <div className="header">
                
                
                <div className="header_title"> {this.props.title} </div>
                <div className="header_subtitle">{this.props.subtitle} </div>
              
            </div>
        );
    };
   
}
Header.defaultProps ={
    title: 'Indecision'
}
export default Header;