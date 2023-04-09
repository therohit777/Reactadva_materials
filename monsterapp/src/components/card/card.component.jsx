import { Component } from "react";
import "../card/card.style.css";


const Card =({element})=>{
    const {id,name,email}=element;
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt="" />
            <h2>{name}</h2>
            <p>{email}</p>
       </div>
    )
}


// class Card extends Component{
//     render(){
//         const {name, id, email} = this.props.element;
//         return(
//             <div className="card-container">
//                 <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt="" />
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//            </div>
//         )
//     }
// }

export default Card;