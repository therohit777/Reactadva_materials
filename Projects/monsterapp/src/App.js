import './App.css';
import { Component } from 'react'; 


class App extends Component {
  constructor(){
    super()
    this.state={
      'name':'Rohit',
    }
  }
  render(){
    return (
      <div className="App">
        Hello I am {this.state.name}
      </div>
    );
  }
}

export default App;
