import styled, { keyframes, css } from "styled-components";

export const Input = styled.input`
  padding: 20px;
  margin: 0;
  border-radius: 0;
  width: 100%;
  display: block;
  margin: 10px 0;
  border: 2px solid #f02342;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  font-size: 26px;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  box-shadow: 0 0 0px rgba(0, 0, 0, 0.4);
  &:focus {
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.4);
  }
`;

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg)
  }
`;

export const Button = styled.button.attrs(props => ({
  disabled: props.loading
}))`
  padding: 20px 25px;
  /* float: right; */
  border: 1px solid #000;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  /* font-weight: bold; */
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-content: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s;
      }
    `};
`;

export const Container = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;

  .header-app {
    .content {
      padding: 25px 20px;
      border: 1px solid rgba(0, 0, 0, 0.4);
      border-top: 0px;
      display: inline-block;
    }

    background: #282c34;
    width: 100%;
    max-width: 400px;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    animation: 2s pulse2 cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
    border-width: 1px;
    border-style: solid;
  }
  h2 {
    text-align: center;
    color: #f02342;
    /* margin: 0; */
    border-radius: 0;
    margin-top: 20px;
  }
  .actions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
