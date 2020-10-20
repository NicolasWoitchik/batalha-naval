import React, { Component } from "react";

import { Container, Input, Button } from "./styles";

import { FaSpinner } from "react-icons/fa";

export default class Create extends Component {
  state = {
    name: "",
    max: "",
    pass: "",
    loading: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, name: "", pass: "" });
    }, 500);
  };

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };
  handleMaxChange = (e) => {
    this.setState({ max: e.target.value });
  };
  handlePassChange = (e) => {
    this.setState({ pass: e.target.value });
  };
  handlePassChange = (e) => {
    this.setState({ pass: e.target.value });
  };
  handleBack = (e) => {
    this.props.history.push("/");
  };
  render() {
    const { loading, name, pass } = this.state;
    return (
      <Container>
        <header className="header-app">
          <h2>Create room</h2>
          <div className="content">
            <form onSubmit={this.handleSubmit}>
              <Input
                value={name}
                onChange={this.handleNameChange}
                placeholder="Nome da sala"
              />
              {/* <Input
                value={max}
                onChange={this.handleMaxChange}
                placeholder="Quantidade de jogadores"
              /> */}
              <Input
                value={pass}
                onChange={this.handlePassChange}
                placeholder="Senha (opcional)"
              />
              <div className="actions">
                <Button onClick={this.handleBack} type="button">
                  Voltar
                </Button>
                <Button loading={loading}>
                  {loading ? <FaSpinner /> : <span>Criar</span>}
                </Button>
              </div>
            </form>
          </div>
        </header>
      </Container>
    );
  }
}
