import { Component } from "react";
import './Css/Header.css'
class Header extends Component{
    render(){
    
        return(
            <div className="header">
                <h1 className="header_title"> {this.props.title} </h1>
                <h2 className="header_subtitle">{this.props.subtitle} </h2>
            </div>
        );
    };
   
}
Header.defaultProps ={
    title: 'Indecision'
}
export default Header;