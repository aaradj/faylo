import styled from "styled-components";
import { MainBg } from "../../style/colors";
const Main = styled.div`
  width: 100%;
  margin: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  @media (max-width: 700px) {
    flex-direciton: column;
  }
`;

const Card = styled.div`
  width: 32%;
  padding: 2rem;
  display: grid;
  place-content: center;
  flex-direction: column;
  gap: 2rem;
  background: ${MainBg};
  border-radius: 5px;
  box-shadow: 0 4px 4px 0 rgba(10, 10, 10, 0.4);
  @media (max-width: 700px) {
    padding: 1rem;
    width: 100%;
  }
`;

const Prof = styled.div`
  display: flex;
  gap: 1rem;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  div {
    display: flex;
    flex-direction: column;
  }
`;

export { Card, Main, Prof };
