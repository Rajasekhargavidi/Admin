import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import SignIn from "./components/SideBar/SignIn";
import SignUp from "./components/SideBar/SignOut";
import ForgotPassword from "./components/SideBar/ForgotPassword";
import Charts from "./components/SideBar/Charts";
import Errors from "./components/SideBar/Errors";
import Blank from "./components/SideBar/Blank";
import Tables from "./components/SideBar/Tables";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <DashBoard /> */}
          <Switch>
            <Route exact path="/" component={DashBoard} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/forgotpassword" component={ForgotPassword} />
            <Route path="/charts" component={Charts} />
            <Route path="/error" component={Errors} />
            <Route path="/blank" component={Blank} />
            <Route path="/tables" component={Tables} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
