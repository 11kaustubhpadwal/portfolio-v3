import { Typography } from "@mui/material";
import { anchorTagStyle, nameStyle } from "./styles";
import { NavItemProps } from "./types";

const NavItem = ({ href, name }: NavItemProps) => {
  return (
    <a href={href} style={anchorTagStyle}>
      <Typography sx={nameStyle}>{name}</Typography>
    </a>
  );
};

export default NavItem;
