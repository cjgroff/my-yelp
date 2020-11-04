import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import services from "../services/services"
import { render } from 'react-dom';
export default class AddBusiness extends React.Component{
    constructor(props){
        super(props)
        console.log("AddBusiness:",props)
        
        this.state ={finished: false, name: "",
            location: "", phone: ""}
        if (props.update){
            this.state.update = true
            const id = props.location.state.id
            console.log("Updating id:",id)
            const b = services.allbusinesses()[id]
            this.state.id = b.id
            this.state.name = b.name
            this.state.location = b.location
            this.state.phone = b.phone
        }
    }
onInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: value });
    }
onSubmit = (event) => {
        console.log('State:',this.state)
        this.setState({finished: true})
        const s = this.state
        const b = {id : s.id,name: s.name, location: s.location, phone: s.phone}
        if (this.state.update){
            services.updatebusiness(b)
        }
        else {
        services.addbusiness(b)
        }
        event.preventDefault();
    }

render(){
    if (this.state.finished){
        return (
            <Redirect to="/" /> 
        )
    }
    return (
        <div className="Add">
            {this.state.update ? "Update Business": "Add Business"}
            <form onSubmit={this.onSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    placeholder = "Business Name"
                    onChange={this.onInputChange}
                ></input>
            <label>Location:</label>
            <input
                type="text"
                name="location"
                value={this.state.location}
                placeholder = "Location"
                onChange={this.onInputChange}
            ></input>
            <label> Phone Number:</label>
            <input
                type="text"
                name="phone"
                value={this.state.phone}
                placeholder = "Phone"
                onChange={this.onInputChange}
            ></input>
            <button type="submit">Save Business</button>
    
        </form>
    </div>
    )
    
}
}