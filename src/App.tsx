import { Box, Grid, Typography } from "@mui/material";

import arrow from "./assets/images/up-right-arrow.png";
import TagLine from "./components/TagLine";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Box sx={{ padding: "2.5rem 4.5rem" }}>
        <Navbar />
        <TagLine />
        <AboutMe />
      </Box>
      <Projects />
      <Services />
      <Grid container padding="5rem" alignItems={"center"} id="cv">
        <Grid item sm>
          <Typography fontWeight={700} fontSize={80} lineHeight={1.2}>
            Curriculum Vitae
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            fontWeight={600}
            fontSize={22}
            sx={{
              backgroundColor: "#5A4FF5",
              borderRadius: "4rem",
              padding: "1rem 2.5rem",
              boxShadow: ".125rem .125rem .125rem #fff",
              ":hover": {
                transform: "rotate(-2deg)",
                transition: ".3s",
                opacity: ".8",
                boxShadow: ".125rem .125rem .125rem #fff inset",
              },
            }}
          >
            LinkedIn
            <img
              src={arrow}
              style={{ width: "1.75rem", marginLeft: "1rem" }}
              alt="go"
            />
          </Typography>
        </Grid>
      </Grid>
      <Grid container padding="0 5rem 0">
        <Grid item sm={6}>
          <Typography fontWeight={700} fontSize={40} mb={6}>
            Work Experience
          </Typography>

          <Typography fontWeight={500} fontSize={25} mb={1}>
            Software Mind Sp. Z.o.o
          </Typography>
          <Typography fontWeight={400} fontSize={19}>
            Software Engineer I
          </Typography>
          <Typography
            fontWeight={400}
            fontSize={17}
            sx={{ opacity: ".5" }}
            mb={4}
          >
            October 2021 - Present
          </Typography>

          <Typography fontWeight={500} fontSize={25} mb={1}>
            EonD Sp. Z.o.o
          </Typography>
          <Typography fontWeight={400} fontSize={19}>
            Junior Frontend Developer
          </Typography>
          <Typography fontWeight={400} fontSize={17} sx={{ opacity: ".5" }}>
            March 2021 - August 2021
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography fontWeight={700} fontSize={40} mb={6}>
            Education
          </Typography>

          <Typography fontWeight={500} fontSize={25} mb={1}>
            Akademia WSEI
          </Typography>
          <Typography fontWeight={400} fontSize={19}>
            Bachelors in Computer Science
          </Typography>
          <Typography
            fontWeight={400}
            fontSize={17}
            sx={{ opacity: ".5" }}
            mb={4}
          >
            October 2018 - February 2021
          </Typography>
        </Grid>
      </Grid>

      <Typography fontWeight={700} fontSize={40} mb={6} mt={8} padding="0 5rem">
        Skills
      </Typography>
      <Grid container padding="0 5rem 5rem" spacing="5rem">
        <Grid item>
          <Typography fontWeight={500} fontSize={25} mb={1}>
            Frontend
          </Typography>
          <ul>
            <li>
              <Typography fontWeight={400} fontSize={19}>
                HTML
              </Typography>
            </li>
            <li>
              <Typography fontWeight={400} fontSize={19}>
                CSS
              </Typography>
            </li>
            <li>
              <Typography fontWeight={400} fontSize={19}>
                Javascript
              </Typography>
            </li>
            <li>
              <Typography fontWeight={400} fontSize={19}>
                Typescript
              </Typography>
            </li>
            <li>
              <Typography fontWeight={400} fontSize={19}>
                React
              </Typography>
            </li>
            <li>
              <Typography fontWeight={400} fontSize={19}>
                Redux, Redux-Toolkit
              </Typography>
            </li>
            <li>
              <Typography fontWeight={400} fontSize={19}>
                React-Query, Axios
              </Typography>
            </li>
          </ul>
        </Grid>
        <Grid item>
          <Typography fontWeight={500} fontSize={25} mb={1}>
            Backend
          </Typography>
          <ul>
            <li>
              <Typography fontWeight={400} fontSize={19}>
                Node.js
              </Typography>
            </li>
            <li>
              <Typography fontWeight={400} fontSize={19}>
                Express.js
              </Typography>
            </li>
            <li>
              <Typography fontWeight={400} fontSize={19}>
                MongoDB
              </Typography>
            </li>
            <li>
              <Typography fontWeight={400} fontSize={19}>
                Mongoose ODM
              </Typography>
            </li>
            <li>
              <Typography fontWeight={400} fontSize={19}>
                REST APIs
              </Typography>
            </li>
          </ul>
        </Grid>
      </Grid>
      <Box sx={{ border: ".1rem solid #fff", margin: "0 5rem 0" }} />
      <Typography fontWeight={700} fontSize={80} padding="5rem" id="contact">
        Have a project you'd like to discuss? Let's talk!
      </Typography>
      <Grid container padding="0 5rem 5rem" spacing="2rem">
        <Grid item>
          <Typography
            fontWeight={500}
            fontSize={25}
            mb={1}
            sx={{
              backgroundColor: "#5A4FF5",
              color: "#fff",
              padding: "1rem 2rem",
              borderRadius: "2rem",
              ":hover": {
                transform: "scale(1.05)",
                transition: ".3s",
                opacity: ".8",
              },
            }}
          >
            kaustubhpadwal@icloud.com
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            fontWeight={500}
            fontSize={25}
            mb={1}
            sx={{
              backgroundColor: "#5A4FF5",
              color: "#fff",
              padding: "1rem 2rem",
              borderRadius: "2rem",
              ":hover": {
                transform: "scale(1.05)",
                transition: ".3s",
                opacity: ".8",
              },
            }}
          >
            +91 9529787836
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            fontWeight={500}
            fontSize={25}
            mb={1}
            sx={{
              border: ".2rem solid #fff",
              padding: "1rem 2rem",
              borderRadius: "2rem",
              ":hover": {
                transform: "scale(1.05)",
                transition: ".3s",
                opacity: ".8",
              },
            }}
          >
            GITHUB
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            fontWeight={500}
            fontSize={25}
            mb={1}
            sx={{
              border: ".2rem solid #fff",
              padding: "1rem 2rem",
              borderRadius: "2rem",
              ":hover": {
                transform: "scale(1.05)",
                transition: ".3s",
                opacity: ".8",
              },
            }}
          >
            LINKEDIN
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            fontWeight={500}
            fontSize={25}
            mb={1}
            sx={{
              border: ".2rem solid #fff",
              padding: "1rem 2rem",
              borderRadius: "2rem",
              ":hover": {
                transform: "scale(1.05)",
                transition: ".3s",
                opacity: ".8",
              },
            }}
          >
            INSTAGRAM
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
