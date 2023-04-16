import styled from "styled-components";
import CHead from "../CHead";
import CPara from "../CPara";
import CButton from "../CButton";

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
    // text-align:start;
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

const aboutImg = require("../../assets/images/about.png");

function About(): JSX.Element {
  return (
    <Main>
      <div>
        <img src={aboutImg} alt="img" />
      </div>
      <div>
        <CHead>
          All your files in one secure location, accessible anywhere.
        </CHead>
        <CPara>
          Faylo stores all your most important files in one secure location.
          Access them wherever you need, shaer and collaborate with friends
          family, and co-workers
        </CPara>
      </div>
      <div>
        <CButton>Get Started</CButton>
      </div>
    </Main>
  );
}

export default About;
