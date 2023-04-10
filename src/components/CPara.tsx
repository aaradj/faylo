// Material Ui Component
import Typography from "@mui/material/Typography";

interface CParaProps {
  children: React.ReactNode;
}

// Custom Style
const CParaStyle = {
  fontSize: "1rem",
  fontFamily: "Raleway",
  "@media(max-width:700px)": {
    fontSize: ".8rem",
  },
};

const CPara = (props: CParaProps): JSX.Element => {
  return (
    <Typography variant="body1" sx={CParaStyle}>
      {props.children}
    </Typography>
  );
};

export default CPara;
