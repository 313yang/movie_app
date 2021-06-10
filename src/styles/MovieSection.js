import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1980px;
  padding: 50px;
  margin: 0 auto;
`;
export const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  width: 100%;
  justify-content: space-between;
  margin: 20px;
`;
