import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import services from "../services/services"
  class Searchpage extends React.Component{
    constructor(props){
        super(props)
        //console.log("Home ctor,props",props)
        this.state = {searchtext:"What are you looking for?",businesses:[]}
    }
    livesearch = (event) => {
        const text = event.target.value;
        const businesses = services.findbusinesses(text)
        console.log("Bus:",businesses)
        this.setState({ businesses: businesses,searchtext: text});
    }
        
    
    render(){
        const buslist= this.state.businesses.map(
            (b) => <div>
                {b.name},{b.location},{b.phone}
            </div>
        )
        return(
        <div>
                <form onSubmit={this.onSubmit}>
                    
                    <input
                        type="text"
                        name="username"
                        value={this.state.searchtext}
                        onChange={this.livesearch}
                    ></input>
                    <button type="submit">Search</button>

                </form>
                Result:{buslist.length}
                {buslist}

        </div>
        )
    }
}
export default Searchpage;
//testing