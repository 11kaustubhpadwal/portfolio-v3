import { Typography, Grid } from "@mui/material";
import { contactLinks } from "./constants";
import ContactItem from "./ContactItem";

const Contact = () => {
  return (
    <>
      <Typography
        fontWeight={700}
        fontSize={"5rem"}
        padding="5rem"
        id="contact"
        className="animate__animated animate__fadeInDown"
      >
        Have a project you'd like to discuss? Let's talk!
      </Typography>
      <Grid
        container
        padding="0 5rem 5rem"
        spacing="2rem"
        className="animate__animated animate__fadeInDown"
      >
        {contactLinks.map((item, index) => (
          <Grid item key={`contact-list-item-${index}`}>
            <ContactItem
              itemName={item.itemName}
              itemLink={item.itemLink}
              primary={item.primary}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Contact;
