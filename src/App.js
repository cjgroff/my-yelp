import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login';
import AddBusiness from "./components/AddBusiness"
import Business from './components/Business';


function App() {
  return (
    <div style={{  
      backgroundImage: "url(" + process.env.PUBLIC_URL  + 'images/coffee.jpg' + ")", backgroundSize: 'cover',objectFit: 'cover'}}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/' render={props => <Home {...props} />}/>
        <Route path='/login' >
          <Login className="login" />
        </Route>
        <Route path='/add' render={props => <AddBusiness {...props} />}/>
        <Route path='/update' render={props => <AddBusiness update="true" {...props} />}/>
        <Route path='/business' render={props => <Business  {...props} />}/>
        {/*<Route path='/quiz' render={props => <Quiz {...props} />}/>
        <Route path='/imagesquiz' render={props => <Imagesquiz {...props} />}/>*/}
      </Switch>
    </BrowserRouter>
    </div>
  );
}


export default App;
