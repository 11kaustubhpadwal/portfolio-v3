import { Typography } from "@mui/material";
import { InfoItemProps } from "./types";

const InfoItem = ({ title, subtitle, date }: InfoItemProps) => {
  return (
    <>
      <Typography fontWeight={500} fontSize={25} mb={1}>
        {title}
      </Typography>
      <Typography fontWeight={400} fontSize={19}>
        {subtitle}
      </Typography>
      <Typography fontWeight={400} fontSize={17} sx={{ opacity: ".5" }} mb={4}>
        {date}
      </Typography>
    </>
  );
};

export default InfoItem;
