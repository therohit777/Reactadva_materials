import { Component } from "react";
import "../cards-list/card-list.style.css";
import Card from "../card/card.component";


const CardList = ({monsters})=>{
    return(
        <div className="card-list">
                 {
                    monsters.map((element)=>{
                        return(
                           <div key={element.id}>
                              <Card element={element}/>
                           </div>
                        )
                    })
                }
            </div>
    )
}



// class CardList extends Component{ 
//        render(){
//         const {monsters} = this.props 
//         return(
//             <div className="card-list">
//                 {
//                     monsters.map((element)=>{
//                         return(
//                            <div key={element.id}>
//                               <Card element={element}/>
//                            </div>
//                         )
//                     })
//                 }
//             </div>
//         )
//     }
// }
export default CardList; //Used to export our components.