import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Form from './login/Form'
import './App.css';
import SignUp from './Signup/signUp';
import LoginSuccess from './login/LoginSuccess';
import Verify from './Signup/Verify';
import ChangeLogin from './ChangePassword/changeLogin';

function App() {
  return ( 
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={Form}></Route>
          <Route path="/success" exact  component={LoginSuccess}></Route>
         <Route path="/signup" exact component={SignUp}></Route>
          <Route path="/verify" exact  component={Verify}></Route>
          <Route path="/signup" exact component={SignUp}></Route>
          <Route path="/changepassword" exact component={ChangeLogin}></Route>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
// className="App"
