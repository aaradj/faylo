import styled from "styled-components";
import CHead from "../CHead";
import CPara from "../CPara";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top:2rem;
  div{
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    img{
      width:50%
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
      <CHead>All your files in one secure location, accessible anywhere.</CHead>
      <CPara>
        Faylo stores all your most important files in one secure location.
        Access them wherever you need, shaer and collaborate with friends
        family, and co-workers
      </CPara>
      </div>
    </Main>
  );
}

export default About;
