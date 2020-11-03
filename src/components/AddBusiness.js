import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import services from "../services/services"
import { render } from 'react-dom';
class Searchpage extends React.Component{
    constructor(props){
        super(props)
        //console.log("Home ctor,props",props)
        this.state ={AddBusiness: Nvalue,
            AddLocation: Lvalue, AddPhone: Pvalue }
    }
render(){
    return (
        <div className="Add">
            <form onSubmit={this.onSubmit}>
                <lable>Add Business:</lable>
                <input
                    type="text"
                    name="Add Business"
                    value={this.state.Add}
                    onChange={this.onInputChnage}
                ></input>
                <button type="submit">Login</button>
            <lable>Add Business Name:</lable>
            <input
                type="text"
                name="Add Business"
                Nvalue={this.state.AddName}
                onChange={this.onInputChnage}
            ></input>
            <lable>Add Business Location:</lable>
            <input
                type="text"
                name="Add Business Location"
                Lvalue={this.state.AddLocation}
                onChange={this.onInputChnage}
            ></input>
            <lable>Add Business Phone Number:</lable>
            <input
                type="text"
                name="Add Business Phone Number"
                Pvalue={this.state.AddPhone}
                onChange={this.onInputChnage}
            ></input>
            <button type="submit">Login</button>
        </form>
    </div>
    )
}
}