import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import services from "../services/services"
  class Searchpage extends React.Component{
    constructor(props){
        super(props)
        //console.log("Home ctor,props",props)
        this.state = {searchtext:"",businesses:[], showbusiness: false, city:"", state: ""}
        
    }
    onSubmit = (event) => {
        this.setState({showbusiness: true}) 
        event.preventDefault();
    }
    livesearch = (event) => {
        const text = event.target.value;
        const businesses = services.findbusinesses(text,this.state.city,this.state.state)
        console.log("Bus:",businesses)
        this.setState({ businesses: businesses,searchtext: text});
    }
    citysearch = (event) => {
        const text = event.target.value;
        this.setState({ city: text,});
    }
    statesearch =  (event) => {
        const text = event.target.value;
        this.setState({ state: text,});
    }

    delete = (event) => {
        console.log("delete", event.target.getAttribute("business"))
        services.deletebusiness(event.target.getAttribute("business"))
        this.forceUpdate()
    }
    
    render(){
        console.log(services.allbusinesses())
        const buslist= this.state.businesses.filter(b => b.active)
        const busdiv= buslist.map(
            (b) => <div>
                {b.name}, {b.address}, {b.city}, {b.state} {b.zip}, {b.phone}
                <Link
                    to={{
                    pathname: "/update",
                    state: { id: b.id }
                }}
             >Update</Link>
             <a  onClick={this.delete} business= {b.id} >Delete</a>
            </div>
        )
        
        
        if (this.state.showbusiness) {
            const bs = buslist.map(b => b.id)
            console.log('bs:', bs)
            let to= {pathname: '/business', state: { bs: bs } };
            return (
                <Redirect to={to} />
            );

        }

        
        return(
        <div>
                <form onSubmit={this.onSubmit}>
                    <p>Where should I look?</p>
                    <input
                        type="text"
                        value={this.state.searchcity}
                        placeholder = "What city are you in?"
                        onChange={this.citysearch}
                    ></input>
                    <input
                        type="text"
                        value={this.state.searchstate}
                        placeholder = "What state are you in?"
                        onChange={this.statesearch}
                    ></input>
                    
                    <br/>
                    <p>What should I look for?</p>
                    <input
                        type="text"
                        value={this.state.searchtext}
                        placeholder = "What are you looking for?"
                        onChange={this.livesearch}
                    ></input>
                    <button type="submit">Search</button>
                    
                    
                    
                    

                </form>
                Result:{busdiv.length}
                {busdiv}

        </div>
        )
    }
}
export default Searchpage;
//testing