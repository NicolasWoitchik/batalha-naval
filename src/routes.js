import React from "react";
import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";

import App from "./App";
import Main from "./pages/Main";
import Game from "./pages/Game";
import Create from "./pages/Create";

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

export default function Routes() {
  return (
    <BrowserRouter>
      <App>
        <Header>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/game" component={Game} />
            <Route path="/create" component={Create} />
          </Switch>
        </Header>
      </App>
    </BrowserRouter>
  );
}
