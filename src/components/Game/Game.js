import React, { createRef, useRef } from "react";

import { Canvas, RoomInfo, Content } from "./style";

class CreateRoom extends React.Component {
  constructor(props) {
    super(props);

    this.room = this.props.location.state.room;

    if (!this.room) {
      this.props.history.replace("/");
    }

    this.canvasRef = createRef(null);

    this.state = {
      status: "loading",
      player: {
        x: 1,
        y: 1,
        width: 9,
        height: 9,
      },
      boats: [
        {
          x: 41,
          y: 41,
          width: 19,
          height: 9,
        },
      ],
    };

    setTimeout(() => {
      this.setState({ status: "loaded" });
      this.startGame();
    }, 1000);
  }

  startGame() {
    let screen = this.canvasRef.current;
    if (!screen) return;

    this.movePlayerListener();

    this.addBoatListener();

    this.renderGame(screen);
  }

  movePlayerListener() {
    window.onkeydown = (event) => {
      if (event.keyCode > 40 && event.keyCode < 37) return true;
      let screen = this.canvasRef.current;
      if (!screen) return;

      let width = screen.width - 10,
        height = screen.height - 10;

      event.stopPropagation();
      event.preventDefault();
      let player = this.state.player;
      switch (event.key) {
        case "ArrowUp":
          player.y -= 10;
          break;
        case "ArrowDown":
          player.y += 10;
          break;
        case "ArrowLeft":
          player.x -= 10;
          break;
        case "ArrowRight":
          player.x += 10;
          break;
      }
      if (player.y < 0) {
        player.y = 0;
      }
      if (player.y >= width) {
        player.y = width - 10;
      }
      if (player.x < 0) {
        player.x = 0;
      }
      if (player.x > height - 10) {
        player.x = height - 10;
      }

      this.setState({ player });
    };
  }

  addBoatListener() {
    this.canvasRef.current.addEventListener("click", (event) => {
      let screen = this.canvasRef.current;
      if (!screen) return;
      let x = event.clientX - screen.offsetLeft;
      let y = event.clientY - screen.offsetTop;

      console.log({ x, y });
      let boats = this.state.boats;
      boats.push({
        height: 9,
        width: 19,
        x,
        y,
      });

      this.setState({ boats });
      console.log(this.state.boats);
    });
  }

  renderGame(screen) {
    let width = screen.width - 10,
      height = screen.height - 10;
    const context = screen.getContext("2d");
    context.fillStyle = "white";

    context.clearRect(0, 0, width, height);
    let i = 0;

    for (; i <= height; i += 10) {
      context.fillStyle = "black";
      context.fillRect(i, 0, 1, height);
    }
    context.fillRect(width, 0, 1, width);

    i = 0;
    for (; i <= width; i += 10) {
      context.fillStyle = "black";
      context.fillRect(0, i, width, 1);
    }
    context.fillRect(0, height, height + 1, 1);

    context.fillStyle = "rgba(240, 219, 79,.6)";
    context.fillRect(
      this.state.player.x,
      this.state.player.y,
      this.state.player.width,
      this.state.player.height
    );
    for (let b in this.state.boats) {
      let boat = this.state.boats[b];

      context.fillStyle = "rgba(79, 240, 219,.3)";
      context.fillRect(boat.x, boat.y, boat.width, boat.height);
    }
    window.requestAnimationFrame(() => this.renderGame(screen));
  }

  render() {
    return (
      <>
        <Content>
          {this.state.status == "loaded" && (
            <Canvas
              ref={this.canvasRef}
              width="210"
              height="210"
              status={this.state.status}
            ></Canvas>
          )}
          {/* <RoomInfo status={this.state.status}>
            Você está na sala {this.room}
          </RoomInfo> */}
        </Content>
      </>
    );
  }
}

export default CreateRoom;
