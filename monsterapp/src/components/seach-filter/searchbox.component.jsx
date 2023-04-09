import { Component } from "react";
import "../seach-filter/search-box.style.css";


const Searchbox =({className,placeholder,onChangeHandler})=>{
    return(
        <>
          <input 
            className={`search-box ${className}`}
            placeholder= {placeholder}
            onChange={onChangeHandler}            
            type="text" 
          />
        </>
    )
}


// class Searchbox extends Component{
//     render(){
//         return(
//             <>
//               <input 
//                  className={`search-box ${this.props.className}`}
//                  placeholder= {this.props.placeholder}
//                  onChange={this.props.onChangeHandler}            
//                  type="text" 
//               />
//             </>
//         ) 
//     }
// }

export default Searchbox;