import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ForgotPasswordEmail from "./ForgotPasswordEmail/ForgotPasswordEmail";
import ForgotPasswordReset from "./ForgotPasswordReset/ForgotPasswordReset";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/forgotpassword" component={ForgotPasswordEmail} />
          <Route
            exact
            path="/password/resetpassword/:token"
            component={ForgotPasswordReset}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
