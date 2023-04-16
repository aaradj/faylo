import styled from "styled-components";
import CHead from "../CHead";
import CPara from "../CPara";

function Location(): JSX.Element {
  const locationImg = require("../../assets/images/locaiton.png");
  const Main = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 4rem;
    gap: 4rem;
    img {
      width: 50%;
    }
    @media(max-width:700px){
        flex-direction:column;
        img{
            width:100%;
        }
    }
  `;
  const Div = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    @media(max-width:700px){
        width:100%;
    }
  `;
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
