// Material Ui Compnents
import { Box } from "@mui/material";
// Styled Components
import { HeaderStyle } from "./headerStyle";
// Components
import Navbar from "./Navbar";

function Header(): JSX.Element {

  return (
    <HeaderStyle>
      <Box>
        <h1>Fylo</h1>
      </Box>
      <Navbar />
    </HeaderStyle>
  );
}

export default Header;
