export const logoBackStyles = {
  display: "flex",
  margin: "0 auto",
  backgroundColor: "#2c2f33",
  width: "100%",
  justifyContent: "center",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
}

export const pageItemStyles = {
  display: "flex",
  margin: "auto",
  gap: "10px",
  width: "90%",
  height: "auto",
  transition: "background-color 0.3s ease",
  "&:hover": {
    border: "2px solid #2c2f33",
    borderRadius: "10px",
    backgroundColor: "#fff",
    color: "#2c2f33",
    transition: "0.2s ease",
  },
  "&:active": {
    background: "linear-gradient(to left, #99aab5 50%, transparent 70%)",
    backgroundSize: "200% 100%",
    backgroundPosition: "right bottom",
    transition: "background-position 0.3s ease-in",
  },
};

