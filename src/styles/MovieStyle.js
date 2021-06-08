import styled from "styled-components";

export const MovieStyle = styled.div`
  margin: 10px;

  &:first-child {
    width: 100%;
    div:first-child {
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      display: inline-block;
      background: linear-gradient(
        top,
        rgba(0, 47, 75, 0.5) 0%,
        rgba(220, 66, 37, 0.5) 100%
      );
      img {
        width: 120%;
        display: flex;
        background: linear-gradient(
          to bottom,
          #2f2f2f,
          #fff 25%,
          #fff 75%,
          #2f2f2f 100%
        );
      }
    }
  }
  a {
    h3 {
      font-size: 20px;
      color: white;
      width: 230px;
    }
  }
`;
export const MovieBg = styled.img`
  display: none;
`;
