import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Searchpage from "./Searchpage"
class Home extends React.Component{
    constructor(props){
        super(props)
        //console.log("Home ctor,props",props)
        this.state = {showLoginForm: true}
    

    }
    
    login = ()=>{
        this.setState({showLoginForm: false}) 
    }
    render(){
       
       let username = '';
        const location = this.props.location;
        if (location) {
            console.log(location);
            if (location.state) {
                if (location.state.user) {
                    username = location.state.user;
                }
            }
        }

        return (
            <div>
                <div className="loginButton">
                    {username.length > 0 ? username
                        : <Link to='/login'>Login</Link>}
                </div>

                <div>
                    <Searchpage/>
                </div>
            </div>
        )
    }
}


export default Home;
