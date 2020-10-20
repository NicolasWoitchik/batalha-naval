import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    padding:0;
    margin:0;
    outline:0;
    box-sizing:border-box
  }
  html,body, #root{
    min-height:100vh;
  }

  body{
    background:#282c34;
    -webkit-font-smoothing: antialiased !important;
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
