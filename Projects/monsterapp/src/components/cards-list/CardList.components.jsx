import { Component } from "react";
import "../cards-list/card-list.style.css";
import Card from "../card/card.component";


class CardList extends Component{ 
       render(){
        const {monsters} = this.props 
        return(
            <div className="card-list">
                {
                    monsters.map((element)=>{
                        return(
                           <Card element={element}/>
                        )
                    })
                }
            </div>
        )
    }
}
export default CardList; //Used to export our components.