import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    padding:0;
    margin:0;
    outline:0;
    box-sizing:border-box
  }
<<<<<<< HEAD:src/style.js
`;

export const Button = styled.button`
  padding: 20px 25px;
  /* float: right; */
  border: 1px solid #000;
  background: rgba(0, 0, 0, 0.4);
  transition: 0.2s;
  color: #fff;
  /* font-weight: bold; */
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.7);
  }
  &.disabled {
    cursor: not-allowed;
    color: rgba(255, 255, 255, 0.5);
    background: rgba(0, 0, 0, 0.2);
  }
`;

export const HomeActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const App = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;

  /* animation: 2s pulse2 infinite; */
  .header-app {
    overflow: hidden;
    .content {
      padding: 25px 20px;
      border: 1px solid rgba(0, 0, 0, 0.4);
      border-top: 0px;
      display: inline-block;
    }

    background: #282c34;
    width: 100%;
    max-width: 400px;
    min-height: 400px;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    animation: 2s pulse2 cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
    transition: min-height 0.5s cubic-bezier(0.65, 0.05, 0.36, 1),
      max-width 0.5s cubic-bezier(0.65, 0.05, 0.36, 1);
    border-width: 1px;
    border-style: solid;
    &.game {
      max-width: 100%;
      min-height: 100vh;
      background: rgba(0, 0, 0, 0.4);
    }
=======
  html,body, #root{
    min-height:100vh;
  }

  body{
    background:#282c34;
    -webkit-font-smoothing: antialiased !important;
>>>>>>> 4320d57e959b6d8a3eae1a24e81fe0ba213a57ce:src/styles/global.js
  }

  body,input,button{
    color:#333;
    font-size:14px;
    font-family: Arial, Helvetica, sans-serif
  }

  button{
    cursor:pointer
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 1px rgba(0, 0, 0, 0.4);
    }

    50% {
      box-shadow: 0 0 40px 2px rgba(0, 0, 0, 0.4);
    }

    100% {
      box-shadow: 0 0 1px rgba(0, 0, 0, 0.4);
    }
  }

  @keyframes pulse2 {
    0% {
      border-image: radial-gradient(circle, #f02342 0%, #000 100%) 1 1 1;
    }
    5% {
      border-image: radial-gradient(circle, #000 0%, #f02342 10%, #000 100%) 1 1
        1;
    }
    10% {
      border-image: radial-gradient(circle, #000 0%, #f02342 20%, #000 100%) 1 1
        1;
    }
    15% {
      border-image: radial-gradient(circle, #000 0%, #f02342 30%, #000 100%) 1 1
        1;
    }
    20% {
      border-image: radial-gradient(circle, #000 0%, #f02342 40%, #000 100%) 1 1
        1;
    }
    25% {
      border-image: radial-gradient(circle, #000 0%, #f02342 50%, #000 100%) 1 1
        1;
    }
    30% {
      border-image: radial-gradient(circle, #000 0%, #f02342 60%, #000 100%) 1 1
        1;
    }
    35% {
      border-image: radial-gradient(circle, #000 0%, #f02342 70%, #000 100%) 1 1
        1;
    }
    40% {
      border-image: radial-gradient(circle, #000 0%, #f02342 80%, #000 100%) 1 1
        1;
    }
    45% {
      border-image: radial-gradient(circle, #000 0%, #f02342 90%, #000 100%) 1 1
        1;
    }
    50% {
      border-image: radial-gradient(circle, #000 0%, #f02342 100%) 1 1 1;
    }
    55% {
      border-image: radial-gradient(circle, #f02342 0%, #000 10%, #f02342 100%)
        1 1 1;
    }
    60% {
      border-image: radial-gradient(circle, #f02342 0%, #000 20%, #f02342 100%)
        1 1 1;
    }
    65% {
      border-image: radial-gradient(circle, #f02342 0%, #000 30%, #f02342 100%)
        1 1 1;
    }
    70% {
      border-image: radial-gradient(circle, #f02342 0%, #000 40%, #f02342 100%)
        1 1 1;
    }
    75% {
      border-image: radial-gradient(circle, #f02342 0%, #000 50%, #f02342 100%)
        1 1 1;
    }
    80% {
      border-image: radial-gradient(circle, #f02342 0%, #000 60%, #f02342 100%)
        1 1 1;
    }
    85% {
      border-image: radial-gradient(circle, #f02342 0%, #000 70%, #f02342 100%)
        1 1 1;
    }
    90% {
      border-image: radial-gradient(circle, #f02342 0%, #000 80%, #f02342 100%)
        1 1 1;
    }
    95% {
      border-image: radial-gradient(circle, #f02342 0%, #000 90%, #f02342 100%)
        1 1 1;
    }
    100% {
      border-image: radial-gradient(circle, #f02342 0%, #000 100%) 1 1 1;
    }
  }
`;
