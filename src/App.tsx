import { Box, Button, Grid, Typography } from "@mui/material";

import Card from "./components/Card";
import github from "./assets/images/github.png";
import instagram from "./assets/images/instagram.png";
import linkedIn from "./assets/images/linkedin.png";
import photo from "./assets/images/photo.jpg";
import whatsapp from "./assets/images/whatsapp.png";

function App() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item sm={6}>
          <Card>
            <Typography variant="h3" fontWeight={600}>
              I build amazing digital solutions
            </Typography>
            <Box sx={{ textAlign: "end" }}>
              <Button
                sx={{
                  textTransform: "none",
                  backgroundColor: "#864BF6",
                  color: "#fff",
                  padding: "1rem 2rem",
                  borderRadius: "1.75rem",
                }}
              >
                <Typography variant="h6">Hire me 👋</Typography>
              </Button>
            </Box>
          </Card>
          <Grid container columnSpacing={2} mt={2} textAlign="center">
            <Grid item sm={4}>
              <Card backgroundColor="#57C49A">
                <Box sx={{ margin: "1.5rem" }}>
                  <Typography variant="h3" fontWeight={600}>
                    2+
                  </Typography>
                  <Typography variant="body1">Years of experience</Typography>
                </Box>
              </Card>
            </Grid>
            <Grid item sm={4}>
              <Card backgroundColor="#F8C045">
                <Box sx={{ margin: "1.5rem" }}>
                  <Typography
                    variant="h3"
                    sx={{ color: "#0f0f0f" }}
                    fontWeight={600}
                  >
                    7+
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#0f0f0f" }}>
                    Projects created
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid item sm={4}>
              <Card backgroundColor="#EF6A78">
                <Box sx={{ margin: "1.5rem" }}>
                  <Typography variant="h3" fontWeight={600}>
                    5000+
                  </Typography>
                  <Typography variant="body1">Lines of code written</Typography>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={6}>
          <Card>
            <Typography variant="h6">
              Creative Full Stack Developer - Entrepreneur - Gamer
            </Typography>
          </Card>
          <Grid container columnSpacing={2} mt={2}>
            <Grid item sm={6}>
              <img
                src={photo}
                style={{
                  borderRadius: "1rem",
                  width: "100%",
                }}
              />
            </Grid>
            <Grid item sm={6}>
              <Card>
                <Grid container alignItems="center">
                  <Grid item sm>
                    <Typography variant="body1" sx={{ opacity: ".6" }}>
                      Name:
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">Kaustubh Padwal</Typography>
                  </Grid>
                </Grid>
              </Card>
              <Box mt={2} />
              <Card>
                <Grid container alignItems="center">
                  <Grid item sm>
                    <Typography variant="body1" sx={{ opacity: ".6" }}>
                      Location:
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">Pune, India</Typography>
                  </Grid>
                </Grid>
              </Card>
              <Box mt={2} />
              <Card>
                <Grid container alignItems="center">
                  <Grid item sm>
                    <Typography variant="body1" sx={{ opacity: ".6" }}>
                      Education:
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">
                      Bachelors in Computer Science
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
              <Box mt={2} />
              <Card>
                <Grid container alignItems="center" textAlign="center">
                  <Grid item sm={3}>
                    <img src={linkedIn} style={{ width: "65%" }} />
                  </Grid>
                  <Grid item sm={3}>
                    <img src={github} style={{ width: "65%" }} />
                  </Grid>
                  <Grid item sm={3}>
                    <img src={instagram} style={{ width: "65%" }} />
                  </Grid>
                  <Grid item sm={3}>
                    <img src={whatsapp} style={{ width: "65%" }} />
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container columnSpacing={2} mt={1}>
        <Grid item sm={7}>
          <Card>
            <Grid container alignItems="center">
              <Grid item sm>
                <Typography variant="h6">Projects</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6" sx={{ opacity: ".6" }}>
                  See all
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item sm={5}>
          <Card>
            <Grid container alignItems="center">
              <Grid item sm>
                <Typography variant="h6">About</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6" sx={{ opacity: ".6" }}>
                  Resume
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="body1" mt={2} lineHeight={2}>
              I'm a creative full stack developer who has been working with
              react and typescript for a little over 2 years. I've worked for a
              startup as well as a software house based in Poland. I've been
              working in a diverse team of people who are based in the UK,
              Europe and USA.
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
