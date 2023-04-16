import styled from "styled-components";

const HeaderStyle = styled.div`
  width: 100%;
  padding:1rem 2rem;
  position: fixed;
  height:5vh;
  top: 0;
  display: flex;
  align-itmes: center;
  justify-content: space-between;
  @media (max-width: 700px) {
    padding: 2rem;
  }
`;

const menuStyle = {
  fontSize: "2rem",
  margin: "2rem",
  display: "none",
  "@media(max-width:700px)": { display: "inline" },
};

const navStyle = {
  "@media(max-width:700px)": {
    textAlign: "end",
    position: "absolute",
    right: "0",
    top: "0",
    width: "100vw",
    height: "100vh",
  },
};

export { HeaderStyle, menuStyle, navStyle };
