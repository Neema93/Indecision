import { Component } from "react";
import './Css/Header.css'
import './Css/Base.css'
class Header extends Component{
    render(){
    
        return(
            <div className="header">
                <div className="container">
                <h1 className="header_title"> {this.props.title} </h1>
                <h2 className="header_subtitle">{this.props.subtitle} </h2>
                </div>
            </div>
        );
    };
   
}
Header.defaultProps ={
    title: 'Indecision'
}
export default Header;