import styled from "styled-components";
const Main = styled.main`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  height: fit-content;
  align-items: center;
  margin-top: 5rem;
  gap: 2rem;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 100%;
    img {
      width: 50%;
    }
  }
  @media (max-width: 700px) {
    div {
      img {
        width: 100%;
      }
    }
  }
`;

export { Main };
