import React, {useState, useEffect} from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import Form from './login/Form'
import './App.css';
import SignUp from './Signup/signUp';
import LoginSuccess from './login/LoginSuccess';
import Verify from './Signup/Verify';
import { FilesPage } from './filesPage/files';

function App() {

  const [notloggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    const user = JSON.parse(localStorage.getItem('user') as string)
    console.log(token)

    if(user){
      console.log(user.firstname)
      setLoggedIn(false)
    }else{
      setLoggedIn(true)
    }
  }, [])

  return ( 
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={Form}></Route>
          <Route path="/success" exact  component={LoginSuccess}></Route>
         <Route path="/signup" exact component={SignUp}></Route>
          <Route path="/verify" exact  component={Verify}></Route>
          <Route path="/signup" exact component={SignUp}></Route>
          <Route path="/success/:userToken/" exact component={LoginSuccess}></Route>
          <Route path="/files/:test" exact>{notloggedIn ? <Redirect to="/login" /> : <FilesPage />}</Route>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
// className="App"
