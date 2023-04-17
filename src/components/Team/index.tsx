// Custom Components
import CPara from "../CPara";

// Styled Components
import { Card, Main, Prof } from "./teamStyle";

function Team() {
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
