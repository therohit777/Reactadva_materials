import "./App.css";
import { Component } from "react";
import CardList from "./components/cards-list/CardList.components";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      search_monsters:''
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ monsters: users });
      });
  }


  onSearchChange=(event) => { 
       this.setState(()=>{
      return {search_monsters:event.target.value.toLowerCase()};
    })
  }

  render() {
    const {monsters,search_monsters} = this.state;
    const {onSearchChange} = this;
    const filtermonster = monsters.filter((monsterelement)=>{ 
      return monsterelement.name.toLowerCase().includes(search_monsters); 
    })
    return (
      <div className="App">
        <input
          type="text"
          placeholder="search monsters"
          onChange={(event)=>{onSearchChange(event)}}
        />
        <CardList monsters={filtermonster}/> 
        {/* monster here is passed to the component as a Prop. Props is an object of properties/values passed from parent component to the child component.  */}
      </div>
    );
  }
}

export default App;
