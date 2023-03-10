import { Typography } from "@mui/material";
import { contactLinkAnchorTagStyle, contactLinkItemStyle } from "./styles";
import { ContactItemProps } from "./types";

const ContactItem = ({
  itemName,
  itemLink,
  primary = false,
}: ContactItemProps) => {
  return (
    <a href={itemLink} style={contactLinkAnchorTagStyle}>
      <Typography
        fontWeight={500}
        fontSize={25}
        mb={1}
        sx={contactLinkItemStyle(primary)}
      >
        {itemName}
      </Typography>
    </a>
  );
};

export default ContactItem;
