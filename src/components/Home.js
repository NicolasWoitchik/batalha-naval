import React from "react";
import logo from "../logo.svg";
import { Input, Button } from "../style";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      room: ""
    };

    this.handleCreateRoom = this.handleCreateRoom.bind(this);
    this.handleRoom = this.handleRoom.bind(this);
  }

  handleRoom(event) {
    this.setState({ room: event.target.value });
    if (event.target.value.length === 6) {
      console.log("Entrar na sala");
    }
  }

  handleCreateRoom() {
    alert("Create Room");
  }

  render() {
    return (
      <header className="header-app">
        {/* <img src={logo} className="App-logo " alt="logo" /> */}
        <h2>Bem vindo</h2>
        <div className="content">
          <p>Insira o código da sala abaixo ou crie uma</p>
          <div className="form-group">
            <Input
              maxLength="6"
              placeholder="Código da sala"
              name="codigo-sala"
              value={this.state.room}
              onChange={this.handleRoom}
            />
          </div>
          <Button
            className="App-link"
            href="/criar-sala"
            rel="noopener noreferrer"
            onClick={this.handleCreateRoom}
          >
            Criar uma Sala
          </Button>
        </div>
      </header>
    );
  }
}

export default Home;
