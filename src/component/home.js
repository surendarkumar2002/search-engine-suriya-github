import React from "react";
import SearchInput from './searchinput'

import axios from 'axios'
class home extends React.Component{
    constructor(props){
      super(props)
      this.state={images:[]}
      this.onSearchSubmit=this.onSearchSubmit.bind(this)
    }
   
    async onSearchSubmit(entry){
      const response =await axios.get(`https://pixabay.com/api/?key=29382692-2a5c8197754a16697ce74c91a&q=${entry}&image_type=photo&pretty=true`)
      console.log(response.data.hits)
      this.setState({images:response.data.hits})
    }
  
    render(){
        return (
            
            
              
              <div className="ui container" style={{ marginTop: "30px" }}>
                <SearchInput onSearchSubmit={this.onSearchSubmit} />
              </div>
              
          );
          }
          

    }

export default home;