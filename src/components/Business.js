import React from 'react';
import services from "../services/services"
export default class Business extends React.Component{
    constructor(props){
        super(props)
        console.log("business ctor,props",props)
        this.state = {ids: props.location.state.bs }
    }
    render(){
        return (<div>{this.state.ids}</div>)
    }}
