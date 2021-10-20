import React, {useState, useEffect} from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import Form from './login/Form'
import './App.css';
import SignUp from './Signup/signUp';
import LoginSuccess from './login/LoginSuccess';
import Verify from './Signup/Verify';
import { FilesPage } from './filesPage/files';
import ForgotPasswordEmail from "./ForgotPasswordEmail/ForgotPasswordEmail";
import ForgotPasswordReset from "./ForgotPasswordReset/ForgotPasswordReset";
import ChangeLogin from './ChangePassword/changeLogin';
import Side from './Sidebar/Side';
import { ModalComp } from './Sidebar/Mod';

function ProtectedRoute(props: any){
  const token = localStorage.getItem('token')
  console.log(token, 'token')
  if(token){
    console.log(token, 'protected')
    return (
      <Route path = {props.path} exact component = {props.component}></Route>
    )
  }
  return (
    <Route><Redirect to="/login" /> </Route>
  )
}


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
          <ProtectedRoute path="/success" exact  component={LoginSuccess}/>
         <Route path="/signup" exact component={SignUp}></Route>
          <Route path="/verify" exact  component={Verify}></Route>
          <Route path="/signup" exact component={SignUp}></Route>
          <Route exact path="/forgotpassword" component={ForgotPasswordEmail} />
          <Route
               exact
               path="/password/resetpassword/:token"
              component={ForgotPasswordReset}
          />
          <Route path="/success/:userToken/" exact component={LoginSuccess}></Route>
          <ProtectedRoute path="/files/:test" component = {FilesPage}/>
          {/* <Route path="/files/:test" exact>{notloggedIn ? <Redirect to="/login" /> : <FilesPage />}</Route> */}
          <ProtectedRoute path="/changepassword" exact component={ChangeLogin}/>
          <Route path="/side" exact component={Side}></Route>
          {/* <Route path="/modal" exact component={ModalComp}></Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
// className="App"
