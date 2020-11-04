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
        this.state = {searchtext:"",businesses:[]}
    }
    livesearch = (event) => {
        const text = event.target.value;
        const businesses = services.findbusinesses(text)
        console.log("Bus:",businesses)
        this.setState({ businesses: businesses,searchtext: text});
    }
    delete = (event) => {
        console.log("delete", event.target.getAttribute("business"))
        services.deletebusiness(event.target.getAttribute("business"))
        this.forceUpdate()
    }
    
    render(){

        const buslist= this.state.businesses.filter(b => b.active).map(
            (b) => <div>
                {b.name},{b.location},{b.phone}
                <Link
                    to={{
                    pathname: "/update",
                    state: { id: b.id }
                }}
             >Update</Link>
             <a  onClick={this.delete} business= {b.id} >Delete</a>
            </div>

        )
        return(
        <div>
                <form onSubmit={this.onSubmit}>
                    
                    <input
                        type="text"
                        name="username"
                        value={this.state.searchtext}
                        placeholder = "What are you looking for?"
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