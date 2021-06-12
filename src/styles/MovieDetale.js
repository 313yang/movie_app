import styled from "styled-components";

export const MovieDetail = styled.section`
  div:first-child {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      z-index: -99;
    }
  }
  div:last-child {
    width: 100%;
    display: flex;
    justify-content: center;
    height: 100%;
    color: white;
    margin-top: 10%;
    img {
      width: 300px;
      height: 450px;
      border-radius: 5px;
      object-fit: cover;
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
  }
`;

export const MovieInfo = styled(MovieDetail)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
  margin-left: 50px;
  margin-top: 0px;
  padding: 50px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.5);

  h1 {
    font-family: "Bebas Neue", cursive;
    font-size: 50px;
    font-style: oblique;
    letter-spacing: 2px;
    text-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);
    margin: 0px;
    padding-bottom: 30px;
    border-bottom: 1px solid #ff2727;
  }
  h3 {
    margin: 20px 0 0 0;
    font-size: 22px;
  }
  ul {
    list-style: none;
    padding: 0px;
    li {
      margin: 15px 0 0 0;
    }
  }
`;
