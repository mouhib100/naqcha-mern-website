import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { SignIn } from "../pages/signin/SignIn";
import {LandingPage} from "../pages/LandingPage";
import WriteArticle from "../pages/writeArticle/WriteArticle"
import SignUp from "../pages/signup/SignUp";
import CreateArticle from "../pages/CreateArticle/CreateArticle";
import Editprofile from "../pages/Settings/Editprofile";



const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Switch location={location}>
        <Route exact path="/" component={LandingPage} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/createarticle" component={CreateArticle} />
        <Route path="/writearticle" component={WriteArticle} />
        <Route path="/editprofile" component={Editprofile} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedSwitch />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
