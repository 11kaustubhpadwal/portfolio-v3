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
        A creative Software Engineer with over 3 years of international
        experience, specializing in frontend development.Expertise in creating
        intuitive and responsive user interfaces using modern technologies such
        as React and Redux.
      </Typography>
      <Typography
        mb={2}
        fontSize={"1.25rem"}
        className="animate__animated animate__fadeInDown"
      >
        Proven ability to design and implement scalable, high-performance
        applications that enhance user experience. Adept at collaborating with
        global teams and adapting to diverse work environments, consistently
        delivering impactful and user-centric solutions.
      </Typography>
      <Typography
        mb={14}
        fontSize={"1.25rem"}
        className="animate__animated animate__fadeInDown"
      >
        Committed to staying current with industry trends and best practices to
        drive innovation and excellence in frontend development.
      </Typography>
      <Grid container justifyContent="space-evenly" spacing="3rem" mb={11}>
        <Grid item>
          <InfoCard title={"3+"} subtitle={"Years of Experience"} />
        </Grid>
        <Grid item>
          <InfoCard title={"10+"} subtitle={"Projects Completed"} />
        </Grid>
        <Grid item>
          <InfoCard title={`50,000+`} subtitle={"Lines of Code Written"} />
        </Grid>
      </Grid>
    </>
  );
};

export default AboutMe;
