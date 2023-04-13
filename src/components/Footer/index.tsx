// Styled Components
import styled from "styled-components";
// Colors
import { MainBg } from "../../style/colors";
// Components
import AboutUs from "./AboutUs";
import Logo from "./Logo";

// Styles
const Main = styled.footer`
  width: 100%;
  height: fit-content;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  background: ${MainBg};
`;

function Footer() {
  return (
    <Main>
      <Logo />
      <AboutUs />
    </Main>
  );
}

export default Footer;
