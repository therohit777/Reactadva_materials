/*
   CLASS Components in React:


   Syntax:
        import { Component } from 'react'; 

        class App extends Component {
          render(){
            return (
            <div className="App">
                Rohit
            </div>
            );
          }  
        } 
        export default App;  


    STATE in Javascript.
       
        Snippet:
              class App extends Component {
                constructor(){
                    super() // Calls the constructor of parent/Component class.
                    this.state={ // state to be used for creating dynamic content.
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



*/