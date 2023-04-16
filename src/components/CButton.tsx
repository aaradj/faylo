import React from "react";
// Material Ui Component
import { Button } from "@mui/material";

// Color
import { Cyan, Inside } from "../style/colors";

interface ButtonProps {
  children: React.ReactNode;
}

// Custom Style
const ButtonStyle = {
  background: Cyan,
  color: "white",
  zIndex:"0",
  fontSize: "1rem",
  fontWeight: "bold",
  fontFamily: "Raleway",
  padding: ".5rem 3rem",
  borderRadius: "50px",
  ":hover": { background: Inside },
};

const CButton = (props: ButtonProps): JSX.Element => {
  return (
    <Button variant="contained" sx={ButtonStyle}>
      {props.children}
    </Button>
  );
};

export default CButton;
