import styled from "styled-components";

export const FormStyled = styled.form`
  margin: 30px auto;
  display: flex;
  gap: 15px;
  max-width: 360px;
  flex-direction: column;

  & button {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    font-weight: 500;
    background-color: rgb(81, 203, 238);
    color: white;
    padding: 0px 25px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    height: 36px;
    max-width: 180px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.25s ease-in-out;
  }

  & .loading-icon {
    animation: animate 2s infinite;
  }

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  & button:hover {
    box-shadow: 0 0 10px rgba(81, 203, 238, 0.8),
      0 0 20px rgba(81, 203, 238, 0.6), 0 0 30px rgba(81, 203, 238, 0.4);
  }
`;
