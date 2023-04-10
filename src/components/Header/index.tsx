// Styled Component
import styled from "styled-components";

const HeaderStyle = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
`;

function Header(): JSX.Element {
  return (
    <HeaderStyle>
      <h1>Header</h1>
    </HeaderStyle>
  );
}

export default Header;
