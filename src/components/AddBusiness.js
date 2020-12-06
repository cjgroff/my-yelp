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
            address: "",city: "",state:"",zip:"", phone: ""}
        if (props.update){
            this.state.update = true
            const id = props.location.state.id
            console.log("Updating id:",id)
            services.allbusinesses().then(x => x.json())
            .then(bs =>{
                console.log("bs",bs);
                let b = bs.find(bsz => bsz.id == id)
                this.setState({
                    id : b.id,
                    name : b.name,
                    address : b.address,
                    city : b.city,
                    state : b.state,
                    zip : b.zip,
                    phone : b.phone
                })
            })
            .catch(e => console.log("Fetch Failed",e))
            
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
        const b = {id : s.id,name: s.name, active: s.active , address: s.address,city: s.city,state : s.state,zip: s.zip, phone: s.phone}
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
                
                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    placeholder = "Business Name"
                    onChange={this.onInputChange}
                ></input>
            
            <input
                type="text"
                name="address"
                value={this.state.address}
                placeholder = "Address"
                onChange={this.onInputChange}
            ></input>
            <input
                type="text"
                name="city"
                value={this.state.city}
                placeholder = "City"
                onChange={this.onInputChange}
            ></input>
            <input
                type="text"
                name="state"
                value={this.state.state}
                placeholder = "State"
                onChange={this.onInputChange}
            ></input>
            <input
                type="text"
                name="zip"
                value={this.state.zip}
                placeholder = "Zip"
                onChange={this.onInputChange}
            ></input>
            
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