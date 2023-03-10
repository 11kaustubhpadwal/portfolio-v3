import { Typography } from "@mui/material";
import { InfoItemProps } from "./types";

const InfoItem = ({ title, subtitle, date }: InfoItemProps) => {
  return (
    <>
      <Typography fontWeight={500} fontSize={"1.563rem"} mb={1}>
        {title}
      </Typography>
      <Typography fontWeight={400} fontSize={"1.188rem"}>
        {subtitle}
      </Typography>
      <Typography
        fontWeight={400}
        fontSize={"1.063rem"}
        sx={{ opacity: ".5" }}
        mb={4}
      >
        {date}
      </Typography>
    </>
  );
};

export default InfoItem;
