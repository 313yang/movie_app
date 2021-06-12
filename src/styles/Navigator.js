import styled from "styled-components";

export const Navigator = styled.nav`
  font-family: "Bebas Neue", cursive;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  padding: 20px 50px;
  width: 100%;
  background-color: #101010ed;
  color: white;
  a {
    display: flex;
    align-items: center;
    font-size: 22px;
  }
`;
export const NavTitle = styled.h1`
  color: red;
  font-weight: 800;
  font-size: 40px;
  margin: 0;
  letter-spacing: 3px;
`;
