import styled from "styled-components";
import { MainBg } from "../../style/colors";
import CPara from "../CPara";

function Team() {
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

  const profile1 = require("../../assets/images/profile-1.jpg");
  const profile2 = require("../../assets/images/profile-2.jpg");
  const profile3 = require("../../assets/images/profile-3.jpg");

  return (
    <Main>
      <Card>
        <CPara>
          Fylo has improved our team productivity by an order of magirude. Sinde
          making the switch our team become a well-oiled collaboration machine.
        </CPara>
        <Prof>
          <img src={profile1} alt="profile" />
          <div>
            <h4>Stish Patel</h4>
            <CPara>Founder & CEO, Huddle</CPara>
          </div>
        </Prof>
      </Card>
      <Card>
        <CPara>
          Fylo has improved our team productivity by an order of magirude. Sinde
          making the switch our team become a well-oiled collaboration machine.
        </CPara>
        <Prof>
          <img src={profile2} alt="profile" />
          <div>
            <h4>Bruce mcKenzie</h4>
            <CPara>Founder & CEO, Huddle</CPara>
          </div>
        </Prof>
      </Card>
      <Card>
        <CPara>
          Fylo has improved our team productivity by an order of magirude. Sinde
          making the switch our team become a well-oiled collaboration machine.
        </CPara>
        <Prof>
          <img src={profile3} alt="profile" />
          <div>
            <h4>Iva Boyd</h4>
            <CPara>Founder & CEO, Huddle</CPara>
          </div>
        </Prof>
      </Card>
    </Main>
  );
}

export default Team;
