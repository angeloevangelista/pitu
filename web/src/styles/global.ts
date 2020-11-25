import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 0.4rem;
  }

  ::-webkit-scrollbar-track {
    background-color: #ccc;
    border-radius: 0.4rem;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0.4rem;
    background: #aaa;
  }

  body {
    background: #eee;

    height: 100vh;
    width: 100vw;
    font-family: 'Dosis', 'Roboto', sans-serif;
  }

  body, input, button, textarea {
    color: #43616f;
    font-size: 1.8rem;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  #root {
    width: 100%;
    height: 100%;

    /* display: flex;
    justify-content: center;
    align-items: center; */
  }

  @media (max-width: 700px) {
    :root {
      font-size: 65%;
    }
  }
`;
