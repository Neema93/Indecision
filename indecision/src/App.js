
import './App.css';
import Header from './Component/Header';
import Action from './Component/Action';
import AddOption from './Component/AddOption';
import Options from './Component/Options';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick =this.handlePick.bind(this);
    this.handleAddOption =this.handleAddOption.bind(this);
    this.state = {
      // options:[]
      options: [' Thing one', 'Thing two', 'Thing three']
    };
  }
  handleDeleteOptions(){
    this.setState(() => {
      return{
        options: []
      };
    });
  }
  handlePick(){
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  handleAddOption(option){
    this.setState((prevState) =>{
      return {
        options: prevState.options.concat(option)
      };
    });
  }
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your Life in the hands of a computer';

    return (
      <div className="App">

        <Header title={title} subtitle={subtitle} />
        <Action hasOptions={this.state.options.length > 0}  />
        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}/>
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );


  }
}
export default App;
