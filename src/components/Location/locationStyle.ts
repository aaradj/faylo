import styled from "styled-components";
const Main = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 4rem;
  gap: 4rem;
  img {
    width: 50%;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    img {
      width: 400px;
    }
  }
  @media (max-width: 400px) {
    img {
      width: 100%;
    }
  }
`;
const Div = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export { Div, Main };
