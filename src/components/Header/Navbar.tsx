import { useState } from "react";
// Styled Component
import styled from "styled-components";
// Material Ui Components
import { Box } from "@mui/material";
// Material Ui Icons
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
// custome Compoents
import CPara from "../CPara";
// Styles
import { menuStyle, navStyle } from "./headerStyle";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const Ul = styled.ul`
    display: flex;
    align-items: center;
    gap: 2rem;
    li {
      &:hover {
        border-bottom: 1px solid white;
      }
    }
    @media (max-width: 700px) {
      transform: all ease-in 0.5s;
      transform: ${isOpen ? "translateY(0)" : "translateY(-180%)"};
      width: 100%;
      height: 100vh;
      background: rgba(255, 255, 255, 0.19);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(13px);
      -webkit-backdrop-filter: blur(13px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      flex-direction: column;
      justify-content: space-evenly;
      z-index:1;
    }
  `;

  const handleClick = (): void => {
    setIsOpen(!isOpen);
  };
  return (
    <Box sx={navStyle}>
      {!isOpen && (
        <div onClick={handleClick}>
          <MenuIcon sx={menuStyle} />
        </div>
      )}

      <Ul>
        {isOpen && (
          <li onClick={handleClick}>
            <CloseIcon sx={{ fontSize: "2rem" }} />
          </li>
        )}
        <li>
          <a href="#">
            <CPara>Features</CPara>
          </a>
        </li>
        <li>
          <a href="#">
            <CPara>Team</CPara>
          </a>
        </li>
        <li>
          <a href="#">
            <CPara>Sign In</CPara>
          </a>
        </li>
      </Ul>
    </Box>
  );
}

export default Navbar;
