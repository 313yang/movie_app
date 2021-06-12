import styled from "styled-components";

const Loading = styled.div`
  border-radius: 50%;
  width: 70px;
  height: 70px;
  margin: 20% auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 7px solid rgba(255, 255, 255, 0.2);
  border-right: 7px solid rgba(255, 255, 255, 0.2);
  border-bottom: 7px solid rgba(255, 255, 255, 0.2);
  border-left: 7px solid #ffffff;
  transform: translateZ(0);
  animation: load8 1.1s infinite linear;

  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
export default Loading;
