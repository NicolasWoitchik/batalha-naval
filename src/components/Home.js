import React from "react";
// import { useHistory } from "react-router-dom";

import { Input, Button, HomeActions } from "../style";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      room: "",
    };

    this.handleCreateRoom = this.handleCreateRoom.bind(this);
    this.handleRoom = this.handleRoom.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.inputRoom = React.createRef();
  }

  componentDidMount() {
    setTimeout(() => {
      this.inputRoom.current && this.inputRoom.current.focus();
    }, 200);
  }

  handleRoom(event) {
    if (this.state.room.length === 6) {
      return this.props.history.push("/game/" + this.state.room, {
        room: this.state.room,
      });
    }
    setTimeout(() => {
      this.inputRoom.current.focus();
    }, 200);
  }

  handleCreateRoom() {
    alert("Create Room");
  }

  handleChange(event) {
    let room = event.target.value;
    if (!room) {
      room = "";
    }
    room = room.toString().toUpperCase();
    this.setState({ room });
  }

  render() {
    return (
      <>
        {/* <img src={logo} className="App-logo " alt="logo" /> */}
        <h2>Bem vindo</h2>
        <div className="content">
          <p>Insira o código da sala abaixo ou crie uma</p>
          <div className="form-group">
            <Input
              maxLength="6"
              placeholder="Código da sala"
              name="codigo-sala"
              ref={this.inputRoom}
              value={this.state.room}
              onChange={this.handleChange}
            />
          </div>
          <HomeActions>
            <Button
              className="App-link"
              href="/criar-sala"
              rel="noopener noreferrer"
              onClick={this.handleCreateRoom}
            >
              Criar uma Sala
            </Button>
            <Button
              className={["App-link", this.state.room.length < 6 && "disabled"]}
              href="/entrar-sala"
              rel="noopener noreferrer"
              onClick={this.handleRoom}
            >
              Entrar na sala
            </Button>
          </HomeActions>
        </div>
      </>
    );
  }
}

export default Home;
