import React from "react";
<<<<<<< HEAD
import { App } from "./style";
import Home from "./components/Home";
import Game from "./components/Game/Game";
=======
import GlobalStyle from "./styles/global";

import Routes from "./routes";
>>>>>>> 4320d57e959b6d8a3eae1a24e81fe0ba213a57ce

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
<<<<<<< HEAD
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
=======
    <>
      <Routes />
      <GlobalStyle />
    </>
>>>>>>> 4320d57e959b6d8a3eae1a24e81fe0ba213a57ce
  );
}

export default Main;
