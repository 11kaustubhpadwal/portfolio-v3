import { Box, Typography } from "@mui/material";

import { InfoCardProps } from "./InfoCard.types";
import { infoCardStyles } from "./styles";

const InfoCard = ({ title, subtitle }: InfoCardProps) => {
  return (
    <Box sx={infoCardStyles}>
      <Typography
        fontSize={"5rem"}
        className="animate__animated animate__fadeInDown"
        fontWeight={700}
      >
        {title}
      </Typography>
      <Typography
        fontSize={"1.25rem"}
        className="animate__animated animate__fadeInDown"
        fontWeight={500}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default InfoCard;
