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


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/' render={props => <Home {...props} />}/>
        <Route path='/login' >
          <Login className="login" />
        </Route>
        <Route path='/add' render={props => <AddBusiness {...props} />}/>
        <Route path='/update' render={props => <AddBusiness update="true" {...props} />}/>
        {/*<Route path='/quiz' render={props => <Quiz {...props} />}/>
        <Route path='/imagesquiz' render={props => <Imagesquiz {...props} />}/>*/}
      </Switch>
    </BrowserRouter>
  );
}


export default App;
