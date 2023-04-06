import "./App.css";
import { Component } from "react";
import CardList from "./components/cards-list/CardList.components";
import Searchbox from "./components/seach-filter/searchbox.component";

const Text = ()=>{
  return(
    <h1 className="app-title">Monsters Rolodex</h1> 
  )
}



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
        <Text/>
        <Searchbox onChangeHandler={onSearchChange} placeholder={"Search monster"} className={"Monters1"}/>      
        <CardList monsters={filtermonster}/> 
      </div>
    );
  }
}

export default App;
