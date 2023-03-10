import { Typography, Grid } from "@mui/material";
import { contactLinks } from "./constants";
import ContactItem from "./ContactItem";

const Contact = () => {
  return (
    <>
      <Typography fontWeight={700} fontSize={80} padding="5rem" id="contact">
        Have a project you'd like to discuss? Let's talk!
      </Typography>
      <Grid container padding="0 5rem 5rem" spacing="2rem">
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
