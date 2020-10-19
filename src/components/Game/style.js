import styled from "styled-components";

export const Canvas = styled.canvas`
  image-rendering: pixelated;
  image-rendering: crisp-edges;
  image-rendering: -moz-crisp-edges;
  width: 810px;
  height: 810px;
`;

export const RoomInfo = styled.div`
  position: absolute;
  left: 0;
  transition: transform 1s;
  transform: ${(props) =>
    props.status === "loading" ? "translateY(60px)" : "translateY(0px)"};
  bottom: 0;
  right: 0;
  padding: 10px;
  background: rgba(255, 255, 255, 0.3);
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

Canvas.defaultProps = {
  status: "loading",
};
RoomInfo.defaultProps = {
  status: "loading",
};
Content.defaultProps = {
  status: "loading",
};
