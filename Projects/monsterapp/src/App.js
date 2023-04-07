import "./App.css";
import { Component, useEffect, useState } from "react";
import CardList from "./components/cards-list/CardList.components";
import Searchbox from "./components/seach-filter/searchbox.component";

const App = ()=>{
  const [search_monsters, setsearch_monsters] = useState("");
  const [monsters, setmonsters] = useState([])
  const [filtermonster,setfiltermonster]=useState(monsters)


  const onSearchChange= (event)=>{
    const inputfield = event.target.value.toLowerCase();
    setsearch_monsters(inputfield);
  }
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setmonsters(users); 
    });
  }, []) // Used for writing sideeffects(means values outside the scope of our function). EX: APIS. COnsists of two things inside it one is the callback() method that handles the side effect and the other is the dependency array which consists of state/props. So whenever the state/props present inside our dependency array changes then the usetate calls it callback function to generate the side effects.
  
  useEffect(()=>{
    let newfiltermonster = monsters.filter((monsterelement)=>{   
      return monsterelement.name.toLowerCase().includes(search_monsters); 
    })

    setfiltermonster(newfiltermonster);
  },[monsters,search_monsters]) //States passed here based on which side effects would be generated through our callback().


  console.log(69)
  return(
    <div>
        <h1 className="app-title">Monsters Rolodex</h1> 
        <Searchbox onChangeHandler={onSearchChange} placeholder={"Search monster"} className={"Monters1"}/>   
        <CardList monsters={filtermonster}/> 
    </div>
  )
}



// class App extends Component {
//   constructor() {
//     super(); 
//     this.state = {
//       monsters: [],
//       search_monsters:''
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => {
//         this.setState({ monsters: users });
//       });
//   }


//   onSearchChange=(event) => { 
//        this.setState(()=>{
//       return {search_monsters:event.target.value.toLowerCase()};
//     })
//   }

//   render() {
//     const {monsters,search_monsters} = this.state;
//     const {onSearchChange} = this;
//     const filtermonster = monsters.filter((monsterelement)=>{ 
//       return monsterelement.name.toLowerCase().includes(search_monsters); 
//     })
//     return (
//       <div className="App"> 
//         <Text/>
//         <Searchbox onChangeHandler={onSearchChange} placeholder={"Search monster"} className={"Monters1"}/>      
//         <CardList monsters={filtermonster}/> 
//       </div>
//     );
//   }
// }

export default App;
