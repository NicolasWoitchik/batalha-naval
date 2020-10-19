import React from "react";
import { App } from "./style";
import Home from "./components/Home";
import Game from "./components/Game/Game";

import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";

function Header(props) {
  let location = useLocation();
  console.log(location.pathname);
  return (
    <header
      className={
        "header-app " + (location.pathname.includes("game") ? "game" : "")
      }
    >
      {props.children}
    </header>
  );
}
function Main() {
  return (
    <BrowserRouter>
      <App>
        <Header>
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/game/:id" component={Game} />
          </Switch>
        </Header>
      </App>
    </BrowserRouter>
  );
}

export default Main;
