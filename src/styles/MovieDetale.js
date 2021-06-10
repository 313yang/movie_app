import styled from "styled-components";

const MovieDetail = styled.div`
  div:first-child {
    img {
      width: 100%;
      height: 95%;
      object-fit: cover;
      position: absolute;
      top: 5%;
      z-index: -99;
    }
  }
  div:last-child {
    display: flex;
    max-width: 1480px;
    margin: 50px auto;
    img {
      width: 300px;
      height: 500px;
      margin-top: 20px;
      margin-right: 20px;
    }
  }
`;
export default MovieDetail;
