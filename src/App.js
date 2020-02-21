import React from "react";
import logo from "./logo.svg";
import "./App.css";

function handleEnterRoom() {
  alert("uau");
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo " alt="logo" />
        <p>Bem vindo</p>
        <p>Insira o código da sala abaixo ou crie uma</p>
        <input
          placeholder="Código da sala"
          name="codigo-sala"
          onChange={handleEnterRoom}
        />
        <a className="App-link" href="/criar-sala" rel="noopener noreferrer">
          Criar uma Sala
        </a>
      </header>
    </div>
  );
}

export default App;
