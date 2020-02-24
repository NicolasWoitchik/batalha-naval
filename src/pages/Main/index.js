import React from "react";
import { Container, Input, Button } from "./styles";
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      room: "",
      loading: false
    };

    this.handleCreateRoom = this.handleCreateRoom.bind(this);
    this.handleRoom = this.handleRoom.bind(this);
  }

  handleRoom(event) {
    this.setState({ room: event.target.value });
    if (event.target.value.length === 6) {
      // this.props.history.push("/game");
      this.setState({
        loading: true
      });
      return;
    }
    this.setState({
      loading: true
    });
  }

  handleCreateRoom() {
    this.props.history.push("/create");
  }

  render() {
    return (
      <Container>
        <header className="header-app">
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
              {this.state.loading && <span className="loading">Loading</span>}
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
      </Container>
    );
  }
}

export default Home;
