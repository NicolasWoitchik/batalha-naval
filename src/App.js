import React from "react";
import logo from "./logo.svg";
import { App } from "./style";

function Main() {
  return (
    <App>
      <header className="App-header">
        <img src={logo} className="App-logo " alt="logo" />
        <p>Bem vindo</p>
        <p>Insira o código da sala abaixo ou crie uma</p>
        <input placeholder="Código da sala" name="codigo-sala" />
        <a className="App-link" href="/criar-sala" rel="noopener noreferrer">
          Criar uma Sala
        </a>
      </header>
    </App>
  );
}

export default Main;
