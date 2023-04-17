import styled from "styled-components";
const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  place-items: center;
  flex-wrap: wrap;
  gap: 3rem;
  margin-top: 5rem;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
const Div = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0 2rem;
  @media (max-width: 700px) {
    width: 100%;
    padding: 0;
  }
`;

export { Div, Main };
