
import './App.css';
import Header from './Component/Header';
import Action from './Component/Action';
import AddOption from './Component/AddOption';
import Options from './Component/Options';

function App() {
const title ='Indecision';
const subtitle ='Put your Life in the hands of a computer';
  return (
    <div className="App">
     
      <Header title={title} subtitle={subtitle}/>
      <Action />
      <Options />
      <AddOption />
    </div>
  );

  
}

export default App;
