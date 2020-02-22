import styled from "styled-components";

export const Input = styled.input`
  padding: 20px;
  margin: 0;
  border-radius: 0;
  width: calc(100% - 45px);
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

export const Button = styled.button`
  padding: 20px 25px;
  float: right;
  border: 1px solid #000;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  /* font-weight: bold; */
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
  }
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
    .content {
      padding: 25px 20px;
      border: 1px solid rgba(0, 0, 0, 0.4);
      border-top: 0px;
      display: inline-block;
    }

    background: #282c34;
    width: 100%;
    max-width: 400px;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
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
  }
  p {
    font-size: 16px;
  }

  .form-group {
    margin: 40px 0;
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
      color: radial-gradient(circle, #f02342 0%, #000 100%) 1 1 1;
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
