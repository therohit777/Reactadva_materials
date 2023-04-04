import "./App.css";
import { Component } from "react";

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
  render() {
    const filtermonster = this.state.monsters.filter((monsterelement)=>{ // Filter Takes an array and filters out the elemnts based on the return condition to create a new array. 
      return monsterelement.name.toLowerCase().includes(this.state.search_monsters); // includes function here checks whether the given string/character is a substring of string on which we have applied our include().
    })
    return (
      <div className="App">
        <input
          type="text"
          placeholder="search monsters"
          onChange={(event) => { //Here OnChange returns the value wriiten inside the input box by event.target.value.
            this.setState(()=>{
              return {search_monsters:event.target.value.toLowerCase()};
            })
          }}
          //Note: Whenever we need to update an array we need to update the entire array else the changes won't get rendered on our page.
        />
        {filtermonster.map((element) => {
          return (
            <div key={element.id}>
              <h1>{element.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
