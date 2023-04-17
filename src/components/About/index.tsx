// Custom Components
import CHead from "../CHead";
import CPara from "../CPara";
import CButton from "../CButton";

// Style
import { Main } from "./aboutStyle";

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
