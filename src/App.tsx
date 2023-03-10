import { Box, Grid, Typography } from "@mui/material";

import aiTool from "./assets/images/aiTool.png";
import arrow from "./assets/images/up-right-arrow.png";
import arrowDark from "./assets/images/up-right-arrow-black.png";
import crappo from "./assets/images/crappo.png";
import expertProfile from "./assets/images/expertProfile.png";
import sark from "./assets/images/sark.png";
import sparkle from "./assets/images/sparkle.png";
import workmate from "./assets/images/workmate.png";

function App() {
  return (
    <>
      <Box sx={{ padding: "2.5rem 4.5rem" }}>
        <Grid container spacing={"3rem"} alignItems="center" mb={16}>
          <Grid item sm>
            <Typography fontWeight={600} fontSize={30}>
              Kaustubh
            </Typography>
          </Grid>
          <Grid item>
            <Typography>About</Typography>
          </Grid>
          <Grid item>
            <Typography>Projects</Typography>
          </Grid>
          <Grid item>
            <Typography>Curriculum Vitae</Typography>
          </Grid>
          <Grid item sm>
            <Typography>Contact</Typography>
          </Grid>
          <Grid item>
            <Typography fontWeight={600}>Pune, India</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          alignItems={"center"}
          spacing="2rem"
          justifyContent={"space-between"}
        >
          <Grid item>
            <Typography fontWeight={700} fontSize={80}>
              I Build Amazing
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              fontWeight={600}
              fontSize={35}
              sx={{
                backgroundColor: "#5A4FF5",
                borderRadius: "4rem",
                padding: "1.5rem 2.5rem",
              }}
            >
              My Work
              <img
                src={arrow}
                style={{ width: "1.75rem", marginLeft: "1rem" }}
              />
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          alignItems={"center"}
          spacing="2rem"
          justifyContent={"space-between"}
        >
          <Grid item>
            <Typography
              fontWeight={600}
              fontSize={35}
              sx={{
                backgroundColor: "#5A4FF5",
                borderRadius: "4rem",
                padding: "1.5rem 2.5rem",
              }}
            >
              Connect With Me
              <img
                src={arrow}
                style={{ width: "1.75rem", marginLeft: "1rem" }}
              />
            </Typography>
          </Grid>
          <Grid item>
            <Typography fontWeight={700} fontSize={80}>
              Digital Solutions
            </Typography>
          </Grid>
        </Grid>
        <Typography sx={{ opacity: ".7" }} mt={14} mb={2}>
          About me
        </Typography>
        <Typography mb={2} fontSize={20}>
          I'm a creative fullstack developer who has been working with react and
          typescript for a little over 2 years. I've worked for a startup as
          well as a software house based in Poland. I've been working in a
          diverse team of people who are based in the UK, Europe and USA.
        </Typography>
        <Typography mb={11} fontSize={20}>
          I love photography, video games and cricket! I'm also gonna launch my
          own startup soon! Wanna know more? Let's connect!
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "#5A4FF5",
          borderTopLeftRadius: "3rem",
          borderTopRightRadius: "3rem",
          padding: "5rem",
        }}
      >
        <Grid container spacing="3rem" alignItems={"center"}>
          <Grid item sm={6}>
            <Typography fontWeight={700} fontSize={80} lineHeight={1.2}>
              Explore My Recent Work
            </Typography>
          </Grid>
          <Grid item sm={6}>
            <Typography fontSize={20}>
              I'm proficient in the following frontend technologies - HTML, CSS,
              Javascript, Typescript, React (hooks and functional components),
              Redux, Redux-Toolkit, React-Query, Storybook.js, Styled Components
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing="4rem" mt={2}>
          <Grid item sm={4}>
            <Box
              sx={{
                backgroundColor: "#fff",
                padding: "1rem",
                width: "25%",
                borderTopLeftRadius: "1rem",
                borderTopRightRadius: "1rem",
              }}
            />
            <Box
              sx={{
                backgroundColor: "#fff",
                padding: "2rem",
                borderBottomLeftRadius: "1rem",
                borderBottomRightRadius: "1rem",
                borderTopRightRadius: "1rem",
                color: "#1d1d1d",
              }}
            >
              <Typography fontWeight={500}>Web Application</Typography>
              <Typography mb={2} fontWeight={600} fontSize={26}>
                Expert Profile
                <img
                  src={arrowDark}
                  style={{ width: "1.25rem", marginLeft: "1rem" }}
                />
              </Typography>
              <img
                src={expertProfile}
                alt="expert-profile"
                style={{ width: "100%", borderRadius: "1rem" }}
              />
            </Box>
          </Grid>
          <Grid item sm={4}>
            <Box
              sx={{
                backgroundColor: "#fff",
                padding: "1rem",
                width: "25%",
                borderTopLeftRadius: "1rem",
                borderTopRightRadius: "1rem",
              }}
            />
            <Box
              sx={{
                backgroundColor: "#fff",
                padding: "2rem",
                borderBottomLeftRadius: "1rem",
                borderBottomRightRadius: "1rem",
                borderTopRightRadius: "1rem",
                color: "#1d1d1d",
              }}
            >
              <Typography fontWeight={500}>Website</Typography>
              <Typography mb={2} fontWeight={600} fontSize={26}>
                Sark
                <img
                  src={arrowDark}
                  style={{ width: "1.25rem", marginLeft: "1rem" }}
                />
              </Typography>
              <img
                src={sark}
                alt="sark"
                style={{ width: "100%", borderRadius: "1rem" }}
              />
            </Box>
          </Grid>
          <Grid item sm={4}>
            <Box
              sx={{
                backgroundColor: "#fff",
                padding: "1rem",
                width: "25%",
                borderTopLeftRadius: "1rem",
                borderTopRightRadius: "1rem",
              }}
            />
            <Box
              sx={{
                backgroundColor: "#fff",
                padding: "2rem",
                borderBottomLeftRadius: "1rem",
                borderBottomRightRadius: "1rem",
                borderTopRightRadius: "1rem",
                color: "#1d1d1d",
              }}
            >
              <Typography fontWeight={500}>Website</Typography>
              <Typography mb={2} fontWeight={600} fontSize={26}>
                AI Writing Tool
                <img
                  src={arrowDark}
                  style={{ width: "1.25rem", marginLeft: "1rem" }}
                />
              </Typography>
              <img
                src={aiTool}
                alt="ai-tool"
                style={{ width: "100%", borderRadius: "1rem" }}
              />
            </Box>
          </Grid>
          <Grid item sm={4}>
            <Box
              sx={{
                backgroundColor: "#fff",
                padding: "1rem",
                width: "25%",
                borderTopLeftRadius: "1rem",
                borderTopRightRadius: "1rem",
              }}
            />
            <Box
              sx={{
                backgroundColor: "#fff",
                padding: "2rem",
                borderBottomLeftRadius: "1rem",
                borderBottomRightRadius: "1rem",
                borderTopRightRadius: "1rem",
                color: "#1d1d1d",
              }}
            >
              <Typography fontWeight={500}>Website</Typography>
              <Typography mb={2} fontWeight={600} fontSize={26}>
                Crappo
                <img
                  src={arrowDark}
                  style={{ width: "1.25rem", marginLeft: "1rem" }}
                />
              </Typography>
              <img
                src={crappo}
                alt="crappo"
                style={{ width: "100%", borderRadius: "1rem" }}
              />
            </Box>
          </Grid>
          <Grid item sm={4}>
            <Box
              sx={{
                backgroundColor: "#fff",
                padding: "1rem",
                width: "25%",
                borderTopLeftRadius: "1rem",
                borderTopRightRadius: "1rem",
              }}
            />
            <Box
              sx={{
                backgroundColor: "#fff",
                padding: "2rem",
                borderBottomLeftRadius: "1rem",
                borderBottomRightRadius: "1rem",
                borderTopRightRadius: "1rem",
                color: "#1d1d1d",
              }}
            >
              <Typography fontWeight={500}>Website</Typography>
              <Typography mb={2} fontWeight={600} fontSize={26}>
                WorkMate
                <img
                  src={arrowDark}
                  style={{ width: "1.25rem", marginLeft: "1rem" }}
                />
              </Typography>
              <img
                src={workmate}
                alt="workmate"
                style={{ width: "100%", borderRadius: "1rem" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
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
      <Grid container padding="5rem" alignItems={"center"}>
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
            }}
          >
            LinkedIn
            <img src={arrow} style={{ width: "1.75rem", marginLeft: "1rem" }} />
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
      <Typography fontWeight={700} fontSize={80} padding="5rem">
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
              border: ".2rem solid #fff",
              padding: "1rem 2rem",
              borderRadius: "2rem",
            }}
          >
            INSTAGRAM
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
            }}
          >
            LINKEDIN
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
