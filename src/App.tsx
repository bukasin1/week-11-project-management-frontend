import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Form from './login/Form'
import './App.css';
import SignUp from './Signup/signUp';
import LoginSuccess from './login/LoginSuccess';

function App() {
  return ( 
    <div className="app">
      <BrowserRouter>
        <Switch>
        <div className="container">
          <Route path="/login" exact component={Form}></Route>
          <Route path="/success" exact  component={LoginSuccess}></Route>
         
       <Route path="/signup" exact component={SignUp}></Route>
          </div>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
// className="App"
