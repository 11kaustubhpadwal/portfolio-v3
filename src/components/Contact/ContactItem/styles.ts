export const contactLinkItemStyle = (primary: boolean) =>
  primary
    ? {
        backgroundColor: "#5A4FF5",
        color: "#fff",
        padding: "1rem 2rem",
        borderRadius: "2rem",
        ":hover": {
          transform: "scale(1.05)",
          transition: ".3s",
          opacity: ".8",
        },
      }
    : {
        border: ".2rem solid #fff",
        padding: "1rem 2rem",
        borderRadius: "2rem",
        ":hover": {
          transform: "scale(1.05)",
          transition: ".3s",
          opacity: ".8",
        },
      };

export const contactLinkAnchorTagStyle = {
  textDecoration: "none",
  color: "#fff",
};
