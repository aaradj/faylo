import React from "react";
// Material Ui Component
import { Button } from "@mui/material";

// Color
import { Cyan, Inside } from "../style/colors";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  type?: 'submit' | 'reset' | 'button' | undefined;
}

// Custom Style
const ButtonStyle = {
  background: Cyan,
  color: "white",
  fontSize: "1rem",
  fontWeight: "bold",
  fontFamily: "Raleway",
  padding: ".5rem 3rem",
  borderRadius: "50px",
  ":hover": { background: Inside },
};

const CButton:React.FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  return (
    <Button variant="contained" sx={ButtonStyle}>
      {props.children}
    </Button>
  );
};

export default CButton;
