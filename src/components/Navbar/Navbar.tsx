import { Grid, Typography } from "@mui/material";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <Grid
      container
      spacing={"3rem"}
      alignItems="center"
      mb={16}
      className="animate__animated animate__fadeInDown"
    >
      <Grid item sm>
        <Typography fontWeight={600} fontSize={30}>
          Kaustubh Padwal
        </Typography>
      </Grid>
      <Grid item>
        <NavItem href="#about" name="About" />
      </Grid>
      <Grid item>
        <NavItem href="#projects" name="Projects" />
      </Grid>
      <Grid item>
        <NavItem href="#cv" name="Curriculum Vitae" />
      </Grid>
      <Grid item sm>
        <NavItem href="#contact" name="Contact" />
      </Grid>
      <Grid item>
        <Typography fontWeight={600}>Pune, India</Typography>
      </Grid>
    </Grid>
  );
};

export default Navbar;
