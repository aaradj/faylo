// Material Ui Compnents
import { Box } from "@mui/material";
// Styles
import { HeaderStyle } from "./headerStyle";

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
