import { Box } from "@mui/material";
import { CardProps } from "./types";
import { cardStyles } from "./styles";

const Card = ({ children, backgroundColor = "#1D1A1E" }: CardProps) => {
  return <Box sx={cardStyles(backgroundColor)}>{children}</Box>;
};

export default Card;
