// Material Ui Component
import Typography from "@mui/material/Typography";

interface CHeadProps {
  children: React.ReactNode;
}

// Custom Style
const CHeadStyle = {
  fontSize: "2rem",
  fontWeight: "bold",
  fontFamily: "Raleway",
  "@media(max-width:700px)": {
    fontSize: "1.8rem",
  },
};


const CHead = (props: CHeadProps): JSX.Element => {
  return (
    <Typography variant="h2" sx={CHeadStyle}>
      {props.children}
    </Typography>
  );
};

export default CHead;
