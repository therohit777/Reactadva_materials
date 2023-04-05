import { Component } from "react";

class CardList extends Component{ // Always keep the Customized components name in Upper Camelcase convention. It becomes easier for react to identify that the very component is made by the developer itself. 
    render(){
        const {monsters} = this.props //Destructuring of PROPs.
        return(
            <div>
                {
                    monsters.map((element)=>{
                        return(
                            <div key={element.id}>
                              <h1>{element.name}</h1>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default CardList; //Used to export our components.