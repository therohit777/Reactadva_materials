import { Component } from "react";
import "../seach-filter/search-box.style.css";

class Searchbox extends Component{
    render(){
        return(
            <>
              <input 
                 className={`search-box ${this.props.className}`}
                 placeholder= {this.props.placeholder}
                 onChange={this.props.onChangeHandler}            
                 type="text" 
              />
            </>
        ) 
    }
}

export default Searchbox;