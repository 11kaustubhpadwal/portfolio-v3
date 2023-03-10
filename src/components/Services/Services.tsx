import { Box, Grid, Typography } from "@mui/material";
import sparkle from "../../assets/images/sparkle.png";
import { servicesWrapper, servicesContainer } from "./styles";

const Services = () => {
  return (
    <Box sx={servicesWrapper}>
      <Grid
        container
        sx={servicesContainer}
        spacing="1.5rem"
        alignItems={"center"}
        justifyContent="center"
      >
        <Grid item>
          <Typography fontSize={28} fontWeight={600}>
            WEBSITE
          </Typography>
        </Grid>
        <Grid item>
          <img src={sparkle} style={{ width: "3rem" }} alt="sparkle" />
        </Grid>
        <Grid item>
          <Typography fontSize={28} fontWeight={600}>
            WEB APPLICATION
          </Typography>
        </Grid>
        <Grid item>
          <img src={sparkle} style={{ width: "3rem" }} alt="sparkle" />
        </Grid>
        <Grid item>
          <Typography fontSize={28} fontWeight={600}>
            LANDING PAGE
          </Typography>
        </Grid>
        <Grid item>
          <img src={sparkle} style={{ width: "3rem" }} alt="sparkle" />
        </Grid>
        <Grid item>
          <Typography fontSize={28} fontWeight={600}>
            MOBILE APP
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Services;
