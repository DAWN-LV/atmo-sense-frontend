export const listStyles = {
  display: "flex",
  flexDirection: "column",
  fontSize: "20px",
  width: "70%",
  margin: "8rem auto",
};

export const listItemStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  border: "1px solid #808080",
  borderRadius: "10px",
  margin: "10px",
  height: "4rem",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
  cursor: "pointer"
};

export const buttonStyles = {
  display: "flex",
  justifyContent: "center",
  border: "1px solid #808080",
  width: "10rem",
  cursor: "pointer",
  marginBottom: ".5rem",
  background: "transparent",
  transition: "background 0.3s ease",
  ":hover": {
    background: "#e0e0e0",
  },
  ":active": {
    background: "#c0c0c0",
  },
};

export const container = {
  display: "flex",
  flexDirection: "row",
  gap: "5px",
  alignItems: "center",
};
