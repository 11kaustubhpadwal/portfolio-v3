import { Grid, Typography } from "@mui/material";

import InfoCard from "./InfoCard";

const AboutMe = () => {
  return (
    <>
      <Typography
        sx={{ opacity: ".7" }}
        mt={14}
        mb={2}
        className="animate__animated animate__fadeInDown"
      >
        About me
      </Typography>
      <Typography
        mb={2}
        fontSize={"1.25rem"}
        className="animate__animated animate__fadeInDown"
      >
        I'm a creative fullstack developer with more than 2 years of
        international work experience. I've worked for a startup as well as a
        software house based in Poland. I've been working in a diverse team of
        people who are based in the UK, Europe and USA.
      </Typography>
      <Typography
        mb={14}
        fontSize={"1.25rem"}
        className="animate__animated animate__fadeInDown"
      >
        I love photography, video games and cricket! I'm also gonna launch my
        own startup soon! Wanna know more? Let's connect!
      </Typography>
      <Grid container justifyContent="space-evenly" spacing="3rem" mb={11}>
        <Grid item>
          <InfoCard title={"2+"} subtitle={"Years of Experience"} />
        </Grid>
        <Grid item>
          <InfoCard title={"7+"} subtitle={"Projects Completed"} />
        </Grid>
        <Grid item>
          <InfoCard title={"5000+"} subtitle={"Lines of Code Written"} />
        </Grid>
      </Grid>
    </>
  );
};

export default AboutMe;
