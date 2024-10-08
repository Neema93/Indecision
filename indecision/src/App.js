
import './App.css';
import './Component/css/Button.css'
import Header from './Component/Header';
import Action from './Component/Action';
import AddOption from './Component/AddOption';
import Options from './Component/Options';
import { Component } from 'react';
import "./Component/css/Main.css"
class App extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption =this.handleDeleteOption.bind(this);
    this.state = {
      // options:[]
      options: props.options

    };
  }
  componentDidMount(){
    const json = localStorage.getItem('options')
    const options =JSON.parse(json);
    this.setState(() => ({ options }));
    console.log(options) 
  }
  componentDidUpdate(prevProps, prevState){
    if(prevState.options.length !== this.state.options.length){
      const json =JSON.stringify(this.state.options);
      localStorage.setItem('options',json)
    }
    }
    
  componentWillUnmount(){
    console.log('will unmount');
  }
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) =>({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      };
    });
  }
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your Life in the hands of a computer';

    return (
      <div >

        <Header title={title} subtitle={subtitle} />
        <div className='container-box'>
        <div className='container'>
        <Action  hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} />
        <AddOption handleAddOption={this.handleAddOption} />
        </div>
        </div>
      </div>
    );


  }
}
App.defaultProps = {
  options: []
}
export default App;
