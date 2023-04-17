// Custom Components
import CHead from "../CHead";
import CPara from "../CPara";
// Styled Components
import { Div, Main } from "./locationStyle";

function Location(): JSX.Element {
  const locationImg = require("../../assets/images/locaiton.png");

  return (
    <Main>
      <img src={locationImg} alt="location" />
      <Div>
        <CHead>Stay productive, wherever you are</CHead>
        <CPara>
          Never let location be and issue when accessing your files. Fylo has
          you coverd for all of your file storage needs. Securely share files
          and folders with friends, family and colleagues for live
          collaboration. No email attachments required.
        </CPara>
        <a href="#">
          <CPara>see how fylo works</CPara>
        </a>
      </Div>
    </Main>
  );
}

export default Location;
