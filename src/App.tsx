import React, { useState, useEffect } from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Form from "./login/Form";
import "./App.css";
import SignUp from "./Signup/signUp";
import LoginSuccess from "./login/LoginSuccess";
import Verify from "./Signup/Verify";
import { FilesPage } from "./filesPage/files";
import ForgotPasswordEmail from "./ForgotPasswordEmail/ForgotPasswordEmail";
import ForgotPasswordReset from "./ForgotPasswordReset/ForgotPasswordReset";
import Password from "./ChangePassword/Password";
import Side, { userType } from "./Sidebar/Side";
// import { ModalComp } from './Sidebar/Mod';
import HomeComponent from './Sidebar/Home';
import ProjectComponent from './Sidebar/ProjectComp';
import ProfileComponent from './Sidebar/ProfileComp';
import TeamComponent from './Sidebar/teamComponent';
import Maintask from './Tasks/Maintask';

export function ProtectedRoute(props: any) {
  const token = localStorage.getItem("token");
  console.log(token, "token");
  if (token) {
    console.log(token, "protected");
    return <Route path={props.path} exact component={props.component}></Route>;
  }
  return (
    <Route>
      <Redirect to="/login" />{" "}
    </Route>
  );
}

export function OpenRoute(props: any) {
  const token = localStorage.getItem('token')
  console.log(token, 'token')
  if (token) {
    console.log(token, 'protected')
    return (
      <Route><Redirect to="/home" /> </Route>
    )
  }
  return (
    <Route path={props.path} exact component={props.component}></Route>
    // <Route><Redirect to="/login" /> </Route>
  )
}


function App() {
  const preUser = { closedTasks: [], openedTasks: [] } as userType;
  const [user, setUser] = useState<userType>(preUser);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`https://jaraaa.herokuapp.com`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.msg) {
          console.log("Major:", data);
        } else {
          console.log(data, "data");
          setUser(data.sendUser);
        }
        // window.location.href = "/success"
      })
      .catch((err) => {
        console.log(err.response, "error");
      });
  }, []);
  console.log(user, "from app");

  const [notloggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user") as string);
    console.log(token);

    if (user) {
      console.log(user.firstname);
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/password/resetpassword/:token"
            component={ForgotPasswordReset}
          />
          <Route
            exact
            path="/maintask"
            component={Maintask}
          />

          <ProtectedRoute path="/home" exact component={HomeComponent} />
          <ProtectedRoute
            path="/:projectname/:projectid/:owner/task"
            component={ProjectComponent}
          ></ProtectedRoute>
          <ProtectedRoute
            path="/:projectname/:projectid/:owner/kanban"
            component={ProjectComponent}
          ></ProtectedRoute>
          <ProtectedRoute
            path="/:projectname/:projectid/:owner/activity"
            component={ProjectComponent}
          ></ProtectedRoute>
          <ProtectedRoute
            path="/:projectname/:projectid/:owner/calender"
            component={ProjectComponent}
          ></ProtectedRoute>
          <ProtectedRoute
            path="/:projectname/:projectid/:owner/files"
            component={ProjectComponent}
          ></ProtectedRoute>
          <ProtectedRoute
            path="/profile"
            exact
            component={ProfileComponent}
          ></ProtectedRoute>
          <ProtectedRoute
            path="/changepassword"
            exact
            component={ProfileComponent}
          ></ProtectedRoute>
          <ProtectedRoute
            path="/:projectid/:teamname/:teamid/:owner"
            component={TeamComponent}
          ></ProtectedRoute>
          <Route
            path="/welcome/:userToken/"
            exact
            component={HomeComponent}
          ></Route>
          <OpenRoute path="/login" exact component={Form}></OpenRoute>
          <ProtectedRoute path="/success" exact component={LoginSuccess} />
          <Route
            path="/success/:userToken/"
            exact
            component={LoginSuccess}
          ></Route>
          <OpenRoute path="/signup" exact component={SignUp}></OpenRoute>
          <OpenRoute path="/verify" exact component={Verify}></OpenRoute>
          <OpenRoute path="/signup" exact component={SignUp}></OpenRoute>
          <OpenRoute exact path="/forgotpassword" component={ForgotPasswordEmail} />
          {/* <ProtectedRoute path="/changepassword" exact component={Password} /> */}
          <Route path="/welcome/:userToken/" exact component={Side}></Route>
          {/* <ProtectedRoute path="/:files" component={Side} /> */}
          {/* <Route path="/files/:test" exact>{notloggedIn ? <Redirect to="/login" /> : <FilesPage />}</Route> */}

          {/* <ProtectedRoute path="/welcome" exact component={Side}></ProtectedRoute> */}
          {/* <Route path="/modal" exact component={ModalComp}></Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
// className="App"
