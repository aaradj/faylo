const BoxStyle = {
  display: "flex",
  alignItems: "start",
  justifyContent: "center",
  width: "100%",
  padding: "2rem 0",
  "@media(max-width:700px)": {
    flexDirection: "column",
    gap: "2rem",
  },
};

const BoxArticle = {
  width: "20%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
  "@media(max-width:700px)": {
    width: "100%",
    alignItems: "start",
  },
};

const SocailMedia = {
  width: "20%",
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
  "@media(max-width:700px)": {
    width: "100%",
    justifyContent: "start",
  },
};

export { BoxArticle, BoxStyle, SocailMedia };
