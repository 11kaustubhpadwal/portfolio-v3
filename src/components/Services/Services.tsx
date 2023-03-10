import { Box, Grid, Typography } from "@mui/material";
import sparkle from "../../assets/images/sparkle.png";

const Services = () => {
  return (
    // TODO: refactor services section
    <Box sx={{ borderTop: ".5rem solid #1D1D1D", backgroundColor: "#fff" }}>
      <Grid
        container
        sx={{ padding: "1rem", color: "#5B50F6" }}
        spacing="1.5rem"
        alignItems={"center"}
      >
        <Grid item>
          <img src={sparkle} style={{ width: "3rem" }} alt="sparkle" />
        </Grid>
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
