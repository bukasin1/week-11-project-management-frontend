import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Form from './login/Form'
import './App.css';
import LoginSuccess from './login/LoginSuccess';

function App() {
  return ( 
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Form}></Route>
          <Route path="/success" exact  component={LoginSuccess}></Route>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
