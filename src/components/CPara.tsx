// Material Ui Component
import Typography from "@mui/material/Typography";

interface CParaProps {
  children: React.ReactNode;
}

// Custom Style
const CParaStyle = {
  color:"white",
  fontSize: "1rem",
  fontFamily: "Raleway",
};

const CPara = (props: CParaProps): JSX.Element => {
  return (
    <Typography variant="body1" sx={CParaStyle}>
      {props.children}
    </Typography>
  );
};

export default CPara;
