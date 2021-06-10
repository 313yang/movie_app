import styled from "styled-components";

export const MovieStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  div {
    width: 230px;
    height: 345px;
    overflow: hidden;
    img {
      width: 100%;
      transition: 0.1s all ease-in;
    }
    img:hover {
      transform: scale(1.1);
      opacity: 0.3;
    }
  }
`;
