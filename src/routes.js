import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import Game from "./pages/Game";
import Create from "./pages/Create";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/game" component={Game} />
        <Route path="/create" component={Create} />
      </Switch>
    </BrowserRouter>
  );
}
